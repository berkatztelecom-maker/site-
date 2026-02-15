
export interface Speaker {
  id: string;
  name: string;
  role: string;
  company: string;
  bio: string;
  image: string;
}

export interface Session {
  id: string;
  time: string;
  title: string;
  speakerId: string;
  description: string;
  track: 'Technical' | 'Business' | 'Future' | 'Workshop';
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
