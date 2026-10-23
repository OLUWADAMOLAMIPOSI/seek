export const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/clients", label: "Clients" },
  { href: "/team", label: "Team" },
  { href: "/approach", label: "Approach" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const email = "hello@seek.co";

export const sectors = ["Public sector", "Financial services", "Energy", "Health", "Technology", "Education", "Logistics", "Agriculture", "Real estate", "Development"];
export const steps = [
  {
    id: "discover", no: "01", title: "Discover", kicker: "Understand the real question",
    text: "We start by listening. Interviews, data and site visits so the problem on paper matches the problem in the room.",
    points: ["Stakeholder interviews", "Data and document review", "A clear problem statement"],
    tag: "Clarity in two weeks", duration: "Weeks 1 to 2", pos: "20% 60%",
    deliverable: "Problem statement and fact base",
    questions: [
      { q: "What decision are you trying to make?", a: "We write it down in one sentence and agree it with you before anything else." },
      { q: "Who has to say yes?", a: "We map who decides, who influences and who carries out the outcome, so nothing surprises you later." },
    ],
  },
  {
    id: "design", no: "02", title: "Design", kicker: "Shape the options",
    text: "We turn what we found into options you can compare, with costs, risks and trade-offs written down plainly.",
    points: ["Two to three viable options", "Costed and risk-rated", "A recommended path"],
    tag: "Decisions you can defend", duration: "Weeks 3 to 5", pos: "80% 45%",
    deliverable: "Options paper with costs and risks",
    questions: [
      { q: "What are the real alternatives?", a: "Usually two or three. We always include doing nothing, so the trade-offs are honest." },
      { q: "What could go wrong?", a: "Each option carries a plain-language risk rating and what we would do about it." },
    ],
  },
  {
    id: "deliver", no: "03", title: "Deliver", kicker: "Stay until it works",
    text: "We work alongside your team to put the plan in motion, then hand over with the documents and training to keep it going.",
    points: ["Embedded delivery support", "Progress reported weekly", "A clean handover"],
    tag: "A record at every step", duration: "Week 6 onward", pos: "65% 10%",
    deliverable: "Plan in motion and a handover pack",
    questions: [
      { q: "Who does the work?", a: "We work beside your team and name one owner for every action." },
      { q: "How do we know it is working?", a: "We agree the measures at the start and report them every week." },
    ],
  },
];

export const compare = [
  { label: "Time to a clear recommendation", typical: 85, seek: 40 },
  { label: "Handover documentation", typical: 35, seek: 90 },
  { label: "Cost visibility before work starts", typical: 30, seek: 95 },
];

export const services = [
  { title: "Strategy and growth", text: "Market positioning, growth plans and investment cases for organisations that need a direction they can defend." },
  { title: "Operations and process", text: "We map how work really gets done, remove the friction and set up measures that keep it that way." },
  { title: "Digital and technology", text: "Choosing, planning and rolling out the systems that fit your team, without buying more than you need." },
  { title: "Market entry and policy", text: "Entering a new market or navigating regulation with local insight and a clear view of the risks." },
];

export const clients = [
  { title: "Public sector", text: "Ministries, agencies and state bodies that need reform plans that survive a change of leadership." },
  { title: "Start-ups and scale-ups", text: "Founders who need strategy and structure without hiring a full leadership team." },
  { title: "Established enterprises", text: "Boards and executives facing restructuring, expansion or a new competitor." },
  { title: "Development and non-profit", text: "Programmes that must show results to funders and communities alike." },
];

export const team = [
  { role: "Managing partner", text: "Leads client relationships and sets the standard for every engagement." },
  { role: "Head of strategy", text: "Owns research, analysis and the quality of every recommendation." },
  { role: "Head of delivery", text: "Runs the teams that put the plan into practice with you." },
  { role: "Head of insights", text: "Builds the data, reporting and evidence behind every decision." },
];

export const values = [
  { title: "Plain language", text: "If a client cannot repeat our advice to their own board, we have not finished." },
  { title: "Evidence first", text: "Every recommendation shows the facts it rests on." },
  { title: "Accountable", text: "Named people, written scope and a record of what was agreed." },
  { title: "Built to be handed over", text: "We aim to leave you stronger, not dependent." },
];

export const explore = [
  { href: "/services", title: "Services", text: "What we do for organisations, and how each engagement is scoped." },
  { href: "/clients", title: "Clients", text: "Who we work with and the problems we are built to solve." },
  { href: "/team", title: "Team", text: "The people who lead the work and the roles we are hiring for." },
  { href: "/approach", title: "Approach", text: "Our three stages, from first conversation to handover." },
  { href: "/about", title: "About", text: "Who we are, why we started SEEK and what we stand on." },
];
