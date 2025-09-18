export default function HowItWorks() {
  return (
    <section className="py-20 bg-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Three simple steps to complete food traceability
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Step 1: Farmer */}
            <div className="text-center relative">
              <div className="mb-6">
                <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  1
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Farmer Records</h3>
              <p className="text-gray-600 leading-relaxed">
                Farmers input crop data, farming practices, harvest details, and certifications directly into our secure platform.
              </p>
              <div className="mt-4 space-y-2 text-sm text-emerald-700">
                <div className="flex items-center justify-center">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                  Planting & Growing Data
                </div>
                <div className="flex items-center justify-center">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                  Organic Certifications
                </div>
                <div className="flex items-center justify-center">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                  Harvest Information
                </div>
              </div>
            </div>

            {/* Arrow 1 */}
            <div className="hidden md:block absolute top-10 left-1/3 transform translate-x-8">
              <svg className="w-8 h-8 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>

            {/* Step 2: Blockchain */}
            <div className="text-center relative">
              <div className="mb-6">
                <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  2
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Blockchain Storage</h3>
              <p className="text-gray-600 leading-relaxed">
                All data is encrypted and stored on an immutable blockchain, creating a permanent, tamper-proof record.
              </p>
              <div className="mt-4 space-y-2 text-sm text-blue-700">
                <div className="flex items-center justify-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Immutable Records
                </div>
                <div className="flex items-center justify-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Encrypted Security
                </div>
                <div className="flex items-center justify-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Decentralized Network
                </div>
              </div>
            </div>

            {/* Arrow 2 */}
            <div className="hidden md:block absolute top-10 right-1/3 transform -translate-x-8">
              <svg className="w-8 h-8 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>

            {/* Step 3: QR Verify */}
            <div className="text-center relative">
              <div className="mb-6">
                <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                  </svg>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  3
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">QR Code Verification</h3>
              <p className="text-gray-600 leading-relaxed">
                Consumers scan QR codes to instantly access the complete journey and verify authenticity of their food.
              </p>
              <div className="mt-4 space-y-2 text-sm text-purple-700">
                <div className="flex items-center justify-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  Instant Verification
                </div>
                <div className="flex items-center justify-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  Complete Journey
                </div>
                <div className="flex items-center justify-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  Mobile Friendly
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}