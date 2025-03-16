
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const heroRef = useRef(null);
  const missionRef = useRef(null);
  const teamRef = useRef(null);
  const storyRef = useRef(null);

  useEffect(() => {
    // GSAP animations
    gsap.fromTo(
      heroRef.current,
      { opacity: 0 },
      { 
        opacity: 1, 
        duration: 1, 
        ease: "power2.out" 
      }
    );

    // Mission section animation
    gsap.fromTo(
      missionRef.current,
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        ease: "power2.out",
        scrollTrigger: {
          trigger: missionRef.current,
          start: "top bottom-=100"
        }
      }
    );

    // Team section animation
    gsap.fromTo(
      teamRef.current?.children,
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        stagger: 0.2, 
        duration: 0.6, 
        ease: "power2.out",
        scrollTrigger: {
          trigger: teamRef.current,
          start: "top bottom-=100"
        }
      }
    );

    // Story section animation
    gsap.fromTo(
      storyRef.current,
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        ease: "power2.out",
        scrollTrigger: {
          trigger: storyRef.current,
          start: "top bottom-=100"
        }
      }
    );
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section 
          ref={heroRef}
          className="pt-40 pb-20 px-6 md:px-8 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/70 z-0"></div>
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=2000&auto=format&fit=crop&q=80" 
              alt="Athletes training" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="container mx-auto relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                About Athletix
              </h1>
              <p className="text-white/90 text-lg md:text-xl mb-8">
                Founded by athletes, for athletes. Our mission is to provide premium sports equipment and
                apparel that enhances your performance and supports your passion.
              </p>
            </div>
          </div>
        </section>
        
        {/* Mission Section */}
        <section className="py-20 px-6 md:px-8 bg-white">
          <div ref={missionRef} className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-muted-foreground mb-6">
                  At Athletix, we believe that the right gear can make all the difference in your performance. 
                  That's why we design products with meticulous attention to detail, using the highest quality 
                  materials and cutting-edge technology.
                </p>
                <p className="text-muted-foreground mb-6">
                  Our mission is to empower athletes of all levels to reach their full potential. Whether 
                  you're a weekend warrior or a professional competitor, we're committed to providing you 
                  with equipment that helps you perform at your best.
                </p>
                <p className="text-muted-foreground">
                  We also believe in the power of sports to transform lives. That's why we're committed to 
                  making our products accessible to everyone and supporting community sports initiatives 
                  around the world.
                </p>
              </div>
              <div className="rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?w=800&auto=format&fit=crop&q=80" 
                  alt="Athlete training" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-20 px-6 md:px-8 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
            
            <div ref={teamRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Johnson",
                  role: "Founder & CEO",
                  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80",
                  bio: "Former Olympic athlete with a passion for innovation in sports equipment."
                },
                {
                  name: "Michael Chen",
                  role: "Head of Design",
                  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80",
                  bio: "Award-winning designer with 15 years of experience in sportswear design."
                },
                {
                  name: "Elena Rodriguez",
                  role: "Chief Technology Officer",
                  image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80",
                  bio: "Pioneering the integration of technology in sports apparel and equipment."
                }
              ].map((member, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{member.role}</p>
                    <p className="text-muted-foreground">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Our Story Section */}
        <section className="py-20 px-6 md:px-8">
          <div ref={storyRef} className="container mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
            
            <div className="prose prose-lg max-w-none">
              <p>
                Athletix was founded in 2010 by Sarah Johnson, a former Olympic athlete who was frustrated 
                with the lack of high-quality sports equipment available to athletes. She believed that with the 
                right approach to design and manufacturing, it was possible to create products that would help 
                athletes perform at their best.
              </p>
              <p>
                Starting with just a small line of running gear, Athletix quickly gained a reputation for quality 
                and innovation. Athletes appreciated the attention to detail and the performance-enhancing features 
                of our products, and word spread quickly.
              </p>
              <p>
                Over the years, we've expanded our product range to cover a wide variety of sports and activities, 
                but our commitment to quality and performance has never wavered. We continue to work closely with 
                professional athletes to test and refine our products, ensuring that they meet the highest standards.
              </p>
              <p>
                Today, Athletix is a global brand with a presence in over 50 countries. We're proud of how far we've 
                come, but we're even more excited about the future. We continue to innovate and push the boundaries 
                of what's possible in sports equipment, always with the goal of helping athletes reach their full potential.
              </p>
            </div>
            
            <div className="mt-12">
              <Link 
                to="/careers" 
                className="inline-block px-8 py-4 bg-black text-white font-medium rounded-md hover:bg-black/90 transition-colors"
              >
                Join Our Team
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
