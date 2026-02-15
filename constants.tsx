
import { Speaker, Session, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Speakers', href: '#speakers' },
  { label: 'Agenda', href: '#agenda' },
  { label: 'Venue', href: '#venue' },
  { label: 'Register', href: '#register' },
];

export const SPEAKERS: Speaker[] = [
  {
    id: '1',
    name: 'Dr. Elena Rodriguez',
    role: 'Head of AI Research',
    company: 'Neural Nexus',
    bio: 'Pioneer in ethical AI frameworks and large-scale language model governance.',
    image: 'https://picsum.photos/seed/elena/400/400',
  },
  {
    id: '2',
    name: 'Marcus Chen',
    role: 'Chief Sustainability Officer',
    company: 'EcoSystem Dynamics',
    bio: 'Architect of the world\'s first zero-carbon industrial supply chain.',
    image: 'https://picsum.photos/seed/marcus/400/400',
  },
  {
    id: '3',
    name: 'Sarah Jenkins',
    role: 'Quantum Systems Lead',
    company: 'Q-Bit Solutions',
    bio: 'Developer of next-gen quantum encryption protocols for global finance.',
    image: 'https://picsum.photos/seed/sarah/400/400',
  },
  {
    id: '4',
    name: 'Jean-Luc Dubois',
    role: 'Director of Policy',
    company: 'International Tech Council',
    bio: 'Advisor to European governments on digital transformation and privacy laws.',
    image: 'https://picsum.photos/seed/jean/400/400',
  },
];

export const AGENDA: Session[] = [
  {
    id: 's1',
    time: '09:00 AM',
    title: 'Keynote: The Ethics of Artificial Intelligence',
    speakerId: '1',
    description: 'A deep dive into how we can build AI that serves humanity while respecting individual privacy.',
    track: 'Technical',
  },
  {
    id: 's2',
    time: '11:00 AM',
    title: 'Sustainability in the Modern Enterprise',
    speakerId: '2',
    description: 'Case studies of major corporations successfully transitioning to renewable operations.',
    track: 'Business',
  },
  {
    id: 's3',
    time: '02:00 PM',
    title: 'Quantum Advantage: Are We There Yet?',
    speakerId: '3',
    description: 'Exploring the current state of quantum computing and real-world industrial applications.',
    track: 'Future',
  },
  {
    id: 's4',
    time: '04:00 PM',
    title: 'Global Tech Policy Workshop',
    speakerId: '4',
    description: 'An interactive session on navigating the complex web of international tech regulations.',
    track: 'Workshop',
  },
];
