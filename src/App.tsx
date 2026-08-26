import React, { useState } from 'react';
import { HeaderNavbar } from './components/HeaderNavbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { DocumentaryFeatured } from './components/DocumentaryFeatured';
import { DiscographySection } from './components/DiscographySection';
import { AudiovisualSection } from './components/AudiovisualSection';
import { PhotoGallerySection } from './components/PhotoGallerySection';
import { CredentialsSection } from './components/CredentialsSection';
import { BookingContactSection } from './components/BookingContactSection';
import { Footer } from './components/Footer';
import { MediaModal } from './components/MediaModal';
import { Track, VideoItem, PhotoItem } from './types';

export default function App() {
  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'lyrics' | 'video' | 'photo' | null>(null);
  const [selectedTrack, setSelectedTrack] = useState<Track | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);

  const handleOpenLyrics = (track: Track) => {
    setSelectedTrack(track);
    setModalType('lyrics');
    setModalOpen(true);
  };

  const handleOpenVideo = (video: VideoItem) => {
    setSelectedVideo(video);
    setModalType('video');
    setModalOpen(true);
  };

  const handleOpenPhoto = (photo: PhotoItem) => {
    setSelectedPhoto(photo);
    setModalType('photo');
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setModalType(null);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-zinc-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-black">
      {/* Top Navbar */}
      <HeaderNavbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Stage */}
        <HeroSection />

        {/* Trajetória & Raízes */}
        <AboutSection />

        {/* Destaque Especial: Documentário Hip Hop nas Escolas */}
        <DocumentaryFeatured />

        {/* Discografia & EP Sobrevivendo (2024) com Spotify Embed */}
        <DiscographySection
          onOpenLyrics={handleOpenLyrics}
        />

        {/* Audiovisual & Vídeos Musicais */}
        <AudiovisualSection
          onSelectVideo={handleOpenVideo}
        />

        {/* Galeria de Fotos & Momentos */}
        <PhotoGallerySection
          onSelectPhoto={handleOpenPhoto}
        />

        {/* Formação Acadêmica, MinC & Credenciais */}
        <CredentialsSection />

        {/* Contato Dinâmico & Agendamento */}
        <BookingContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Media Modal */}
      <MediaModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        type={modalType}
        trackData={selectedTrack}
        videoData={selectedVideo}
        photoData={selectedPhoto}
      />
    </div>
  );
}
