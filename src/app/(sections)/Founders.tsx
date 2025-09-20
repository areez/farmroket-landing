export default function Founders() {
  return (
    <section className="section-container">
      <div className="section-wrapper">
        <div className="section-content">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Meet the Founders
            </h2>
            <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
              Industry veterans with deep expertise in food supply chains, blockchain technology, and regulatory compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Founder 1 */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                  {/* Avatar */}
                  <div className="flex-shrink-0">
                    <div className="avatar">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                    </div>
                    <div className="text-center mt-2">
                      <div className="badge badge-outline badge-sm">Founder</div>
                    </div>
                  </div>

                  {/* Bio Content */}
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-2xl font-bold mb-2">
                      Areez Afsar Khan
                    </h3>
                    <p className="text-base-content/70 mb-4">
                      Deeply involved in agriculture, technology, and commodity trading, focusing on revolutionizing agro supply chains for safe, healthy food and stakeholder value through innovation.
                    </p>
                    


                    {/* Social Links */}
                    <div className="flex gap-3 justify-center sm:justify-start">
                      <a href="#" className="social-icon">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                      <a href="#" className="social-icon">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Founder 2 */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                  {/* Avatar */}
                  <div className="flex-shrink-0">
                    <div className="avatar">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                    </div>
                    <div className="text-center mt-2">
                      <div className="badge badge-outline badge-sm">Co-founder</div>
                    </div>
                  </div>

                  {/* Bio Content */}
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-2xl font-bold mb-2">
                      H M Sahadat
                    </h3>
                    <p className="text-base-content/70 mb-4">
                      A seasoned technologist with decades of expertise in software engineering, solution architecture, and team leadership, now driving innovation to ensure customer-centric solution designs and team excellence.
                    </p>
                    


                    {/* Social Links */}
                    <div className="flex gap-3 justify-center sm:justify-start">
                      <a href="#" className="social-icon">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                      <a href="#" className="social-icon">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Company Vision */}
          <div className="mt-12">
            <div className="card bg-gradient-to-r from-primary/10 to-secondary/10 shadow-lg">
              <div className="card-body text-center">
                <p className="text-lg text-base-content/80 max-w-3xl mx-auto mb-4">
                  "We believe every food product should tell its complete story—from the farm where it was grown to the table where it's consumed. By combining blockchain technology with practical supply chain solutions, we're making transparency the new standard in global food trade."
                </p>
                <p className="text-sm text-base-content/60 mb-6">
                  — Areez Afsar Khan, Founder, FarmRoket™
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="text-sm text-white border border-avocado-green bg-transparent px-3 py-1 rounded-full">Transparency First</div>
                  <div className="text-sm text-white border border-avocado-green bg-transparent px-3 py-1 rounded-full">Compliance Ready</div>
                  <div className="text-sm text-white border border-avocado-green bg-transparent px-3 py-1 rounded-full">Farmer Focused</div>
                  <div className="text-sm text-white border border-avocado-green bg-transparent px-3 py-1 rounded-full">Globally Scalable</div>
                </div>
              </div>
            </div>
          </div>

          {/* Advisory Board Teaser */}
          <div className="mt-8 text-center">
            <p className="text-base-content/60 mb-4">
              Advised by industry leaders from:
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 text-base-content/40">
              <div className="text-sm font-semibold">Former Walmart Global Food Safety</div>
              <div className="text-sm font-semibold">Ex-Unilever Supply Chain</div>
              <div className="text-sm font-semibold">USDA Food Safety Inspector</div>
              <div className="text-sm font-semibold">IBM Food Trust Architect</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}