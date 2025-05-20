'use client'


import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import logo from "./image/logo.png";


gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
    const [toggle, setToggle] = useState(false);
    const menuRef = useRef(null); 
    const menuButtonRef = useRef(null);
    const [scrolled, setScrolled] = useState(false);
  
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        (!menuButtonRef.current || !menuButtonRef.current.contains(event.target))
      ) {
        setToggle(false);
      }
    };
  
    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);
  
    const handleScroll = (e, sectionId) => {
      e.preventDefault();
      const section = document.getElementById(sectionId);
      if (section) {
        window.scrollTo({
          top: section.offsetTop - 50,
          behavior: "smooth",
        });
        setToggle(false);
      }
    };
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    useEffect(() => {
      // Example of animating elements when they come into view
      gsap.fromTo('.feature', 
        { opacity: 0, y: 50 }, 
        {
          opacity: 1,
          y: 0,
          stagger: 0.3,
          scrollTrigger: {
            trigger: '.feature',
            start: 'top 100%',
            end: 'bottom top',
            toggleActions: 'play none none none'
          }
        }
      );
  
      // Example of animating the button with scale and opacity
      gsap.fromTo('.buttonaudit-3', 
        { opacity: 0, scale: 0.8 }, 
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'ease-in-out',
          scrollTrigger: {
            trigger: '.buttonaudit-3',
            start: 'top 100%',
            end: 'bottom top',
            toggleActions: 'play none none none'
          }
        }
      );
    }, []);
  
    const [isTranslated, setIsTranslated] = useState(false);
  
    const handleClick = () => {
      setIsTranslated(true);
      setTimeout(() => {
        setIsTranslated(false);
      }, 200);
    };


    const iconRefs = useRef([]);

  useEffect(() => {
    // GSAP entrance animation for icons
    gsap.fromTo(
      iconRefs.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
      }
    );
  }, []);

  // Handle hover animation with GSAP
  const handleMouseEnter = (index) => {
    gsap.to(iconRefs.current[index], {
      scale: 1.2,
      rotate: 10,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = (index) => {
    gsap.to(iconRefs.current[index], {
      scale: 1,
      rotate: 0,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const socialLinks = [
    { href: 'https://twitter.com', icon: 'twitter' },
    { href: 'https://linkedin.com', icon: 'linkedin' },
    { href: 'https://facebook.com', icon: 'facebook' },
    { href: 'https://telegram.org', icon: 'telegram' },
  ];
  
    return (
        <div id='Support' className='pt-[32px] sm:pt-[36px] md:pt-[40px] lg:pt-[48px] xl:pt-[64px] 2xl:pt-[96px]'>
            <div className='w-full container mx-auto'>
                <div className='flex items-start justify-between sm:flex-row flex-col gap-[40px]  '>
                    <div className='grid sm:grid-cols-3 items-center w-full sm:items-start justify-center sm:justify-between gap-[36px] sm:gap-[40px] md:gap-[48px] lg:gap-[64px] xl:gap-[96px] 2xl:gap-[128px] h-full relative pb-[32px] sm:pb-[36px] md:pb-[40px] lg:pb-[48px] xl:pb-[64px] 2xl:pb-[77px] border-b-[1px] border-[#32343D]'>
                      <div className=''>
                        <Image className='sm:w-[50px] md:w-[60px] lg:w-[70px] xl:w-[90px] 2xl:w-[110px] w-[135px] mx-auto sm:mx-0' src={logo} alt="loading..."/>
                        <p className='privacypolicy text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[22px] mt-[13px] sm:mt-[14px] md:mt-[15px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[24px] md:pr-[20px] xl:pr-[30%] text-center sm:!text-left sm:px-0 px-[20%] !text-[#A2A1A8]'>Corex crypto surges, disrupting traditional financial systems.
                        </p>
                      </div>
                      <div className='flex justify-between items-center sm:items-start'>
                        <div className='flex items-center flex-col gap-[12px] sm:gap-[13px] md:gap-[14px] lg:gap-[15px] xl:gap-[16px] 2xl:gap-[20px] justify-center relative'>
                          <div className='flex items-start flex-col gap-[12px] sm:gap-[13px] md:gap-[14px] lg:gap-[15px] xl:gap-[16px] 2xl:gap-[20px] justify-center relative'>
                          <a className='privacypolicy text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px] !text-[#FDFCFF] '>Function</a>
                            <ul className='flex justify-start flex-col gap-[11px] sm:gap-[12px] md:gap-[13px] lg:gap-[14px] xl:gap-[15px] 2xl:gap-[16px] footeritesm figtree text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] opacity-50'>
                              <a className='privacypolicy duration-300 text-[#B3BEBF] hover:text-[#00C8FF] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] cursor-pointer'>Partner</a>
                              <a className='privacypolicy duration-300 text-[#B3BEBF] hover:text-[#00C8FF] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] cursor-pointer'>Social</a>
                            </ul>
                            </div>
                        </div> 
                        <div className='flex items-center sm:items-end flex-col gap-[14px] sm:gap-[15px] md:gap-[16px] lg:gap-[20px] xl:gap-[24px] 2xl:gap-[30px] justify-center relative'>
                          <div className='flex items-start flex-col gap-[12px] sm:gap-[13px] md:gap-[14px] lg:gap-[15px] xl:gap-[16px] 2xl:gap-[20px] justify-center relative'>
                          <a className='privacypolicy text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] !text-[#FDFCFF] '>Tokenomics</a>
                            <ul className='flex justify-start flex-col gap-[11px] sm:gap-[12px] md:gap-[13px] lg:gap-[14px] xl:gap-[15px] 2xl:gap-[16px] footeritesm figtree text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] opacity-50'>
                              <a className='privacypolicy duration-300 text-[#B3BEBF] hover:text-[#00C8FF] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] cursor-pointer'>Roadmap</a>
                              <a className='privacypolicy duration-300 text-[#B3BEBF] hover:text-[#00C8FF] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] cursor-pointer'>Team</a>
                            </ul> 
                            </div>
                        </div> 
                      </div>
                      <div className='col-span-1 flex items-center sm:items-end justify-center sm:justify-self-end'>
                      <button className='buttonauditelt cursor-pointer text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] flex items-center justify-center h-[35px] md:h-[40px] lg:h-[50px] xl:h-[60px] 2xl:h-[70px] px-[16px] sm:px-[20px] md:px-[24px] lg:px-[32px] xl:px-[36px] 2xl:px-[40px] group gap-[7.50px] '>
                          Explore Now <svg xmlns="http://www.w3.org/2000/svg" className='w-[13px] sm:w-[14px] md:w-[15px] lg:w-[16px] xl:w-[20px] 2xl:w-[24px] ' viewBox="0 0 24 24" fill="none">
                            <path d="M13.5 4.50012L21 12.0001M21 12.0001L13.5 19.5001M21 12.0001H3" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                      </button>
                    </div>
                    </div>
                    
                    
                </div>
                <div className='flex items-center sm:flex-row flex-col justify-center py-[13px] sm:py-[14px] md:py-[15px] lg:py-[16px] xl:py-[20px] 2xl:py-[24px]'>
                  <h3 className='privacypolicy text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] opacity-50'>@Copyright 2024 COREX. All Rights Reserved.</h3>
                </div>
            </div>
        </div>
    );
};

export default Footer;