export default function ProblemSolution() {
  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="content-container">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">
            The Problem & Our Solution
          </h2>
          <p className="text-xl text-body max-w-3xl mx-auto leading-relaxed">
            Current food systems lack transparency, making it difficult for consumers to make informed choices about what they eat.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="card">
            <div className="card-body">
              <div className="w-16 h-16 bg-error/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-error" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="heading-md mb-4">
                The Problem
              </h3>
              <p className="text-lg text-body leading-relaxed">
                Consumers struggle to understand where their food comes from, how it&apos;s produced, and what impact their choices have on health and environment. Traditional supply chains are opaque and complex.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <div className="w-16 h-16 bg-success/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="heading-md mb-4">
                Our Solution
              </h3>
              <p className="text-lg text-body leading-relaxed">
                FarmRoket&trade; creates complete transparency in the food supply chain using blockchain technology, IoT sensors, and AI analytics to track every step from farm to table.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}