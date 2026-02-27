type EventCardProps = {
  title: string;
  dateText: string;
  location?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  calendarLabel?: string;
  calendarHref?: string;
  tags?: string[];
};

export default function EventCard({
  title,
  dateText,
  location,
  description,
  ctaLabel,
  ctaHref,
  calendarLabel,
  calendarHref,
  tags = [],
}: EventCardProps) {
  const isExternal = (href: string) => href.startsWith("http");

  return (
    <div className="rounded-2xl border bg-white p-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <h3 className="text-lg font-semibold">{title}</h3>
          <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-600">
            <span>{dateText}</span>
            {location ? <span>• {location}</span> : null}
          </div>
        </div>

        {(ctaLabel && ctaHref) || (calendarLabel && calendarHref) ? (
          <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:justify-end">
            {ctaLabel && ctaHref ? (
              <a
                href={ctaHref}
                target={isExternal(ctaHref) ? "_blank" : undefined}
                rel={isExternal(ctaHref) ? "noreferrer" : undefined}
                className="inline-flex items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
              >
                {ctaLabel}
              </a>
            ) : null}

            {calendarLabel && calendarHref ? (
              <a
                href={calendarHref}
                target={isExternal(calendarHref) ? "_blank" : undefined}
                rel={isExternal(calendarHref) ? "noreferrer" : undefined}
                className="inline-flex items-center justify-center rounded-md border bg-white px-4 py-2 text-sm font-medium hover:bg-slate-100"
              >
                {calendarLabel}
              </a>
            ) : null}
          </div>
        ) : null}
      </div>

      {tags.length ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="rounded-full border bg-slate-50 px-2.5 py-1 text-xs text-slate-700"
            >
              {t}
            </span>
          ))}
        </div>
      ) : null}

      {description ? (
        <p className="mt-4 text-sm leading-6 text-slate-700">{description}</p>
      ) : null}
    </div>
  );
}