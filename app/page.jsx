"use client"

import Link from "next/link"
import { ShoppingCart, Truck, Shield, RefreshCw, Package, Zap, Globe } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"

const FEATURED_PRODUCTS = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 199.99,
    image: "/wireless-headphones.png",
    category: "Electronics",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Luxury Watch Collection",
    price: 349.99,
    image: "/luxury-watch.jpg",
    category: "Accessories",
    rating: 4.9,
  },
  {
    id: 3,
    name: "Designer Sunglasses",
    price: 129.99,
    image: "/designer-sunglasses.png",
    category: "Fashion",
    rating: 4.7,
  },
  {
    id: 4,
    name: "Premium Camera",
    price: 599.99,
    image: "/professional-camera.png",
    category: "Electronics",
    rating: 4.9,
  },
]

const CATEGORIES = [
  {
    id: 1,
    name: "Electronics",
    icon: Zap,
    description: "Latest gadgets and tech",
    color: "bg-blue-100 text-blue-700",
  },
  {
    id: 2,
    name: "Fashion",
    icon: Globe,
    description: "Trending styles & apparel",
    color: "bg-pink-100 text-pink-700",
  },
  {
    id: 3,
    name: "Accessories",
    icon: Package,
    description: "Bags, watches & more",
    color: "bg-purple-100 text-purple-700",
  },
  {
    id: 4,
    name: "Home & Living",
    icon: ShoppingCart,
    description: "Furniture and decor",
    color: "bg-green-100 text-green-700",
  },
]

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20 md:py-32 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Discover Premium Products</h1>
              <p className="text-lg md:text-xl mb-8 opacity-90">
                Shop exclusive collections from top brands. Quality guaranteed with unbeatable prices.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link href="/shop">
                  <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg">
                    Shop Now
                  </Button>
                </Link>
                <Link href="/shop">
                  <Button
                    variant="outline"
                    className="px-8 py-6 text-lg border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
                  >
                    Browse Collection
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="/shopping-lifestyle.png"
                alt="Premium shopping experience"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-card py-12 px-4 md:px-8 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <Truck className="w-8 h-8 mb-3 text-accent" />
              <h3 className="font-semibold mb-1">Free Shipping</h3>
              <p className="text-sm text-muted-foreground">On orders over $50</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Shield className="w-8 h-8 mb-3 text-accent" />
              <h3 className="font-semibold mb-1">Secure Payment</h3>
              <p className="text-sm text-muted-foreground">100% secure checkout</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <RefreshCw className="w-8 h-8 mb-3 text-accent" />
              <h3 className="font-semibold mb-1">Easy Returns</h3>
              <p className="text-sm text-muted-foreground">30-day return policy</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <ShoppingCart className="w-8 h-8 mb-3 text-accent" />
              <h3 className="font-semibold mb-1">Fast Checkout</h3>
              <p className="text-sm text-muted-foreground">Quick & easy process</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-4 md:px-8 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Shop by Category</h2>
            <p className="text-muted-foreground text-lg">Find exactly what you're looking for</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {CATEGORIES.map((category) => {
              const IconComponent = category.icon
              return (
                <Link key={category.id} href={`/categories#${category.name.toLowerCase()}`}>
                  <div className="group cursor-pointer bg-card rounded-lg p-6 border border-border hover:border-accent transition-all h-full flex flex-col items-center text-center hover:shadow-lg">
                    <div className={`${category.color} p-4 rounded-lg mb-4 group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                  </div>
                </Link>
              )
            })}
          </div>

          <div className="flex justify-center">
            <Link href="/categories">
              <Button variant="outline" size="lg" className="px-8 py-6 text-lg bg-transparent">
                View All Categories
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
            <p className="text-muted-foreground text-lg">Handpicked selections for you</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURED_PRODUCTS.map((product) => (
              <Link key={product.id} href={`/product/${product.id}`}>
                <div className="group cursor-pointer bg-card rounded-lg overflow-hidden border border-border hover:border-accent transition-all h-full flex flex-col">
                  <div className="relative overflow-hidden bg-muted h-64 sm:h-56">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                      Sale
                    </div>
                  </div>
                  <div className="p-4 flex flex-col flex-grow">
                    <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">{product.category}</p>
                    <h3 className="font-semibold text-lg mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-2xl font-bold text-primary">${product.price}</span>
                      <span className="text-sm flex items-center gap-1">⭐ {product.rating}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Link href="/shop">
              <Button size="lg" className="px-8 py-6 text-lg">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary text-secondary-foreground py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Community</h2>
          <p className="text-lg mb-8 opacity-90">
            Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
          </p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-background text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button className="px-6 py-3">Subscribe</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
