
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SizeGuide = () => {
  const contentRef = useRef(null);
  const [unit, setUnit] = useState<'cm' | 'in'>('in');

  useEffect(() => {
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    );
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-20 px-6 md:px-8">
        <div className="container mx-auto max-w-4xl">
          <div ref={contentRef}>
            <h1 className="text-3xl md:text-4xl font-bold mb-8">Size Guide</h1>
            
            <div className="mb-8">
              <p className="text-lg mb-4">
                Find your perfect fit with our comprehensive size guide. Our sizing is designed to be true to size,
                but we recommend measuring yourself to ensure the best fit.
              </p>
              
              <div className="flex items-center space-x-4 mb-6">
                <span className="font-medium">Unit:</span>
                <div className="flex items-center space-x-2">
                  <button 
                    className={`px-3 py-1.5 rounded-md ${unit === 'in' ? 'bg-black text-white' : 'bg-gray-200'}`}
                    onClick={() => setUnit('in')}
                  >
                    Inches
                  </button>
                  <button 
                    className={`px-3 py-1.5 rounded-md ${unit === 'cm' ? 'bg-black text-white' : 'bg-gray-200'}`}
                    onClick={() => setUnit('cm')}
                  >
                    Centimeters
                  </button>
                </div>
              </div>
            </div>
            
            <Tabs defaultValue="mens">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="mens">Men's Sizing</TabsTrigger>
                <TabsTrigger value="womens">Women's Sizing</TabsTrigger>
                <TabsTrigger value="kids">Kids' Sizing</TabsTrigger>
              </TabsList>
              
              <TabsContent value="mens" className="space-y-8">
                <div>
                  <h2 className="text-xl font-semibold mb-4">Men's Tops</h2>
                  <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-300">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="px-4 py-2 text-left border-b">Size</th>
                          <th className="px-4 py-2 text-left border-b">Chest {unit === 'in' ? '(in)' : '(cm)'}</th>
                          <th className="px-4 py-2 text-left border-b">Waist {unit === 'in' ? '(in)' : '(cm)'}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="px-4 py-2 border-b">S</td>
                          <td className="px-4 py-2 border-b">{unit === 'in' ? '36-38' : '91-97'}</td>
                          <td className="px-4 py-2 border-b">{unit === 'in' ? '30-32' : '76-81'}</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">M</td>
                          <td className="px-4 py-2 border-b">{unit === 'in' ? '38-40' : '97-102'}</td>
                          <td className="px-4 py-2 border-b">{unit === 'in' ? '32-34' : '81-86'}</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">L</td>
                          <td className="px-4 py-2 border-b">{unit === 'in' ? '40-42' : '102-107'}</td>
                          <td className="px-4 py-2 border-b">{unit === 'in' ? '34-36' : '86-91'}</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">XL</td>
                          <td className="px-4 py-2 border-b">{unit === 'in' ? '42-44' : '107-112'}</td>
                          <td className="px-4 py-2 border-b">{unit === 'in' ? '36-38' : '91-97'}</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">XXL</td>
                          <td className="px-4 py-2 border-b">{unit === 'in' ? '44-46' : '112-117'}</td>
                          <td className="px-4 py-2 border-b">{unit === 'in' ? '38-40' : '97-102'}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-xl font-semibold mb-4">Men's Bottoms</h2>
                  <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-300">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="px-4 py-2 text-left border-b">Size</th>
                          <th className="px-4 py-2 text-left border-b">Waist {unit === 'in' ? '(in)' : '(cm)'}</th>
                          <th className="px-4 py-2 text-left border-b">Hip {unit === 'in' ? '(in)' : '(cm)'}</th>
                          <th className="px-4 py-2 text-left border-b">Inseam {unit === 'in' ? '(in)' : '(cm)'}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="px-4 py-2 border-b">S</td>
                          <td className="px-4 py-2 border-b">{unit === 'in' ? '30-32' : '76-81'}</td>
                          <td className="px-4 py-2 border-b">{unit === 'in' ? '36-38' : '91-97'}</td>
                          <td className="px-4 py-2 border-b">{unit === 'in' ? '31' : '79'}</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">M</td>
                          <td className="px-4 py-2 border-b">{unit === 'in' ? '32-34' : '81-86'}</td>
                          <td className="px-4 py-2 border-b">{unit === 'in' ? '38-40' : '97-102'}</td>
                          <td className="px-4 py-2 border-b">{unit === 'in' ? '32' : '81'}</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">L</td>
                          <td className="px-4 py-2 border-b">{unit === 'in' ? '34-36' : '86-91'}</td>
                          <td className="px-4 py-2 border-b">{unit === 'in' ? '40-42' : '102-107'}</td>
                          <td className="px-4 py-2 border-b">{unit === 'in' ? '33' : '84'}</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">XL</td>
                          <td className="px-4 py-2 border-b">{unit === 'in' ? '36-38' : '91-97'}</td>
                          <td className="px-4 py-2 border-b">{unit === 'in' ? '42-44' : '107-112'}</td>
                          <td className="px-4 py-2 border-b">{unit === 'in' ? '34' : '86'}</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">XXL</td>
                          <td className="px-4 py-2 border-b">{unit === 'in' ? '38-40' : '97-102'}</td>
                          <td className="px-4 py-2 border-b">{unit === 'in' ? '44-46' : '112-117'}</td>
                          <td className="px-4 py-2 border-b">{unit === 'in' ? '34' : '86'}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="womens" className="space-y-8">
                <div>
                  <h2 className="text-xl font-semibold mb-4">Women's Tops</h2>
                  <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-300">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="px-4 py-2 text-left border-b">Size</th>
                          <th className="px-4 py-2 text-left border-b">Bust {unit === 'in' ? '(in)' : '(cm)'}</th>
                          <th className="px-4 py-2 text-left border-b">Waist {unit === 'in' ? '(in)' : '(cm)'}</th>
                          <th className="px-4 py-2 text-left border-b">Hip {unit === 'in' ? '(in)' : '(cm)'}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="px-4 py-2 border-b">XS</td>
                          <td className="px-4 py-2 border-b">{unit === 'in' ? '32-33' : '81-84'}</td>
                          <td className="px-4 py-2 border-b">{unit === 'in' ? '24-25' : '61-64'}</td>
                          <td className="px-4 py-2 border-b">{unit === 'in' ? '34-35' : '86-89'}</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">S</td>
                          <td className="px-4 py-2 border-b">{unit === 'in' ? '34-35' : '86-89'}</td>
                          <td className="px-4 py-2 border-b">{unit === 'in' ? '26-27' : '66-69'}</td>
                          <td className="px-4 py-2 border-b">{unit === 'in' ? '36-37' : '91-94'}</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">M</td>
                          <td className="px-4 py-2 border-b">{unit === 'in' ? '36-37' : '91-94'}</td>
                          <td className="px-4 py-2 border-b">{unit === 'in' ? '28-29' : '71-74'}</td>
                          <td className="px-4 py-2 border-b">{unit === 'in' ? '38-39' : '97-99'}</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">L</td>
                          <td className="px-4 py-2 border-b">{unit === 'in' ? '38-40' : '97-102'}</td>
                          <td className="px-4 py-2 border-b">{unit === 'in' ? '30-32' : '76-81'}</td>
                          <td className="px-4 py-2 border-b">{unit === 'in' ? '40-42' : '102-107'}</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">XL</td>
                          <td className="px-4 py-2 border-b">{unit === 'in' ? '41-43' : '104-109'}</td>
                          <td className="px-4 py-2 border-b">{unit === 'in' ? '33-35' : '84-89'}</td>
                          <td className="px-4 py-2 border-b">{unit === 'in' ? '43-45' : '109-114'}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="kids" className="space-y-8">
                <div>
                  <h2 className="text-xl font-semibold mb-4">Kids' Sizing</h2>
                  <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-300">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="px-4 py-2 text-left border-b">Size</th>
                          <th className="px-4 py-2 text-left border-b">Age</th>
                          <th className="px-4 py-2 text-left border-b">Height {unit === 'in' ? '(in)' : '(cm)'}</th>
                          <th className="px-4 py-2 text-left border-b">Chest {unit === 'in' ? '(in)' : '(cm)'}</th>
                          <th className="px-4 py-2 text-left border-b">Waist {unit === 'in' ? '(in)' : '(cm)'}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="px-4 py-2 border-b">XS</td>
                          <td className="px-4 py-2 border-b">4-5</td>
                          <td className="px-4 py-2 border-b">{unit === 'in' ? '41-44' : '104-112'}</td>
                          <td className="px-4 py-2 border-b">{unit === 'in' ? '22-23' : '56-58'}</td>
                          <td className="px-4 py-2 border-b">{unit === 'in' ? '21-22' : '53-56'}</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">S</td>
                          <td className="px-4 py-2 border-b">6-7</td>
                          <td className="px-4 py-2 border-b">{unit === 'in' ? '45-48' : '114-122'}</td>
                          <td className="px-4 py-2 border-b">{unit === 'in' ? '24-25' : '61-64'}</td>
                          <td className="px-4 py-2 border-b">{unit === 'in' ? '22-23' : '56-58'}</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">M</td>
                          <td className="px-4 py-2 border-b">8-9</td>
                          <td className="px-4 py-2 border-b">{unit === 'in' ? '49-52' : '124-132'}</td>
                          <td className="px-4 py-2 border-b">{unit === 'in' ? '26-27' : '66-69'}</td>
                          <td className="px-4 py-2 border-b">{unit === 'in' ? '23-24' : '58-61'}</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">L</td>
                          <td className="px-4 py-2 border-b">10-11</td>
                          <td className="px-4 py-2 border-b">{unit === 'in' ? '53-56' : '134-142'}</td>
                          <td className="px-4 py-2 border-b">{unit === 'in' ? '28-30' : '71-76'}</td>
                          <td className="px-4 py-2 border-b">{unit === 'in' ? '24-25' : '61-64'}</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">XL</td>
                          <td className="px-4 py-2 border-b">12-13</td>
                          <td className="px-4 py-2 border-b">{unit === 'in' ? '57-61' : '145-155'}</td>
                          <td className="px-4 py-2 border-b">{unit === 'in' ? '31-32' : '79-81'}</td>
                          <td className="px-4 py-2 border-b">{unit === 'in' ? '26-27' : '66-69'}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
            
            <div className="mt-12">
              <h2 className="text-xl font-semibold mb-4">How to Measure</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-medium mb-2">Chest/Bust</h3>
                  <p className="mb-4">
                    Measure around the fullest part of your chest, keeping the measuring tape horizontal.
                  </p>
                  
                  <h3 className="font-medium mb-2">Waist</h3>
                  <p className="mb-4">
                    Measure around your natural waistline, which is the narrowest part of your waist.
                  </p>
                  
                  <h3 className="font-medium mb-2">Hip</h3>
                  <p>
                    Measure around the fullest part of your hips, usually about 8 inches below your waistline.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Inseam</h3>
                  <p className="mb-4">
                    Measure from the crotch seam to the bottom of the leg along the inside seam of the pants.
                  </p>
                  
                  <h3 className="font-medium mb-2">Tips for Accurate Measurements</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Use a soft measuring tape</li>
                    <li>Measure directly against your body, not over clothing</li>
                    <li>Keep the measuring tape taut but not tight</li>
                    <li>Stand naturally when taking measurements</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SizeGuide;
