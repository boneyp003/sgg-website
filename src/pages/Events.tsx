import EventCard from "../components/EventCard";
import { events } from "../lib/events";

export default function Events() {
  const upcoming = events.filter((e) => e.status !== "past");
  const past = events.filter((e) => e.status === "past");

  return (
    <div className="space-y-10 p-8 bg-slate-50/90 rounded-2xl">
      <header className="rounded-2xl border bg-white p-8">
        <h1 className="text-3xl font-bold">Events</h1>
        <p className="mt-2 max-w-2xl text-slate-600">
          Join upcoming events and stay connected with the South Gujarat Group (SGG) community.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Upcoming</h2>
        {upcoming.length ? (
          <div className="grid gap-4">
            {upcoming.map((e) => (
              <EventCard
                key={e.id}
                title={e.title}
                dateText={e.dateText}
                location={e.location}
                description={e.description}
                ctaLabel={e.ctaLabel}
                ctaHref={e.ctaHref}
                tags={e.tags}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border bg-white p-6 text-slate-600">
            No upcoming events yet. Check back soon.
          </div>
        )}
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Past</h2>
        {past.length ? (
          <div className="grid gap-4">
            {past.map((e) => (
              <EventCard
                key={e.id}
                title={e.title}
                dateText={e.dateText}
                location={e.location}
                description={e.description}
                ctaLabel={e.ctaLabel}
                ctaHref={e.ctaHref}
                tags={e.tags}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border bg-white p-6 text-slate-600">
            No past events yet.
          </div>
        )}
      </section>
    </div>
  );
}