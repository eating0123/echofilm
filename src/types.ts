export type ActivePage = 'portal' | 'map' | 'details' | 'push' | 'postcard' | 'timeline' | 'report';

export interface LocationBubble {
  city: string;
  count: number;
  bubblesize: number;
  colorClass: string;
  bgColorClass: string;
  tcColorClass: string;
  icon: string;
  top: string;
  left: string;
  delay: string;
  cityImageUrl?: string;
}

export interface MemoryCard {
  id: string;
  location: string;
  song_title: string;
  artist: string;
  date: string;
  coverUrl: string;
  weather: string;
  city: string;
}

export interface DetailSong {
  title: string;
  artist: string;
  repeats: number;
  coverUrl: string;
}

export interface PostcardTemplate {
  id: string;
  name: string;
  gradient: string;
  imageUrl: string;
}

export interface TimelineNode {
  day: number;
  stageName: string;
  title: string;
  icon: string;
  aiDescription: string;
  songs: string[];
  weather: string;
  infoLabel?: string;
  colorHex: string;
}

export interface ReportSlide {
  id: number;
  title: string;
  subtitle: string;
  content: string;
  bgColor: string;
  imageTheme: string;
  footerTag?: string;
  imageUrl: string;
}
