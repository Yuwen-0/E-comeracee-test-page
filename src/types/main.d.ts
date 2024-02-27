interface ProductData {
  id: string; // Unique identifier (required)
  name: string; // Name of the product (required)
  category: string; // Category of the product (required)
  price: number; // Price of the product (required)
  discount?: number; // Discount on the product (optional)
  reviews?: number; // Number of reviews (optional)
  brand: string; // Brand of the product (required)
  stock: number; // Available stock of the product (required)
  releaseDate: Date; // Release date of the product (default: current date)
  featured: boolean; // Whether the product is featured (default: false)

  // Optional fields
  description?: string; // Description of the product
  imageUrl?: string; // URL of the product image
  color?: string; // Color of the product
  size?: string; // Size of the product
  material?: string; // Material of the product
  weight?: number; // Weight of the product
  dimensions?: string; // Dimensions of the product
  manufacturer?: string; // Manufacturer of the product
  rating?: number; // Average rating of the product
  warranty?: number; // Warranty period in months
  tags?: string; // Comma-separated list of tags
  shippingInfo?: string; // Shipping information
}