
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useScrollPosition } from '../hooks/use-scroll-position';

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
  }
];

const VideoGallery = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videosRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const scrollPosition = useScrollPosition();
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  
  useEffect(() => {
    // Initialize the section with an entry animation
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );

    // Set up scroll animations
    const videoItems = videosRef.current?.querySelectorAll('.video-item');
    
    if (sectionRef.current && videoItems) {
      // Initial large video animation
      const mainTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 30%",
          scrub: true,
        }
      });
      
      mainTl.fromTo(
        headerRef.current,
        { scale: 1, y: 0 },
        { scale: 0.8, y: -30, ease: "power1.out" }
      );
      
      // Create the gallery animation that activates as you scroll down
      const galleryTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 30%",
          end: "bottom 80%",
          scrub: true,
        }
      });
      
      // Transform from hero layout to gallery grid
      galleryTl.to(
        headerRef.current,
        { opacity: 0.6, scale: 0.7, y: -60, ease: "power1.out" }
      );
      
      galleryTl.to(
        videosRef.current,
        { gap: "1rem", gridTemplateColumns: "repeat(2, 1fr)", ease: "power1.out" },
        "<"
      );
      
      // Animate each video item
      videoItems.forEach((item, index) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 50, scale: 0.8 },
          { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            delay: 0.1 * index,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 50%",
              end: "center center",
              scrub: true,
            }
          }
        );
      });
    }

    return () => {
      // Clean up animations
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handleVideoClick = (id: string) => {
    setActiveVideo(id === activeVideo ? null : id);
  };
  
  return (
    <section 
      ref={sectionRef} 
      className="video-gallery relative min-h-screen bg-gradient-to-b from-black to-gray-900 py-20 overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-8">
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Sports in Motion
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Explore professional techniques and equipment in action. Scroll to discover our curated video collection of sports excellence.
          </p>
        </div>
        
        <div 
          ref={videosRef} 
          className="grid grid-cols-1 md:grid-cols-1 gap-8 transition-all duration-1000 ease-in-out"
        >
          {videoData.map((video) => (
            <div 
              key={video.id}
              className={`video-item relative rounded-xl overflow-hidden transition-all duration-500 cursor-pointer ${
                activeVideo === video.id ? 'col-span-2 row-span-2' : 'col-span-1'
              }`}
              onClick={() => handleVideoClick(video.id)}
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{video.title}</h3>
                <p className="text-white/70">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;
