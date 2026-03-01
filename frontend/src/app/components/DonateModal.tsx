import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Heart, 
  MessageCircle, 
  ArrowRight, 
  X, 
  Calendar, 
  MapPin, 
  BookOpen, 
  Droplet, 
  Users, 
  Target,
  ChevronRight,
  AlertCircle,
  CheckCircle,
  Phone,
  Mail,
  Globe,
  Award,
  Clock,
  Info,
  Sparkles,
  Shield,
  HandHeart
} from 'lucide-react';

// Brand Color - Single consistent color
const brandColor = "#5AAFD1";

// Student Data
const students = [
  {
    id: 1,
    name: "Jane Mwale",
    age: 19,
    location: "Mzimba, Malawi",
    school: "Mzuzu University", // Placeholder school name
    image: "/images/students/student7.jpeg", // Placeholder path
    problem: "Jane lost both parents to malaria in 2020. She lives with her elderly grandmother and struggles to afford school fees and basic necessities.",
    amountNeeded: 450,
    amountRaised: 275,
    story: "Jane is a bright student who dreams of becoming a teacher. Despite her circumstances, she ranks in the top 5 of her class. Her grandmother, aged 72, sells vegetables at the local market but cannot afford Jane's secondary school fees. Your support would cover her school fees, uniform, and learning materials for the next academic year.",
    needs: [
      "School fees: MWK200 per term",
      "Uniform and shoes: MWK85",
      "Books and supplies: MWK75",
      "Nutrition support: MWK90"
    ],
    year: "2",
    favoriteSubject: "Mathematics"
  },
  {
    id: 2,
    name: "Chikumbutso Banda",
    age: 26,
    location: "Mzuzu, Malawi",
    school: "Mzuzu University",
    image: "/images/students/student1.jpeg", // Placeholder path
    problem: "Chikumbutso's father abandoned the family, and his mother struggles with illness. He often misses school to care for his younger siblings.",
    amountNeeded: 650,
    amountRaised: 320,
    story: "Chikumbutso is the eldest of four children. His mother's HIV-positive status requires regular clinic visits, and Chikumbutso often takes on the role of caretaker. Despite these challenges, he maintains excellent grades and is the captain of the school's football team. Support would cover his school fees, transportation to school, and help his family with basic needs.",
    needs: [
      "School fees: MWK300 per term",
      "Transportation: MWK120",
      "Family food support: MWK150",
      "School supplies: MWK80"
    ],
    year: "2",
    favoriteSubject: "Science"
  },
  {
    id: 3,
    name: "Bernadettah Phiri",
    age: 22,
    location: "Lilongwe, Malawi",
    school: "Mzuzu University",
    image: "/images/students/student2.jpeg", // Placeholder path
    problem: "Bernadettah was orphaned at age 8 and now lives in a child-headed household with her two younger siblings.",
    amountNeeded: 380,
    amountRaised: 150,
    story: "Bernadettah became the head of her household at just 10 years old when her grandmother passed away. She wakes at 4 AM daily to prepare her siblings for school before walking 3 kilometers to her own school. Despite these hardships, she dreams of becoming a nurse to help others in her community. Your support would provide school fees, food, and basic necessities for her family.",
    needs: [
      "School fees: MWK180 per term",
      "Food for family: MWK120",
      "Clothing and blankets: MWK50",
      "School supplies: MWK30"
    ],
    year: "3",
    favoriteSubject: "Science"
  },
  {
    id: 4,
    name: "Archangel Chagwa",
    age: 19,
    location: "Blantyre, Malawi",
    school: "Mzuzu University",
    image: "/images/students/student3.jpeg", // Placeholder path
    problem: "Archangel's father is disabled and cannot work. His mother passed away last year, leaving the family in financial crisis.",
    amountNeeded: 520,
    amountRaised: 210,
    story: "Archangel helps support his family by working at a local market on weekends. His father's disability means he cannot contribute financially, and Archangel often goes without meals to ensure his younger siblings eat. He is an exceptional student who wants to study engineering at the university. Support would cover his school fees and help stabilize his family's situation.",
    needs: [
      "School fees: MWK250 per term",
      "Family support: MWK150",
      "School materials: MWK70",
      "Uniform: MWK50"
    ],
    year: "3",
    favoriteSubject: "Mathematics"
  },
  {
    id: 5,
    name: "Chimwemwe Duwa",
    age: 19,
    location: "Karonga, Malawi",
    school: "Mzuzu University",
    image: "/images/students/student5.jpeg", // Placeholder path
    problem: "Chimwemwe is visually impaired and requires special learning materials that her guardians cannot afford.",
    amountNeeded: 420,
    amountRaised: 180,
    story: "Chimwemwe was born with visual impairment, but she hasn't let that stop her love for learning. She reads Braille and is one of the top students in her class. Her guardians are farmers who struggle to afford the specialized materials she needs. Your support would provide Braille books, a white cane, and school fees for the upcoming year.",
    needs: [
      "Braille books and materials: MWK180",
      "School fees: MWK150",
      "White cane and mobility training: MWK60",
      "Nutrition support: MWK30"
    ],
    year: "4",
    favoriteSubject: "Reading"
  },
  {
    id: 6,
    name: "Ivy Chrispin",
    age: 23,
    location: "Mchinji, Malawi",
    school: "Mzuzu University",
    image: "/images/students/student6.jpeg", // Placeholder path
    problem: "Ivy was forced into child labor after her father's death but has returned to school with community support.",
    amountNeeded: 480,
    amountRaised: 290,
    story: "After her father passed away, Ivy was sent to work at a tobacco farm to help support her family. Community members helped rescue her and return her to school. She is now catching up on lost time and dreams of becoming a lawyer to protect children's rights. Support would cover her school fees, catch-up tutoring, and basic needs.",
    needs: [
      "School fees: MKW200 per term",
      "Catch-up tutoring: MWK120",
      "School supplies: MWK80",
      "Nutrition support: MWK80"
    ],
    year: "3",
    favoriteSubject: "English"
  }
];

