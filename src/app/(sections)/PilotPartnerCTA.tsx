export default function PilotPartnerCTA() {
  return (
    <section className="relative bg-gradient-to-r from-primary to-secondary w-full overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 via-transparent to-white/10 animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-bounce" style={{animationDuration: '6s'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/60 rounded-full blur-2xl animate-pulse" style={{animationDuration: '4s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse" style={{animationDuration: '8s'}}></div>
        </div>
      </div>
      <div className="section-wrapper max-w-6xl mx-auto py-16 lg:py-20 relative z-10">
         <div className="section-content">
         <div className="relative">
          {/* Main Content */}
          <div className="flex items-center justify-center">
            <div className="text-center text-white max-w-4xl mx-auto">
              <div className="mb-6">
                <div className="badge bg-neutral text-neutral-content badge-lg mb-4">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Limited Beta Access
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-600">
                  Be Among the First Suppliers
                </h2>
                <h3 className="text-2xl lg:text-3xl font-semibold mb-6 text-gray-600">
                  to Deliver Blockchain-Traceable Food
                </h3>
                <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
                  Join our exclusive pilot program and gain early access to the future of food supply chain transparency.
                </p>
              </div>

              {/* Pilot Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/15 backdrop-blur-sm rounded-lg p-5 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-7 h-7 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="font-bold mb-2 text-gray-600 text-lg">Early Access</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Get platform access before public launch</p>
                </div>
                <div className="bg-white/15 backdrop-blur-sm rounded-lg p-5 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-7 h-7 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <h4 className="font-bold mb-2 text-gray-600 text-lg">Special Pricing</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Locked-in pilot pricing for 12 months</p>
                </div>
                <div className="bg-white/15 backdrop-blur-sm rounded-lg p-5 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-7 h-7 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M12 12h.01M12 12h.01" />
                    </svg>
                  </div>
                  <h4 className="font-bold mb-2 text-gray-600 text-lg">Direct Support</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Dedicated onboarding and training</p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href="#pilot-access" className="btn bg-neutral text-neutral-content btn-lg font-bold px-8 hover:bg-neutral/90 hover:scale-105 hover:shadow-lg transition-all duration-300 border-none">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Request Pilot Access
                </a>
                <div className="text-gray-600 text-sm bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/30 shadow-lg">
                  <span className="font-bold text-red-600">Limited spots:</span> <span className="font-semibold">Only 50 suppliers accepted</span>
                </div>
              </div>

              {/* Compliance Tags */}
              <div className="mt-8 flex flex-wrap justify-center items-center gap-4 text-gray-600 text-sm">
                <div className="flex items-center gap-2 bg-white/90 border border-gray-300 rounded-lg px-3 py-2 hover:bg-white transition-colors duration-200">
                  <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="font-medium">OC 2 Compliant</span>
                </div>
                <div className="flex items-center gap-2 bg-white/90 border border-gray-300 rounded-lg px-3 py-2 hover:bg-white transition-colors duration-200">
                  <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                  <span className="font-medium">Blockchain Secured</span>
                </div>
                <div className="flex items-center gap-2 bg-white/90 border border-gray-300 rounded-lg px-3 py-2 hover:bg-white transition-colors duration-200">
                  <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                  <span className="font-medium">FSMA 204 Ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}