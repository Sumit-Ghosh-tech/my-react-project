"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { useCart } from "@/hooks/use-cart"
import { ALL_PRODUCTS } from "@/lib/products"
import { ShoppingCart, Heart, Share2, ChevronRight } from "lucide-react"

export default function Productdetails({id}:{id:string}) {
  const router = useRouter()
  const product = ALL_PRODUCTS.find((p) => p.id === Number.parseInt(id))
  const { addItem } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [addedToCart, setAddedToCart] = useState(false)

  if (!product) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-2">Product not found</h1>
            <Link href="/shop">
              <Button>Back to Shop</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity,
      image: product.image,
    })
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2000)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="flex-1">
        {/* Breadcrumb */}
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-4 flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/shop" className="hover:text-primary transition-colors">
            Shop
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground">{product.name}</span>
        </div>

        {/* Product Detail */}
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Image */}
            <div className="flex items-center justify-center bg-muted rounded-lg overflow-hidden h-96 md:h-full min-h-96">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Details */}
            <div className="flex flex-col justify-between">
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">{product.category}</p>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>

                {/* Rating */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">⭐ {product.rating}</span>
                    <span className="text-muted-foreground">(248 reviews)</span>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <p className="text-4xl font-bold text-primary mb-2">${product.price}</p>
                  <p className="text-muted-foreground line-through">${(product.price * 1.2).toFixed(2)}</p>
                </div>

                {/* Description */}
                <p className="text-foreground text-lg leading-relaxed mb-8">
                  Experience premium quality with our {product.name}. This product is designed to meet the highest
                  standards of excellence and customer satisfaction.
                </p>

                {/* Product Features */}
                <div className="mb-8">
                  <h3 className="font-bold mb-4">Features:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>✓ Premium quality materials</li>
                    <li>✓ Lifetime warranty included</li>
                    <li>✓ Free shipping worldwide</li>
                    <li>✓ 30-day money-back guarantee</li>
                  </ul>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-border rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-2 text-muted-foreground hover:bg-muted transition-colors"
                    >
                      −
                    </button>
                    <span className="px-4 py-2 font-semibold min-w-12 text-center">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-4 py-2 text-muted-foreground hover:bg-muted transition-colors"
                    >
                      +
                    </button>
                  </div>
                  <Button onClick={handleAddToCart} className="flex-1 py-6 text-lg" size="lg">
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    {addedToCart ? "Added to Cart!" : "Add to Cart"}
                  </Button>
                </div>

                <div className="flex gap-4">
                  <button className="flex-1 py-3 border border-border rounded-lg hover:bg-muted transition-colors font-medium flex items-center justify-center gap-2">
                    <Heart className="w-5 h-5" />
                    Wishlist
                  </button>
                  <button className="flex-1 py-3 border border-border rounded-lg hover:bg-muted transition-colors font-medium flex items-center justify-center gap-2">
                    <Share2 className="w-5 h-5" />
                    Share
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          <div className="mt-20 pt-12 border-t border-border">
            <h2 className="text-2xl font-bold mb-8">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {ALL_PRODUCTS.filter((p) => p.id !== product.id)
                .slice(0, 4)
                .map((relatedProduct) => (
                  <Link key={relatedProduct.id} href={`/product/${relatedProduct.id}`}>
                    <div className="group cursor-pointer bg-card rounded-lg overflow-hidden border border-border hover:border-accent transition-all">
                      <div className="relative overflow-hidden bg-muted h-48">
                        <img
                          src={relatedProduct.image || "/placeholder.svg"}
                          alt={relatedProduct.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                          {relatedProduct.name}
                        </h3>
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-primary">${relatedProduct.price}</span>
                          <span className="text-sm">⭐ {relatedProduct.rating}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
