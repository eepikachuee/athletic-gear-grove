
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { 
  Avatar, 
  AvatarFallback, 
  AvatarImage 
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import gsap from 'gsap';
import { 
  PackageOpen, 
  User, 
  Heart, 
  Settings, 
  LogOut,
  ShoppingBag,
  Clock
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Mock data
const mockPurchases = [
  { 
    id: 'ord-123456',
    date: '2023-06-15',
    total: 159.99,
    status: 'Delivered',
    items: [
      { id: 1, name: 'Pro Football Jersey', price: 89.99, quantity: 1, image: 'https://images.unsplash.com/photo-1580087256394-dc596e1c8f2f?q=80&w=3000&auto=format&fit=crop' },
      { id: 2, name: 'Performance Cleats', price: 70.00, quantity: 1, image: 'https://images.unsplash.com/photo-1511459215124-900582d84ad4?q=80&w=3000&auto=format&fit=crop' }
    ]
  },
  { 
    id: 'ord-789012',
    date: '2023-05-20',
    total: 79.99,
    status: 'Delivered',
    items: [
      { id: 3, name: 'Training Shorts', price: 39.99, quantity: 1, image: 'https://images.unsplash.com/photo-1591195853866-cbb28f7723a7?q=80&w=3000&auto=format&fit=crop' },
      { id: 4, name: 'Compression Shirt', price: 40.00, quantity: 1, image: 'https://images.unsplash.com/photo-1576097492152-4687ccd1c6de?q=80&w=3000&auto=format&fit=crop' }
    ]
  }
];

// Mock user data
const mockUser = {
  name: 'Alex Johnson',
  email: 'alex.johnson@example.com',
  avatar: 'https://i.pravatar.cc/300'
};

export default function Profile() {
  const [activeTab, setActiveTab] = useState('orders');
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Mock auth state
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Apple-style staggered animation for page elements
    const timeline = gsap.timeline();
    
    timeline.fromTo(
      '.profile-header',
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
    );
    
    timeline.fromTo(
      '.tabs-container',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' },
      '-=0.2'
    );
    
    timeline.fromTo(
      '.profile-content > *',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 0.5, ease: 'power2.out' },
      '-=0.2'
    );
  }, [activeTab]);

  // Handle logout
  const handleLogout = () => {
    // Mock logout logic
    setIsAuthenticated(false);
    toast({
      title: "Logged out successfully",
      description: "You have been logged out of your account.",
    });
    navigate('/');
  };

  // Redirect if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  // Format date string
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Format price
  const formatPrice = (price: number) => {
    return `$${price.toFixed(2)}`;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16 px-4 md:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          {/* Profile header */}
          <div className="profile-header flex flex-col md:flex-row items-center md:items-start gap-6 p-6 bg-card rounded-lg shadow-sm mb-8">
            <Avatar className="w-24 h-24 border-2 border-primary/20">
              <AvatarImage src={mockUser.avatar} />
              <AvatarFallback>{mockUser.name.substring(0, 2)}</AvatarFallback>
            </Avatar>
            
            <div className="flex-grow text-center md:text-left">
              <h1 className="text-2xl font-bold">{mockUser.name}</h1>
              <p className="text-muted-foreground">{mockUser.email}</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="secondary" size="sm">
                <Settings className="mr-2 h-4 w-4" />
                Edit Profile
              </Button>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
            </div>
          </div>
          
          {/* Tabs navigation */}
          <div className="tabs-container mb-8">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="w-full max-w-md mx-auto grid grid-cols-3">
                <TabsTrigger value="orders">
                  <ShoppingBag className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">Orders</span>
                </TabsTrigger>
                <TabsTrigger value="wishlist">
                  <Heart className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">Wishlist</span>
                </TabsTrigger>
                <TabsTrigger value="account">
                  <User className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">Account</span>
                </TabsTrigger>
              </TabsList>
              
              {/* Orders tab */}
              <TabsContent value="orders" className="mt-6">
                <div className="profile-content">
                  <h2 className="text-xl font-semibold mb-4">Your Orders</h2>
                  
                  {mockPurchases.length > 0 ? (
                    <div className="space-y-6">
                      {mockPurchases.map((order) => (
                        <div key={order.id} className="bg-card rounded-lg p-6 shadow-sm">
                          <div className="flex flex-col md:flex-row justify-between mb-4 pb-4 border-b">
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <span className="font-medium">Order {order.id}</span>
                                <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                                  {order.status}
                                </span>
                              </div>
                              <div className="text-sm text-muted-foreground flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                <span>{formatDate(order.date)}</span>
                              </div>
                            </div>
                            <div className="mt-2 md:mt-0">
                              <span className="text-sm text-muted-foreground">Total: </span>
                              <span className="font-semibold">{formatPrice(order.total)}</span>
                            </div>
                          </div>
                          
                          <div className="space-y-4">
                            {order.items.map((item) => (
                              <div key={item.id} className="flex gap-4">
                                <div className="w-16 h-16 bg-muted rounded overflow-hidden shrink-0">
                                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-grow">
                                  <div className="font-medium">{item.name}</div>
                                  <div className="text-sm text-muted-foreground">
                                    {formatPrice(item.price)} × {item.quantity}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12 bg-card rounded-lg">
                      <PackageOpen className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                      <h3 className="text-lg font-medium mb-2">No orders yet</h3>
                      <p className="text-muted-foreground mb-4">You haven't placed any orders yet.</p>
                      <Button asChild>
                        <a href="/shop">Start Shopping</a>
                      </Button>
                    </div>
                  )}
                </div>
              </TabsContent>
              
              {/* Wishlist tab */}
              <TabsContent value="wishlist" className="mt-6">
                <div className="profile-content">
                  <h2 className="text-xl font-semibold mb-4">Your Wishlist</h2>
                  
                  <div className="text-center py-12 bg-card rounded-lg">
                    <Heart className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                    <h3 className="text-lg font-medium mb-2">Your wishlist is empty</h3>
                    <p className="text-muted-foreground mb-4">Save items you're interested in for later.</p>
                    <Button asChild>
                      <a href="/shop">Explore Products</a>
                    </Button>
                  </div>
                </div>
              </TabsContent>
              
              {/* Account tab */}
              <TabsContent value="account" className="mt-6">
                <div className="profile-content">
                  <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
                  
                  <div className="bg-card rounded-lg p-6 shadow-sm">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-medium mb-4">Personal Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium text-muted-foreground">Full Name</label>
                            <div className="mt-1">{mockUser.name}</div>
                          </div>
                          <div>
                            <label className="text-sm font-medium text-muted-foreground">Email Address</label>
                            <div className="mt-1">{mockUser.email}</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="pt-4 border-t">
                        <h3 className="text-lg font-medium mb-4">Security</h3>
                        <Button variant="outline" size="sm" className="mb-2">
                          Change Password
                        </Button>
                        <p className="text-sm text-muted-foreground">
                          Last password change: Never
                        </p>
                      </div>
                      
                      <div className="pt-4 border-t">
                        <h3 className="text-lg font-medium mb-4">Shipping Addresses</h3>
                        <Button variant="outline" size="sm">
                          Add Address
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
