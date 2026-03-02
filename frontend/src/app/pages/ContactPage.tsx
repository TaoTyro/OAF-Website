import { Footer } from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';
import { ContactForm } from '../components/ContactForm';

export function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="py-16">
        <ContactForm />
      </div>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
