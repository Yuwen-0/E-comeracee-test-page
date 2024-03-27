interface ProductData {
  id: number; // Unique identifier (auto-increment recommended)
  name: string; // Product name (maximum length: 255 characters)
  description?: string; // Detailed product description (optional)
  shortDescription: string; // Brief product description
  category: string; // Product category
  subcategory: string; // Product subcategory (optional)
  brand: string; // Product brand
  sku: string; // Stock Keeping Unit (unique identifier)
  price: number; // Product price
  salePrice?: number; // Discounted price (optional)
  currency: string; // Currency code (e.g., USD, EUR)
  inventoryLevel: number; // Current stock availability
  weight: number; // Product weight in a suitable unit (e.g., grams, kilograms)
  dimensions: string; // Product dimensions (e.g., "10x5x2 cm")
  color: string; // Product color (optional)
  material: string; // Product material (optional)
  features: string; // Key features of the product
  technicalSpecs?: string; // Detailed technical specifications (optional)
  image: string | ArrayBuffer | null; // URL of the main product image
  videoUrl?: string; // URL of a product video (optional)
  availability: string; // Stock availability status (e.g., "In stock", "Out of stock")
  ratings?: number; // Average product rating (optional)
  numberOfReviews?: number; // Number of product reviews (optional)
  seoTitle: string; // SEO-optimized product title (maximum length: 255 characters)
  seoDescription?: string; // SEO-optimized product description (optional)
  metaKeywords: string; // Comma-separated list of relevant keywords
  createdAt: Date; // Date and time of product creation (default: current time)
  updatedAt?: Date; // Date and time of last product update (optional)
}
