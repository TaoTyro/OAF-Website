import { lazy, Suspense, ComponentType, JSX } from 'react';
import { SkeletonSection, SkeletonImpact } from '../app/components/Skeleton';

interface LazyComponentOptions {
  fallback?: ComponentType;
}

export function lazyLoad<P extends object>(
  importFunc: () => Promise<{ default: ComponentType<P> }>,
  options?: LazyComponentOptions
): ComponentType<P> {
  const Component = lazy(importFunc);
  const Fallback = options?.fallback || SkeletonSection;
  
  return (props: P) => (
    <Suspense fallback={<Fallback />}>
      <Component {...props} />
    </Suspense>
  );
}

// Preset lazy loaders with specific fallbacks
export const lazyLoadWithImpactSkeleton = (
  importFunc: () => Promise<{ default: ComponentType }>
) => {
  const Component = lazy(importFunc);
  
  return () => (
    <Suspense fallback={<SkeletonImpact />}>
      <Component />
    </Suspense>
  );
};

export const lazyLoadWithSectionSkeleton = (
  importFunc: () => Promise<{ default: ComponentType }>
) => {
  const Component = lazy(importFunc);
  
  return () => (
    <Suspense fallback={<SkeletonSection />}>
      <Component />
    </Suspense>
  );
};
