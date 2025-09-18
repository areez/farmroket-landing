export default function Hero() {
  return (
    <section className="hero min-h-screen relative overflow-hidden">
      <div className="hero-content text-center relative z-10 section-padding container-padding">
        <div className="content-container">
          <h1 className="heading-xl">
            Blockchain-powered
            <span className="block text-accent font-extrabold">farm-to-fork traceability</span>
          </h1>
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold">
              Q4 2025 Expected Launch
            </span>
          </div>
          <p className="text-xl md:text-2xl text-body mb-12 max-w-4xl mx-auto font-medium leading-relaxed">
            Ensuring quality, safety, and transparency from farm to fork with cutting-edge blockchain technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-20">
            <button className="btn-primary-large">
              Join Waitlist
            </button>
            <button className="btn-secondary-large">
              Request a Pilot Demo
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="card card-hover text-center">
              <div className="text-4xl font-bold text-accent mb-2">100%</div>
              <div className="text-body font-medium">Transparent</div>
            </div>
            <div className="card card-hover text-center">
              <div className="text-4xl font-bold text-accent mb-2">24/7</div>
              <div className="text-body font-medium">Real-time Tracking</div>
            </div>
            <div className="card card-hover text-center">
              <div className="text-4xl font-bold text-accent mb-2">∞</div>
              <div className="text-body font-medium">Immutable Records</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}