import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "This organization changed my life. Thanks to their education program, I'm now in university studying to become a teacher.",
    author: "Amara K.",
    role: "Program Graduate"
  },
  {
    quote: "Seeing the joy on children's faces when they receive school supplies and nutritious meals is priceless. I'm proud to volunteer here.",
    author: "David M.",
    role: "Volunteer"
  },
  {
    quote: "Our community has been transformed. The support and care these children receive gives them real hope for the future.",
    author: "Grace O.",
    role: "Community Leader"
  }
];

export function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-green-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '2.5rem' }}>Stories of Hope</h2>
          <p className="text-gray-600 mt-2">Hear from our community</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <Quote 
                className="w-10 h-10 mb-4 opacity-20" 
                style={{ color: 'var(--primary-green)' }}
              />
              <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
              <div>
                <div style={{ fontFamily: 'Poppins, sans-serif' }}>{testimonial.author}</div>
                <div className="text-gray-500">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
