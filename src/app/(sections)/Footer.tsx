export default function Footer() {
  return (
    <footer className="footer bg-base-200 text-base-content section-padding pt-12 sm:pt-16 lg:pt-20 px-4 sm:px-6 lg:px-8">
      <div className="w-full flex justify-center">
        <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="footer grid grid-cols-1 sm:grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-8 md:gap-6 lg:gap-8 justify-items-start sm:justify-items-center md:justify-items-start text-left sm:text-center md:text-left">
            {/* Company Info */}
            <div className="sm:col-span-1 md:col-span-2 lg:col-span-2">
              <div className="flex items-center justify-start sm:justify-center lg:justify-start gap-3 mb-6">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-content" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="text-xl sm:text-2xl font-bold">FarmRoket™</span>
              </div>
              <div className="flex justify-start sm:justify-center md:justify-start">
                <p className="text-sm sm:text-base text-base-content/70 max-w-sm mb-6 leading-relaxed">
                  Blockchain-powered food traceability platform helping suppliers meet compliance requirements and build consumer trust.
                </p>
              </div>
              <div className="flex gap-4 justify-start sm:justify-center md:justify-start">
                <a href="#" className="social-icon">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="social-icon">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="social-icon">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Product & Solutions */}
            <nav className="md:col-span-1 lg:col-span-1">
              <h6 className="text-sm font-semibold uppercase tracking-wider mb-3" style={{color: '#a5ce39'}}>Platform</h6>
              <a className="link link-hover">Features</a>
              <a className="link link-hover">Dashboard</a>
              <a className="link link-hover">QR Codes</a>
              <a className="link link-hover">API Documentation</a>
              <a className="link link-hover">For Suppliers</a>
              <a className="link link-hover">For Farmers</a>
              <a className="link link-hover">Enterprise</a>
            </nav>

            {/* Resources & Support */}
            <nav className="md:col-span-1 lg:col-span-1">
              <h6 className="text-sm font-semibold uppercase tracking-wider mb-3" style={{color: '#a5ce39'}}>Resources</h6>
              <a className="link link-hover">Documentation</a>
              <a className="link link-hover">FSMA 204 Guide</a>
              <a className="link link-hover">EUDR Compliance</a>
              <a className="link link-hover">Case Studies</a>
              <a className="link link-hover">Help Center</a>
              <a className="link link-hover">Contact Support</a>
              <a className="link link-hover">System Status</a>
            </nav>

            {/* Company */}
            <nav className="md:col-span-1 lg:col-span-1">
              <h6 className="text-sm font-semibold uppercase tracking-wider mb-3" style={{color: '#a5ce39'}}>Company</h6>
              <a className="link link-hover">About Us</a>
              <a className="link link-hover">Careers</a>
              <a className="link link-hover">Contact</a>
              <a className="link link-hover">Press Kit</a>
              <a className="link link-hover">Partners</a>
              <a className="link link-hover">Blog</a>
              <a className="link link-hover">Security</a>
            </nav>
          </div>

          {/* Compliance Badges */}
          <div className="divider my-6 sm:my-8"></div>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-8">
            <div className="badge badge-outline gap-1 p-2">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-xs">SOC 2 Compliant</span>
            </div>
            <div className="badge badge-outline gap-1 p-2">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-xs">Blockchain Secured</span>
            </div>
            <div className="badge badge-outline gap-1 p-2">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-xs">FSMA 204 Ready</span>
            </div>
            <div className="badge badge-outline gap-1 p-2">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-xs">EU178 Compliant</span>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="w-full max-w-md mx-auto mt-8 sm:mt-12">
            <h6 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-center">Stay Updated</h6>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-0 sm:join w-full">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="input input-bordered !h-12 !min-h-12 w-full sm:input-lg sm:join-item sm:flex-1 focus:input-primary" 
              />
              <button className="btn btn-primary !h-12 !min-h-12 sm:btn-lg sm:join-item w-full sm:w-auto">
                Subscribe
              </button>
            </div>
            <p className="text-xs sm:text-sm text-base-content/60 mt-3 sm:mt-4 text-center leading-relaxed">
              Get the latest updates on traceability and platform features.
            </p>
          </div>

          {/* Bottom Section */}
          <div className="divider my-6 sm:my-8"></div>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 mb-6 sm:mb-0">
            <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6 text-xs">
              <a href="#" className="link link-hover transition-colors">Terms of Service</a>
              <a href="#" className="link link-hover transition-colors">Privacy Policy</a>
              <a href="#" className="link link-hover transition-colors">Cookie Policy</a>
            </div>
            <p className="text-xs text-base-content/60 text-center sm:text-right">
              © {new Date().getFullYear()} FarmRoket™. All rights reserved.
            </p>
          </div>

          {/* Contact Info */}
          <div className="text-center mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-base-300 pb-12 sm:pb-16 lg:pb-0">
            <div className="text-xs text-base-content/60 leading-relaxed px-4">
              <p>Questions?</p>
              <p>
                Write to us{' '}
                <a href="mailto:contact@farmrocket.com" className="link link-primary font-medium hover:underline transition-all break-all">
                  contact@farmrocket.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}