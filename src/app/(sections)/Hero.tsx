export default function Hero() {
  return (
    <section className="hero min-h-screen relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 glass-avocado-light rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 glass-avocado-light rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] glass-avocado-overlay rounded-full blur-3xl"></div>
      </div>
      <div className="hero-content text-center relative z-10 section-padding container-padding">
        <div className="content-container">
          <h1 className="heading-xl">
            Blockchain-powered
            <span className="block text-accent font-extrabold">farm-to-fork traceability</span>
          </h1>
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold">
              Q1 2026 Expected Launch
            </span>
          </div>
          <p className="text-xl mb-8 max-w-3xl mx-auto font-medium leading-relaxed">
            Ensuring quality, safety, and transparency from farm to fork with cutting-edge blockchain technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <button className="btn-primary-large">
              Join Waitlist
            </button>
            <button className="btn-secondary-large">
              Request a Pilot Demo
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="card card-hover text-center">
              <div className="text-2xl font-bold text-accent mb-1">100%</div>
              <div className="text-body-sm font-medium">Transparent</div>
            </div>
            <div className="card card-hover text-center">
              <div className="text-2xl font-bold text-accent mb-1">24/7</div>
              <div className="text-body-sm font-medium">Real-time Tracking</div>
            </div>
            <div className="card card-hover text-center">
              <div className="text-2xl font-bold text-accent mb-1">∞</div>
              <div className="text-body-sm font-medium">Immutable Records</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}