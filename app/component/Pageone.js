// app/page.js
'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import image10 from './image/Mask group.svg'
import image102 from './image/Group 27.svg';
import image13 from './image/Mask group-1.svg';
import image14 from './image/Mask group-2.svg';
import image15 from './image/Mask group-3.svg';
import image16 from './image/Group 77.svg'; // Placeholder for 6th image, update as needed

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
};
export default function Pageone() {
  return (
    <div className="">
      <div className="container mx-auto">
        <div className="flex items-center justify-between  gap-[36px] sm:gap-[40px] md:gap-[48px] lg:gap-[64px] xl:gap-[96px]">
          {images.map((src, index) => (
            <motion.div
              key={index}
              className="relative w-full h-[24px] sm:h-[32px] md:h-[36px] lg:h-[40px] xl:h-[48px] 2xl:h-[58px] flex  rounded-lg  group"
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.1 }}
            >
              <Image
                src={src}
                alt={`Image ${index + 1}`}
                fill
                style={{ objectFit: 'contain' }} // Use 'contain' for SVGs to preserve aspect ratio
                className="rounded-lg transition-all duration-300 group-hover:brightness-110 group-hover:scale-105 w-full h-[24px] sm:h-[32px] md:h-[36px] lg:h-[40px] xl:h-[48px] 2xl:h-[58px]"
                priority={index < 3}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}