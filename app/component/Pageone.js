'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import image10 from './image/Mask group.svg';
import image102 from './image/Group 27.svg';
import image13 from './image/Mask group-1.svg';
import image14 from './image/Mask group-2.svg';
import image15 from './image/Mask group-3.svg';
import image16 from './image/Group 77.svg';

// Array of imported images
const images = [
  image10,
  image102,
  image13,
  image14,
  image15,
  image16,
];

const imageVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  exit: { opacity: 0, y: -20 },
};

export default function Pageone() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(6); // Default: 3 images for sm: and larger

  // Update itemsPerView based on screen size
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(3); // Mobile: 1 image
      } else {
        setItemsPerView(6); // sm: and larger: 3 images
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  // Auto-slide effect for all devices
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + itemsPerView >= images.length ? 0 : prevIndex + itemsPerView
      );
    }, 2000); // Auto-slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [itemsPerView]);

  // Calculate visible images based on current index and itemsPerView
  const visibleImages = images.slice(currentIndex, currentIndex + itemsPerView).concat(
    currentIndex + itemsPerView > images.length
      ? images.slice(0, (currentIndex + itemsPerView) % images.length)
      : []
  );

  return (
    <div className="">
      <div className="container mx-auto sm:px-0 px-6">
        <div className="relative w-full  z-[10]">
          <div className="flex items-center justify-between gap-[36px] sm:gap-[40px] md:gap-[48px] lg:gap-[64px] xl:gap-[96px]">
            <AnimatePresence initial={false} mode="popLayout">
              {visibleImages.map((src, index) => (
                <motion.div
                  key={`${currentIndex}-${index}`}
                  className={`relative w-full ${itemsPerView === 3 ? 'sm:w-1/3' : 'sm:w-full'} h-[24px] sm:h-[32px] md:h-[36px] lg:h-[40px] xl:h-[48px] 2xl:h-[58px] flex rounded-lg group`}
                  variants={imageVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ delay: index * 0.1 }}
                >
                  <Image
                    src={src}
                    alt={`Image ${currentIndex + index + 1}`}
                    fill
                    style={{ objectFit: 'contain' }}
                    className="rounded-lg transition-all duration-300 group-hover:brightness-110 group-hover:scale-105 w-full h-[24px] sm:h-[32px] md:h-[36px] lg:h-[40px] xl:h-[48px] 2xl:h-[58px]"
                    priority={index < 3}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}