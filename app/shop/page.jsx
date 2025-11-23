"use client"

import { useState } from "react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ChevronDown } from "lucide-react"
import { ALL_PRODUCTS } from "@/lib/products"

const CATEGORIES = ["All", "Electronics", "Fashion", "Accessories"]
const PRICE_RANGES = [
  { label: "All Prices", min: 0, max: 1000 },
  { label: "Under $50", min: 0, max: 50 },
  { label: "$50 - $100", min: 50, max: 100 },
  { label: "$100 - $250", min: 100, max: 250 },
  { label: "$250+", min: 250, max: 1000 },
]

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedPrice, setSelectedPrice] = useState({ min: 0, max: 1000 })
  const [sortBy, setSortBy] = useState("featured")

  const filteredProducts = ALL_PRODUCTS.filter((p) => selectedCategory === "All" || p.category === selectedCategory)
    .filter((p) => p.price >= selectedPrice.min && p.price <= selectedPrice.max)
    .sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price
      if (sortBy === "price-high") return b.price - a.price
      if (sortBy === "rating") return b.rating - a.rating
      return 0
    })

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="flex-1">
        {/* Page Header */}
        <div className="bg-muted py-8 px-4 md:px-8 border-b border-border">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Shop Our Collection</h1>
            <p className="text-muted-foreground">Browse our curated selection of premium products</p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 md:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Sidebar Filters */}
            <div className="md:col-span-1">
              <div className="bg-card rounded-lg border border-border p-6 sticky top-24">
                {/* Category Filter */}
                <div className="mb-6">
                  <h3 className="font-bold mb-3 text-lg">Category</h3>
                  <div className="space-y-2">
                    {CATEGORIES.map((cat) => (
                      <label key={cat} className="flex items-center cursor-pointer group">
                        <input
                          type="radio"
                          name="category"
                          value={cat}
                          checked={selectedCategory === cat}
                          onChange={(e) => setSelectedCategory(e.target.value)}
                          className="w-4 h-4 cursor-pointer"
                        />
                        <span className="ml-3 group-hover:text-primary transition-colors">{cat}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Filter */}
                <div>
                  <h3 className="font-bold mb-3 text-lg">Price</h3>
                  <div className="space-y-2">
                    {PRICE_RANGES.map((range) => (
                      <label key={range.label} className="flex items-center cursor-pointer group">
                        <input
                          type="radio"
                          name="price"
                          checked={selectedPrice.min === range.min && selectedPrice.max === range.max}
                          onChange={() => setSelectedPrice({ min: range.min, max: range.max })}
                          className="w-4 h-4 cursor-pointer"
                        />
                        <span className="ml-3 group-hover:text-primary transition-colors">{range.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Products */}
            <div className="md:col-span-3">
              {/* Sort */}
              <div className="flex items-center justify-between mb-6">
                <p className="text-muted-foreground">Showing {filteredProducts.length} products</p>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-card border border-border rounded-lg px-4 py-2 pr-8 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rating</option>
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none text-muted-foreground" />
                </div>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <Link key={product.id} href={`/product/${product.id}`}>
                    <div className="group cursor-pointer bg-card rounded-lg overflow-hidden border border-border hover:border-accent transition-all h-full flex flex-col">
                      <div className="relative overflow-hidden bg-muted h-64">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4 flex flex-col flex-grow">
                        <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">{product.category}</p>
                        <h3 className="font-semibold text-lg mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                          {product.name}
                        </h3>
                        <div className="flex items-center justify-between mt-auto">
                          <span className="text-2xl font-bold text-primary">${product.price}</span>
                          <span className="text-sm">⭐ {product.rating}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
