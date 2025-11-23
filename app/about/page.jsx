"use client"

import Link from "next/link"
import { Award, Users, Globe, TrendingUp } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About ShopMatrix</h1>
          <p className="text-lg md:text-xl opacity-90">
            Your trusted destination for premium products and exceptional shopping experience
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4 text-lg leading-relaxed">
                Founded in 2020, ShopMatrix started with a simple mission: to make premium products accessible to everyone.
                What began as a small startup has grown into a thriving online marketplace serving millions of customers
                worldwide.
              </p>
              <p className="text-muted-foreground mb-4 text-lg leading-relaxed">
                We believe in quality over quantity, and every product in our catalog is carefully curated to meet our
                strict standards. Our commitment to excellence has made us the go-to destination for discerning
                shoppers.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Today, we're proud to serve customers in 50+ countries and continue to expand our offerings every single
                day.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-12 h-64 md:h-80 flex items-center justify-center">
              <div className="text-center">
                <Globe className="w-24 h-24 mx-auto text-primary mb-4 opacity-20" />
                <p className="text-muted-foreground">Global Marketplace for Premium Products</p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">5M+</div>
              <p className="text-muted-foreground">Happy Customers</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50K+</div>
              <p className="text-muted-foreground">Products Available</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <p className="text-muted-foreground">Countries Served</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <p className="text-muted-foreground">Customer Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-muted/50 py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground text-lg">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-card rounded-lg p-8 border border-border">
              <Award className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-3">Quality First</h3>
              <p className="text-muted-foreground">
                We never compromise on quality. Every product is vetted to ensure excellence.
              </p>
            </div>

            <div className="bg-card rounded-lg p-8 border border-border">
              <Users className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-3">Customer Centric</h3>
              <p className="text-muted-foreground">
                Your satisfaction is our priority. We go above and beyond to serve you.
              </p>
            </div>

            <div className="bg-card rounded-lg p-8 border border-border">
              <Globe className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-3">Global Reach</h3>
              <p className="text-muted-foreground">
                We connect people worldwide, bringing the best products from everywhere.
              </p>
            </div>

            <div className="bg-card rounded-lg p-8 border border-border">
              <TrendingUp className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-3">Continuous Innovation</h3>
              <p className="text-muted-foreground">We're always improving and evolving to serve you better.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary text-secondary-foreground py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the ShopMatrix Community</h2>
          <p className="text-lg mb-8 opacity-90">
            Discover why millions of customers trust ShopMatrix for their shopping needs.
          </p>
          <Link href="/shop">
            <Button className="px-8 py-6 text-lg">Start Shopping Today</Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
