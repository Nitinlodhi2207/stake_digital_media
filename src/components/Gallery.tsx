'use client';

import { useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { GalleryImage, galleryImages } from '@/lib/galleryImages';

type HeroRowLayout = 'full' | 'leftAccent' | 'rightAccent' | 'balanced';

type HeroRow = {
  layout: HeroRowLayout;
  images: GalleryImage[];
};

const HERO_COUNT = 8;
const CHUNK_SIZE = 5;

const buildHeroRows = (images: GalleryImage[]): HeroRow[] => {
  const patterns: Array<{ layout: HeroRowLayout; range: [number, number] }> = [
    { layout: 'full', range: [0, 1] },
    { layout: 'leftAccent', range: [1, 3] },
    { layout: 'full', range: [3, 4] },
    { layout: 'rightAccent', range: [4, 6] },
    { layout: 'balanced', range: [6, 8] },
  ];

  return patterns
    .map(({ layout, range }) => {
      const slice = images.slice(range[0], range[1]);
      if (slice.length === 0) return null;
      if (slice.length === 1 && layout !== 'full') {
        return { layout: 'full' as const, images: slice } satisfies HeroRow;
      }
      return { layout, images: slice } satisfies HeroRow;
    })
    .filter((row): row is HeroRow => Boolean(row));
};

const groupImages = (images: GalleryImage[], size: number) => {
  const groups: GalleryImage[][] = [];
  for (let index = 0; index < images.length; index += size) {
    groups.push(images.slice(index, index + size));
  }
  return groups;
};

const Gallery = () => {
  const [showAll, setShowAll] = useState(false);
  const scrollScopeRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: scrollScopeRef,
    offset: ['start start', 'end end'],
  });
  const scrollProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 26,
    mass: 0.55,
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -220]);
  const secondaryParallax = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const gradientOpacity = useTransform(scrollYProgress, [0, 0.45, 1], [0.85, 0.5, 0.2]);
  const accentScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const highlightRotation = useTransform(scrollYProgress, [0, 1], [0, 5]);

  const heroImages = useMemo(() => galleryImages.slice(0, HERO_COUNT), []);
  const remainingImages = useMemo(() => galleryImages.slice(HERO_COUNT), []);
  const heroRows = useMemo(() => buildHeroRows(heroImages), [heroImages]);
  const progressiveGroups = useMemo(
    () => groupImages(remainingImages, CHUNK_SIZE),
    [remainingImages],
  );

  let heroRenderIndex = -1;

  const renderImageFigure = (
    image: GalleryImage,
    emphasisClass: string,
    globalDelay: number,
    isHero = false,
  ) => {
    heroRenderIndex += isHero ? 1 : 0;
    const priority = isHero && heroRenderIndex < 4;

    return (
      <motion.figure
        key={image.src}
        className={`group relative overflow-hidden rounded-none md:rounded-[32px] bg-black/5 shadow-[0_32px_80px_-40px_rgba(15,23,42,0.75)] ${emphasisClass}`}
        initial={{ opacity: 0, y: 42, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ 
          duration: 1.2, 
          ease: [0.22, 0.61, 0.36, 1], 
          delay: globalDelay,
          scale: { duration: 1.4, ease: [0.16, 1, 0.3, 1] }
        }}
      >
        <div className="relative isolation-auto aspect-[16/9] overflow-hidden">
          <motion.div
            className="absolute inset-0 z-10 bg-gradient-to-br from-white/0 via-white/0 to-white/10 opacity-0"
            style={{ mixBlendMode: 'soft-light' }}
            whileHover={{ opacity: 0.9 }}
            transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
          />
          <motion.div
            className="absolute inset-0 z-0"
            initial={{ scale: 1.08 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: globalDelay + 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              priority={priority}
              placeholder="empty"
              quality={90}
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 75vw"
              className="h-full w-full object-cover"
              loading={priority ? 'eager' : 'lazy'}
            />
          </motion.div>
          <motion.div 
            className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-gray-900/25 via-gray-900/0 to-gray-900/5 opacity-0"
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
          />
        </div>
      </motion.figure>
    );
  };

  const renderHeroRow = (row: HeroRow, rowIndex: number) => {
    if (row.layout === 'full') {
      return (
        <motion.div key={`hero-row-${rowIndex}`} className="w-full">
          {renderImageFigure(row.images[0], 'w-full', rowIndex * 0.08, true)}
        </motion.div>
      );
    }

    const emphasisClasses = {
      leftAccent: ['md:flex-[0.66]', 'md:flex-[0.34]'],
      rightAccent: ['md:flex-[0.34]', 'md:flex-[0.66]'],
      balanced: row.images.length === 3 ? ['md:flex-[0.36]', 'md:flex-[0.28]', 'md:flex-[0.36]'] : ['md:flex-1', 'md:flex-1'],
    } as const;

    const layoutClasses = emphasisClasses[row.layout];

    return (
      <motion.div
        key={`hero-row-${rowIndex}`}
        className="flex flex-col gap-8 md:flex-row"
      >
        {row.images.map((image, index) =>
          renderImageFigure(
            image,
            `${layoutClasses[index] ?? 'md:flex-1'} w-full`,
            rowIndex * 0.1 + index * 0.06,
            true,
          ),
        )}
      </motion.div>
    );
  };

  return (
    <section
      ref={scrollScopeRef}
      className="relative overflow-hidden bg-gradient-to-b from-white via-white to-slate-50 py-16 md:py-24"
    >
      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-1 origin-left bg-gradient-to-r from-primary-sky via-primary-bright-green to-primary-deep-blue"
        style={{ scaleX: scrollProgress }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-x-[-20%] top-0 h-[420px] rounded-b-[48px] bg-gradient-to-b from-primary-sky/30 via-primary-deep-blue/15 to-transparent blur-2xl"
        style={{ opacity: gradientOpacity, y: parallaxY }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-[110%] -translate-x-1/2 rounded-[999px] bg-gradient-to-r from-primary-sky/25 via-primary-bright-green/25 to-transparent blur-3xl"
        style={{ y: secondaryParallax, scale: accentScale, rotate: highlightRotation }}
      />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          aria-hidden
          className="pointer-events-none absolute left-0 top-24 hidden h-[calc(100%-6rem)] w-px origin-top bg-gradient-to-b from-primary-sky/40 via-primary-bright-green/40 to-transparent md:block"
          style={{ scaleY: scrollProgress }}
        />
        <header className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <span className="inline-flex items-center rounded-full border border-primary-sky/30 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-primary-sky/90 shadow-sm">
            Portfolio
          </span>
          <h1 className="font-display text-4xl leading-tight text-secondary-dark md:text-6xl">
            Cinematic Stories, Crafted for the City Lights
          </h1>
          <p className="text-base text-secondary-dark/70 md:text-lg">
            A curated selection of our most immersive out-of-home canvases. Every frame is captured in native landscape to honour scale, clarity, and the atmosphere of the environment.
          </p>
        </header>

        <div className="flex flex-col gap-10 md:gap-14">
          {heroRows.map((row, index) => renderHeroRow(row, index))}
        </div>

        {!showAll && (
          <div className="flex flex-col items-center gap-6 pt-6">
            <motion.button
              type="button"
              onClick={() => setShowAll(true)}
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-primary-sky to-primary-deep-blue px-10 py-4 font-display text-sm font-semibold uppercase tracking-[0.24em] text-white shadow-[0_20px_45px_-20px_rgba(59,130,246,0.55)] transition-transform duration-500"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="absolute inset-0 translate-x-[-110%] bg-gradient-to-r from-white/0 via-white/30 to-white/0 opacity-0 transition-all duration-700 group-hover:translate-x-[110%] group-hover:opacity-100" />
              <span className="relative z-10 tracking-[0.28em]">View Complete Gallery</span>
            </motion.button>
            <p className="text-sm uppercase tracking-[0.32em] text-secondary-dark/50">
              35 Cinematic Frames
            </p>
          </div>
        )}

        <AnimatePresence>
          {showAll && (
            <motion.div
              className="flex flex-col gap-14"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              {progressiveGroups.map((group, groupIndex) => {
                const [feature, accentOne, accentTwo, accentThree, accentFour] = group;
                const baseDelay = groupIndex * 0.18;

                return (
                  <motion.div
                    key={`gallery-group-${groupIndex}`}
                    className="flex flex-col gap-10"
                    initial={{ opacity: 0, y: 64 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut', delay: baseDelay }}
                  >
                    {feature && renderImageFigure(feature, 'w-full', baseDelay + 0.02)}

                    {(accentOne || accentTwo) && (
                      <div className="flex flex-col gap-8 md:flex-row">
                        {accentOne &&
                          renderImageFigure(
                            accentOne,
                            `${groupIndex % 2 === 0 ? 'md:flex-[0.68]' : 'md:flex-[0.32]'} w-full`,
                            baseDelay + 0.08,
                          )}
                        {accentTwo &&
                          renderImageFigure(
                            accentTwo,
                            `${groupIndex % 2 === 0 ? 'md:flex-[0.32]' : 'md:flex-[0.68]'} w-full`,
                            baseDelay + 0.14,
                          )}
                      </div>
                    )}

                    {(accentThree || accentFour) && (
                      <div className="flex flex-col gap-8 md:flex-row">
                        {accentThree &&
                          renderImageFigure(
                            accentThree,
                            `${groupIndex % 2 === 0 ? 'md:flex-[0.42]' : 'md:flex-[0.58]'} w-full`,
                            baseDelay + 0.18,
                          )}
                        {accentFour &&
                          renderImageFigure(
                            accentFour,
                            `${groupIndex % 2 === 0 ? 'md:flex-[0.58]' : 'md:flex-[0.42]'} w-full`,
                            baseDelay + 0.24,
                          )}
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;
