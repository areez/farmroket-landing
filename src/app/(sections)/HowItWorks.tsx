export default function HowItWorks() {
  return (
    <section className="section-container">
      <div className="section-wrapper">
        <div className="section-content">
          <div className="section-header">
            <h2 className="section-title">
              How It Works
            </h2>
            <p className="section-subtitle">
              Simple steps to transform your agricultural supply chain
            </p>
          </div>

          {/* DaisyUI Steps Component */}
          <div className="mb-24 pb-8">
            <ul className="steps steps-horizontal w-full">
              <li className="step step-primary">
                <div className="text-center mt-4">
                  <h3 className="text-lg font-bold mb-1">Step 1</h3>
                  <h4 className="text-base font-semibold mb-1">Data Collection</h4>
                </div>
              </li>
              <li className="step step-primary">
                <div className="text-center mt-4">
                  <h3 className="text-lg font-bold mb-1">Step 2</h3>
                  <h4 className="text-base font-semibold mb-1">Blockchain Anchoring</h4>
                </div>
              </li>
              <li className="step step-primary">
                <div className="text-center mt-4">
                  <h3 className="text-lg font-bold mb-1">Step 3</h3>
                  <h4 className="text-base font-semibold mb-1">QR Verification</h4>
                </div>
              </li>
            </ul>
          </div>

          {/* Detailed Steps with Image Placeholders */}
          <div className="mt-2 px-4 md:px-6 lg:px-0">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-8">
              {/* Step 1: Farmer inputs product data */}
              <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full md:mb-6 lg:mb-0">
                <figure className="px-6 pt-6">
                  <div className="w-full h-48 md:h-64 lg:h-48 bg-base-300 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <svg className="w-16 h-16 mx-auto mb-2 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      <p className="text-xs text-base-content/50">[Farmer Mobile App Image]</p>
                    </div>
                  </div>
                </figure>
                <div className="card-body p-6 pb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="badge badge-success badge-lg">1</div>
                    <h3 className="card-title text-xl text-primary-accent">Farmer inputs product data</h3>
                  </div>
                  <p className="text-base-content/70 mb-6 leading-relaxed">
                    Farmers use our mobile app to input comprehensive product information including origin, cultivation methods, and quality metrics.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-success flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">Product origin tracking</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-success flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">Cultivation method documentation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-success flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">Quality metrics recording</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2: Blockchain anchors proof */}
                <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full md:mb-6 lg:mb-0">
                <figure className="px-6 pt-6">
                  <div className="w-full h-48 md:h-64 lg:h-48 bg-base-300 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <svg className="w-16 h-16 mx-auto mb-2 text-warning" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <p className="text-xs text-base-content/50">[Blockchain Network Image]</p>
                    </div>
                  </div>
                </figure>
                <div className="card-body p-6 pb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="badge badge-accent badge-lg">2</div>
                    <h3 className="card-title text-xl text-primary-accent">Blockchain anchors proof</h3>
                  </div>
                  <p className="text-base-content/70 mb-6 leading-relaxed">
                    Data is cryptographically hashed and anchored to the blockchain, creating immutable proof of authenticity.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">Immutable records</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">Cryptographic proof</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">Tamper-proof verification</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3: Suppliers share QR for instant verification */}
                <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full md:mb-6 lg:mb-0">
                <figure className="px-6 pt-6">
                  <div className="w-full h-48 md:h-64 lg:h-48 bg-base-300 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <svg className="w-16 h-16 mx-auto mb-2 text-info" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h4" />
                      </svg>
                      <p className="text-xs text-base-content/50">[QR Code Scanner Image]</p>
                    </div>
                  </div>
                </figure>
                <div className="card-body p-6 pb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="badge badge-info badge-lg">3</div>
                    <h3 className="card-title text-xl text-primary-accent">Instant QR Verification</h3>
                  </div>
                  <p className="text-base-content/70 mb-6 leading-relaxed">
                    Suppliers generate QR codes for products, enabling instant verification by consumers, regulators, and partners.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-info flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">Instant QR verification</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-info flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">Complete supply chain visibility</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-info flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">Consumer trust building</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="card bg-gradient-to-r from-primary/10 to-accent/10 shadow-lg hover:shadow-xl transition-all duration-300 max-w-2xl mx-auto">
              <div className="card-body text-center p-8">
                <h3 className="text-2xl font-bold mb-4">
                  See It in Action
                </h3>
                <p className="text-base-content/70 mb-6 leading-relaxed">
                  Experience the complete traceability workflow with our interactive demo
                </p>
                <button className="btn btn-primary btn-lg">
                  Try Interactive Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}