export default function HowItWorks() {
  return (
    <section className="section-padding bg-gray-900/20 relative">
      {/* Background Glass Effect */}
      <div className="absolute top-1/4 right-0 w-80 h-80 glass-avocado-strong rounded-full blur-3xl opacity-20"></div>
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8bc34a" />
            <stop offset="100%" stopColor="#9ccc65" />
          </linearGradient>
        </defs>
      </svg>
      <div className="section-container relative z-10">
        <div className="content-container">
          <div className="text-center mb-12">
            <h2 className="heading-lg">How It Works</h2>
            <p className="text-body max-w-2xl mx-auto">
              Our blockchain-powered platform creates an immutable record of your food&apos;s journey from farm to table.
            </p>
          </div>

          <div className="timeline-container">
          <div className="timeline-line"></div>
          
          <div className="timeline-step">
            <div className="timeline-number">
              <div className="timeline-pulse"></div>
              1
            </div>
            <svg className="icon-slim-lg icon-gradient mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h3 className="heading-sm">Data Collection</h3>
            <p className="text-body-sm">
              Farmers input critical data about their products using our intuitive blockchain interface.
            </p>
          </div>
          
          <div className="timeline-step">
            <div className="timeline-number">
              <div className="timeline-pulse"></div>
              2
            </div>
            <svg className="icon-slim-lg icon-gradient mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
            <h3 className="heading-sm">Blockchain Recording</h3>
            <p className="text-body-sm">
              Information is securely recorded on blockchain, creating an immutable and transparent record.
            </p>
          </div>
          
          <div className="timeline-step">
            <div className="timeline-number">
              <div className="timeline-pulse"></div>
              3
            </div>
            <svg className="icon-slim-lg icon-gradient mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <h3 className="heading-sm">Consumer Verification</h3>
            <p className="text-body-sm">
              Consumers scan QR codes to instantly access complete product history and certifications.
            </p>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}