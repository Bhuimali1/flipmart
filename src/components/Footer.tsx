import { useState } from 'react'

const quickLinks = [
  { label: 'Home', href: '#' },
  { label: 'Shop', href: '#products' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const customerServiceLinks = [
  { label: 'My Account', href: '#account' },
  { label: 'Track Order', href: '#track-order' },
  { label: 'Wishlist', href: '#wishlist' },
  { label: 'Returns & Refunds', href: '#returns' },
]

function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [activeSocial, setActiveSocial] = useState<string | null>(null)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    setSubscribed(true)
    setEmail('')
  }

  return (
    <footer className="mt-6 w-full bg-[#212121] text-white">
      {/* Top Newsletter Subscribe Bar */}
      <div className="border-b border-gray-700 px-4 py-7 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="text-center md:text-left">
            <h3 className="text-base font-bold text-white md:text-lg">
              Subscribe to our Newsletter
            </h3>
            <p className="mt-1 text-xs text-gray-400">
              Get updates about our latest products and offers.
            </p>
          </div>

          <form
            onSubmit={handleSubscribe}
            className="mx-auto flex w-full max-w-md items-stretch overflow-hidden rounded-xs md:mx-0"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                if (subscribed) setSubscribed(false)
              }}
              placeholder={
                subscribed ? 'Subscribed! Thank you.' : 'Enter your email'
              }
              className="w-full bg-white px-3.5 py-2.5 text-xs text-gray-800 placeholder-gray-400 outline-none sm:text-sm"
            />
            <button
              type="submit"
              className="shrink-0 cursor-pointer bg-blue-600 px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-blue-700 active:scale-95 sm:text-sm"
            >
              {subscribed ? 'Subscribed' : 'Subscribe'}
            </button>
          </form>
        </div>
      </div>

      {/* 2x2 Mobile / 4-Column Desktop Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-10 text-xs md:px-8">
        <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
          {/* Column 1: Flipmart Brand Description */}
          <div>
            <h3 className="mb-3 text-base font-extrabold tracking-tight text-blue-500">
              Flipmart
            </h3>
            <p className="max-w-xs leading-relaxed text-gray-400">
              Your one-stop destination for fashion, electronics and lifestyle
              products.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="mb-3 text-xs font-bold text-white">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-white hover:underline">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Customer Service */}
          <div>
            <h3 className="mb-3 text-xs font-bold text-white">
              Customer Service
            </h3>
            <ul className="space-y-2 text-gray-300">
              {customerServiceLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-white hover:underline">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Follow Us & Support Email */}
          <div>
            <h3 className="mb-3 text-xs font-bold text-white">Follow Us</h3>
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Facebook */}
              <button
                type="button"
                aria-label="Facebook"
                onClick={() =>
                  setActiveSocial((prev) =>
                    prev === 'facebook' ? null : 'facebook',
                  )
                }
                className={`flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border transition active:scale-95 sm:h-8 sm:w-8 ${
                  activeSocial === 'facebook'
                    ? 'border-blue-500 bg-blue-600 text-white'
                    : 'border-gray-600 text-gray-200 hover:border-blue-500 hover:bg-blue-600 hover:text-white'
                }`}
              >
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 sm:h-4 sm:w-4" fill="currentColor">
                  <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5Z" />
                </svg>
              </button>

              {/* Instagram */}
              <button
                type="button"
                aria-label="Instagram"
                onClick={() =>
                  setActiveSocial((prev) =>
                    prev === 'instagram' ? null : 'instagram',
                  )
                }
                className={`flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border transition active:scale-95 sm:h-8 sm:w-8 ${
                  activeSocial === 'instagram'
                    ? 'border-pink-500 bg-pink-600 text-white'
                    : 'border-gray-600 text-gray-200 hover:border-pink-500 hover:bg-pink-600 hover:text-white'
                }`}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </button>

              {/* X (Twitter) */}
              <button
                type="button"
                aria-label="X"
                onClick={() =>
                  setActiveSocial((prev) => (prev === 'x' ? null : 'x'))
                }
                className={`flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border transition active:scale-95 sm:h-8 sm:w-8 ${
                  activeSocial === 'x'
                    ? 'border-white bg-white text-gray-900'
                    : 'border-gray-600 text-gray-200 hover:border-white hover:bg-white hover:text-gray-900'
                }`}
              >
                <svg viewBox="0 0 24 24" className="h-3 w-3 sm:h-3.5 sm:w-3.5" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </button>

              {/* YouTube */}
              <button
                type="button"
                aria-label="YouTube"
                onClick={() =>
                  setActiveSocial((prev) =>
                    prev === 'youtube' ? null : 'youtube',
                  )
                }
                className={`flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border transition active:scale-95 sm:h-8 sm:w-8 ${
                  activeSocial === 'youtube'
                    ? 'border-red-600 bg-red-600 text-white'
                    : 'border-gray-600 text-gray-200 hover:border-red-600 hover:bg-red-600 hover:text-white'
                }`}
              >
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 sm:h-4 sm:w-4" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </button>
            </div>

            <a
              href="mailto:support@flipmart.com"
              className="mt-4 inline-flex items-center gap-1.5 break-all text-gray-300 transition hover:text-white"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 shrink-0 text-gray-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span>support@flipmart.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Centered Bottom Copyright Bar */}
      <div className="border-t border-gray-700 px-4 py-5 text-xs md:px-8">
        <div className="flex items-center justify-center">
          <p className="text-center text-gray-400">
            © 2026 Flipmart. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer