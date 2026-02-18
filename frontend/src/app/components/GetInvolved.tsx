import { HandHeart, DollarSign, Handshake } from 'lucide-react';

const ways = [
  {
    icon: HandHeart,
    title: 'Volunteer',
    description: 'Share your time and skills to make a direct impact in children\'s lives.',
    buttonText: 'Learn More',
    buttonStyle: 'outline' as const
  },
  {
    icon: DollarSign,
    title: 'Donate',
    description: 'Your financial support helps us reach more children with essential services.',
    buttonText: 'Donate Now',
    buttonStyle: 'primary' as const
  },
  {
    icon: Handshake,
    title: 'Partner',
    description: 'Join us as a corporate or community partner to expand our reach.',
    buttonText: 'Partner With Us',
    buttonStyle: 'outline' as const
  }
];

export function GetInvolved() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8  bg-gradient-to-br from-white via-blue-50 to-white dark:from-gray-900 dark:to-gray-800" id="get-involved">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 style={{ fontFamily: 'Poppins, sans-serif' }} className="text-4xl md:text-5xl font-bold text-blue-400 dark:text-white mb-4">Get Involved</h2>
          <p className="text-gray-600  mt-2">Be part of the change</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {ways.map((way, index) => (
            <div 
              key={index}
              className="text-center dark:hover:shadow-cyan-600 hover:translate-1 bg-white p-8 group dark:text-white  dark:bg-gray-800 rounded-xl shadow-lg  transition-all duration-300 overflow-hidden"
            >
              <way.icon 
                className="w-16 h-16 mx-auto mb-4" 
                style={{ color: 'var(--primary-blue)' }}
              />
              <h3 className="mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>{way.title}</h3>
              <p className="text-gray-500 mb-10">{way.description}</p>
              
              {way.buttonStyle === 'primary' ? (
                <button 
                  className="px-6 py-2 rounded-lg text-white transition-all hover:opacity-90 w-full"
                  style={{ backgroundColor: 'var(--primary-blue)' }}
                >
                  {way.buttonText}
                </button>
              ) : (
                <button 
                  className="px-6 py-2 rounded-lg border-2 transition-all hover:bg-orange-50 w-full"
                  style={{ 
                    borderColor: 'var(--primary-orange)', 
                    color: 'var(--primary-orange)' 
                  }}
                >
                  {way.buttonText}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
