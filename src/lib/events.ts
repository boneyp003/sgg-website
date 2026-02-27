export type CommunityEvent = {
  id: string;
  title: string;
  dateText: string;      // display string for MVP
  location?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  tags?: string[];
  status?: "upcoming" | "past";
};

export const events: CommunityEvent[] = [
  {
    id: "kickoff-meet",
    title: "SGG Community Kickoff Meetup",
    dateText: "Sat, Mar 9 • 5:00 PM",
    location: "Fairfax, VA",
    description:
      "Meet local members, learn what SGG is about, and help shape our next events.",
    ctaLabel: "RSVP",
    ctaHref: "#",
    tags: ["Meetup", "Networking"],
    status: "upcoming",
  },
  {
    id: "resume-clinic",
    title: "Resume Review & LinkedIn Clinic",
    dateText: "Sun, Mar 17 • 11:00 AM",
    location: "Online",
    description:
      "Bring your resume and LinkedIn profile. Get feedback and learn how referrals work.",
    ctaLabel: "Join",
    ctaHref: "#",
    tags: ["Career", "Mentorship"],
    status: "upcoming",
  },
];