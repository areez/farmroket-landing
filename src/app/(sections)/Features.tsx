export default function Features() {
  const features = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "QR-enabled Labeling & Real-time Tracking",
      description: "QR-enabled labeling & real-time tracking for complete visibility throughout the supply chain.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Blockchain Integration",
      description: "Blockchain integration for data authenticity & transparency with immutable records.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Real-time IoT/Geotag/Mobile Capture",
      description: "Real-time IoT/geotag/mobile capture for comprehensive data collection and monitoring.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Regional Compliance & Standardized Workflows",
      description: "Regional compliance & standardized workflows to meet global market regulations.",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-base-100 to-base-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-2xl md:text-4xl font-bold text-base-content mb-6">
            Powerful Features
          </h2>
          <p className="text-xl text-base-content/80 max-w-3xl mx-auto font-medium">
            Everything you need to create a transparent and trustworthy food supply chain
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-20">
          {features.map((feature, index) => (
            <div key={index} className="card bg-base-100 shadow-xl hover:scale-105 transition-all duration-300 rounded-2xl border border-base-300">
              <div className="card-body text-center p-8">
                <div className="flex justify-center mb-6">
                  <div className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center text-white shadow-2xl`}>
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-base-content mb-4 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-base-content/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Alternating section with gradient background */}
        <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-3xl p-12 max-w-5xl mx-auto">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-base-content mb-6">
              Ready to Transform Your Supply Chain?
            </h3>
            <p className="text-xl text-base-content/80 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using FarmRoket to build trust with their customers.
            </p>
            <button className="btn btn-accent btn-lg text-accent-content px-10 py-4 text-lg font-bold shadow-2xl hover:scale-105 transition-all duration-300 rounded-xl">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}