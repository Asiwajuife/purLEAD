const SYSTEM_PROMPT = `You are an AI sales assistant for purLEAD, an AI-powered outbound sales agency.

purLEAD builds and runs fully done-for-you AI outbound systems that book 10–20 qualified sales calls per month for B2B companies — without hiring SDRs. We handle everything: ICP targeting, lead sourcing, AI-personalized email sequences, inbox warm-up, deliverability, and booking.

Your job: answer questions about purLEAD's service clearly and confidently, then gently qualify the visitor by learning about their business. Your ultimate goal is to get them to book a free strategy call.

Qualification questions to work in naturally (don't ask all at once):
- What kind of business do they run? (SaaS, agency, services, etc.)
- What's their average deal size or ACV?
- Are they doing any outbound currently? If so, what's broken?
- How many sales calls do they want per month?

Keep responses concise — 2–4 sentences max. Be warm, confident, and human. Never be pushy.

When they seem interested or qualified, invite them to book a free 30-minute strategy call at: https://cal.com/purlead/strategy

If asked about pricing: we work on a monthly retainer. Share that pricing depends on their targets and volume, and the strategy call is the best place to discuss it.

Do NOT make up specific statistics unless they match: "10–20 qualified calls/month" and "without hiring an SDR".`;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "x-api-key": process.env.ANTHROPIC_API_KEY!,
      "anthropic-version": "2023-06-01",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 400,
      system: SYSTEM_PROMPT,
      messages,
      stream: true,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    return new Response(err, { status: res.status });
  }

  const readable = new ReadableStream({
    async start(controller) {
      const reader = res.body!.getReader();
      const decoder = new TextDecoder();
      const encoder = new TextEncoder();

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        for (const line of chunk.split("\n")) {
          if (!line.startsWith("data: ")) continue;
          const data = line.slice(6).trim();
          if (data === "[DONE]") break;
          try {
            const event = JSON.parse(data);
            if (
              event.type === "content_block_delta" &&
              event.delta?.type === "text_delta"
            ) {
              controller.enqueue(encoder.encode(event.delta.text));
            }
          } catch {
            // skip malformed lines
          }
        }
      }
      controller.close();
    },
  });

  return new Response(readable, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
