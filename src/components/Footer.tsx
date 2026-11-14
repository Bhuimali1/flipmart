function Footer() {
  return (
    <footer className="mt-6 w-full bg-[#212121] text-white">
      <div className="mx-auto grid gap-8 px-4 py-10 text-xs sm:grid-cols-2 md:px-8 lg:grid-cols-12">
        {/* Link Columns */}
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:col-span-7">
          <div>
            <h3 className="mb-3 text-[11px] font-semibold tracking-wider text-gray-400 uppercase">
              About
            </h3>
            <ul className="space-y-2 font-medium">
              <li>
                <a href="#contact" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#about" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#careers" className="hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#stories" className="hover:underline">
                  Flipmart Stories
                </a>
              </li>
              <li>
                <a href="#press" className="hover:underline">
                  Press
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-[11px] font-semibold tracking-wider text-gray-400 uppercase">
              Help
            </h3>
            <ul className="space-y-2 font-medium">
              <li>
                <a href="#payments" className="hover:underline">
                  Payments
                </a>
              </li>
              <li>
                <a href="#shipping" className="hover:underline">
                  Shipping
                </a>
              </li>
              <li>
                <a href="#returns" className="hover:underline">
                  Cancellation &amp; Returns
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:underline">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-[11px] font-semibold tracking-wider text-gray-400 uppercase">
              Consumer Policy
            </h3>
            <ul className="space-y-2 font-medium">
              <li>
                <a href="#return-policy" className="hover:underline">
                  Cancellation &amp; Returns
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:underline">
                  Terms Of Use
                </a>
              </li>
              <li>
                <a href="#security" className="hover:underline">
                  Security
                </a>
              </li>
              <li>
                <a href="#privacy" className="hover:underline">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#sitemap" className="hover:underline">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-[11px] font-semibold tracking-wider text-gray-400 uppercase">
              Social
            </h3>
            <div className="flex items-center gap-3">
              {/* Facebook */}
              <a
                href="#facebook"
                aria-label="Facebook"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-600 text-gray-200 transition active:scale-95 active:border-blue-500 active:bg-blue-600 active:text-white hover:border-blue-500 hover:bg-blue-600 hover:text-white"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                  <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5Z" />
                </svg>
              </a>

              {/* X (Twitter) */}
              <a
                href="#x"
                aria-label="X"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-600 text-gray-200 transition active:scale-95 active:border-white active:bg-white active:text-gray-900 hover:border-white hover:bg-white hover:text-gray-900"
              >
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="#youtube"
                aria-label="YouTube"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-600 text-gray-200 transition active:scale-95 active:border-red-600 active:bg-red-600 active:text-white hover:border-red-600 hover:bg-red-600 hover:text-white"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#instagram"
                aria-label="Instagram"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-600 text-gray-200 transition active:scale-95 active:border-pink-500 active:bg-pink-600 active:text-white hover:border-pink-500 hover:bg-pink-600 hover:text-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
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
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Utility & Copyright Bar */}
      <div className="border-t border-gray-700 px-4 py-5 text-xs md:px-8">
        <div className="flex items-center justify-center ig:justify-between">
          <p className="text-gray-400">© 2026 Flipmart.com</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer