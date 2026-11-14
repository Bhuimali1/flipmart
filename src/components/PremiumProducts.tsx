const products = [
  {
    name: 'MacBook Pro 14-inch',
    discount: '5% OFF',
    oldPrice: '₹1,99,900',
    price: '₹1,89,900',
    stock: 'Only 7 left',
    img: 'https://grest.in/cdn/shop/files/Frame_9_4_c77df333-0eec-4dbb-a758-4625ebf8f296.png?w=400&q=80',
  },
  {
    name: 'Apple iPhone 15 Pro',
    discount: '8% OFF',
    oldPrice: '₹1,19,900',
    price: '₹1,09,900',
    img: 'https://media-ik.croma.com/Croma%20Assets/Communication/Mobiles/Images/317417_0_7ISiBcc4Y.png?w=400&q=80',
  },
  {
    name: 'Apple Watch Series 9',
    discount: '13% OFF',
    oldPrice: '₹45,900',
    price: '₹39,900',
    stock: 'Only 4 left',
    img: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&q=80',
  },
  {
    name: 'Sony 55-inch 4K Smart TV',
    discount: '17% OFF',
    oldPrice: '₹89,990',
    price: '₹74,990',
    img: 'https://t4.ftcdn.net/jpg/12/98/93/09/360_F_1298930970_DxHZzCJ124MQ2UjgzVCWQUIXRaMsU4BP.jpg?w=400&q=80',
  },
  {
    name: 'Sony PS4 Pro Console',
    discount: '15% OFF',
    oldPrice: '₹39,990',
    price: '₹33,990',
    stock: 'Only 5 left',
    img: 'https://hgworld.in/wp-content/uploads/2020/10/pro-1-1.jpg?w=400&q=80',
  },
  {
    name: 'Sony WH-1000XM5 Headphones',
    discount: '12% OFF',
    oldPrice: '₹34,990',
    price: '₹29,990',
    img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80',
    mobileOnly: true,
  },
]

function PremiumProducts() {
  return (
    <section id="products" className="mt-2.5 w-full px-2.5 md:px-3">
      <div className="grid gap-2.5 lg:grid-cols-12">
        <div className="rounded-sm bg-white p-4 shadow-xs lg:col-span-10">
          <h2 className="mb-4 text-base font-bold text-gray-800 md:text-lg">
            Premium Products
          </h2>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
            {products.map((item) => (
              <div
                key={item.name}
                className={`group relative flex cursor-pointer flex-col rounded-sm p-2.5 text-center transition hover:shadow-md ${
                  item.mobileOnly ? 'md:hidden' : ''
                }`}
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

        <div className="relative flex min-h-64 flex-col items-center justify-between overflow-hidden rounded-sm bg-gradient-to-b from-[#0f5cc0] via-[#0a4494] to-[#062b63] p-5 text-center text-white shadow-xs lg:col-span-2">
          <img
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=500&q=80"
            alt="Flight"
            className="absolute inset-0 h-full w-full object-cover opacity-35 mix-blend-luminosity"
          />

          <svg
            viewBox="0 0 200 120"
            className="pointer-events-none absolute inset-x-0 bottom-8 w-full opacity-55"
            fill="none"
          >
            <path
              d="M-10 90 Q 100 10 210 90"
              stroke="white"
              strokeWidth="1.5"
              strokeDasharray="3 3"
            />
            <path
              d="M-10 105 Q 100 35 210 105"
              stroke="white"
              strokeWidth="1"
            />
          </svg>

          <div className="relative z-10 mt-6">
            <p className="text-3xl font-black tracking-tight uppercase leading-none">
              Flight
            </p>
            <p className="mt-1 text-3xl font-black tracking-tight uppercase leading-none">
              Ticket
            </p>
          </div>

          <div className="relative z-10 my-3">
            <span className="offer-loop inline-block rounded-xs bg-yellow-400 px-3.5 py-1 text-sm font-black tracking-wide text-gray-900 shadow-md">
              40% OFF
            </span>
          </div>

          <a
            href="#flight"
            className="relative z-10 mb-2 rounded-xs bg-white px-5 py-1.5 text-[11px] font-extrabold tracking-wider text-gray-900 uppercase shadow-xs transition hover:bg-yellow-400"
          >
            Book Now
          </a>
        </div>
      </div>
    </section>
  )
}

export default PremiumProducts