"use client"

import Link from "next/link"
import { Package, Zap, Globe, Home, Star, ArrowRight } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"

const CATEGORIES_LIST = [
  {
    id: 1,
    name: "Electronics",
    icon: Zap,
    description: "Latest gadgets, smartphones, laptops, and tech accessories",
    color: "bg-blue-100 text-blue-700",
    productCount: 1250,
  },
  {
    id: 2,
    name: "Fashion",
    icon: Globe,
    description: "Trendy clothing, shoes, and apparel for all seasons",
    color: "bg-pink-100 text-pink-700",
    productCount: 2100,
  },
  {
    id: 3,
    name: "Accessories",
    icon: Package,
    description: "Bags, watches, jewelry, and complementary items",
    color: "bg-purple-100 text-purple-700",
    productCount: 890,
  },
  {
    id: 4,
    name: "Home & Living",
    icon: Home,
    description: "Furniture, decor, and everything for your home",
    color: "bg-green-100 text-green-700",
    productCount: 1450,
  },
]

export default function CategoriesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Shop by Category</h1>
          <p className="text-lg md:text-xl opacity-90">Explore our wide range of products organized by category</p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CATEGORIES_LIST.map((category) => {
              const IconComponent = category.icon
              return (
                <Link key={category.id} href="/shop">
                  <div className="group cursor-pointer bg-card rounded-lg overflow-hidden border border-border hover:border-accent transition-all h-full hover:shadow-lg">
                    <div className="p-8 flex flex-col h-full">
                      <div className="flex items-start justify-between mb-6">
                        <div className={`${category.color} p-4 rounded-lg group-hover:scale-110 transition-transform`}>
                          <IconComponent className="w-8 h-8" />
                        </div>
                        <span className="text-sm font-semibold text-muted-foreground bg-muted px-3 py-1 rounded-full">
                          {category.productCount} items
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-muted-foreground mb-6 flex-grow">{category.description}</p>

                      <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all">
                        Explore <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="bg-muted/50 py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Best Sellers</h2>
            <p className="text-muted-foreground text-lg">Most popular products across all categories</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Wireless Headphones", rating: 4.8 },
              { name: "Luxury Watch", rating: 4.9 },
              { name: "Designer Sunglasses", rating: 4.7 },
              { name: "Premium Camera", rating: 4.9 },
            ].map((product, idx) => (
              <div
                key={idx}
                className="bg-card rounded-lg p-6 border border-border hover:border-accent transition-all text-center"
              >
                <div className="mb-4 flex justify-center">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-accent text-accent" : "text-muted-foreground"}`}
                    />
                  ))}
                </div>
                <h4 className="font-semibold mb-2">{product.name}</h4>
                <p className="text-sm text-accent font-bold">{product.rating} Rating</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary text-secondary-foreground py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Find Your Favorites?</h2>
          <p className="text-lg mb-8 opacity-90">Browse through thousands of quality products at unbeatable prices.</p>
          <Link href="/shop">
            <Button className="px-8 py-6 text-lg">Start Shopping Now</Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
