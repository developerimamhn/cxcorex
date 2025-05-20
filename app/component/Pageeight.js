'use client';


import React, { useEffect, useRef, useState  } from 'react';
import Image from 'next/image';
import image9 from './image/image9.png';
import imageone from './image/Ellipse 71.svg';
import imagetwo from './image/Ellipse 72.svg';
import imagethree from './image/Ellipse 73.svg';
import imagefore from './image/Ellipse 74.svg';
import imagefive from './image/Ellipse 75.svg';
import image10 from './image/Mask group.svg'
import image102 from './image/Group 27.svg';
import image13 from './image/Mask group-1.svg';
import image14 from './image/Mask group-2.svg';
import image15 from './image/Mask group-3.svg';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Pageeight = () => {
    const svgRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      svgRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: svgRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);


  const [hasGradientBorder, setHasGradientBorder] = useState(false);
  const inputRef = useRef(null);

  const toggleGradientBorder = () => {
    setHasGradientBorder(!hasGradientBorder);
    inputRef.current.focus();
  };

const teamMembers = [
    {
      image: imageone,
      name: 'Courtney Henry',
      title: 'Co-Founder',
      socialIcon: image10,
    },
    {
      image: imagetwo,
      name: 'Jane Doe',
      title: 'CEO',
      socialIcon: image102,
    },
    {
      image: imagethree,
      name: 'John Smith',
      title: 'CTO',
      socialIcon: image13,
    },
    {
      image: imagefore,
      name: 'Emily Johnson',
      title: 'Lead Designer',
      socialIcon: image14,
    },
    {
      image: imagefive,
      name: 'Michael Brown',
      title: 'Lead Developer',
      socialIcon: image15,
    },
  ];

  
    return (
        <div className='py-[50px] sm:py-[70px] md:py-[90px] lg:py-[120px] xl:py-[160px] 2xl:py-[190px]'>
          <div className='container mx-auto relative sm:px-0 px-6'>
            <div className='sm:px-[22%] px-6'>
              <h2 className='diasdtasclaroad text-[20px] sm:text-[24px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[48px] text-center'>Our Team</h2>
              <div className='cosplaformions text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[22px] text-center pt-[13px] sm:pt-[14px] md:pt-[15px] lg:pt-[16px] xl:pt-[20px] 2xl:pt-[24px]'>Charting our path toward future milestones and innovations.</div>
            </div>
            <div
              className="mt-[32px] sm:mt-[36px] md:mt-[40px] lg:mt-[48px] xl:mt-[64px] 2xl:mt-[80px] grid grid-cols-3 lg:grid-cols-5 gap-[13px] sm:gap-[14px] md:gap-[15px] lg:gap-[16px] xl:gap-[20px] 2xl:gap-[24px]"
            >
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center flex-col"
                >
                  <Image src={member.image} alt={`${member.name}'s profile`} />
                  <h3
                    className="courtnharss text-[14px] sm:text-[15px] md:text-[16px] lg:text-[20px] xl:text-[24px] 2xl:text-[32px] pt-[14px] sm:pt-[15px] md:pt-[16px] lg:pt-[20px] xl:pt-[24px] 2xl:pt-[32px] text-center"
                  >
                    {member.name}
                  </h3>
                  <p
                    className="dixfofosna text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] pt-[11px] sm:pt-[12px] md:pt-[13px] lg:pt-[14px] xl:pt-[15px] 2xl:pt-[16px] text-center pb-[16px] sm:pb-[20px] md:pb-[24px] lg:pb-[32px] xl:pb-[36px] 2xl:pb-[40px]"
                  >
                    {member.title}
                  </p>
                  <Image
                    className="h-[12px] sm:h-[13px] md:h-[14px] lg:h-[15px] xl:h-[16px] 2xl:h-[20px]"
                    src={member.socialIcon}
                    alt={`${member.name}'s social icon`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
    );
};

export default Pageeight;