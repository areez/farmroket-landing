export default function Hero() {
  return (
    <section className="hero min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-green-700 relative overflow-hidden">
      {/* Blurred overlay placeholder for leaf/field illustration */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/80 to-green-700/60 backdrop-blur-sm"></div>
      
      <div className="hero-content text-center relative z-10">
        <div className="max-w-5xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-base-content mb-8 leading-tight">
            Blockchain-powered
            <span className="block text-accent font-extrabold">farm-to-fork traceability</span>
          </h1>
          <p className="text-xl md:text-2xl text-base-content/90 mb-10 max-w-4xl mx-auto leading-relaxed font-medium">
            Ensuring quality, safety, and transparency from farm to fork with cutting-edge blockchain technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="btn btn-accent btn-lg text-accent-content px-10 py-4 text-lg font-bold shadow-2xl hover:shadow-accent/25 hover:scale-105 transition-all duration-300 rounded-xl">
              Join Waitlist
            </button>
            <button className="btn btn-outline btn-lg px-10 py-4 text-lg font-semibold border-2 border-accent text-accent hover:bg-accent hover:text-accent-content hover:scale-105 transition-all duration-300 rounded-xl">
              Request a Pilot Demo
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center bg-base-200/20 backdrop-blur-sm rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold text-accent mb-2">100%</div>
              <div className="text-base-content/80 font-medium">Transparent</div>
            </div>
            <div className="text-center bg-base-200/20 backdrop-blur-sm rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold text-accent mb-2">24/7</div>
              <div className="text-base-content/80 font-medium">Tracking</div>
            </div>
            <div className="text-center bg-base-200/20 backdrop-blur-sm rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold text-accent mb-2">Secure</div>
              <div className="text-base-content/80 font-medium">Blockchain</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}