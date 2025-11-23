"use client"

import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { useCart } from "@/hooks/use-cart"
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react"

export default function CartPage() {
  const { items, removeItem, updateQuantity, getTotal } = useCart()
  const total = getTotal()
  const shipping = items.length > 0 ? (total > 50 ? 0 : 10) : 0
  const tax = total * 0.1
  const grandTotal = total + shipping + tax

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="flex-1">
        {/* Page Header */}
        <div className="bg-muted py-8 px-4 md:px-8 border-b border-border">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Shopping Cart</h1>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 md:px-8 py-8">
          {items.length === 0 ? (
            <div className="text-center py-16">
              <ShoppingBag className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
              <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
              <p className="text-muted-foreground mb-8">Start shopping to add items to your cart</p>
              <Link href="/shop">
                <Button size="lg">Continue Shopping</Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="space-y-4">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="bg-card border border-border rounded-lg p-4 md:p-6 flex gap-4 md:gap-6"
                    >
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-lg bg-muted"
                      />
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <Link href={`/product/${item.id}`}>
                            <h3 className="font-bold text-lg hover:text-primary transition-colors">{item.name}</h3>
                          </Link>
                          <p className="text-muted-foreground mt-1">${item.price.toFixed(2)} each</p>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center border border-border rounded-lg">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-2 text-muted-foreground hover:bg-muted transition-colors"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="px-4 font-semibold min-w-12 text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-2 text-muted-foreground hover:bg-muted transition-colors"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-lg text-primary">${(item.price * item.quantity).toFixed(2)}</p>
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-muted-foreground hover:text-destructive transition-colors p-2"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-card border border-border rounded-lg p-6 sticky top-24">
                  <h3 className="text-xl font-bold mb-6">Order Summary</h3>

                  <div className="space-y-4 mb-6 pb-6 border-b border-border">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Shipping</span>
                      <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Tax</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="flex justify-between mb-6">
                    <span className="font-bold text-lg">Total</span>
                    <span className="font-bold text-2xl text-primary">${grandTotal.toFixed(2)}</span>
                  </div>

                  <Link href="/checkout">
                    <Button className="w-full py-6 text-lg">Proceed to Checkout</Button>
                  </Link>

                  <Link href="/shop">
                    <Button variant="outline" className="w-full mt-3 py-6 bg-transparent">
                      Continue Shopping
                    </Button>
                  </Link>

                  {total > 0 && total <= 50 && (
                    <p className="text-sm text-muted-foreground mt-4 p-3 bg-muted rounded-lg">
                      Free shipping available on orders over $50! Add ${(50 - total).toFixed(2)} more to qualify.
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}
