export interface FeatureCard {
  icon: string;
  title: string;
  description: string;
  link: string;
}

export interface NavigationLink {
  label: string;
  href: string;
}

export interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface EventCard {
  icon: string;
  title: string;
  category: string;
  difficulty: string;
  teamSize: string;
}
