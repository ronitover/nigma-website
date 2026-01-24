// Event Details Data

export interface EventPhase {
  number: string;
  title: string;
  description: string;
}

export interface EventDetail {
  id: number;
  title: string;
  description: string;
  quote: string;
  icon: string;
  heads?: string[];
  rules: string[];
  phases: EventPhase[];
  registrationDeadline?: string;
}

export const eventDetails: EventDetail[] = [
  // Commerce events (displayed first)
  {
    id: 1,
    title: 'Best Manager',
    description: 'Inter-college management challenge.',
    quote: 'Prove your leadership, strategy and people skills in this management simulation.',
    icon: 'grade',
    heads: ['Vishak', 'Santhosh'],
    rules: ['Teams of 2', 'Round-based case studies and live presentations'],
    phases: [
      { number: 'I', title: 'Prelims', description: 'Online case submission' },
      { number: 'II', title: 'Finals', description: 'On-site presentations and Q&A' }
    ]
  },
  {
    id: 2,
    title: 'Finance',
    description: 'Finance case challenge and trading simulations.',
    quote: 'Show your financial acumen and trading instincts.',
    icon: 'attach_money',
    heads: ['Prarthana', 'Bharath'],
    rules: ['Teams of 2', 'No external assistance during live rounds'],
    phases: [{ number: 'I', title: 'Simulation', description: 'Live trading rounds' }]
  },
  {
    id: 3,
    title: 'Marketing',
    description: 'Marketing strategy and campaign creation.',
    quote: 'Craft campaigns that move people and markets.',
    icon: 'campaign',
    heads: ['Prapthi', 'Ayshal'],
    rules: ['Teams of 2', 'Creative campaign deliverables required'],
    phases: [{ number: 'I', title: 'Campaign Brief', description: 'Deliverables and presentation' }]
  },
  {
    id: 4,
    title: 'HR',
    description: 'Human Resources challenge & role plays.',
    quote: 'Test your people skills and organisational judgment.',
    icon: 'group',
    heads: ['Pavani', 'Sudeeksha'],
    rules: ['Teams of 2', 'Role-play and case study rounds'],
    phases: [{ number: 'I', title: 'Role Play', description: 'Live HR scenarios' }]
  },
  {
    id: 5,
    title: 'Event Management',
    description: 'Plan and execute a mock event.',
    quote: 'Showcase logistics, creativity and management skills.',
    icon: 'event',
    heads: ['Rishika', 'Viola'],
    rules: ['Teams of 2-4', 'Presentation of event plan and budget'],
    phases: [{ number: 'I', title: 'Plan', description: 'Submit event plan' }, { number: 'II', title: 'Execute', description: 'On-site mock execution' }]
  },

  // IT / Technical events (displayed second)
  {
    id: 6,
    title: 'Coding Challenge',
    description: 'Problem-solving contest.',
    quote: 'Speed, accuracy and algorithmic thinking win the day.',
    icon: 'code',
    heads: ['Leesha', 'Lavisha'],
    rules: ['Teams of 2', 'Online preliminary followed by on-site finals'],
    phases: [{ number: 'I', title: 'Online Quals', description: 'Algorithmic problem set' }, { number: 'II', title: 'Finals', description: 'On-site coding showdown' }]
  },
  {
    id: 7,
    title: 'E-Sports',
    description: 'Competitive gaming tournament.',
    quote: 'Bring your best team and reflexes to the arena.',
    icon: 'sports_esports',
    heads: ['Vikas', 'Adithya Shenoy'],
    rules: ['Check game-specific team sizes', 'Fair-play required'],
    phases: [{ number: 'I', title: 'Online Quals', description: 'Determine top teams' }, { number: 'II', title: 'On-site Bracket', description: 'Elimination rounds' }]
  },
  {
    id: 8,
    title: 'IT Treasure Hunt',
    description: 'Tech-themed treasure hunt.',
    quote: 'Solve riddles, decode clues and race to the treasure.',
    icon: 'search',
    heads: ['Sudeeksha', 'Manisha'],
    rules: ['Teams of 2-4', 'Follow event marshals and safety rules'],
    phases: [{ number: 'I', title: 'Hunt', description: 'Timed treasure hunt across campus' }]
  },
  {
    id: 9,
    title: 'Maths Heptathlon',
    description: 'Seven mathematical challenges.',
    quote: 'From logic puzzles to number theory — endurance matters.',
    icon: 'calculate',
    heads: ['Clanita', 'Shruthi'],
    rules: ['Teams of 2', 'Multiple timed rounds'],
    phases: [{ number: 'I', title: 'Seven Rounds', description: 'Each round focuses on a different math domain' }]
  },
  {
    id: 10,
    title: 'Hackathon',
    description: 'Build solutions in a sprint.',
    quote: 'Create, prototype and present — build what matters.',
    icon: 'developer_mode',
    heads: ['Royston', 'Prarthana'],
    rules: ['Teams of up to 4', '24-48 hour build window depending on track'],
    phases: [{ number: 'I', title: 'Sprint', description: 'Hack for the allotted time' }, { number: 'II', title: 'Demo', description: 'Pitch to judges' }]
  },

  // Other / Cultural events (displayed last)
  {
    id: 11,
    title: 'Variety Event',
    description: 'Open cultural performances.',
    quote: 'Bring any act that entertains and inspires.',
    icon: 'theaters',
    heads: ['Afreed', 'Shanola'],
    rules: ['Solo or groups allowed', 'Time limits apply'],
    phases: [{ number: 'I', title: 'Auditions', description: 'Select finalists' }, { number: 'II', title: 'Showcase', description: 'Final performances' }]
  },
  {
    id: 12,
    title: 'Mock Press',
    description: 'Press and media event simulation.',
    quote: 'Craft narratives, press releases and handle interviews professionally.',
    icon: 'newspaper',
    heads: ['Trisha', 'Pranamya'],
    rules: ['Teams of 2', 'Submission of press materials required'],
    phases: [{ number: 'I', title: 'Brief', description: 'Create press material and handle live Q&A' }]
  },
  {
    id: 13,
    title: 'Best out of Waste',
    description: 'Creative reuse competition.',
    quote: 'Turn trash into treasure with creativity and sustainability.',
    icon: 'recycling',
    heads: ['Riya', 'Shreya'],
    rules: ['Teams of up to 3', 'Materials should be largely recycled'],
    phases: [{ number: 'I', title: 'Create', description: 'On-site build and presentation' }]
  },
  {
    id: 14,
    title: 'Reel Making',
    description: 'Short-form video challenge.',
    quote: 'Tell a story in 30–60 seconds.',
    icon: 'movie',
    heads: ['Manish', 'Dhanush'],
    rules: ['Solo or duo', 'Original content only'],
    phases: [{ number: 'I', title: 'Submission', description: 'Upload your reel' }, { number: 'II', title: 'Screening', description: 'Final judging' }]
  },
  {
    id: 15,
    title: 'Face Painting',
    description: 'Art and creativity on canvas — your face.',
    quote: 'Colors, patterns and imagination.',
    icon: 'brush',
    heads: ['Akshay N', 'Prajna'],
    rules: ['Solo artists', 'Hygiene and safety rules apply'],
    phases: [{ number: 'I', title: 'Live Paint', description: 'Timed face-painting round' }]
  }
];
