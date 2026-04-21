'use client';
import { useState } from 'react';

const tooltips: Record<string, string> = {
  'AI-personalized sequences':     "Each email is written by AI using the prospect's company, role, and recent signals — not a template.",
  'Domain & inbox setup':          'We configure dedicated sending domains and warm them over 2–3 weeks so you never hit spam.',
  'Reply management':              'We monitor inboxes and flag warm replies for you daily, so no opportunity slips through.',
  'Multi-channel outreach':        'Email + LinkedIn touchpoints coordinated in a single sequence for 3× more responses.',
  'A/B testing & optimization':    'We test 2–4 subject line and copy variants simultaneously, killing losers weekly.',
  'Dedicated account strategist':  'A senior strategist owns your account and joins your weekly call. Not a junior account manager.',
  'Custom integrations & CRM sync':'We push booked meetings and contact data directly into your HubSpot, Salesforce, or Pipedrive.',
  'Priority support & SLA':        '4-hour response SLA. Direct Slack channel with your team.',
};

export function FeatureItem({ text }: { text: string }) {
  const [show, setShow] = useState(false);
  const tip = tooltips[text];
  return (
    <div
      className="pi py-2.5 text-sm"
      style={{ color: 'var(--t2)', position: 'relative', cursor: tip ? 'help' : 'default' }}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <span style={{ display: 'flex', alignItems: 'center', gap: '.4rem' }}>
        {text}
        {tip && (
          <span style={{
            width: 13, height: 13, borderRadius: '50%',
            background: 'rgba(0,209,255,0.12)', border: '1px solid rgba(0,209,255,0.3)',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '.6rem', color: 'var(--acc)', flexShrink: 0,
          }}>?</span>
        )}
      </span>
      {tip && show && (
        <div style={{
          position: 'absolute', bottom: 'calc(100% + 8px)', left: 0,
          width: 210, background: '#0C2140', border: '1px solid rgba(0,209,255,0.25)',
          borderRadius: 8, padding: '.65rem .875rem', zIndex: 50,
          fontSize: '.75rem', lineHeight: 1.55, color: '#CBD5E1',
          boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
          pointerEvents: 'none',
        }}>
          {tip}
          <div style={{
            position: 'absolute', bottom: -5, left: 16,
            width: 8, height: 8, background: '#0C2140',
            border: '1px solid rgba(0,209,255,0.25)',
            transform: 'rotate(45deg)', borderTop: 'none', borderLeft: 'none',
          }} />
        </div>
      )}
    </div>
  );
}
