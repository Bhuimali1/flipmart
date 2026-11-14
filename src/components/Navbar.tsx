function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="flex w-full items-center justify-between gap-4 px-3 py-3 md:px-5">
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-yellow-400 text-blue-600">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
              <path d="M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6-2c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2zm0 10c-2.76 0-5-2.24-5-5h2c1.66 1.34 1.34 3 3 3s3-1.34 3-3h2c0 2.76-2.24 5-5 5z" />
            </svg>
          </div>
          <span className="text-xl font-bold text-blue-600 md:text-2xl">
            Flipkart
          </span>
        </a>
        
        {/* Search box*/}
        <form
        onSubmit={(e) => {
          e.preventDefault()
          document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })
        }}
        className="relative flex-1 max-w-2xl"
      >
        <input
          type="text"
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

        <div className="flex items-center gap-4">
          <a
            href="#vendor"
            className="hidden rounded-full bg-blue-600 px-5 py-2 text-xs font-semibold text-white transition hover:bg-blue-700 md:inline-block"
          >
            Become a Vendor
          </a>

          <button className="cursor-pointer p-1.5 text-gray-600 hover:text-red-500">
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

          <button className="cursor-pointer p-1.5 text-gray-600 hover:text-blue-600">
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

          <button className="cursor-pointer p-1.5 text-gray-600 hover:text-blue-600">
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