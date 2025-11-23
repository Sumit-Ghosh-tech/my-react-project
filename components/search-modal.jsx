"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, X } from "lucide-react";
import { ALL_PRODUCTS } from "@/lib/products";

export default function SearchModal({ isOpen, onClose }) {
  const [searchQuery, setSearchQuery] = useState("");

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase();
    return ALL_PRODUCTS.filter(
      (product) =>
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.price.toString().includes(query)
    ).slice(0, 6);
  }, [searchQuery]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose} />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4">
        <div className="w-full max-w-2xl bg-card rounded-lg shadow-lg border border-border overflow-hidden">
          {/* Search Input */}
          <div className="flex items-center border-b border-border p-4">
            <Search className="w-5 h-5 text-muted-foreground mr-3" />
            <input
              type="text"
              placeholder="Search products, categories, or prices..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
              autoFocus
            />
            <button onClick={onClose} className="p-1 hover:bg-muted rounded-lg transition-colors">
              <X className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>

          {/* Results */}
          <div className="max-h-96 overflow-y-auto">
            {searchQuery.trim() === "" ? (
              <div className="p-8 text-center text-muted-foreground">
                <p>Start typing to search products</p>
              </div>
            ) : searchResults.length === 0 ? (
              <div className="p-8 text-center text-muted-foreground">
                <p>No products found for "{searchQuery}"</p>
              </div>
            ) : (
              <div className="divide-y divide-border">
                {searchResults.map((product) => (
                  <Link
                    key={product.id}
                    href={`/product/${product.id}`}
                    onClick={onClose}
                    className="flex items-center gap-4 p-4 hover:bg-muted transition-colors"
                  >
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-16 h-16 rounded-lg object-cover bg-muted flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground truncate">{product.name}</h3>
                      <p className="text-sm text-muted-foreground">{product.category}</p>
                    </div>
                    <span className="font-bold text-primary whitespace-nowrap">${product.price}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {searchResults.length > 0 && (
            <div className="border-t border-border p-4 text-center">
              <Link
                href={`/shop?search=${encodeURIComponent(searchQuery)}`}
                onClick={onClose}
                className="text-primary hover:underline font-medium"
              >
                View all results
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}