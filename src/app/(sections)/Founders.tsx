export default function Founders() {
  return (
    <section id="about" className="section-container">
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
                      <div className="w-24 h-24 rounded-full overflow-hidden">
                        <img
                          src="/images/main/founder-areez-afsar-khan.jpg"
                          alt="Areez Afsar Khan"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="text-center mt-2">
                      <div className="badge badge-outline border-avocado-green text-avocado-green badge-sm">Founder</div>
                    </div>
                  </div>

                  {/* Bio Content */}
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-2xl font-bold mb-2">
                      Areez Afsar Khan
                    </h3>
                    <p className="text-base-content/70 mb-4">
                      Areez is an entrepreneur with a strong background in agriculture, technology, and global commodity trading. With hands-on experience and proven expertise in building ventures, at FarmRoket™ he provides the vision and leadership to create safer, more transparent, and compliance-ready supply chain solution for global markets.
                    </p>
                    


                    {/* Social Links */}
                    <div className="flex gap-3 justify-center sm:justify-start">
                      <a href="https://www.linkedin.com/in/areezafsar/" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                      <a href="https://www.areezafsar.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
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
                      <div className="w-24 h-24 rounded-full overflow-hidden">
                        <img
                          src="/images/main/co-founder-h-m-shahadat.jpg"
                          alt="H M Shahadat"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="text-center mt-2">
                      <div className="badge badge-outline border-avocado-green text-avocado-green badge-sm">Co-founder</div>
                    </div>
                  </div>

                  {/* Bio Content */}
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-2xl font-bold mb-2">
                      H M Shahadat
                    </h3>
                    <p className="text-base-content/70 mb-4">
                      A seasoned technologist with decades of expertise in software engineering, solution architecture, and team leadership, now driving innovation to ensure customer-centric solution designs and team excellence. At FarmRoket™, he drives innovation, guiding the platform's technical vision and execution as its Chief Technology Advisor.
                    </p>
                    


                    {/* Social Links */}
                    <div className="flex gap-3 justify-center sm:justify-start">
                      <a href="https://www.linkedin.com/in/hmsahadat1803/" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
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
                  "We believe every fresh produce should tell its complete story—from the farm where it was grown to the table where it's consumed. By combining blockchain technology with practical supply chain solutions, we're making transparency the new standard in global food trade."
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