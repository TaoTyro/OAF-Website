import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

interface Partner {
  id: number;
  name: string;
  logo: string;
  initials: string;
  tier: 'platinum' | 'gold' | 'silver';
  description: string;
}

const partners: Partner[] = [
  {
    id: 1,
    name: 'World Health Organization',
    logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiMwMDUxQkEiLz48dGV4dCB4PSI1MCIgeT0iNjAiIGZvbnQtc2l6ZT0iMzAiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+V0hPPC90ZXh0Pjwvc3ZnPg==',
    initials: 'WHO',
    tier: 'platinum',
    description: 'Global health leadership',
  },
  {
    id: 2,
    name: 'Save the Children',
    logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiNFQzEwMjMiLz48dGV4dCB4PSI1MCIgeT0iNjAiIGZvbnQtc2l6ZT0iMjQiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+U3RDPC90ZXh0Pjwvc3ZnPg==',
    initials: 'StC',
    tier: 'platinum',
    description: 'Child welfare advocacy',
  },
  {
    id: 3,
    name: 'UNICEF',
    logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiMwMDcxQzUiLz48dGV4dCB4PSI1MCIgeT0iNjAiIGZvbnQtc2l6ZT0iMjIiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+VU5JQ0VGPC90ZXh0Pjwvc3ZnPg==',
    initials: 'UN',
    tier: 'gold',
    description: 'Children rights champion',
  },
  {
    id: 4,
    name: 'World Vision',
    logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiNGRkEzMDAiLz48dGV4dCB4PSI1MCIgeT0iNjAiIGZvbnQtc2l6ZT0iMjYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+V1Y8L3RleHQ+PC9zdmc+',
    initials: 'WV',
    tier: 'gold',
    description: 'Global development partner',
  },
  {
    id: 5,
    name: 'Médecins Sans Frontières',
    logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiMwMDMzOTkiLz48dGV4dCB4PSI1MCIgeT0iNjAiIGZvbnQtc2l6ZT0iMTgiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+TVNGPC90ZXh0Pjwvc3ZnPg==',
    initials: 'MSF',
    tier: 'silver',
    description: 'Emergency healthcare',
  },
  {
    id: 6,
    name: 'International Red Cross',
    logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiNDQzAwMDAiLz48dGV4dCB4PSI1MCIgeT0iNjAiIGZvbnQtc2l6ZT0iMjAiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+SVJDPC90ZXh0Pjwvc3ZnPg==',
    initials: 'IRC',
    tier: 'silver',
    description: 'Humanitarian aid',
  },
  {
    id: 7,
    name: 'Oxfam International',
    logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiMwMDMzMzMiLz48dGV4dCB4PSI1MCIgeT0iNjAiIGZvbnQtc2l6ZT0iMjYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+T0k8L3RleHQ+PC9zdmc+',
    initials: 'OI',
    tier: 'gold',
    description: 'Poverty alleviation',
  },
  {
    id: 8,
    name: 'Global Fund',
    logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiNFNTAwMDAiLz48dGV4dCB4PSI1MCIgeT0iNjAiIGZvbnQtc2l6ZT0iMjQiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+R0Y8L3RleHQ+PC9zdmc+',
    initials: 'GF',
    tier: 'silver',
    description: 'Disease eradication',
  },
];

const getTierColor = (tier: string) => {
  switch (tier) {
    case 'platinum':
      return 'from-slate-400 to-slate-600';
    case 'gold':
      return 'from-yellow-400 to-amber-600';
    case 'silver':
      return 'from-gray-300 to-gray-500';
    default:
      return 'from-gray-400 to-gray-600';
  }
};

const getTierBgColor = (tier: string) => {
  switch (tier) {
    case 'platinum':
      return 'bg-slate-50 dark:bg-slate-900';
    case 'gold':
      return 'bg-yellow-50 dark:bg-yellow-900';
    case 'silver':
      return 'bg-gray-50 dark:bg-gray-800';
    default:
      return 'bg-gray-50 dark:bg-gray-800';
  }
};

