import { useEffect, useRef, useState } from 'react'

const slides = [
  {
    title: 'EXCLUSIVE',
    subtitle: 'COLLECTION',
    discount: '70%',
    bg: 'bg-[#b39563]',
    textColor: 'text-[#b39563]',
    img: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=900&q=80',
  },
  {
    title: 'MEGA TECH',
    subtitle: 'FESTIVAL',
    discount: '60%',
    bg: 'bg-[#2a5c8f]',
    textColor: 'text-[#2a5c8f]',
    img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900&q=80',
  },
  {
    title: 'TRENDING',
    subtitle: 'FASHION SALE',
    discount: '50%',
    bg: 'bg-[#3b6e5c]',
    textColor: 'text-[#3b6e5c]',
    img: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=900&q=80',
  },
]

const trackSlides = [...slides, slides[0]]

function Hero() {
  const [current, setCurrent] = useState(0)
  const [animate, setAnimate] = useState(true)
  const [dragOffset, setDragOffset] = useState(0)
  const [dragging, setDragging] = useState(false)
  const startX = useRef(0)

  const goNext = () => {
    setAnimate(true)
    setCurrent((prev) => (prev >= slides.length ? 1 : prev + 1))
  }

  const goPrev = () => {
    if (current === 0) {
      setAnimate(false)
      setCurrent(slides.length)
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setAnimate(true)
          setCurrent(slides.length - 1)
        })
      })
    } else {
      setAnimate(true)
      setCurrent((prev) => prev - 1)
    }
  }

  useEffect(() => {
    if (dragging) return
    const timer = setInterval(goNext, 4000)
    return () => clearInterval(timer)
  }, [current, dragging])

  const handleTransitionEnd = (e: React.TransitionEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget) return
    if (current === slides.length) {
      setAnimate(false)
      setCurrent(0)
    }
  }

  const startDrag = (clientX: number) => {
    setDragging(true)
    setAnimate(false)
    startX.current = clientX
  }

  const moveDrag = (clientX: number) => {
    if (!dragging) return
    setDragOffset(clientX - startX.current)
  }

  const endDrag = () => {
    if (!dragging) return
    setDragging(false)
    if (dragOffset < -60) {
      goNext()
    } else if (dragOffset > 60) {
      goPrev()
    } else {
      setAnimate(true)
    }
    setDragOffset(0)
  }

  const activeDot = current % slides.length

  return (
    <section className="mt-2.5 w-full px-2.5 md:px-3">
      <div
        onMouseDown={(e) => startDrag(e.clientX)}
        onMouseMove={(e) => moveDrag(e.clientX)}
        onMouseUp={endDrag}
        onMouseLeave={endDrag}
        onTouchStart={(e) => startDrag(e.touches[0].clientX)}
        onTouchMove={(e) => moveDrag(e.touches[0].clientX)}
        onTouchEnd={endDrag}
        className="relative cursor-grab overflow-hidden rounded-sm bg-white shadow-xs select-none active:cursor-grabbing"
      >
        <div
          onTransitionEnd={handleTransitionEnd}
          className={`flex ${animate ? 'transition-transform duration-700 ease-in-out' : ''}`}
          style={{
            transform: `translateX(calc(-${current * 100}% + ${dragOffset}px))`,
          }}
        >
          {trackSlides.map((slide, index) => {
            const active =
              index === current ||
              (current === slides.length && index === 0) ||
              (current === 0 && index === slides.length)

            return (
              <div
                key={`${slide.title}-${index}`}
                className="grid w-full shrink-0 md:grid-cols-12"
              >
                <div className="flex flex-col items-center justify-center px-6 py-12 text-center md:col-span-5 md:py-16">
                  <h2
                    className={`text-2xl font-extrabold tracking-wide text-gray-900 sm:text-3xl lg:text-4xl ${
                      animate ? 'transition-all duration-500' : ''
                    } ${
                      active ? 'translate-y-0 opacity-100 delay-150' : '-translate-y-4 opacity-0'
                    }`}
                  >
                    {slide.title}
                  </h2>
                  <p
                    className={`mt-1 text-2xl font-extrabold tracking-wide sm:text-3xl lg:text-4xl ${slide.textColor} ${
                      animate ? 'transition-all duration-500' : ''
                    } ${
                      active ? 'translate-y-0 opacity-100 delay-300' : 'translate-y-4 opacity-0'
                    }`}
                  >
                    {slide.subtitle}
                  </p>

                  <div className="mt-6 flex items-center gap-2.5">
                    {slides.map((_, i) => (
                      <span
                        key={i}
                        className={`h-2.5 w-2.5 ${
                          i === activeDot ? 'bg-gray-900' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div
                  className={`relative flex items-center justify-between px-6 py-8 text-white md:col-span-7 md:rounded-l-full md:pl-20 md:pr-12 ${slide.bg}`}
                >
                  <div className="z-10">
                    <p
                      className={`text-4xl font-extrabold leading-none sm:text-5xl lg:text-6xl ${
                        animate ? 'transition-all duration-500' : ''
                      } ${
                        active ? 'translate-x-0 opacity-100 delay-200' : '-translate-x-5 opacity-0'
                      }`}
                    >
                      {slide.discount}
                    </p>
                    <p
                      className={`mt-1 text-2xl font-bold tracking-wider sm:text-3xl lg:text-4xl ${
                        animate ? 'transition-all duration-500' : ''
                      } ${
                        active ? 'translate-x-0 opacity-100 delay-300' : '-translate-x-5 opacity-0'
                      }`}
                    >
                      OFF
                    </p>
                    <a
                      href="#products"
                      onPointerDown={(e) => e.stopPropagation()}
                      className={`mt-4 inline-block cursor-pointer border border-white px-5 py-2 text-[11px] font-bold tracking-widest text-white uppercase hover:scale-105 hover:bg-white hover:text-gray-900 hover:shadow-md ${
                        animate ? 'transition-all duration-500' : ''
                      } ${
                        active ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                      }`}
                    >
                      Order Now
                    </a>
                  </div>

                  <img
                    src={slide.img}
                    alt={slide.subtitle}
                    draggable={false}
                    className={`h-44 w-48 rounded-lg object-cover shadow-md sm:h-56 sm:w-80 lg:h-64 lg:w-96 ${
                      animate ? 'transition-all duration-700' : ''
                    } ${
                      active ? 'scale-100 opacity-100 delay-150' : 'scale-95 opacity-80'
                    }`}
                  />
                </div>
              </div>
            )
          })}
        </div>

        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setAnimate(true)
                setCurrent(index)
              }}
              aria-label={`Slide ${index + 1}`}
              className={`h-2 cursor-pointer rounded-full transition-all ${
                activeDot === index ? 'w-5 bg-gray-800 md:bg-white' : 'w-2 bg-gray-400 md:bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero