import { motion } from 'motion/react';

export function SkeletonText({ width = 'w-full', height = 'h-4' }: { width?: string; height?: string }) {
  return (
    <motion.div
      className={`${width} ${height} bg-gray-200 dark:bg-gray-800 rounded-md`}
      animate={{ opacity: [0.6, 1, 0.6] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    />
  );
}

export function SkeletonCard() {
  return (
    <motion.div
      className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800"
      animate={{ opacity: [0.6, 1, 0.6] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    >
      <div className="space-y-4">
        <div className="h-48 bg-gray-200 dark:bg-gray-800 rounded-lg" />
        <SkeletonText />
        <SkeletonText width="w-3/4" />
        <SkeletonText width="w-1/2" height="h-3" />
      </div>
    </motion.div>
  );
}

export function SkeletonSection() {
  return (
    <motion.div
      className="space-y-6"
      animate={{ opacity: [0.6, 1, 0.6] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    >
      <SkeletonText width="w-1/3" height="h-8" />
      <div className="grid md:grid-cols-3 gap-6">
        {[...Array(3)].map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </motion.div>
  );
}

export function SkeletonImpact() {
  return (
    <div className="space-y-12">
      <SkeletonText width="w-1/3" height="h-8" />
      <div className="grid md:grid-cols-3 gap-12">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="text-center space-y-4"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <SkeletonText width="w-full" height="h-12" />
            <SkeletonText width="w-3/4" height="h-4" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
