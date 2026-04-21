'use client';
import { useState, useEffect } from 'react';

function Modal({ id, title, open, onClose, children }: { id: string; title: string; open: boolean; onClose: () => void; children: React.ReactNode }) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
      document.addEventListener('keydown', handler);
      return () => { document.removeEventListener('keydown', handler); document.body.style.overflow = ''; };
    } else {
      document.body.style.overflow = '';
    }
  }, [open, onClose]);

  return (
    <div id={id} className={`modal-overlay${open ? ' open' : ''}`} role="dialog" aria-modal
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal-box">
        <div className="flex items-start justify-between mb-5 pb-4" style={{ borderBottom: '1px solid var(--border)' }}>
          <h3 className="font-display font-extrabold text-xl" style={{ color: 'var(--t1)' }}>{title}</h3>
          <button onClick={onClose} className="w-7 h-7 flex items-center justify-center text-xs"
            style={{ border: '1px solid var(--border)', borderRadius: 3, color: 'var(--t3)', cursor: 'pointer', background: 'none' }}>&#10005;</button>
        </div>
        <div className="text-sm leading-relaxed space-y-3.5" style={{ color: 'var(--t2)' }}>{children}</div>
      </div>
    </div>
  );
}

export default function FooterWithModals() {
  const [privacy, setPrivacy] = useState(false);
  const [terms,   setTerms]   = useState(false);

  const navLinks = ['#how','#pricing','#faq','#contact'];
  const navLabels = ['How It Works','Pricing','FAQ','Contact'];

  return (
    <>
      <footer style={{ background: 'linear-gradient(180deg,#071526 0%,#060F1C 100%)', borderTop: '1px solid rgba(232,184,75,0.2)', boxShadow: '0 -1px 0 rgba(0,209,255,0.06),0 -4px 40px rgba(232,184,75,.05)' }}>
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
            <a href="#" className="font-display font-extrabold tracking-tight" style={{ color: 'var(--t1)', fontSize: '1rem' }}>
              pur<span style={{ color: 'var(--gold)' }}>LEAD</span>
            </a>
            <div className="flex flex-wrap gap-x-7 gap-y-2 text-sm" style={{ color: 'rgba(148,163,184,0.6)' }}>
              {navLinks.map((href, i) => (
                <a key={href} href={href}
                  style={{ transition: 'color .2s' }}
                  onMouseOver={e => (e.currentTarget.style.color = '#00D1FF')}
                  onMouseOut={e  => (e.currentTarget.style.color = 'rgba(148,163,184,0.6)')}>
                  {navLabels[i]}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <a href="https://linkedin.com/company/purlead" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                className="w-8 h-8 flex items-center justify-center" style={{ border: '1px solid var(--border)', borderRadius: 3, color: 'var(--t3)' }}>
                <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="https://twitter.com/purlead" target="_blank" rel="noopener noreferrer" aria-label="X"
                className="w-8 h-8 flex items-center justify-center" style={{ border: '1px solid var(--border)', borderRadius: 3, color: 'var(--t3)' }}>
                <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '1.25rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '.75rem' }}>
            <p className="font-mono text-xs" style={{ color: 'rgba(148,163,184,0.5)' }}>&copy; 2026 purLEAD. All rights reserved.</p>
            <div className="flex items-center gap-5 font-mono text-xs" style={{ color: 'rgba(148,163,184,0.5)' }}>
              <button onClick={() => setPrivacy(true)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit' }}
                onMouseOver={e => (e.currentTarget.style.color = '#00D1FF')}
                onMouseOut={e  => (e.currentTarget.style.color = 'rgba(148,163,184,0.5)')}>Privacy Policy</button>
              <button onClick={() => setTerms(true)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit' }}
                onMouseOver={e => (e.currentTarget.style.color = '#00D1FF')}
                onMouseOut={e  => (e.currentTarget.style.color = 'rgba(148,163,184,0.5)')}>Terms of Service</button>
              <a href="mailto:hello@purlead.co"
                onMouseOver={e => (e.currentTarget.style.color = '#00D1FF')}
                onMouseOut={e  => (e.currentTarget.style.color = 'rgba(148,163,184,0.5)')}>hello@purlead.co</a>
            </div>
          </div>
        </div>
      </footer>

      <Modal id="modal-privacy" title="Privacy Policy" open={privacy} onClose={() => setPrivacy(false)}>
        <p className="font-mono text-xs" style={{ color: 'var(--t3)' }}>Last updated: April 2026</p>
        <p>purLEAD (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data.</p>
        <h4 className="font-display font-bold" style={{ color: 'var(--t1)' }}>Information We Collect</h4>
        <p>We collect information you provide directly (name, email, company, phone) when you book a call or contact us, plus analytics data about website interactions.</p>
        <h4 className="font-display font-bold" style={{ color: 'var(--t1)' }}>How We Use Your Information</h4>
        <ul className="space-y-1 pl-4" style={{ listStyle: 'disc' }}>
          <li>To schedule and conduct strategy calls</li>
          <li>To provide and improve our services</li>
          <li>To send relevant service-related communications</li>
          <li>To respond to inquiries and support requests</li>
        </ul>
        <h4 className="font-display font-bold" style={{ color: 'var(--t1)' }}>Data Sharing</h4>
        <p>We do not sell or share your personal information with third parties for their marketing purposes.</p>
        <h4 className="font-display font-bold" style={{ color: 'var(--t1)' }}>Your Rights</h4>
        <p>You may access, correct, or delete your data at any time. Contact <a href="mailto:hello@purlead.co" style={{ color: 'var(--acc)' }}>hello@purlead.co</a>.</p>
      </Modal>

      <Modal id="modal-terms" title="Terms of Service" open={terms} onClose={() => setTerms(false)}>
        <p className="font-mono text-xs" style={{ color: 'var(--t3)' }}>Last updated: April 2026</p>
        <p>By engaging purLEAD&rsquo;s services, you agree to these Terms of Service.</p>
        <h4 className="font-display font-bold" style={{ color: 'var(--t1)' }}>Services</h4>
        <p>purLEAD provides AI-powered outbound lead generation on a subscription basis. Specific deliverables and terms are defined in your signed service agreement.</p>
        <h4 className="font-display font-bold" style={{ color: 'var(--t1)' }}>Payment &amp; Billing</h4>
        <p>Subscription fees are billed monthly in advance. A one-time setup fee is charged upon onboarding. All fees are non-refundable except as stated in your agreement.</p>
        <h4 className="font-display font-bold" style={{ color: 'var(--t1)' }}>Minimum Commitment</h4>
        <p>All plans require a 3-month initial commitment, then continue month-to-month with 30 days&rsquo; written notice to cancel.</p>
        <h4 className="font-display font-bold" style={{ color: 'var(--t1)' }}>Limitation of Liability</h4>
        <p>purLEAD&rsquo;s liability is limited to the monthly fees paid in the month of the claim. We do not guarantee specific revenue outcomes.</p>
        <h4 className="font-display font-bold" style={{ color: 'var(--t1)' }}>Contact</h4>
        <p>Legal inquiries: <a href="mailto:hello@purlead.co" style={{ color: 'var(--acc)' }}>hello@purlead.co</a></p>
      </Modal>
    </>
  );
}
