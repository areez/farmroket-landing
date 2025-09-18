export default function Features() {

  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="content-container">
          <div className="text-center mb-20">
            <h2 className="heading-lg">Powerful Features</h2>
            <p className="text-body max-w-3xl mx-auto">
              Advanced blockchain technology meets intuitive design to deliver unprecedented transparency in food supply chains.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
          <div className="card card-hover">
            <svg className="icon-slim-lg icon-gradient mb-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <h3 className="heading-md">
              Immutable Records
            </h3>
            <p className="text-body">
              Blockchain technology ensures that once data is recorded, it cannot be altered or tampered with, providing absolute trust.
            </p>
          </div>

          <div className="card card-hover">
            <svg className="icon-slim-lg icon-gradient mb-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <h3 className="heading-md">
              Real-time Tracking
            </h3>
            <p className="text-body">
              Monitor your products throughout the entire supply chain with instant updates and notifications.
            </p>
          </div>

          <div className="card card-hover">
            <svg className="icon-slim-lg icon-gradient mb-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
            <h3 className="heading-md">
              Smart Contracts
            </h3>
            <p className="text-body">
              Automated compliance checking and certification validation through intelligent blockchain contracts.
            </p>
          </div>

          <div className="card card-hover">
            <svg className="icon-slim-lg icon-gradient mb-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <h3 className="heading-md">
              Analytics Dashboard
            </h3>
            <p className="text-body">
              Comprehensive insights and reporting tools to optimize your supply chain operations and compliance.
            </p>
          </div>
          </div>

          <div className="mt-20 text-center">
            <div className="max-w-4xl mx-auto text-center py-16">
              <h3 className="heading-md">
                Ready to Transform Your Food Supply Chain?
              </h3>
              <p className="text-body-lg text-emerald-100 mb-12 max-w-4xl mx-auto">
                Join thousands of farmers, traders, and consumers who trust FarmRocket for complete food transparency.
              </p>
              <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                <button className="btn-primary-large">
                  Get Started Today
                </button>
                <button className="btn-secondary-large">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}