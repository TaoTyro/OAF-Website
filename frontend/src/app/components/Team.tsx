import { Mail, Linkedin, Twitter } from 'lucide-react';

const teamMembers = [
  {
    name: 'Timothy Mwale',
    role: 'Executive Director',
    bio: 'With 10 years of experience in humanitarian work, Timothy leads our mission in Malawi and across Africa.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.0.3&q=80&w=400',
    email: 'sarah@orphansofafrica.org',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com'
  },
  {
    name: 'James Mutua',
    role: 'Programs Director',
    bio: 'James oversees all on-ground programs and community partnerships in Malawi and across Africa.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.0.3&q=80&w=400',
    email: 'james@orphansofafrica.org',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com'
  },
  {
    name: 'Amara Okafor',
    role: 'Finance & Operations',
    bio: 'Amara ensures transparency and proper management of all organizational resources.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.0.3&q=80&w=400',
    email: 'amara@orphansofafrica.org',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com'
  },
  {
    name: 'David Chen',
    role: 'Partnerships Lead',
    bio: 'David builds and maintains relationships with international organizations and donors.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.0.3&q=80&w=400',
    email: 'david@orphansofafrica.org',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com'
  }
];

export function Team() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8  bg-gradient-to-t from-blue-100 to-yellow-100 dark:from-gray-900 dark:to-gray-800" id="team">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 style={{ fontFamily: 'Poppins, sans-serif' }} className="text-4xl md:text-5xl font-bold text-blue-400 dark:text-white mb-4">
            Meet Our Team
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Dedicated professionals committed to making a difference
          </p>
        </div>

        <div className="grid dark:text-amber-50 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Image */}
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 style={{ fontFamily: 'Poppins, sans-serif' }} className="font-bold text-lg mb-1">
                  {member.name}
                </h3>
                <p
                  className="text-sm font-medium mb-3"
                  style={{ color: 'var(--primary-orange)' }}
                >
                  {member.role}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {member.bio}
                </p>

                {/* Social Links */}
                <div className="flex gap-3">
                  <a
                    href={`mailto:${member.email}`}
                    className="p-2 bg-white dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    title="Email"
                  >
                    <Mail className="w-4 h-4 text-red-400 hover:translate-0.5 transition-all " />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4 text-blue-600 hover:translate-0.5 transition-all " />
                  </a>
                  <a
                    href={member.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    title="Twitter"
                  >
                    <Twitter className="w-4 h-4 hover:translate-0.5 transition-all text-yellow-600" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
