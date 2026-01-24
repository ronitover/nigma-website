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
  prize: string;
  rules: string[];
  phases: EventPhase[];
  registrationDeadline?: string;
}

export const eventDetails: EventDetail[] = [
  {
    id: 1,
    title: "The Code of Odin",
    description: "Decrypt the ancient algorithms and solve the logic of the All-Father in this high-stakes competitive programming saga.",
    quote: "Only the swiftest coders shall survive the Twilight of the Gods. Prove your worth in the digital halls of Valhalla and claim your seat at the High Table.",
    icon: "auto_awesome",
    prize: "50,000 Gold Credits",
    rules: [
      "Warriors must compete in teams of exactly 2 members. Lone wolves are not permitted in the Great Hall.",
      "Only the languages of the ancients (C++, Python, Java) may be used to forge your solutions.",
      "Any form of divine intervention (AI tools/Internet) will result in immediate banishment to Helheim.",
      "The battle lasts for 4 hours. Time is a river, and yours is running dry."
    ],
    phases: [
      {
        number: "I",
        title: "The Midgard Trials",
        description: "Solve 5 algorithmic challenges to qualify for the next realm."
      },
      {
        number: "II",
        title: "Asgard's Gate",
        description: "Competitive optimization. Speed and memory efficiency are your shield."
      },
      {
        number: "III",
        title: "Ragnarok",
        description: "The final showdown. Only the top 5 teams face the World Serpent."
      }
    ],
    registrationDeadline: "2 days, 14 hours"
  },
  {
    id: 2,
    title: "Thor's Hammer-Bot",
    description: "Forge metal warriors and pit them in a battle of torque and titanium within the electrified combat arena.",
    quote: "In the forge of Hephaestus, only the strongest metal survives. Build your mechanical warrior and let thunder strike your enemies down.",
    icon: "precision_manufacturing",
    prize: "75,000 Gold Credits",
    rules: [
      "Teams of 3-4 warriors required. Each member must contribute to the forge.",
      "Robot weight must not exceed 25kg. Odin's scales never lie.",
      "Autonomous and remote-controlled modes both required. Your creation must obey your will.",
      "Combat rounds last 3 minutes. Victory by knockout, push-out, or judges' decree."
    ],
    phases: [
      {
        number: "I",
        title: "The Forging",
        description: "2 weeks to design and build your mechanical champion."
      },
      {
        number: "II",
        title: "Trials by Combat",
        description: "Round-robin elimination. Prove your bot's superiority."
      },
      {
        number: "III",
        title: "Thunder Dome",
        description: "Final championship battle. Only one shall claim Mjolnir."
      }
    ],
    registrationDeadline: "1 week, 3 days"
  },
  {
    id: 3,
    title: "Valhalla Arena",
    description: "Only the elite will ascend. Battle through the ranks of Midgard's best gamers in the ultimate E-Sports showdown.",
    quote: "In the halls of Valhalla, only champions feast. Prove your reflexes are faster than Heimdall's sight and claim eternal glory.",
    icon: "sports_esports",
    prize: "100,000 Gold Credits",
    rules: [
      "Solo warriors or duos permitted depending on game mode. Choose your path wisely.",
      "Multiple game titles will be contested. Master them all or specialize in one.",
      "Fair play enforced by the All-Father. Cheating results in permanent exile.",
      "Tournament format: Swiss system followed by single elimination bracket."
    ],
    phases: [
      {
        number: "I",
        title: "Qualifying Rounds",
        description: "Online qualifiers to determine the worthy 32."
      },
      {
        number: "II",
        title: "The Bifrost Bracket",
        description: "On-site tournament. Best-of-3 matches until semifinals."
      },
      {
        number: "III",
        title: "Eternal Glory",
        description: "Grand finals. Best-of-5. Winner takes all."
      }
    ],
    registrationDeadline: "5 days, 8 hours"
  },
  {
    id: 4,
    title: "Loki's Logic Maze",
    description: "A labyrinth of trickery and traps. Bypass the Trickster God's security systems to claim the prize.",
    quote: "Only the cunning survive in Loki's domain. Break through the veils of encryption and show us your mastery of shadows.",
    icon: "security",
    prize: "40,000 Gold Credits",
    rules: [
      "Solo or duo teams permitted. Trust no one, not even your partner.",
      "Capture The Flag style challenges across multiple difficulty tiers.",
      "Ethical hacking principles must be followed. This is a test of skill, not malice.",
      "6-hour time limit. Every second counts in the realm of trickery."
    ],
    phases: [
      {
        number: "I",
        title: "The Outer Gates",
        description: "Web vulnerabilities and basic cryptography challenges."
      },
      {
        number: "II",
        title: "The Inner Sanctum",
        description: "Binary exploitation, reverse engineering, and forensics."
      },
      {
        number: "III",
        title: "Loki's Throne",
        description: "The ultimate challenge. Only the master tricksters may enter."
      }
    ],
    registrationDeadline: "3 days, 6 hours"
  },
  {
    id: 5,
    title: "Heimdall's Watch",
    description: "Train models to see all and know all. Build an AI capable of guarding the realm against unseen threats.",
    quote: "Heimdall sees all across the nine realms. Train your model to match his vision and defend Asgard from the forces of chaos.",
    icon: "visibility",
    prize: "60,000 Gold Credits",
    rules: [
      "Teams of 2-3 data scientists and ML engineers required.",
      "Pre-approved datasets only. The Norns have prepared your training data.",
      "Models must achieve minimum 85% accuracy on validation set.",
      "Final evaluation on hidden test set. No data leakage permitted."
    ],
    phases: [
      {
        number: "I",
        title: "Data Gathering",
        description: "Explore the dataset and understand the realm you must protect."
      },
      {
        number: "II",
        title: "Model Training",
        description: "48-hour sprint to train your guardian AI."
      },
      {
        number: "III",
        title: "The Final Test",
        description: "Live demonstration and evaluation before the gods."
      }
    ],
    registrationDeadline: "1 week, 2 days"
  },
  {
    id: 6,
    title: "Freya's Design Loom",
    description: "Weave together beauty and functionality. Create the UI/UX that will guide the gods through the digital age.",
    quote: "Beauty without purpose is empty. Function without elegance is crude. Freya demands both. Weave your masterpiece on the divine loom.",
    icon: "palette",
    prize: "30,000 Gold Credits",
    rules: [
      "Solo designers only. This is your vision, your canvas.",
      "24-hour design sprint. Your creativity is your only weapon.",
      "Design system must include mobile and desktop layouts.",
      "Presentation to panel of judges required. Your story matters as much as your design."
    ],
    phases: [
      {
        number: "I",
        title: "Discovery",
        description: "Problem statement revealed. Research and ideation phase."
      },
      {
        number: "II",
        title: "Creation",
        description: "Design sprint. Wireframes to high-fidelity mockups."
      },
      {
        number: "III",
        title: "Presentation",
        description: "Showcase your vision. Convince the gods of your design's worth."
      }
    ],
    registrationDeadline: "4 days, 12 hours"
  }
];
