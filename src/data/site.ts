// Everything about you lives here. The pages read from this file.

export const site = {
  name: 'Phyoe Thant Naing',
  role: 'Odoo developer and Bussiness Analyst',
  location: 'Yangon, Myanmar',
  timezone: 'Asia/Yangon',
  email: 'phyoethantnaing007.007@gmail.com',
  available: true,
  intro:
    'I build Odoo modules and test the apps that talk to them. API test cases, swimlane flows and documentation clear enough that a release actually means something.',
  socials: [
    { label: 'GitHub', href: 'https://github.com/niconiki-cyber' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/phyoe-thant-naing-2a79353b9' },
    { label: 'Telegram', href: 'https://t.me/Ptn021' },
  ],
  marquee: ['Odoo development', 'API testing', 'QA documentation', 'Business analysis', 'Flowchart design', 'Mobile QA'],
}

export interface Project {
  slug: string
  title: string
  client: string
  category: string
  year: string
  cover: string
  tint: string
  summary: string
  role: string[]
  deliverables: string[]
  link?: string
  body: string[]
  size: 'large' | 'small'
}

export const projects: Project[] = [
  {
    slug: 'j-donut',
    title: 'J Donut',
    client: 'J Donuts',
    category: 'Mobile QA and Odoo',
    year: '2026',
    cover: '/images/aurora.jpg',
    tint: '#efe4d8',
    summary:
      'Full QA coverage for a donut brand’s mobile app running on an Odoo backend: config, theme, product, order, reward, wallet and login.',
    role: ['QA engineering', 'API testing', 'Documentation'],
    deliverables: ['API test cases', 'Regression suite', 'Bug reports', 'Odoo module checks'],
    link: 'https://www.jdonuts.com/en/app',
    body: [
      'J Donuts sells through a mobile app that sits on top of Odoo, which means every screen the customer touches is backed by a module somebody has to trust. My job was to be the person who stopped trusting it and started checking.',
      'I wrote and executed API test cases across seven modules — Config, Theme, Product, Order, Reward, Wallet and Login — covering auth flows, edge cases and the awkward states in between: an empty cart with a reward applied, a wallet balance that does not cover the order, a session token that expires mid-checkout.',
      'Everything went into a structured test case document and a bug list the team could work from, followed by retesting each fix until the modules behaved the way the specification said they would.',
    ],
    size: 'large',
  },
  {
    slug: 'auth-flow',
    title: 'Auth Flow',
    client: 'J Donuts',
    category: 'Flow design',
    year: '2026',
    cover: '/images/meridian.jpg',
    tint: '#dbe0f5',
    summary:
      'Swimlane diagrams for OTP-based phone authentication and session handling across the user, the mobile app and the Odoo server.',
    role: ['Flow design', 'draw.io', 'Documentation'],
    deliverables: ['Swimlane diagrams', 'Edge-case notes', 'Session flow reference'],
    body: [
      'Phone login looks simple until you draw it. An OTP is requested, delivered, entered, verified, exchanged for a session token and then used on every request after that — and each of those steps can fail in a way the user only experiences as “it did not work”.',
      'I mapped the whole thing in draw.io as a swimlane diagram, with the user, the mobile app and the Odoo server in separate lanes so it was obvious which layer owned each decision. Session expiry and token refresh got their own branches.',
      'The diagram became the reference for what to test: every lane transition is a test case, and the failure branches are the ones that actually find bugs.',
    ],
    size: 'small',
  },
  {
    slug: 'order-cart',
    title: 'Order and Cart',
    client: 'J Donuts',
    category: 'API testing',
    year: '2026',
    cover: '/images/kite.jpg',
    tint: '#d9e6dc',
    summary:
      'End-to-end testing of the order lifecycle — cart management, checkout, reward redemption and wallet payment.',
    role: ['API testing', 'Postman', 'QA documentation'],
    deliverables: ['Order lifecycle test cases', 'Response validation', 'Bug reports'],
    body: [
      'The order lifecycle is where money and state meet, so it got the most attention: adding and removing items, quantities that change, rewards applied and removed, and payment split between wallet balance and the remainder.',
      'Each step was tested in Postman with the response codes and payload shapes validated, not just eyeballed. A cart total that is correct in the UI but wrong in the response is still a bug.',
      'The result was a regression suite the team can rerun whenever a module changes, instead of finding the same breakage in production.',
    ],
    size: 'small',
  },
]

export const bySlug = (slug: string) => projects.find((p) => p.slug === slug)

export const services = [
  {
    title: 'Odoo development',
    body: 'Building and testing Odoo modules and customisations, keeping integrations with existing systems intact and the codebase readable for whoever touches it next.',
  },
  {
    title: 'Web development',
    body: 'Responsive, accessible interfaces built with React and modern CSS, with an eye on performance and maintainability rather than whatever ships fastest this week.',
  },
  {
    title: 'API testing and QA',
    body: 'Test case design and execution in Postman: auth flows, edge cases, response validation and full regression suites, written down so the team can rerun them.',
  },
  {
    title: 'Flows and architecture',
    body: 'Swimlane flowcharts and system diagrams in draw.io that map user journeys, authentication and app architecture, so what to test stops being a guess.',
  },
]

export const process = [
  {
    title: 'Discovery and research',
    body: 'Start with the product requirements, the backend APIs and the user flows. Specifications get read and integration points get mapped before a single test case is written.',
  },
  {
    title: 'Planning and documentation',
    body: 'Design the flowcharts, write the structured test case document, agree the scope. Clear documentation keeps the whole team aligned while the work is still cheap to change.',
  },
  {
    title: 'Execution and testing',
    body: 'Run the API calls in Postman, validate response codes and data, probe edge cases and check UI behaviour across states, screen sizes and awkward inputs.',
  },
  {
    title: 'Review and delivery',
    body: 'Report bugs, retest the fixes and sign off module by module, so every flow ships behaving the way it was specified.',
  },
]

export const skills = [
  'Odoo',
  'Postman',
  'API testing',
  'REST APIs',
  'JSON',
  'React',
  'Web development',
  'Business analysis',
  'Flowchart design',
  'draw.io',
  'OTP authentication',
  'Session tokens',
  'Test case design',
  'QA documentation',
  'Bug reporting',
  'Git',
  'Figma',
]

export const stats = [
  { value: '1+', label: 'years experience' },
  { value: '12+', label: 'projects delivered' },
  { value: '5+', label: 'modules tested' },
]
