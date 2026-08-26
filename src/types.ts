export interface Track {
  id: string;
  title: string;
  subtitle?: string;
  year: string;
  album: string;
  duration: string;
  spotifyUrl?: string;
  audioPreviewUrl?: string;
  description: string;
  instruments: string[];
  award?: string;
  lyricsExcerpt?: string;
  fullLyrics?: string[];
  theme: string;
}

export interface VideoItem {
  id: string;
  title: string;
  category: 'documentario' | 'clipe' | 'aovivo' | 'palestra';
  categoryLabel: string;
  duration: string;
  year: string;
  youtubeId: string;
  description: string;
  featured?: boolean;
}

export interface PhotoItem {
  id: string;
  title: string;
  category: 'palco' | 'educacao' | 'skate' | 'museu' | 'pampa';
  categoryLabel: string;
  caption: string;
  year: string;
  location: string;
  placeholderSvgType: 'portrait-stage' | 'skate-afropunk' | 'school-talk' | 'studio-mic' | 'pampa-crew' | 'lanceiros' | 'museu-hiphop';
}

export interface CredentialItem {
  id: string;
  title: string;
  institution: string;
  year: string;
  type: 'Graduação' | 'Extensão' | 'Certificação MinC' | 'Residência Cultural';
  hours?: string;
  documentTitle: string;
  description: string;
  badge: string;
}

export interface PillarItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  quote?: string;
  tags: string[];
  iconName: string;
}
