const categories = [
  { name: 'Accessories', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=150&q=80' },
  { name: 'Audio', img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=150&q=80' },
  { name: 'Beauty', img: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=150&q=80' },
  { name: 'Best Deals', img: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=150&q=80' },
  { name: 'Best Seller', img: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=150&q=80' },
  { name: 'Cameras', img: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=150&q=80' },
  { name: 'Chair', img: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=150&q=80' },
  { name: 'Clothing', img: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=150&q=80' },
  { name: 'Computer & Laptop', img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=150&q=80' },
  { name: 'Electronics', img: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=150&q=80' },
]

function Categories() {
  return (
    <section className="mt-2.5 w-full px-2.5 md:px-3">
      <div className="flex items-center justify-between gap-4 overflow-x-auto rounded-sm bg-white px-6 py-3.5 shadow-xs">
        {categories.map((item) => (
          <a
            key={item.name}
            href={`#${item.name.toLowerCase()}`}
            className="group flex shrink-0 flex-col items-center gap-1.5 text-center"
          >
            <div className="h-14 w-14 overflow-hidden rounded-sm bg-gray-100 p-1">
              <img
                src={item.img}
                alt={item.name}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <span className="text-xs font-semibold whitespace-nowrap text-gray-700 group-hover:text-blue-600">
              {item.name}
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Categories