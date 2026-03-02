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
    name: "Yohane Fonitala",
    age: 20,
    location: "Blantyre, Malawi",
    school: "MUBAS", // Placeholder school name
    image: "/images/students/yohane.jpg", // Placeholder path
    problem: "Yohane lacks examination fees and learning materials, which puts his education at risk. He has a single mother and she's not working",
    amountNeeded: 400000,
    amountRaised: 0,
    story: "Yohane P Fonitala, a second year student at MUBAS persuing community development and management. I'm reaching out to ask for support to cover my examination fees which is MWK400,000 and purchasea smartphone to aid my studies. I have been working a piece jobs to fund my education for last semesters but this semester is getting tough, my single mother who is not working also relies on me , I'm determined to succeed but I'm need a help from well wishers. I'm facing financial difficulties and this makes me to lack exams fees, rentals and smartphone used to studies but priority is exams fees. Your contribution will make a big chapter to my life. Finally I'm saying that your support will be appreciated and remembered for the throughout of my life. My phone number 0992411217 and 0897599335. If there is need to discuss with my lectures and my mother doors are open ",
    needs: [
      "Exam fee: MWK400,000",
      "Smartphone: Any Amount towards this will be appreciated",
      "Rentals: Any Amount towards this will be appreciated"
    ],
    year: "2",
    character: "Hardworking and determined"
  },
  {
    id: 2,
    name: "Chisomo Namaja",
    age: 21,
    location: "Phalombe, Malawi",
    school: "Mzuzu University",
    image: "/images/students/chisomo.jpg", // Placeholder path
    problem: "Chikumbutso's father abandoned the family, and his mother struggles with illness. He often misses school to care for his younger siblings.",
    amountNeeded: 650000,
    amountRaised: 0,
    story: "Chisomo Namaja, a Level 3 student pursuing a Bachelor of Education in Sciences at Mzuzu University. I'm from Phalombe district, a community that's already facing economic challenges. Due to some personal struggles, including illness, I wasn't able to prepare adequately for my exams, which led to my withdrawal from Semester 2. My relatives back home in Phalombe are struggling to make ends meet, let alone support my education. They're finding it tough to source money, and I'm in urgent need of assistance to cover tuition fees and upkeep costs. I'm seeking help from well-wishers to support me through this tough time. Any contribution, big or small, will go a long way in helping me achieve my academic goals and repeat the semester.",
    needs: [
      "Tuition fee: MWK600,000, MWK325,000 per semester",
      "Upkeep costs: Any Amount towards this will be appreciated",
      "School supplies: Any Amount towards this will be appreciated",
      "Food and other essentials: Any Amount towards this will be appreciated"
    ],
    year: "3",
    character: "Hardworking and determined"
  },
  {
    id: 3,
    name: "Angelina",
    age: 20,
    location: "Lilongwe, Malawi",
    school: "Mzuzu University",
    image: "/images/students/angelina.jpeg", // Placeholder path
    problem: "Lacks tuition fees for the upcoming semester.",
    amountNeeded: 650000,
    amountRaised: 0,
    story: "Angelina made it to Mzuzu University… but surviving there is the hardest part. Her mother washes clothes in strangers’ homes to keep her in school, pieceworks and house to house works to sustain her. Day by day. Tuition was somehow paid for the previous semester. However, next semester remains uncertain. Angelina is not lazy. She is not careless. She is just in need of your help, and still fighting. No student should drop out because of hunger or rent. If you can help; with rent, food, or sponsorship, please reach out.",
    needs: [
      "Tuition fees: MWK325,000 per semester",
      "Rent: Any Amount towards this will be appreciated",
      "School supplies: Any Amount towards this will be appreciated",
      "Food and other essentials: Any Amount towards this will be appreciated"
    ],
    year: "Not disclosed",
    character: "Hardworking and determined"
  },
  {
    id: 4,
    name: "Stellah Luckius",
    age: 19,
    location: "Mwanza, Malawi",
    school: "Mzuzu University",
    image: "/images/students/stella.png", // Placeholder path
    problem: "Lacks tuition fees and basic necessities. Her parents are unemployed, and she has struggled to stay in school due to financial hardships.",
    amountNeeded: 650000,
    amountRaised: 0,
    story: "Stellah Luckius, from Mwanza, Golowa. Parents are not working, she's currently at Mzuzu University.  She dropped primary school then resumed due to lack of fees. Secondary too was hard for her. Form 2 there was no fees (MWK10,000), form 2-3 a certain NGO helped but later dropped her. In form 3-4 parents tried their best by doing piece works. BSc. Education Sciences ODL. Lacks tuition fees (MWK325,000.00) and other basic necessities. She's a hard working student and needs help to continue with her education.",
    needs: [
      "Tuition fees: MWK325,000 per semester",
      "Rent: Any Amount towards this will be appreciated",
      "School supplies: Any Amount towards this will be appreciated",
      "Food and other essentials: Any Amount towards this will be appreciated"
    ],
    year: "Not disclosed",
    character: "Hardworking and determined"
  },
  {
    id: 5,
    name: "Glory Mvula",
    age: 19,
    location: "Kasungu, Malawi",
    school: "Mzuzu University",
    image: "/images/students/glory.png", // Placeholder path
    problem: "Lacks tuition fees, rent, and food.",
    amountNeeded: 650000,
    amountRaised: 0,
    story: "Glory is from Kasungu and doing Bachelor of Education, Arts, ODL at Mzuzu University and in level 1. She lacks Tuition, Rent, Food.Her Mother prepares and sells local beer to support her studies. She is determined to graduate and support her family.",
    needs: [
      "Tuition fees: MWK325,000 per semester",
      "Rent: Any Amount towards this will be appreciated",
      "School supplies: Any Amount towards this will be appreciated",
      "Food and other essentials: Any Amount towards this will be appreciated"
    ],
    year: "1",
    character: "Hardworking and determined"
  },
  {
    id: 6,
    name: "Patience Nyirenda",
    age: 20,
    location: "Lilongwe, Malawi",
    school: "Mzuzu University",
    image: "/images/students/patience.png", // Placeholder path
    problem: "In need of Tuition fees, rent, food and other basic necessities.",
    amountNeeded: 650000,
    amountRaised: 0,
    story: "Patience is doing BSc. Library and information Sciencies at Mzuzu University. She lacks Tuition Fees, Food, Rentals, Groceries. She's currently in Level 1.",
    needs: [
      "Tuition fees: MWK325,000 per semester",
      "Rent: Any Amount towards this will be appreciated",
      "School supplies: Any Amount towards this will be appreciated",
      "Food and other essentials: Any Amount towards this will be appreciated"
    ],
    year: "1",
    character: "Hardworking and determined"
  },
  {
    id: 7,
    name: "Gersome Alickson",
    age: 20,
    location: "Ntchisi, Malawi",
    school: "Mzuzu University",
    image: "/images/students/geresom.png", // Placeholder path
    problem: "In need of Tuition fees, rent, food and other basic necessities.",
    amountNeeded: 650000,
    amountRaised: 0,
    story: "Geresome lacks Tuition Fees, Food, Rentals, Groceries. He has a single parent, and his Mother can't afford to sustain him",
    needs: [
      "Tuition fees: MWK325,000 per semester",
      "Rent: Any Amount towards this will be appreciated",
      "School supplies: Any Amount towards this will be appreciated",
      "Food and other essentials: Any Amount towards this will be appreciated"
    ],
    year: "Not disclosed",
    character: "Hardworking and determined"
  },
  {
    id: 6,
    name: "Getrude and her brother Phiri",
    age: 20,
    location: "Mzimba, Malawi",
    school: "Mzuzu University",
    image: "/images/students/getrude&brother.jpeg", // Placeholder path
    problem: "They both lack Tuition fees, Laptops, Smart phones, rent, food and other basic necessities.",
    amountNeeded: 650000,
    amountRaised: 0,
    story: "Getrude is pursuing a Degree in History and Heritage Studies and her brother. They both lack tuition fees, laptops, smartphones, food, rentals and other basics. They're both in level one",
    needs: [
      "Tuition fees: MWK325,000 per semester",
      "Rent: MWK85,000. MWK45000 for Getrude and MWK40000 for her brother.",
      "School supplies: Any Amount towards this will be appreciated",
      "Food and other essentials: Any Amount towards this will be appreciated"
    ],
    year: "1",
    character: "Hardworking and determined"
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
  const [donationMessage, setDonationMessage] = useState(`Hello I'm a donor. I would like to support ${student.name} (${student.age} years old) from ${student.location}. I'd like to contribute to their ${student.needs[0].toLowerCase()}. I've been redirected from orphans-of-africa.org.`);

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
              <div className="text-sm text-gray-500 mb-1">Character</div>
              <div className="font-medium text-gray-900">{student.character}</div>
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
                MWK{student.amountRaised} raised of MWK{student.amountNeeded} goal
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
              className="flex-1 px-6 py-3 bg-gradient-to-r from-green-500 to-[#22C55E] text-white rounded-lg font-semibold hover:shadow-2xl hover:-translate-y-1 transition-colors flex items-center justify-center gap-2"
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
  const PHONE_NUMBER = '+265886691492';
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
              
              <div className="bg-gray-50  p-8">
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
            </div>

            {/* Contact Info */}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500">
              <a 
                href={`https://wa.me/${PHONE_NUMBER.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-gradient-to-r from-green-500 to-[#22C55E] text-white rounded-lg font-semibold hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
              <a 
                href="mailto:mwale7410@gmail.com"
                className="px-8 py-3 bg-gradient-to-r from-[#F97316] to-orange-500 text-white rounded-lg font-semibold hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 cursor-pointer border-none"
              >
                <Mail className="w-4 h-4" />
                Send Email
              </a>
            </div>

            {/* Student Count */}
            <p className="text-xs text-gray-400 text-bold mt-12">
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