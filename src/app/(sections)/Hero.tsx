export default function Hero() {
  return (
    <section className="hero min-h-screen bg-gradient-to-br from-emerald-50 to-emerald-100">
      <div className="hero-content text-center">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-emerald-900 mb-6">
            Farm-to-Fork
            <span className="block text-emerald-600">Traceability</span>
          </h1>
          <p className="text-xl md:text-2xl text-emerald-800 mb-8 max-w-3xl mx-auto leading-relaxed">
            Revolutionizing food supply chains with blockchain technology. 
            Track your food from farm to table with complete transparency and trust.
          </p>
          <button className="btn btn-primary btn-lg text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
            Join Waitlist
          </button>
          <div className="mt-12 flex justify-center items-center space-x-8 text-emerald-700">
            <div className="text-center">
              <div className="text-3xl font-bold">100%</div>
              <div className="text-sm">Transparent</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-sm">Tracking</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">Secure</div>
              <div className="text-sm">Blockchain</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}