export default function ProblemSolution() {
  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="content-container">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              The Problem & Our Solution
            </h2>
            <p className="text-xl text-body max-w-3xl mx-auto font-medium">
              Food fraud costs the global economy billions while consumers lose trust in what they eat
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
          {/* Problem Card */}
          <div className="card card-hover border border-red-500/20">
            <div className="flex items-center mb-4">
              <svg className="w-8 h-8 text-red-400 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              <h3 className="heading-md text-red-400">The Problem</h3>
            </div>
            <p className="text-body text-lg leading-relaxed">
              Exporters still rely on manual records; tougher EU/US rules demand verifiable traceability.
            </p>
          </div>

          {/* Solution Card */}
          <div className="card card-hover border border-emerald-500/20">
            <div className="flex items-center mb-4">
              <svg className="w-8 h-8 text-accent mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="heading-md text-accent">Our Solution</h3>
            </div>
            <p className="text-body text-lg leading-relaxed">
              FarmRocket delivers end-to-end traceability, anchoring data on blockchain to build trust.
            </p>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}