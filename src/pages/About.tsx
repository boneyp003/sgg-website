export default function About() {
  return (
    <div className="rounded-2xl border bg-white p-8 bg-slate-50/90">
      <header className="max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight">SGG Vision</h1>
        <p className="mt-3 text-slate-600">
          The South Gujarat Group (SGG) community is for folks with ethnic roots in South Gujarat,
          currently residing in North America (USA & Canada). Our vision is to form a virtual group
          supplemented by regional get-togethers with the purposes below.
        </p>
      </header>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Purpose</h2>

        <ol className="mt-4 list-decimal space-y-6 pl-6">
          <li>
            <div className="font-medium text-slate-900">Assist and guide newcomers</div>
            <ol className="mt-2 list-[lower-alpha] space-y-2 pl-6 text-slate-700">
              <li>
                Provide a helping hand to students and families coming from India for studies, jobs,
                or business.
              </li>
              <li>
                Provide help and guidance for resume reviews, mentoring, LinkedIn networking,
                job/internship referrals, and professional 1:1 introductions.
              </li>
              <li className="rounded-lg border bg-slate-50 p-3 text-slate-700">
                <span className="font-medium">Note:</span> This group does not provide monetary
                assistance for accommodation, tuition, etc.
              </li>
            </ol>
          </li>

          <li>
            <div className="font-medium text-slate-900">Keep in touch</div>
            <ol className="mt-2 list-[lower-alpha] space-y-2 pl-6 text-slate-700">
              <li>
                North America is geographically diverse and spread out, and keeping in touch can be
                mutually beneficial for social and professional networking.
              </li>
            </ol>
          </li>
        </ol>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold">Tenets</h2>

        <ol className="mt-4 list-decimal space-y-2 pl-6 text-slate-700">
          <li>Help members of our community with a focus on professional guidance.</li>
          <li>This group will function in a very non-profit way, with minimal expenses.</li>
          <li>We aim to be culturally aligned.</li>
          <li>No political posturing or discussion allowed.</li>
          <li>No irrelevant forwards or posts.</li>
          <li>Avoid Happy Birthday/Anniversary/Good Morning messages.</li>
          <li>Member info will not be shared with any 3rd party, for any reason.</li>
        </ol>
      </section>


      <section className="mt-12">
        <h2 className="text-xl font-semibold">To Join</h2>
        <p>Please contact,</p>

        <ol className="mt-4 list-decimal space-y-2 pl-6 text-slate-700">
          <li>Darshan Patel (Bay Area, CA) : xxx-xxx-xxxx</li>
          <li>Jitendra Kaneria (Bay Area, CA) : xxx-xxx-xxxx</li>
          <li>Bhavesh Rathod (Edison, NJ) : xxx-xxx-xxxx</li>
          <li>Sameer Tawadia (Bay Area, CA) : xxx-xxx-xxxx</li>
        </ol>

        <p>Please provide your name, phone, ancestral village in Gujarat, place of stay in India (where you or your parents actually lived) with similar spouse details.</p>
      </section>
    </div>
  );
}