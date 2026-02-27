import { Link } from "react-router-dom";
import { site } from "../lib/site";

export default function Home() {
  return (
    <div className="space-y-10 p-4 bg-slate-50/80">
      {/* Hero */}
      <section className="rounded-2xl border bg-white p-8">
        <div className="max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight">{site.tagline}</h1>
          <p className="mt-3 text-slate-600">{site.description}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#join"
              className="rounded-md bg-slate-900 px-4 py-2 text-white hover:bg-slate-800"
            >
              Join the community
            </a>

            <Link
              to="/events"
              className="rounded-md border bg-white px-4 py-2 hover:bg-slate-100"
            >
              View events
            </Link>

            <Link
              to="/about"
              className="rounded-md border bg-white px-4 py-2 hover:bg-slate-100"
            >
              Read our vision
            </Link>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border bg-white p-6">
          <h2 className="font-semibold">Support newcomers</h2>
          <p className="mt-2 text-sm text-slate-600">
            Guidance for students and families arriving from India for study, jobs, or business.
          </p>
        </div>

        <div className="rounded-2xl border bg-white p-6">
          <h2 className="font-semibold">Career mentorship</h2>
          <p className="mt-2 text-sm text-slate-600">
            Resume reviews, LinkedIn networking, referrals, and 1:1 professional introductions.
          </p>
        </div>

        <div className="rounded-2xl border bg-white p-6">
          <h2 className="font-semibold">Stay connected</h2>
          <p className="mt-2 text-sm text-slate-600">
            Regional meetups and a virtual community for social and professional networking.
          </p>
        </div>
      </section>

      {/* Primary CTA */}
      <section id="join" className="rounded-2xl border bg-white p-8">
        <h2 className="text-xl font-semibold">Get updates</h2>
        <p className="mt-2 text-slate-600">
          Monthly digest + event reminders. No spam. You can unsubscribe anytime.
        </p>

        {/* MVP form (no backend yet) */}
        <form
          className="mt-5 flex max-w-lg gap-3"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Next step: connect this form to Tally/Formspree.");
          }}
        >
          <input
            className="w-full rounded-md border px-3 py-2"
            placeholder="you@example.com"
            type="email"
            required
          />
          <button
            type="submit"
            className="rounded-md bg-slate-900 px-4 py-2 text-white hover:bg-slate-800"
          >
            Join
          </button>
        </form>

        <div className="mt-4 text-sm text-slate-600">
          Prefer WhatsApp? Add your invite link in the About page “How to Join” section.
        </div>
      </section>
    </div>
  );
}