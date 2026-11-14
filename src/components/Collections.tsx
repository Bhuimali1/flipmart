const items = [
  {
    name: 'Corset Leather with Skirt',
    discount: '40% OFF',
    oldPrice: '₹4,999',
    price: '₹2,999',
    img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&q=80',
  },
  {
    name: 'Corset with Black Skirt',
    discount: '38% OFF',
    oldPrice: '₹3,999',
    price: '₹2,499',
    img: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=400&q=80',
  },
  {
    name: 'Pea Green Dress',
    discount: '33% OFF',
    oldPrice: '₹2,999',
    price: '₹1,999',
    img: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&q=80',
  },
  {
    name: 'Mami Red & Black Suit',
    discount: '24% OFF',
    oldPrice: '₹32,999',
    price: '₹24,999',
    stock: 'Only 11 left',
    img: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&q=80',
  },
  {
    name: "Black Women's Gown",
    discount: '38% OFF',
    oldPrice: '₹7,999',
    price: '₹4,999',
    img: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=400&q=80',
  },
  {
    name: "Heshe Women's Leather Bag",
    discount: '36% OFF',
    oldPrice: '₹5,499',
    price: '₹3,499',
    img: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&q=80',
  },
]

function Collections() {
  return (
    <section id="collections" className="mt-2.5 w-full px-2.5 md:px-3">
      <div className="rounded-sm bg-white p-4 shadow-xs">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-base font-bold text-gray-800 md:text-lg">
            Clothing and Girls Collections
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {items.map((item) => (
            <div
              key={item.name}
              className="group relative flex cursor-pointer flex-col rounded-sm p-2.5 text-center transition hover:shadow-md"
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
    </section>
  )
}

export default Collections