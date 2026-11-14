const mensItems = [
  {
    name: 'Men Casual White Tee & Jeans',
    discount: '40% OFF',
    oldPrice: '₹2,499',
    price: '₹1,499',
    img: 'https://images.unsplash.com/photo-1516826957135-700dedea698c?w=400&q=80',
  },
  {
    name: 'Navy Formal Tailored Suit',
    discount: '30% OFF',
    oldPrice: '₹8,999',
    price: '₹6,299',
    stock: 'Only 5 left',
    img: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&q=80',
  },
]

function MensFashion() {
  return (
    <section id="mens-fashion" className="mt-2.5 w-full px-2.5 md:px-3">
      <div className="grid gap-2.5 lg:grid-cols-12">
        {/* Left: Men's Fashion (2 Product Cards) */}
        <div className="rounded-sm bg-white p-4 shadow-xs lg:col-span-5">
          <h2 className="mb-4 text-base font-bold text-gray-800 md:text-lg">
            Men&apos;s Fashion
          </h2>

          <div className="grid grid-cols-2 gap-3">
            {mensItems.map((item) => (
              <div
                key={item.name}
                className="group relative flex cursor-pointer flex-col rounded-sm border border-gray-200 p-2.5 text-center transition hover:shadow-md"
              >
                <span className="absolute top-2.5 left-2.5 z-10 rounded-xs bg-red-500 px-2 py-0.5 text-[10px] font-bold text-white">
                  {item.discount}
                </span>

                <button
                  type="button"
                  aria-label="Add to wishlist"
                  className="absolute top-2.5 right-2.5 z-10 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-white text-gray-600 opacity-0 shadow-xs transition group-hover:opacity-100 hover:text-red-500"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                </button>

                <div className="relative flex h-44 w-full items-center justify-center overflow-hidden p-2">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />

                  <button
                    type="button"
                    className="absolute bottom-2 left-1/2 flex -translate-x-1/2 translate-y-2 cursor-pointer items-center gap-1 whitespace-nowrap rounded-full bg-blue-600 px-3.5 py-1.5 text-[11px] font-semibold text-white opacity-0 shadow-xs transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-blue-700"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-3 w-3"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="9" cy="21" r="1" />
                      <circle cx="20" cy="21" r="1" />
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                    </svg>
                    Add to Cart
                  </button>
                </div>

                <p className="mt-2 truncate text-xs text-gray-700">
                  {item.name}
                </p>

                <div className="mt-1 flex items-center justify-center gap-1.5 text-xs">
                  <span className="text-gray-400 line-through">{item.oldPrice}</span>
                  <span className="font-bold text-gray-900">{item.price}</span>
                </div>

                {item.stock && (
                  <p className="mt-0.5 text-[11px] font-medium text-orange-500">
                    {item.stock}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right: Top Selling Products Wide Promo Banner */}
        <div className="relative flex min-h-64 items-center overflow-hidden rounded-sm bg-[#ece7e1] shadow-xs lg:col-span-7">
          <img
            src="https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?w=1000&q=80"
            alt="Top Selling Products"
            className="absolute inset-0 h-full w-full object-cover object-right"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#f7f4f0]/95 via-[#f7f4f0]/75 to-transparent" />

          <div className="relative z-10 max-w-md px-6 py-8 sm:px-10">
            <h3 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
              Top Selling Products
            </h3>
            <p className="mt-2 text-xs font-medium text-gray-700 sm:text-sm">
              Trending Now: Must-Have Styles for Every Occasion
            </p>
            <a
              href="#collections"
              className="mt-5 inline-block rounded-xs bg-gray-900 px-5 py-2 text-xs font-bold tracking-wider text-white uppercase transition hover:bg-blue-600"
            >
              Explore Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MensFashion