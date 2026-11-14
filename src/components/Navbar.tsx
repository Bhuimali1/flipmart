import { useState } from 'react'

function Navbar() {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (!searchQuery.trim()) return
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto flex flex-wrap items-center justify-between gap-2.5 px-3 py-2.5 md:flex-nowrap md:gap-4 md:px-6">
        {/* Logo */}
        <a href="#" className="flex shrink-0 items-center gap-1.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-sm bg-yellow-400 text-blue-700">
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
            >
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
              <path d="M3 6h18" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
          </span>
          <span className="text-lg font-extrabold tracking-tight text-blue-600 md:text-xl">
            Flipmart
          </span>
        </a>

        {/* Full-width Search Bar on Mobile, Inline on Desktop */}
        <form
          onSubmit={handleSearch}
          className="relative order-last w-full md:order-none md:max-w-2xl md:flex-1"
        >
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for Products, Brand and More"
            className="w-full rounded-md bg-blue-50/70 py-2 pl-4 pr-10 text-sm text-gray-700 placeholder-gray-400 focus:bg-white focus:ring-1 focus:ring-blue-600 focus:outline-none"
          />
          <button
            type="submit"
            aria-label="Search"
            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400 transition hover:text-blue-600"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </button>
        </form>

        {/* Right Actions */}
        <div className="flex shrink-0 items-center gap-3.5 md:gap-5">
          <a
            href="#vendor"
            className="hidden rounded-full bg-blue-600 px-5 py-2 text-xs font-semibold text-white transition hover:bg-blue-700 md:inline-block"
          >
            Become a Vendor
          </a>

          <button
            type="button"
            aria-label="Wishlist"
            className="cursor-pointer p-1 text-gray-700 transition hover:text-red-500"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
          </button>

          <button
            type="button"
            aria-label="Account"
            className="cursor-pointer p-1 text-gray-700 transition hover:text-blue-600"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </button>

          <button
            type="button"
            aria-label="Cart"
            className="cursor-pointer p-1 text-gray-700 transition hover:text-blue-600"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
              <path d="M3 6h18" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar