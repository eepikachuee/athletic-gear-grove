
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from './ui/button';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

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
    videoSrc: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
  },
  {
    id: 'v2',
    title: 'Basketball Skills',
    description: 'Improve your basketball handling skills',
    videoSrc: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
  },
  {
    id: 'v3',
    title: 'Tennis Techniques',
    description: 'Master the perfect tennis serve',
    videoSrc: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
  },
  {
    id: 'v4',
    title: 'Running Essentials',
    description: 'Proper running form and technique',
    videoSrc: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'
  },
  {
    id: 'v5',
    title: 'Swimming Mastery',
    description: 'Olympic swimming techniques',
    videoSrc: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4'
  },
  {
    id: 'v6',
    title: 'Golf Swing Analysis',
    description: 'Perfect your golf swing mechanics',
    videoSrc: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4'
  },
  {
    id: 'v7',
    title: 'Cycling Training',
    description: 'Pro cycling techniques and training',
    videoSrc: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4'
  },
  {
    id: 'v8',
    title: 'Fitness Workout',
    description: 'High-intensity interval training',
    videoSrc: 'https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4'
  }
];

const VideoGallery = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const mainVideoRef = useRef<HTMLVideoElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const mainVideoContainerRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Clear any existing ScrollTriggers to prevent duplicate animations
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    
    const mainVideo = mainVideoRef.current;
    const mainVideoContainer = mainVideoContainerRef.current;
    const gallery = galleryRef.current;
    const horizontal = horizontalRef.current;
    const section = sectionRef.current;
    
    if (!mainVideo || !mainVideoContainer || !gallery || !horizontal || !section) return;
    
    // Make sure video is loaded and can play
    mainVideo.load();
    
    // Autoplay main video when it's visible
    const videoPlayObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            mainVideo.play().catch(e => console.error("Video play error:", e));
          } else {
            mainVideo.pause();
          }
        });
      },
      { threshold: 0.5 }
    );
    
    videoPlayObserver.observe(mainVideoContainer);
    
    // Create a timeline for the zoom out effect
    const zoomOutTl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=50%",
        scrub: true,
        pin: true,
        pinSpacing: true,
        onEnter: () => {
          console.log("Zoom animation triggered");
        }
      }
    });
    
    // Zoom out animation sequence
    zoomOutTl
      .to(headerRef.current, { 
        opacity: 0, 
        y: -50, 
        duration: 0.5 
      })
      .to(mainVideoContainer, { 
        scale: 0.5, 
        y: "-25vh", 
        duration: 1 
      })
      .to(gallery, { 
        opacity: 1, 
        duration: 0.5 
      }, "-=0.3");
    
    // Set up horizontal scrolling
    if (horizontal.scrollWidth > horizontal.clientWidth) {
      const totalWidth = horizontal.scrollWidth - horizontal.clientWidth;
      
      gsap.to(horizontal, {
        x: -totalWidth,
        ease: "none",
        scrollTrigger: {
          trigger: horizontal,
          start: "top center",
          end: "+=200%",
          scrub: true,
          pin: true,
          onEnter: () => {
            console.log("Horizontal scroll triggered");
          }
        }
      });
    }
    
    // Animate gallery video items
    const galleryVideos = document.querySelectorAll('.gallery-video-item');
    galleryVideos.forEach((video, index) => {
      const videoEl = video.querySelector('video');
      if (videoEl) {
        videoEl.load(); // Ensure videos are loaded
        
        // Create intersection observer for each gallery video
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                videoEl.play().catch(e => console.error("Gallery video play error:", e));
              } else {
                videoEl.pause();
              }
            });
          },
          { threshold: 0.3 }
        );
        
        observer.observe(video);
      }
      
      // Animate in gallery items
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
      // Clean up all animations and observers
      videoPlayObserver.disconnect();
      galleryVideos.forEach(video => {
        const videoEl = video.querySelector('video');
        if (videoEl) {
          videoEl.pause();
          videoEl.removeAttribute('src');
          videoEl.load();
        }
      });
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
            ref={mainVideoRef}
            className="w-full h-full object-cover"
            preload="auto"
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
                      preload="auto"
                      muted 
                      loop 
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
