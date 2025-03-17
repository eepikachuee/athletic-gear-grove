
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useScrollPosition } from '../hooks/use-scroll-position';
import { Button } from './ui/button';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

interface VideoItem {
  id: string;
  title: string;
  description: string;
  videoSrc: string;
}

const videoData: VideoItem[] = [
  {
    id: 'v1',
    title: 'Football Training',
    description: 'Professional football training techniques',
    videoSrc: 'https://www.apple.com/105/media/us/mac/family/2021/d3a7c087-6656-4594-b06e-b88511e97476/films/product-gallery/mac-product-gallery-sm.mp4'
  },
  {
    id: 'v2',
    title: 'Basketball Skills',
    description: 'Improve your basketball handling skills',
    videoSrc: 'https://www.apple.com/105/media/us/mac/family/2021/d3a7c087-6656-4594-b06e-b88511e97476/films/product-gallery/mac-product-gallery-sm.mp4'
  },
  {
    id: 'v3',
    title: 'Tennis Techniques',
    description: 'Master the perfect tennis serve',
    videoSrc: 'https://www.apple.com/105/media/us/mac/family/2021/d3a7c087-6656-4594-b06e-b88511e97476/films/product-gallery/mac-product-gallery-sm.mp4'
  },
  {
    id: 'v4',
    title: 'Running Essentials',
    description: 'Proper running form and technique',
    videoSrc: 'https://www.apple.com/105/media/us/mac/family/2021/d3a7c087-6656-4594-b06e-b88511e97476/films/product-gallery/mac-product-gallery-sm.mp4'
  },
  {
    id: 'v5',
    title: 'Swimming Mastery',
    description: 'Olympic swimming techniques',
    videoSrc: 'https://www.apple.com/105/media/us/mac/family/2021/d3a7c087-6656-4594-b06e-b88511e97476/films/product-gallery/mac-product-gallery-sm.mp4'
  },
  {
    id: 'v6',
    title: 'Golf Swing Analysis',
    description: 'Perfect your golf swing mechanics',
    videoSrc: 'https://www.apple.com/105/media/us/mac/family/2021/d3a7c087-6656-4594-b06e-b88511e97476/films/product-gallery/mac-product-gallery-sm.mp4'
  },
  {
    id: 'v7',
    title: 'Cycling Training',
    description: 'Pro cycling techniques and training',
    videoSrc: 'https://www.apple.com/105/media/us/mac/family/2021/d3a7c087-6656-4594-b06e-b88511e97476/films/product-gallery/mac-product-gallery-sm.mp4'
  },
  {
    id: 'v8',
    title: 'Fitness Workout',
    description: 'High-intensity interval training',
    videoSrc: 'https://www.apple.com/105/media/us/mac/family/2021/d3a7c087-6656-4594-b06e-b88511e97476/films/product-gallery/mac-product-gallery-sm.mp4'
  }
];

const VideoGallery = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const mainVideoContainerRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);
  const scrollPosition = useScrollPosition();
  
  useEffect(() => {
    const mainVideo = videoRef.current;
    const mainVideoContainer = mainVideoContainerRef.current;
    const gallery = galleryRef.current;
    const horizontalScroll = horizontalRef.current;
    
    if (!mainVideo || !mainVideoContainer || !gallery || !horizontalScroll || !sectionRef.current) return;
    
    // Play video when it comes into view
    ScrollTrigger.create({
      trigger: mainVideoContainer,
      start: "top 80%",
      onEnter: () => {
        mainVideo.play();
      },
      onLeave: () => {
        mainVideo.pause();
      },
      onEnterBack: () => {
        mainVideo.play();
      },
      onLeaveBack: () => {
        mainVideo.pause();
      }
    });

    // Create a timeline for the initial video zoom out effect
    const zoomOutTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=50%",
        scrub: true,
        pin: true,
        pinSpacing: true,
      }
    });

    // Animate the main video container
    zoomOutTl
      .to(headerRef.current, { opacity: 0, y: -50, duration: 0.5 })
      .to(mainVideoContainer, { 
        scale: 0.5, 
        y: "-25vh", 
        duration: 1,
        onComplete: () => {
          // Show gallery after zoom out
          gsap.to(gallery, { opacity: 1, duration: 0.5 });
        }
      })
      .to(gallery, { opacity: 1, duration: 0.5 }, "-=0.3");

    // Set up horizontal scrolling for the gallery
    const horizontalScrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: horizontalScroll,
        start: "top 50%",
        end: "+=200%",
        scrub: true,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
      }
    });

    // Get the width that needs to be scrolled
    const totalWidth = horizontalScroll.scrollWidth - horizontalScroll.clientWidth;
    
    horizontalScrollTl.to(horizontalScroll, {
      x: -totalWidth,
      ease: "none",
      duration: 1
    });

    // Animate in each gallery item with slight delay
    const galleryVideos = gallery.querySelectorAll('.gallery-video-item');
    galleryVideos.forEach((video, index) => {
      gsap.from(video, {
        opacity: 0,
        y: 30,
        delay: 0.1 * index,
        duration: 0.8,
        scrollTrigger: {
          trigger: gallery,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });
    });

    return () => {
      // Clean up all ScrollTriggers
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="video-gallery relative min-h-screen bg-gradient-to-b from-black to-gray-900 py-10 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div ref={headerRef} className="text-center mb-16 pt-10">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Sports in Motion
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Explore professional techniques and equipment in action. Scroll to discover our curated video collection.
          </p>
        </div>
        
        {/* Main featured video that will zoom out */}
        <div 
          ref={mainVideoContainerRef} 
          className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl relative z-10 mb-12"
        >
          <video 
            ref={videoRef}
            className="w-full h-full object-cover"
            muted 
            loop 
            playsInline
          >
            <source src={videoData[0].videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-8 flex flex-col justify-end">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{videoData[0].title}</h3>
            <p className="text-white/80 mb-4">{videoData[0].description}</p>
            <Button className="w-fit" variant="default">
              Watch Now
            </Button>
          </div>
        </div>
        
        {/* Gallery that appears after main video zooms out */}
        <div 
          ref={galleryRef} 
          className="opacity-0 pt-[30vh]"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Featured Videos</h3>
          
          {/* Horizontal scrolling container */}
          <div className="overflow-hidden">
            <div 
              ref={horizontalRef}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-12 w-[200%]"
            >
              {videoData.map((video) => (
                <div 
                  key={video.id}
                  className="gallery-video-item relative rounded-xl overflow-hidden shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105"
                >
                  <div className="aspect-video bg-black">
                    <video 
                      className="w-full h-full object-cover"
                      muted 
                      loop 
                      autoPlay 
                      playsInline
                    >
                      <source src={video.videoSrc} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex flex-col justify-end">
                    <h4 className="text-lg font-bold text-white mb-1">{video.title}</h4>
                    <p className="text-sm text-white/70">{video.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;
