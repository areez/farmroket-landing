export default function WhyNow() {
  return (
    <section className="py-20 bg-base-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-base-content mb-4">
            Why Now?
          </h2>
          <p className="text-xl text-base-content/80 max-w-3xl mx-auto">
            The time to act is now - regulatory changes are coming fast
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Urgency Card 1 */}
            <div className="card bg-base-100 shadow-xl hover:scale-105 transition-all duration-300 rounded-2xl border border-base-300">
              <div className="card-body">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-accent-content mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-base-content">
                    Regulatory Pressure
                  </h3>
                </div>
                <p className="text-base-content/80 leading-relaxed">
                  EU & USA regulations require rapid, provable traceability—act early to avoid last-minute scrambles.
                </p>
              </div>
            </div>

            {/* Urgency Card 2 */}
            <div className="card bg-base-100 shadow-xl hover:scale-105 transition-all duration-300 rounded-2xl border border-base-300">
              <div className="card-body">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-accent-content mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-base-content">
                    Market Demand
                  </h3>
                </div>
                <p className="text-base-content/80 leading-relaxed">
                  Market demands transparency for quality assurance.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="bg-accent/10 rounded-2xl p-8 border border-accent/20">
              <h3 className="text-2xl font-bold text-base-content mb-4">
                Don&apos;t Wait Until It&apos;s Too Late
              </h3>
              <p className="text-base-content/80 mb-6 text-lg">
                Start building your traceability infrastructure today and stay ahead of regulatory requirements.
              </p>
              <button className="btn btn-accent btn-lg text-accent-content px-8">
                Get Early Access
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}