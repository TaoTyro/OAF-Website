import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';
import { SuccessStories } from '../components/SuccessStories';

export function SuccessStoriesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <SuccessStories />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
