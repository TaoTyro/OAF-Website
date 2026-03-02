import { Footer } from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';
import { MissionSnapshot } from '../components/MissionSnapshot';

export function OurMissionPage() {
  return (
    <div className="min-h-screen bg-white">
      <MissionSnapshot />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
