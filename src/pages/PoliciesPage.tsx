import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

// Simple Tabs component
function Tabs({ tabs, active, onChange }) {
  return (
    <div className="w-full border-b border-gray-200 flex flex-wrap gap-2">
      {tabs.map((t) => (
        <button
          key={t}
          onClick={() => onChange(t)}
          className={`px-4 py-2 rounded-t-xl text-sm md:text-base transition whitespace-nowrap ${
            active === t
              ? "bg-white border-x border-t border-gray-200 -mb-px font-semibold"
              : "bg-gray-100 hover:bg-gray-200 text-gray-700"
          }`}
          aria-current={active === t ? "page" : undefined}
        >
          {t}
        </button>
      ))}
    </div>
  );
}

// Reusable section with <details>
function Section({ title, children, defaultOpen = false }) {
  return (
    <details className="group border border-gray-200 rounded-2xl p-4 open:shadow-sm" open={defaultOpen}>
      <summary className="cursor-pointer select-none flex items-center justify-between gap-4">
        <h3 className="text-base md:text-lg font-semibold">{title}</h3>
        <span className="i-chevron group-open:rotate-180 transition-transform" aria-hidden>
          ▼
        </span>
      </summary>
      <div className="mt-3 text-sm md:text-base leading-7 text-gray-700">{children}</div>
    </details>
  );
}

// --------------------
// Privacy Policy
// --------------------
function PrivacyPolicy() {
  return (
    <article className="space-y-4">
      <p>
        At <strong>Oceanfront Homes Apartments</strong>, we value your privacy and are committed to
        protecting your personal information. This policy explains how we collect, use, and safeguard
        your data during your stay.
      </p>

      <Section title="Information We Collect" defaultOpen>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Personal details:</strong> full name, email, phone number, and government-issued ID
            (passport, national ID, or approved digital verification).
          </li>
          <li>
            <strong>Booking details:</strong> reservation dates, property reserved, party size, and stay
            preferences.
          </li>
          <li>
            <strong>Payment details:</strong> method (M‑Pesa, card, PayPal), transaction references, and
            payment status.
          </li>
        </ul>
      </Section>

      <Section title="How We Use Your Information">
        <ul className="list-disc pl-5 space-y-1">
          <li>Confirm and manage reservations and extensions of stay.</li>
          <li>Process secure payments and issue receipts.</li>
          <li>Comply with local safety, legal, and registration requirements.</li>
          <li>Communicate important updates, offers, and guest rewards.</li>
        </ul>
      </Section>

      <Section title="Data Protection">
        <p>
          We apply reasonable technical and organizational safeguards. Access to your information is
          restricted to authorized staff and service providers who need it to deliver your booking.
        </p>
      </Section>

      <Section title="Sharing of Information">
        <p>
          We do not sell your data. We may share limited information when: (a) required by law or
          authorities; (b) working with trusted providers (payment processors, transport partners) to
          fulfill services you requested.
        </p>
      </Section>

      <Section title="Your Rights">
        <ul className="list-disc pl-5 space-y-1">
          <li>Request access, correction, or update of your personal data.</li>
          <li>
            Request deletion after your stay, subject to legal record keeping obligations (e.g., tax and
            payment records).
          </li>
        </ul>
        <p className="mt-2">
          For privacy inquiries, contact us at <strong>+254 716 073 759</strong>.
        </p>
      </Section>
    </article>
  );
}

