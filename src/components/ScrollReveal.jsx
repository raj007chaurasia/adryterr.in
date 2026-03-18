import { useEffect, useRef, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = '',
  textClassName = '',
  rotationEnd = 'bottom bottom',
  wordAnimationEnd = 'bottom bottom'
}) => {
  const containerRef = useRef(null);

  const splitText = useMemo(() => {
    const text = typeof children === 'string' ? children : '';
    return text.split(/(\s+)/).map((word, index) => {
      if (word.match(/^\s+$/)) return word;
      return (
        <span className="inline-block word" key={index} style={{ willChange: 'opacity, filter' }}>
          {word}
        </span>
      );
    });
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller = scrollContainerRef && scrollContainerRef.current ? scrollContainerRef.current : window;
    const wordElements = el.querySelectorAll('.word');
    const ctx = gsap.context(() => {
      // Refresh ScrollTrigger and add resize listener
      ScrollTrigger.refresh();
      window.addEventListener('resize', () => ScrollTrigger.refresh());

      // Rotation animation
      gsap.fromTo(el, 
        { transformOrigin: '0% 50%', rotate: baseRotation }, 
        {
          ease: 'none',
          rotate: 0,
          force3D: true,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: 'top bottom',
            end: rotationEnd,
            scrub: true
          }
        }
      );

      // Opacity animation
      gsap.fromTo(wordElements, 
        { opacity: baseOpacity, willChange: 'opacity, filter' }, 
        {
          ease: 'none',
          opacity: 1,
          stagger: 0.05,
          force3D: true,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: 'top 85%',
            end: wordAnimationEnd,
            scrub: true
          }
        }
      );

      // Blur animation
      if (enableBlur) {
        gsap.fromTo(wordElements, 
          { filter: `blur(${blurStrength}px)` }, 
          {
            ease: 'none',
            filter: 'blur(0px)',
            stagger: 0.05,
            force3D: true,
            scrollTrigger: {
              trigger: el,
              scroller,
              start: 'top 85%',
              end: wordAnimationEnd,
              scrub: true
            }
          }
        );
      }
    }, el);

    return () => {
      ctx.revert();
      window.removeEventListener('resize', () => ScrollTrigger.refresh());
    };
  }, [children, scrollContainerRef, enableBlur, baseRotation, baseOpacity, rotationEnd, wordAnimationEnd, blurStrength]);

  return (
    <h2 ref={containerRef} className={`my-5 ${containerClassName}`}>
      <p
        className={`text-[clamp(1.6rem,4vw,3rem)] leading-normal font-semibold ${textClassName}`}>{splitText}</p>
    </h2>
  );
};

export default ScrollReveal;
