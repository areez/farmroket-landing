export default function WhyNow() {
  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="content-container">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              Why Now?
            </h2>
            <p className="text-xl text-body max-w-3xl mx-auto">
              The time to act is now - regulatory changes are coming fast
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Urgency Card 1 */}
            <div className="card card-hover">
              <div className="card-body">
                <div className="flex items-center mb-4">
                  <svg className="w-8 h-8 text-accent mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  <h3 className="heading-md">
                    Regulatory Pressure
                  </h3>
                </div>
                <p className="text-body leading-relaxed">
                  EU & USA regulations require rapid, provable traceability—act early to avoid last-minute scrambles.
                </p>
              </div>
            </div>

            {/* Urgency Card 2 */}
            <div className="card card-hover">
              <div className="card-body">
                <div className="flex items-center mb-4">
                  <svg className="w-8 h-8 text-accent mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <h3 className="heading-md">
                    Market Demand
                  </h3>
                </div>
                <p className="text-body leading-relaxed">
                  Market demands transparency for quality assurance.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-20">
            <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-600/10 border border-emerald-400/20 rounded-xl py-20 px-12">
              <h3 className="heading-xl mb-8">
                Don&apos;t Wait Until It&apos;s Too Late
              </h3>
              <p className="text-body-lg mb-12 max-w-4xl mx-auto">
                Start building your traceability infrastructure today and stay ahead of regulatory requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                <button className="btn-primary-large">
                  Get Early Access
                </button>
                <button className="btn-secondary-large">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}