// --------------------
// Terms of Service
// --------------------
function TermsOfService() {
  return (
    <article className="space-y-4">
      <p>
        By booking and staying at <strong>Oceanfront Homes Apartments</strong>, you agree to the terms
        below. These terms align with our printed house rules and ensure a comfortable stay for all
        guests.
      </p>

      <Section title="Check‑in & Check‑out" defaultOpen>
        <ul className="list-disc pl-5 space-y-1">
          <li>Check‑in: <strong>1:00 PM</strong></li>
          <li>Check‑out: <strong>10:00 AM</strong></li>
          <li>Early check‑in/late check‑out may be available on request for an additional fee.</li>
        </ul>
      </Section>

      <Section title="Identification & Payment">
        <ul className="list-disc pl-5 space-y-1">
          <li>A valid government issued ID (passport, national ID, or digital ID) is required at check‑in.</li>
          <li>Full payment is required at check‑in to complete your reservation.</li>
        </ul>
      </Section>

      <Section title="Extensions of Stay">
        <p>
          If you wish to extend your stay, payment for added nights must be completed by
          <strong> 10:00 AM</strong> on the day following the last night of your current reservation.
        </p>
      </Section>

      <Section title="Smoking, Noise & Conduct">
        <ul className="list-disc pl-5 space-y-1">
          <li>Smoking is strictly prohibited indoors. Designated outdoor areas are provided.</li>
          <li>
            A violation attracts a fine of <strong>Ksh. 5,000</strong> and may result in being required to
            check out.
          </li>
          <li>Quiet hours are <strong>10:00 PM – 8:00 AM</strong>; parties and loud music are not allowed.</li>
          <li>Please remove shoes indoors and care for property fixtures; guests are responsible for damages.</li>
        </ul>
      </Section>

      <Section title="Electricity & Air Conditioning">
        <p>
          Electricity tokens cover normal household use (lighting, appliances, basic electronics). Air
          conditioning incurs a daily flat rate of <strong>Ksh. 2,000</strong>, or guests may purchase
          additional tokens.
        </p>
      </Section>

      <Section title="Maximum Occupancy">
        <ul className="list-disc pl-5 space-y-1">
          <li>3BR: max 6 guests (8 for families with children).</li>
          <li>2BR: max 4 guests.</li>
          <li>1BR: max 2 guests.</li>
        </ul>
      </Section>

      <Section title="Pets & Children">
        <ul className="list-disc pl-5 space-y-1">
          <li>Pets are not allowed on the property.</li>
          <li>Children must be supervised to prevent damage and ensure safety.</li>
        </ul>
      </Section>

      <Section title="Liability">
        <p>
          Oceanfront Homes Apartments is not responsible for loss of personal belongings, injuries, or
          accidents occurring during your stay, except as required by law.
        </p>
      </Section>

      <Section title="Cancellation & Refunds">
        <ul className="list-disc pl-5 space-y-1">
          <li>Online bookings follow the policy of the booking platform used.</li>
          <li>Offline bookings: free cancellation up to <strong>48 hours</strong> before check‑in.</li>
          <li>
            Cancellations within <strong>24 hours</strong> of check‑in, or after check‑in, are
            <strong> nonrefundable</strong>.
          </li>
        </ul>
      </Section>

      <Section title="Complimentary Perks">
        <ul className="list-disc pl-5 space-y-1">
          <li>Free refreshments: drinking water, coffee, tea, hot chocolate (sugar provided).</li>
          <li>
            Complimentary return transfer (SGR or airport) for stays of <strong>6+ nights</strong>.
          </li>
          <li>
            Loyal guest reward: on a second stay of <strong>3+ nights</strong>, enjoy a free SGR or airport
            return transfer.
          </li>
        </ul>
      </Section>

      <p className="text-sm text-gray-600">
        Need help? Call us on <strong>0716 073 759</strong>.
      </p>
    </article>
  );
}

// --------------------
// Cancellation Policy
// --------------------
function CancellationPolicy() {
  return (
    <article className="space-y-4">
      <p>
        We understand plans can change. Our policy balances guest flexibility with host preparedness.
      </p>

      <Section title="Online Bookings" defaultOpen>
        <p>
          If you booked via a platform (e.g., Airbnb, Booking.com), the platform’s cancellation policy
          applies. Please review your reservation page for exact terms.
        </p>
      </Section>

      <Section title="Offline / Direct Bookings">
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>48+ hours before check‑in:</strong> Full refund.
          </li>
          <li>
            <strong>Within 24 hours of check‑in:</strong> Nonrefundable.
          </li>
          <li>
            <strong>After check‑in:</strong> Nonrefundable; early departures are not refunded.
          </li>
        </ul>
      </Section>

      <Section title="Refunds">
        <ul className="list-disc pl-5 space-y-1">
          <li>Approved refunds are issued within <strong>7 business days</strong>.</li>
          <li>Refunds are processed via the original payment method (M‑Pesa, card, PayPal).</li>
          <li>No shows are not eligible for refunds.</li>
        </ul>
      </Section>

      <p className="text-sm text-gray-600">
        Questions about your booking? Contact <strong>0716 073 759</strong>.
      </p>
    </article>
  );
}

// --------------------
// Page Shell
// --------------------
export default function PoliciesPage() {
  const tabs = ["Privacy Policy", "Terms of Service", "Cancellation Policy"];
  const [active, setActive] = useState(tabs[0]);

  const [searchParams] = useSearchParams();

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab === "privacy") setActive("Privacy Policy");
    if (tab === "terms") setActive("Terms of Service");
    if (tab === "cancellation") setActive("Cancellation Policy");
  }, [searchParams]);

  return (
    <main className="max-w-4xl mx-auto p-4 md:p-8">
      <header className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold">Policies: Oceanfront Homes Apartments</h1>
        <p className="text-gray-600 mt-1 text-sm md:text-base">
          Please review the policies below before and during your stay.
        </p>
      </header>

      <Tabs tabs={tabs} active={active} onChange={setActive} />

      <section className="bg-white border border-gray-200 rounded-3xl p-5 md:p-8 shadow-sm">
        {active === "Privacy Policy" && <PrivacyPolicy />}
        {active === "Terms of Service" && <TermsOfService />}
        {active === "Cancellation Policy" && <CancellationPolicy />}
      </section>

      <footer className="mt-8 text-xs text-gray-500">
        © {new Date().getFullYear()} Oceanfront Homes Apartments. All rights reserved.
      </footer>
    </main>
  );
}
