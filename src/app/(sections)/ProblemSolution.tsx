export default function ProblemSolution() {
  return (
    <section className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-base-content mb-4">
            The Problem & Our Solution
          </h2>
          <p className="text-xl text-base-content/80 max-w-3xl mx-auto">
            Food fraud costs the global economy billions while consumers lose trust in what they eat
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Problem Card */}
          <div className="card bg-error/10 border border-error/20 shadow-xl hover:scale-105 transition-all duration-300 rounded-2xl">
            <div className="card-body">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-error rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-error-content" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-error">The Problem</h3>
              </div>
              <p className="text-base-content/80 text-lg leading-relaxed">
                Exporters still rely on manual records; tougher EU/US rules demand verifiable traceability.
              </p>
            </div>
          </div>

          {/* Solution Card */}
          <div className="card bg-success/10 border border-success/20 shadow-xl hover:scale-105 transition-all duration-300 rounded-2xl">
            <div className="card-body">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-success rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-success-content" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-success">Our Solution</h3>
              </div>
              <p className="text-base-content/80 text-lg leading-relaxed">
                FarmRoket delivers end-to-end traceability, anchoring data on blockchain to build trust.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}