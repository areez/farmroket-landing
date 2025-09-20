export default function Hero() {
  return (
    <section className="min-h-[80vh] lg:min-h-screen section-container -mt-12 lg:-mt-20">
      <div className="section-wrapper py-8 lg:py-16">
        <div className="section-content">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 order-1 lg:order-1 text-left">
            <div className="flex justify-start">
              <div className="text-xs sm:text-sm px-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium lg:-mt-4">
                Compliance-First Supplychain Platform
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              <span className="text-white">Compliance-ready food suppliers.</span>
              <span className="block text-accent mt-4">Traceable from farm to fork.</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-xl leading-relaxed text-base-content/80 max-w-2xl">
              FarmRoket™ a SaaS platform helps suppliers specially exporters, importers, and co-ops — meet global regulatory standards with blockchain-powered traceability.
            </p>
            
            {/* Key Benefits for Suppliers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-6 mb-8 sm:mb-10 lg:mb-12">
              <div className="flex items-center gap-3 justify-start">
                <div className="badge badge-success badge-sm flex-shrink-0">✓</div>
                <span className="text-xs sm:text-sm font-medium">FSMA & EUDR Compliance</span>
              </div>
              <div className="flex items-center gap-3 justify-start">
                <div className="badge badge-success badge-sm flex-shrink-0">✓</div>
                <span className="text-xs sm:text-sm font-medium">Blockchain Verification</span>
              </div>
              <div className="flex items-center gap-3 justify-start">
                <div className="badge badge-success badge-sm flex-shrink-0">✓</div>
                <span className="text-xs sm:text-sm font-medium">Automated Reporting</span>
              </div>
              <div className="flex items-center gap-3 justify-start">
                <div className="badge badge-success badge-sm flex-shrink-0">✓</div>
                <span className="text-xs sm:text-sm font-medium">Multi-tenant Access</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-start mt-10 sm:mt-12 lg:mt-16">
              <button className="btn btn-primary btn-lg w-full sm:w-auto">
                Request a Demo
              </button>
              <button className="btn btn-outline btn-lg w-full sm:w-auto">
                Join Waitlist
              </button>
            </div>
          </div>
          
          {/* Right Content - Product Mockups */}
          <div className="relative mt-8 lg:mt-0 order-2 lg:order-2 flex justify-center items-center">
            {/* Main Supplier Dashboard Mockup */}
            <div className="mockup-window border bg-base-300 shadow-2xl w-full max-w-xs sm:max-w-md lg:max-w-lg mx-auto">
              <div className="flex justify-center px-6 py-12 lg:py-16 bg-base-200">
                <div className="w-full max-w-md">
                  {/* Dashboard Header */}
                  <div className="card bg-base-100 shadow-xl mb-4">
                    <div className="card-body p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="card-title text-sm">Supplier Dashboard</h3>
                        <div className="badge badge-success badge-sm">Live</div>
                      </div>
                      <div className="stats stats-vertical lg:stats-horizontal shadow">
                        <div className="stat p-2">
                          <div className="stat-value text-sm text-accent">247</div>
                          <div className="stat-desc text-xs">Active Batches</div>
                        </div>
                        <div className="stat p-2">
                          <div className="stat-value text-sm text-success">99.8%</div>
                          <div className="stat-desc text-xs">Compliance</div>
                        </div>
                        <div className="stat p-2">
                          <div className="stat-value text-sm text-info">$2.4M</div>
                          <div className="stat-desc text-xs">Volume</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Recent Batches */}
                  <div className="card bg-base-100 shadow-xl">
                    <div className="card-body p-4">
                      <h4 className="font-medium text-sm mb-3">Recent Batches</h4>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span>BT-2024-001</span>
                          <div className="badge badge-success badge-xs">Verified</div>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <span>BT-2024-002</span>
                          <div className="badge badge-info badge-xs">Processing</div>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <span>BT-2024-003</span>
                          <div className="badge badge-warning badge-xs">Pending</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Farmer Mobile App Mockup */}
            <div className="mockup-phone absolute -bottom-4 -right-4 sm:-top-4 sm:-right-4 lg:-bottom-12 lg:-right-12 w-24 sm:w-40 lg:w-48 shadow-xl">
              <div className="camera"></div>
              <div className="display">
                <div className="artboard artboard-demo phone-1 bg-base-100">
                  <div className="p-2 lg:p-3">
                    <div className="text-center mb-2 lg:mb-3">
                      <div className="badge badge-accent text-xs">Farmer App</div>
                    </div>
                    <div className="space-y-1 lg:space-y-2">
                      <div className="card bg-base-200 shadow">
                        <div className="card-body p-2">
                          <h4 className="text-xs font-medium">QR Scanner</h4>
                          <p className="text-xs opacity-70">Instant Verification</p>
                        </div>
                      </div>
                      <div className="card bg-base-200 shadow">
                        <div className="card-body p-2">
                          <h4 className="text-xs font-medium">Data Entry</h4>
                          <p className="text-xs opacity-70">Simple Records</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}