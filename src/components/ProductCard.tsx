
import { useState } from 'react';
import { ShoppingBag } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  hoverImage?: string;
  category: string;
  isNew?: boolean;
}

const ProductCard = ({ 
  id, 
  name, 
  price, 
  originalPrice, 
  image, 
  hoverImage, 
  category, 
  isNew = false 
}: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-lg mb-4 bg-secondary/30 card-hover">
        {/* Product Image with hover effect */}
        <div className="aspect-square w-full relative overflow-hidden">
          {hoverImage ? (
            <>
              <img 
                src={image} 
                alt={name}
                className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
              />
              <img 
                src={hoverImage} 
                alt={`${name} alternate view`}
                className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
              />
            </>
          ) : (
            <img 
              src={image} 
              alt={name}
              className="w-full h-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
            />
          )}
        </div>
        
        {/* New badge */}
        {isNew && (
          <div className="absolute top-3 left-3 px-2 py-1 bg-black text-white text-xs font-medium rounded-full z-10">
            New
          </div>
        )}
        
        {/* Add to cart button */}
        <button 
          className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md transition-transform duration-300 ease-out-expo translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-black hover:text-white"
          aria-label="Add to cart"
        >
          <ShoppingBag className="w-5 h-5" />
        </button>
      </div>
      
      {/* Product details */}
      <div>
        <p className="text-sm text-muted-foreground mb-1">{category}</p>
        <h3 className="font-medium mb-1 line-clamp-1">{name}</h3>
        {originalPrice ? (
          <div className="flex items-center gap-2">
            <p className="font-medium">${price.toFixed(2)}</p>
            <p className="text-sm text-muted-foreground line-through">${originalPrice.toFixed(2)}</p>
          </div>
        ) : (
          <p className="font-medium">${price.toFixed(2)}</p>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