// Calculate percentage
const calculatePercentage = (raised: number, needed: number) => {
  return Math.round((raised / needed) * 100);
};

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

// Student Card Component (Extracted to avoid hook violations)
interface StudentCardProps {
  student: typeof students[0];
  onReadMore: (student: typeof students[0]) => void;
  onDonate: (student: typeof students[0], message: string) => void;
}

function StudentCard({ student, onReadMore, onDonate }: StudentCardProps) {
  const [cardRef, cardInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const percentage = calculatePercentage(student.amountRaised, student.amountNeeded);

  return (
    <motion.article
      ref={cardRef}
      className="group bg-white border border-gray-100 hover:border-gray-200 transition-colors"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        <img
          src={student.image}
          alt={student.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
        {/* Fallback gradient if image fails to load */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#5AAFD1] to-[#3A8FB1] flex items-center justify-center" style={{ display: 'none' }}>
          <div className="text-center text-white">
            <Heart className="w-8 h-8 mx-auto mb-2" />
            <p className="text-sm">Student Image</p>
          </div>
        </div>
        
        {/* Age Badge */}
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-medium text-gray-700">
          Age {student.age}
        </div>
        
        {/* Location Badge */}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-medium text-gray-700 flex items-center gap-1">
          <MapPin className="w-3 h-3" style={{ color: brandColor }} />
          {student.location}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Name and School */}
        <h2 className="text-xl font-bold text-gray-900 mb-1">{student.name}</h2>
        <p className="text-sm text-gray-500 mb-4">{student.school}</p>

        {/* Problem Statement */}
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {student.problem}
        </p>

        {/* Funding Progress */}
        <div className="mb-4">
          <div className="flex justify-between items-center text-xs mb-1">
            <span className="text-gray-500">Progress</span>
            <span className="font-medium" style={{ color: brandColor }}>
              MWK{student.amountRaised} / MWK{student.amountNeeded}
            </span>
          </div>
          <div className="w-full h-1.5 bg-gray-100 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${percentage}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="h-full"
              style={{ backgroundColor: brandColor }}
            />
          </div>
          <p className="text-xs text-gray-400 mt-1">{percentage}% funded</p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between gap-3">
          <button
            onClick={() => onReadMore(student)}
            className="flex-1 px-3 py-2 border border-gray-200 text-gray-700 text-sm font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-1"
          >
            Read More
            <ChevronRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => onDonate(student, `Hello! I'm a donor interested in supporting ${student.name} (${student.age}) from ${student.location}. I've been redirected from orphans-of-africa.org and would like to contribute to their ${student.needs[0].toLowerCase()}. Please let me know how I can help!`)}
            className="flex-1 px-3 py-2 text-white text-sm font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-1"
            style={{ backgroundColor: brandColor }}
          >
            <Heart className="w-4 h-4" />
            Support
          </button>
        </div>
      </div>
    </motion.article>
  );
}

// Student Modal Component
interface StudentModalProps {
  student: typeof students[0];
  onClose: () => void;
  onDonate: (student: typeof students[0], message: string) => void;
}

function StudentModal({ student, onClose, onDonate }: StudentModalProps) {
  const [donationMessage, setDonationMessage] = useState(`I would like to support ${student.name} (${student.age} years old) from ${student.location}. I'd like to contribute to their ${student.needs[0].toLowerCase()}.`);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 z-[62] flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white max-w-3xl w-full max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/90 hover:bg-white rounded-full shadow-md transition-all"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        {/* Header Image */}
        <div className="relative h-64 bg-gray-200">
          <img
            src={student.image}
            alt={student.name}
            className="w-full h-full object-cover"
          />
          {/* Fallback gradient if image fails */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#5AAFD1] to-[#3A8FB1] flex items-center justify-center hidden">
            <div className="text-center text-white">
              <Heart className="w-12 h-12 mx-auto mb-2" />
              <p className="text-lg font-medium">{student.name}</p>
            </div>
          </div>
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Student name overlay */}
          <div className="absolute bottom-4 left-6 text-white">
            <h2 className="text-3xl font-bold mb-1">{student.name}</h2>
            <p className="text-white/90 flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              {student.location} • Age {student.age}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 mb-6 border-b border-gray-100 pb-6">
            <div className="text-center">
              <div className="text-sm text-gray-500 mb-1">School</div>
              <div className="font-medium text-gray-900 text-sm">{student.school}</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-gray-500 mb-1">Year</div>
              <div className="font-medium text-gray-900">{student.year}</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-gray-500 mb-1">Favorite Subject</div>
              <div className="font-medium text-gray-900">{student.favoriteSubject}</div>
            </div>
          </div>

          {/* Story */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <BookOpen className="w-5 h-5" style={{ color: brandColor }} />
              Their Story
            </h3>
            <p className="text-gray-700 leading-relaxed">{student.story}</p>
          </div>

          {/* Needs Breakdown */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <Target className="w-5 h-5" style={{ color: brandColor }} />
              What Your Support Covers
            </h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <ul className="space-y-2">
                {student.needs.map((need, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-700">
                    <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: brandColor }} />
                    <span>{need}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Funding Progress */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">Funding Progress</span>
              <span className="text-sm" style={{ color: brandColor }}>
                ${student.amountRaised} raised of ${student.amountNeeded} goal
              </span>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${calculatePercentage(student.amountRaised, student.amountNeeded)}%` }}
                transition={{ duration: 1, delay: 0.3 }}
                className="h-full"
                style={{ backgroundColor: brandColor }}
              />
            </div>
            <p className="text-xs text-gray-500 mt-2">
              {calculatePercentage(student.amountRaised, student.amountNeeded)}% funded
            </p>
          </div>

          {/* Donation Message */}
          <div className="mb-6">
            <label htmlFor="donationMessage" className="block text-sm font-medium text-gray-700 mb-2">
              Your Message (will be sent via WhatsApp)
            </label>
            <textarea
              id="donationMessage"
              rows={4}
              value={donationMessage}
              onChange={(e) => setDonationMessage(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5AAFD1] focus:border-transparent"
              placeholder="Write a message to accompany your donation..."
            />
          </div>

          {/* Donation Info Notice */}
          <div className="bg-blue-50 border-l-4 border-[#5AAFD1] p-4 mb-6">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-[#5AAFD1] mt-0.5" />
              <div>
                <p className="text-sm text-gray-700 font-medium mb-1">Payment Processing in Development</p>
                <p className="text-xs text-gray-600">
                  We're currently not receiving donations directly on our platform via VISA, PayPal, or other payment methods 
                  as this feature is still in development. To support {student.name}, click the WhatsApp button below to contact 
                  our team directly. We'll guide you through the donation process. Thank you for your generosity!
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => onDonate(student, donationMessage)}
              className="flex-1 px-6 py-3 bg-[#5AAFD1] text-white rounded-lg font-medium hover:bg-[#4A9FC1] transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Contact via WhatsApp
            </button>
            <button
              onClick={onClose}
              className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

interface SupportStudentPageProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export function SupportStudentPage({ isOpen = false, onClose }: SupportStudentPageProps) {
  const [selectedStudent, setSelectedStudent] = useState<typeof students[0] | null>(null);
  const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [footerRef, footerInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  // WhatsApp contact details
  const PHONE_NUMBER = '+265893474465';
  const WHATSAPP_LINK = `https://wa.me/${PHONE_NUMBER.replace(/\D/g, '')}`;

  const handleReadMore = (student: typeof students[0]) => {
    setSelectedStudent(student);
  };

  const handleDonateViaWhatsApp = (student: typeof students[0], message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`${WHATSAPP_LINK}?text=${encodedMessage}`, '_blank');
  };

  const closeModal = () => {
    setSelectedStudent(null);
  };

  // Return null if not open
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-white overflow-y-auto z-[60]">
      {/* Close Button - Top Right */}
      {onClose && (
        <button
          onClick={onClose}
          className="fixed top-6 right-6 z-[61] p-2 bg-white shadow-lg hover:shadow-xl rounded-full transition-all hover:bg-gray-100"
          aria-label="Close"
        >
          <X className="w-6 h-6 text-gray-700" />
        </button>
      )}
      
      {/* Hero Header Section with Background Image */}
      <div className="relative w-full h-96 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/funding.jpg')`,
          }}
        />
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-4000/70 via-blue-900/60 to-white/20" />
        
        {/* Header Content */}
        <div className="relative h-full flex flex-col items-center justify-center px-6" ref={headerRef}>
          {/* Brand accent line */}
          <motion.div 
            className="w-24 h-0.5 mb-8"
            style={{ backgroundColor: brandColor }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight text-center drop-shadow-lg">
            Support a Student
          </h1>
          
          <motion.p 
            className="text-xl text-white/90 text-center max-w-2xl drop-shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Your support transforms lives. Choose a student to sponsor and help them access education, 
            nutrition, and hope for a brighter future.
          </motion.p>
        </div>
      </div>

      {/* Content Section */}
      <section className="py-16 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">

          {/* Student Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
          >
            {students.map((student) => (
              <StudentCard
                key={student.id}
                student={student}
                onReadMore={handleReadMore}
                onDonate={handleDonateViaWhatsApp}
              />
            ))}
          </motion.div>

          {/* Payment Development Notice */}
          <motion.div
            ref={footerRef}
            initial={{ opacity: 0, y: 20 }}
            animate={footerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-32 max-w-3xl mx-auto text-center"
          >
            <div className="relative">
              <motion.div 
                className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-px"
                style={{ backgroundColor: brandColor }}
                initial={{ scaleX: 0 }}
                animate={footerInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
              
              <div className="bg-gray-50 p-8">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <AlertCircle className="w-5 h-5" style={{ color: brandColor }} />
                  <h3 className="text-lg font-semibold text-gray-900">Payment Processing in Development</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  We're currently not receiving donations directly on our platform using VISA, PayPal, 
                  or other payment methods as this feature is still in development. To support any of these 
                  students, please click the "Support" button or "Contact via WhatsApp" in their story to 
                  message our team directly. We'll guide you through the donation process.
                </p>
                <p className="text-sm text-gray-500 italic">
                  Thank you for having the spirit of donating and for your patience as we improve our platform!
                </p>
              </div>

              <motion.div 
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-px"
                style={{ backgroundColor: brandColor }}
                initial={{ scaleX: 0 }}
                animate={footerInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </div>

            {/* Contact Info */}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500">
              <a 
                href={`https://wa.me/${PHONE_NUMBER.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#5AAFD1] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp: {PHONE_NUMBER}
              </a>
              <a 
                href="mailto:donations@orphansofafrica21.org"
                className="flex items-center gap-2 hover:text-[#5AAFD1] transition-colors"
              >
                <Mail className="w-4 h-4" />
                donations@orphansofafrica21.org
              </a>
            </div>

            {/* Student Count */}
            <p className="text-xs text-gray-400 mt-12">
              {students.length} students currently waiting for sponsorship
            </p>
          </motion.div>

        </div>
      </section>

      {/* Student Modal */}
      {selectedStudent && (
        <StudentModal
          student={selectedStudent}
          onClose={closeModal}
          onDonate={handleDonateViaWhatsApp}
        />
      )}
    </div>
  );
}

// Export alias for backward compatibility
export { SupportStudentPage as DonateModal };