export default function PartnersSponsors() {
  // Separate partners by tier
  const platinumPartners = partners.filter((p) => p.tier === 'platinum');
  const goldPartners = partners.filter((p) => p.tier === 'gold');
  const silverPartners = partners.filter((p) => p.tier === 'silver');

  // Wave animation variants - alternating left/right movement like cars in lanes
  const waveVariants = {
    hidden: (custom: number) => ({
      opacity: 0,
      x: custom % 2 === 0 ? -100 : 100,
    }),
    visible: (custom: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: custom * 0.1,
      },
    }),
    hover: {
      y: -10,
      scale: 1.08,
      transition: { duration: 0.3 },
    },
  };

  // Continuous wave motion (side to side like cars switching lanes)
  const continuousWave = (index: number) => ({
    x: index % 2 === 0 ? [0, 10, 0] : [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: 'reverse' as const,
    },
  });

  return (
    <section className="min-h-screen py-20 px-4  bg-gradient-to-t from-blue-100 to-yellow-100 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="w-16 h-16 bg-gradient-to-br from-blue-600 to-orange-600 rounded-full flex items-center justify-center"
            >
              <Award className="w-8 h-8 text-white" />
            </motion.div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent">
            Our Partners & Sponsors
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            We're grateful to our partners who share our vision for creating lasting change
          </p>
        </motion.div>

        {/* Platinum Partners */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Platinum Partners</h3>
            <p className="text-gray-600 dark:text-gray-400">Our most generous and committed partners</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {platinumPartners.map((partner, index) => (
              <motion.div
                key={partner.id}
                custom={index}
                variants={waveVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                animate={continuousWave(index)}
                viewport={{ once: false }}
                className={`${getTierBgColor(partner.tier)} p-8 rounded-xl shadow-xl transition-all duration-300 border-2 border-gradient-to-r from-slate-300 to-slate-500 dark:border-slate-600`}
              >
                <div className="flex items-center gap-6">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`w-24 h-24 rounded-lg bg-gradient-to-br ${getTierColor(partner.tier)} flex items-center justify-center flex-shrink-0 shadow-lg overflow-hidden`}
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-full h-full object-contain p-2"
                    />
                  </motion.div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                        {partner.name}
                      </h4>
                      <span className="px-3 py-1 bg-gradient-to-r from-slate-400 to-slate-600 text-white text-xs font-bold rounded-full">
                        PLATINUM
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">{partner.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Gold Partners */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Gold Partners</h3>
            <p className="text-gray-600 dark:text-gray-400">Dedicated supporters of our mission</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {goldPartners.map((partner, index) => (
              <motion.div
                key={partner.id}
                custom={index + platinumPartners.length}
                variants={waveVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                animate={continuousWave(index + platinumPartners.length)}
                viewport={{ once: false }}
                className={`${getTierBgColor(partner.tier)} p-6 rounded-xl shadow-lg transition-all duration-300 border-2 border-yellow-300 dark:border-yellow-700`}
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`w-20 h-20 rounded-lg bg-gradient-to-br ${getTierColor(partner.tier)} flex items-center justify-center shadow-lg overflow-hidden`}
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-full h-full object-contain p-1.5"
                    />
                  </motion.div>
                  <div>
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                        {partner.name}
                      </h4>
                      <span className="px-2 py-1 bg-gradient-to-r from-yellow-400 to-amber-600 text-white text-xs font-bold rounded-full">
                        GOLD
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{partner.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Silver Partners */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Silver Partners</h3>
            <p className="text-gray-600 dark:text-gray-400">Friends of Orphans of Africa</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-4">
            {silverPartners.map((partner, index) => (
              <motion.div
                key={partner.id}
                custom={index + platinumPartners.length + goldPartners.length}
                variants={waveVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                animate={continuousWave(index + platinumPartners.length + goldPartners.length)}
                viewport={{ once: false }}
                className={`${getTierBgColor(partner.tier)} p-4 rounded-lg shadow-md transition-all duration-300 border-2 border-gray-300 dark:border-gray-600`}
              >
                <div className="flex flex-col items-center text-center gap-3">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`w-16 h-16 rounded-lg bg-gradient-to-br ${getTierColor(partner.tier)} flex items-center justify-center shadow-md overflow-hidden`}
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-full h-full object-contain p-1"
                    />
                  </motion.div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-1">
                      {partner.name}
                    </h4>
                    <span className="px-2 py-0.5 bg-gradient-to-r from-gray-300 to-gray-500 text-gray-900 text-xs font-bold rounded-full inline-block">
                      SILVER
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-20 pt-12 border-t border-gray-300 dark:border-gray-700"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Interested in Partnership?</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            We welcome partnerships with organizations that share our vision. Let's work together to
            create meaningful change.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-orange-600 text-white rounded-lg font-bold hover:shadow-lg transition-all duration-300"
          >
            Become a Partner
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
