'use client';

import React, { useEffect, useRef,useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import slide1 from './image/476.svg';
import slide2 from './image/474.svg';
import slide3 from './image/475.svg';
import slide4 from './image/473.svg';
import slide5 from './image/478.svg';
import slide6 from './image/472.svg';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react'; 
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, HashNavigation, Autoplay } from 'swiper/modules';;



gsap.registerPlugin(ScrollTrigger);





const Pagethree = () => {
  const wrapperRef = useRef(null); // Outer container
  const gridItem1Ref = useRef(null); // First grid item (text content)
  const acquireRef = useRef(null); // Second grid item (image)

  useEffect(() => {
    // Create GSAP context for proper scoping and cleanup
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: '(min-width: 768px)',
        },
        (context) => {
          const { isDesktop } = context.conditions;

          if (isDesktop) {
            // Create a timeline for better control and sequencing
            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: wrapperRef.current,
                start: 'top 100%',
                end: 'bottom 100%', // Adjusted for smoother completion
                scrub: 0.8,
              },
            });

            // Main wrapper animation (left to right)
            tl.fromTo(
              wrapperRef.current,
              { x: -100, opacity: 0 },
              {
                x: 0,
                opacity: 1,
                duration: 2,
                ease: 'power3.out',
              },
              0 // Start at timeline's beginning
            );

            // First grid item (text content) animation (left to right)
            tl.fromTo(
              gridItem1Ref.current,
              { x: 150, opacity: 0, scale: 0.95 },
              {
                x: 0,
                opacity: 1,
                scale: 1,
                duration: 2,
                ease: 'power3.out',
              },
              0.1 // Slight stagger
            );

            // Second grid item (image) animation (faster right to left)
            tl.fromTo(
              acquireRef.current,
              { x: 50, opacity: 0, scale: 0.95 },
              {
                x: 0,
                opacity: 1,
                scale: 1,
                duration: 2, // Faster animation
                ease: 'power3.out',
              },
              0.25 // Stagger for visual hierarchy
            );
          }
        }
      );
    }, wrapperRef); // Scope animations to wrapperRef for React's strict mode

    // Cleanup GSAP context and animations
    return () => ctx.revert();
  }, []);

  
    return ( 
        <div id='Social' ref={wrapperRef} className='relative '>
            <svg className="h-full absolute bottom-[-22%] right-0 -z-[1] sm:block hidden" viewBox="0 0 1211 1977" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1641.03 841.449C1817.29 923.535 1690.66 1210.1 1695.13 1383.42C1699.6 1556.74 1719.31 1578.18 1662.49 1673.38C1605.67 1768.58 1531.85 1819.91 1422.39 1840.36C1312.93 1860.81 1225.21 1839.65 1137.08 1771.54C1048.95 1703.42 1059.36 1676.35 999.357 1513.41C939.355 1350.46 715.392 1129.4 849.074 989.406" stroke="white" stroke-opacity="0.03"/>
          <path d="M1629.37 862.103C1797.62 940.458 1676.74 1214 1681.01 1379.44C1685.27 1544.88 1704.09 1565.35 1649.85 1656.22C1595.61 1747.09 1525.15 1796.09 1420.67 1815.61C1316.18 1835.13 1232.45 1814.93 1148.33 1749.91C1064.2 1684.89 1074.14 1659.05 1016.86 1503.52C959.587 1347.98 745.804 1136.96 873.41 1003.33" stroke="white" stroke-opacity="0.03"/>
          <path d="M1617.71 882.758C1777.95 957.382 1662.82 1217.9 1666.88 1375.46C1670.95 1533.02 1688.86 1552.51 1637.21 1639.06C1585.56 1725.6 1518.45 1772.27 1418.94 1790.86C1319.43 1809.45 1239.69 1790.22 1159.57 1728.29C1079.45 1666.37 1088.91 1641.76 1034.37 1493.63C979.818 1345.5 776.215 1144.53 897.745 1017.26" stroke="white" stroke-opacity="0.03"/>
          <path d="M1606.05 903.412C1758.27 974.305 1648.9 1221.79 1652.76 1371.48C1656.62 1521.16 1673.64 1539.68 1624.57 1621.9C1575.5 1704.11 1511.75 1748.45 1417.22 1766.11C1322.68 1783.77 1246.93 1765.5 1170.81 1706.67C1094.7 1647.84 1103.69 1624.46 1051.87 1483.74C1000.05 1343.01 806.627 1152.09 922.08 1031.19" stroke="white" stroke-opacity="0.03"/>
          <path d="M1594.38 924.067C1738.6 991.228 1634.98 1225.69 1638.64 1367.5C1642.3 1509.3 1658.42 1526.85 1611.93 1604.74C1565.44 1682.63 1505.05 1724.63 1415.49 1741.36C1325.94 1758.09 1254.17 1740.78 1182.06 1685.05C1109.95 1629.32 1118.47 1607.17 1069.37 1473.85C1020.28 1340.53 837.039 1159.66 946.416 1045.12" stroke="white" stroke-opacity="0.03"/>
          <path d="M1582.72 944.721C1718.92 1008.15 1621.07 1229.59 1624.52 1363.52C1627.97 1497.44 1643.2 1514.01 1599.3 1587.58C1555.39 1661.14 1498.35 1700.81 1413.77 1716.61C1329.19 1732.41 1261.41 1716.06 1193.3 1663.43C1125.2 1610.79 1133.24 1589.87 1086.88 1463.96C1040.51 1338.05 867.451 1167.23 970.751 1059.05" stroke="white" stroke-opacity="0.03"/>
          <path d="M1571.06 965.376C1699.25 1025.07 1607.15 1233.49 1610.4 1359.54C1613.65 1485.59 1627.98 1501.18 1586.66 1570.42C1545.33 1639.65 1491.65 1676.99 1412.04 1691.86C1332.44 1706.73 1268.64 1691.34 1204.55 1641.8C1140.45 1592.26 1148.02 1572.58 1104.38 1454.07C1060.74 1335.57 897.863 1174.79 995.086 1072.98" stroke="white" stroke-opacity="0.03"/>
          <path d="M1559.4 986.03C1679.57 1042 1593.23 1237.38 1596.28 1355.55C1599.33 1473.73 1612.76 1488.35 1574.02 1553.25C1535.28 1618.16 1484.95 1653.17 1410.32 1667.11C1335.69 1681.05 1275.88 1666.62 1215.79 1620.18C1155.7 1573.74 1162.8 1555.28 1121.89 1444.18C1080.98 1333.08 928.276 1182.36 1019.42 1086.91" stroke="white" stroke-opacity="0.03"/>
          <path d="M1547.73 1006.69C1659.9 1058.92 1579.31 1241.28 1582.16 1351.57C1585 1461.87 1597.54 1475.51 1561.38 1536.09C1525.23 1596.67 1478.25 1629.34 1408.6 1642.36C1338.94 1655.37 1283.12 1641.91 1227.04 1598.56C1170.95 1555.21 1177.58 1537.98 1139.39 1434.29C1101.21 1330.6 958.688 1189.92 1043.76 1100.84" stroke="white" stroke-opacity="0.03"/>
          <path d="M1536.07 1027.34C1640.22 1075.84 1565.39 1245.18 1568.03 1347.59C1570.68 1450.01 1582.32 1462.68 1548.75 1518.93C1515.17 1575.19 1471.55 1605.52 1406.87 1617.61C1342.19 1629.69 1290.36 1617.19 1238.28 1576.94C1186.2 1536.69 1192.35 1520.69 1156.9 1424.4C1121.44 1328.12 989.1 1197.49 1068.09 1114.77" stroke="white" stroke-opacity="0.03"/>
          <path d="M1524.41 1047.99C1620.55 1092.77 1551.48 1249.08 1553.91 1343.61C1556.35 1438.15 1567.1 1449.85 1536.11 1501.77C1505.12 1553.7 1464.85 1581.7 1405.15 1592.86C1345.44 1604.01 1297.6 1592.47 1249.52 1555.31C1201.45 1518.16 1207.13 1503.39 1174.4 1414.52C1141.67 1325.64 1019.51 1205.06 1092.43 1128.7" stroke="white" stroke-opacity="0.03"/>
          <path d="M1512.74 1068.65C1600.87 1109.69 1537.56 1252.97 1539.79 1339.63C1542.03 1426.29 1551.88 1437.01 1523.47 1484.61C1495.06 1532.21 1458.15 1557.88 1403.42 1568.11C1348.69 1578.33 1304.84 1567.75 1260.77 1533.69C1216.7 1499.63 1221.91 1486.1 1191.91 1404.63C1161.9 1323.15 1049.92 1212.62 1116.76 1142.63" stroke="white" stroke-opacity="0.03"/>
          <path d="M1501.08 1089.3C1581.2 1126.61 1523.64 1256.87 1525.67 1335.65C1527.7 1414.43 1536.66 1424.18 1510.83 1467.45C1485.01 1510.72 1451.45 1534.06 1401.7 1543.36C1351.94 1552.65 1312.07 1543.03 1272.01 1512.07C1231.95 1481.11 1236.68 1468.8 1209.41 1394.74C1182.14 1320.67 1080.34 1220.19 1141.1 1156.56" stroke="white" stroke-opacity="0.03"/>
          <path d="M1489.42 1109.96C1561.53 1143.54 1509.72 1260.77 1511.55 1331.67C1513.38 1402.57 1521.44 1411.35 1498.19 1450.29C1474.95 1489.24 1444.75 1510.24 1399.97 1518.6C1355.2 1526.97 1319.31 1518.31 1283.26 1490.45C1247.2 1462.58 1251.46 1451.51 1226.91 1384.85C1202.37 1318.19 1110.75 1227.75 1165.44 1170.48" stroke="white" stroke-opacity="0.03"/>
          <path d="M1477.76 1130.61C1541.85 1160.46 1495.8 1264.67 1497.43 1327.69C1499.05 1390.72 1506.22 1398.51 1485.56 1433.13C1464.89 1467.75 1438.05 1486.42 1398.25 1493.85C1358.45 1501.29 1326.55 1493.6 1294.5 1468.83C1262.45 1444.06 1266.24 1434.21 1244.42 1374.96C1222.6 1315.71 1141.16 1235.32 1189.77 1184.41" stroke="white" stroke-opacity="0.03"/>
          <path d="M1466.09 1151.27C1522.18 1177.38 1481.88 1268.56 1483.3 1323.71C1484.73 1378.86 1491 1385.68 1472.92 1415.97C1454.84 1446.26 1431.35 1462.6 1396.52 1469.1C1361.7 1475.61 1333.79 1468.88 1305.75 1447.2C1277.7 1425.53 1281.01 1416.92 1261.92 1365.07C1242.83 1313.22 1171.57 1242.89 1214.11 1198.34" stroke="white" stroke-opacity="0.03"/>
          <path d="M1454.43 1171.92C1502.5 1194.31 1467.97 1272.46 1469.19 1319.73C1470.4 1367 1475.78 1372.85 1460.28 1398.81C1444.79 1424.77 1424.65 1438.77 1394.8 1444.35C1364.95 1449.93 1341.03 1444.16 1316.99 1425.58C1292.95 1407 1295.79 1399.62 1279.43 1355.18C1263.07 1310.74 1201.98 1250.45 1238.44 1212.27" stroke="white" stroke-opacity="0.03"/>
          <g filter="url(#filter0_f_44_220)">
          <circle cx="988.5" cy="988.5" r="488.5" fill="#DA4625" fill-opacity="0.1"/>
          </g>
          <defs>
          <filter id="filter0_f_44_220" x="0" y="0" width="1977" height="1977" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_44_220"/>
          </filter>
          </defs>
          </svg>

          {/* <div className='w-1/3 absolute right-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 goadsgvedfevg h-1/3 -z-[1]'></div> */}
            <div  className='relative container mx-auto '>
                <div className="flex flex-col justify-between gap-[24px] sm:gap-[32px] md:gap-[36px] lg:gap-[40px] xl:gap-[48px] 2xl:gap-[64px] px-4 sm:px-6 lg:px-8">
                  <div  className="relative">
                    <div>
                      
                        <div className='flex justify-center items-center flex-col w-full sm:gap-0 gap-6'>
                          <h2 className='speciasda relative text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px] 2xl:text-[64px] !text-center px-[20%]
                          '>
                            <svg className='absolute sm:block hidden -z-[1] -left-3 sm:-left-0 top-0 sm:top-1/2 w-1/3 sm:w-1/3' viewBox="0 0 529 322" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M529 1.36499H306H201.706C197.124 1.36499 192.761 3.32993 189.724 6.76176L87.0179 122.825C84.4291 125.75 83 129.521 83 133.428V243.365" stroke="url(#paint0_linear_356_822)"/>
                            <g filter="url(#filter0_f_356_822)">
                            <circle cx="83" cy="238.365" r="17" fill="#D84124"/>
                            </g>
                            <circle cx="83" cy="238.365" r="18" fill="url(#paint1_linear_356_822)" stroke="#5E2116" stroke-width="10"/>
                            <defs>
                            <filter id="filter0_f_356_822" x="0.300003" y="155.665" width="165.4" height="165.4" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feGaussianBlur stdDeviation="32.85" result="effect1_foregroundBlur_356_822"/>
                            </filter>
                            <linearGradient id="paint0_linear_356_822" x1="82.9999" y1="352.365" x2="527.607" y2="-160.834" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#ED8B34"/>
                            <stop offset="1" stop-color="#D84124" stop-opacity="0"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear_356_822" x1="65.6473" y1="222.165" x2="99.1314" y2="225.7" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#ED8B34"/>
                            <stop offset="1" stop-color="#D84124"/>
                            </linearGradient>
                            </defs>
                            </svg>
                            Understanding the Differences</h2>
                      </div>
                      <div className='grid grid-cols-4 sm:grid-cols-12 relative items-center justify-between gap-[15px] sm:gap-[16px] md:gap-[20px] lg:gap-[24px] xl:gap-[32px] 2xl:gap-[36px] pt-[36px] sm:pt-[40px]'>
                        <div className='w-full col-span-4 sm:hidden block'>
                          <div className='relative flex items-center justify-center'>
                          <Image className='w-4/6 ml-10' src={slide1} alt='loading.. '/>
                          <Image className='w-full absolute right-0 -top-20 ' src={slide2} alt='loading.. '/>
                          </div>
                          <svg className='absolute -right-6  sm:right-0 top-2/3 sm:top-1/2 translate-y-1/6 w-1/2 sm:w-1/3 -z-[1] sm:block hidden' viewBox="0 0 529 446" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 1.36499H223H327.686C332.04 1.36499 336.205 3.13877 339.222 6.27724L441.535 112.72C444.4 115.7 446 119.674 446 123.808V355.365" stroke="url(#paint0_linear_356_802)"/>
                          <g filter="url(#filter0_f_356_802)">
                          <circle cx="17" cy="17" r="17" transform="matrix(-1 0 0 1 463 345.365)" fill="#D84124"/>
                          </g>
                          <circle cx="13" cy="13" r="18" transform="matrix(-1 0 0 1 459 349.365)" fill="url(#paint1_linear_356_802)" stroke="#5E2116" stroke-width="10"/>
                          <defs>
                          <filter id="filter0_f_356_802" x="363.3" y="279.665" width="165.4" height="165.4" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                          <feGaussianBlur stdDeviation="32.85" result="effect1_foregroundBlur_356_802"/>
                          </filter>
                          <linearGradient id="paint0_linear_356_802" x1="446" y1="342.365" x2="1.393" y2="-170.834" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#ED8B34"/>
                          <stop offset="1" stop-color="#D84124" stop-opacity="0"/>
                          </linearGradient>
                          <linearGradient id="paint1_linear_356_802" x1="-4.35268" y1="-3.2" x2="29.1314" y2="0.334834" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#ED8B34"/>
                          <stop offset="1" stop-color="#D84124"/>
                          </linearGradient>
                          </defs>
                          </svg>
                        </div>
                        <div className='col-span-7 sm:pl-[40px] md:pl-[48px] lg:pl-[70px] xl:pl-[110px] 2xl:pl-[136px] flex items-center sm:items-start justify-center sm:justify-start gap-[12px] sm:gap-[13px] md:gap-[14px] lg:gap-[15px] xl:gap-[16px] 2xl:gap-[20px] flex-col'>
                          <h2 className='diasdtasclaroad text-[20px] sm:text-[24px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[48px] text-center sm:text-left'>Difference</h2>
                          <div className='cosplaformions text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[22px] text-center sm:text-left'>The COREx platform is crafted to facilitate ease of use for individuals unfamiliar with Web3 and DEXes, minimizing learning barriers. Our efforts are focused on the strategic incorporation and innovative advancements of Uni V3 within the CORE blockchain ecosystem, </div>
                        </div>
                        <div className='w-full col-span-4 sm:block hidden'>
                          <div className='relative'>
                          <Image className='w-full' src={slide1} alt='loading.. '/>
                          <Image className='w-full absolute right-0 top-0 ' src={slide2} alt='loading.. '/>
                          </div>
                          <svg className='absolute -right-6  sm:right-0 top-2/3 sm:top-1/2 translate-y-1/6 w-1/2 sm:w-1/3 -z-[1] sm:block hidden' viewBox="0 0 529 446" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 1.36499H223H327.686C332.04 1.36499 336.205 3.13877 339.222 6.27724L441.535 112.72C444.4 115.7 446 119.674 446 123.808V355.365" stroke="url(#paint0_linear_44_393)"/>
                          <g filter="url(#filter0_f_44_393)">
                          <circle cx="17" cy="17" r="17" transform="matrix(-1 0 0 1 463 345.365)" fill="#D84124"/>
                          </g>
                          <circle cx="13" cy="13" r="18" transform="matrix(-1 0 0 1 459 349.365)" fill="url(#paint1_linear_44_393)" stroke="#5E2116" stroke-width="10"/>
                          <defs>
                          <filter id="filter0_f_44_393" x="363.3" y="279.665" width="165.4" height="165.4" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                          <feGaussianBlur stdDeviation="32.85" result="effect1_foregroundBlur_44_393"/>
                          </filter>
                          <linearGradient id="paint0_linear_44_393" x1="446" y1="342.365" x2="1.393" y2="-170.834" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#ED8B34"/>
                          <stop offset="1" stop-color="#D84124" stop-opacity="0"/>
                          </linearGradient>
                          <linearGradient id="paint1_linear_44_393" x1="-4.35268" y1="-3.2" x2="29.1314" y2="0.334834" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#ED8B34"/>
                          <stop offset="1" stop-color="#D84124"/>
                          </linearGradient>
                          </defs>
                          </svg>
                        </div>
                      </div>
                      {/* egfewses */}
                      <div className='grid grid-cols-1 sm:grid-cols-12 relative items-center justify-between gap-[15px] sm:gap-[16px] md:gap-[20px] lg:gap-[24px] xl:gap-[32px] 2xl:gap-[36px] pt-[36px] sm:pt-[40px] md:pt-[48px] lg:pt-[64px] xl:pt-[80px] px-[36px] sm:px-[40px] md:px-[48px] lg:px-[70px] xl:px-[110px] 2xl:px-[136px]'>
                          <div className='w-full col-span-5 '>
                          <div className='relative'>
                          <Image className='w-full ' src={slide3} alt='loading.. '/>
                          <Image className='w-full absolute right-0 top-0' src={slide4} alt='loading.. '/>
                          </div>
                          <svg className='absolute left-0 top-1/2 translate-y-1/6 w-1/3 z-[1] sm:block hidden' viewBox="0 0 529 446" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M529 1.36499H306H201.314C196.96 1.36499 192.795 3.13877 189.778 6.27724L87.4648 112.72C84.6 115.7 83 119.674 83 123.808L83 357.865" stroke="url(#paint0_linear_356_807)"/>
                          <g filter="url(#filter0_f_356_807)">
                          <circle cx="83" cy="362.365" r="17" fill="#D84124"/>
                          </g>
                          <circle cx="83" cy="362.365" r="18" fill="url(#paint1_linear_356_807)" stroke="#5E2116" stroke-width="10"/>
                          <defs>
                          <filter id="filter0_f_356_807" x="0.300003" y="279.665" width="165.4" height="165.4" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                          <feGaussianBlur stdDeviation="32.85" result="effect1_foregroundBlur_356_807"/>
                          </filter>
                          <linearGradient id="paint0_linear_356_807" x1="82.9997" y1="342.365" x2="527.607" y2="-170.834" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#ED8B34"/>
                          <stop offset="1" stop-color="#D84124" stop-opacity="0"/>
                          </linearGradient>
                          <linearGradient id="paint1_linear_356_807" x1="65.6473" y1="346.165" x2="99.1314" y2="349.7" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#ED8B34"/>
                          <stop offset="1" stop-color="#D84124"/>
                          </linearGradient>
                          </defs>
                          </svg>
                        </div>
                        <div className='col-span-7  flex items-center sm:items-end justify-center sm:justify-end gap-[12px] sm:gap-[13px] md:gap-[14px] lg:gap-[15px] xl:gap-[16px] 2xl:gap-[20px] flex-col'>
                          <h2 className='diasdtasclaroad text-[20px] sm:text-[24px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[48px] !text-center  sm:!text-right'>Social</h2>
                          <div className='cosplaformions text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[22px] sm:text-right text-center '>COREx believes in the power of community and is ready to be powered by you. To start, we are establishing a Social function, where peer-to-peer discussion can take place for to operational recommendations for COREx, we are all ears.</div>
                        </div>
                      </div>
                      {/* ssvs */}
                      <div className='grid grid-cols-1 sm:grid-cols-12 relative items-center justify-between gap-[15px] sm:gap-[16px] md:gap-[20px] lg:gap-[24px] xl:gap-[32px] 2xl:gap-[36px] pt-[36px] sm:pt-[40px] md:pt-[48px] lg:pt-[60px]'>
                        <div className='w-full col-span-4 sm:hidden block'>
                          <div className='relative flex items-center justify-center'>
                          <Image className='w-1/2 ml-10' src={slide5} alt='loading.. '/>
                          <Image className='w-1/2 absolute right-12 top-0 ' src={slide6} alt='loading.. '/>
                          </div>
                        </div>
                        <div className='col-span-7 sm:pl-[40px] md:pl-[48px] lg:pl-[70px] xl:pl-[110px] 2xl:pl-[136px] flex items-center sm:items-start justify-center sm:justify-start gap-[12px] sm:gap-[13px] md:gap-[14px] lg:gap-[15px] xl:gap-[16px] 2xl:gap-[20px] flex-col'>
                          <h2 className='diasdtasclaroad text-[20px] sm:text-[24px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[48px] text-center sm:text-left'>AI</h2>
                          <div className='cosplaformions text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[22px] text-center sm:text-left'>COREx is strategically positioning itself to pioneer the next wave of growth within the CoreDao ecosystem through the application of artificial intelligence. Access to our AI features will be an exclusive benefit for COREx token stakers.</div>
                        </div>
                        <div className='w-full col-span-4 sm:block hidden'>
                          <div className='relative'>
                          <Image className='w-full ' src={slide5} alt='loading.. '/>
                          <Image className='w-full absolute right-0 top-0 ' src={slide6} alt='loading.. '/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default Pagethree;