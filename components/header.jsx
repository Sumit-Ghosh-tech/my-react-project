"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Search, ShoppingCart, LogIn } from "lucide-react"
import { useCart } from "@/hooks/use-cart"
import SearchModal from "./search-modal"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const { items } = useCart()
  const cartItemCount = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <>
      <header className="bg-card border-b border-border sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">               
              </div>
              <span className="hidden sm:inline font-bold text-lg">ShopMatrix</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-foreground hover:text-primary transition-colors font-medium">
                Home
              </Link>
              <Link href="/shop" className="text-foreground hover:text-primary transition-colors font-medium">
                Shop
              </Link>
              <Link href="/categories" className="text-foreground hover:text-primary transition-colors font-medium">
                Categories
              </Link>
              <Link href="/about" className="text-foreground hover:text-primary transition-colors font-medium">
                About
              </Link>
              <Link href="/contact" className="text-foreground hover:text-primary transition-colors font-medium">
                Contact
              </Link>
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-2 md:gap-4">
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 hover:bg-muted rounded-lg transition-colors"
                title="Search products"
              >
                <Search className="w-5 h-5" />
              </button>

              <Link
                href="/login"
                className="p-2 hover:bg-muted rounded-lg transition-colors hidden sm:flex items-center gap-2"
              >
                <LogIn className="w-5 h-5" />
                <span className="text-sm font-medium hidden md:inline">Login</span>
              </Link>

              <Link href="/cart" className="relative">
                <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                  <ShoppingCart className="w-5 h-5" />
                  {cartItemCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                      {cartItemCount}
                    </span>
                  )}
                </button>
              </Link>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden pb-4 flex flex-col gap-3">
              <Link
                href="/"
                className="px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/shop"
                className="px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Shop
              </Link>
              <Link
                href="/categories"
                className="px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Categories
              </Link>
              <Link
                href="/about"
                className="px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/login"
                className="px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors font-medium flex items-center gap-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <LogIn className="w-5 h-5" />
                Login
              </Link>
            </nav>
          )}
        </div>
      </header>

      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  )
}
