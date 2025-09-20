export default function Features() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 glass-avocado-light rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 glass-avocado-light rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-padding relative z-10">
        <div className="content-container text-center mb-16">
          <h2 className="heading-lg mb-6">
            SaaS Features Built for Export Success
          </h2>
          <p className="text-xl leading-relaxed max-w-3xl mx-auto">
            Comprehensive export management tools designed to streamline operations, ensure compliance, and maximize profitability for exporters and traders.
          </p>
        </div>
        
        {/* Main Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Export Management Dashboard */}
          <div className="card card-hover">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-4">Export Management Dashboard</h3>
                <p className="text-body-sm leading-relaxed mb-4">
                  Centralized control panel for managing all export operations, shipments, and compliance requirements in real-time.
                </p>
                <ul className="text-sm space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    Multi-shipment tracking and management
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    Real-time performance metrics
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    Automated alerts and notifications
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Dashboard Mockup */}
            <div className="mt-6 bg-gray-900/50 rounded-lg p-4 border border-gray-700">
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-lg font-bold text-accent">156</div>
                  <div className="text-xs text-gray-400">Active Orders</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-green-400">$1.2M</div>
                  <div className="text-xs text-gray-400">Monthly Revenue</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-400">23</div>
                  <div className="text-xs text-gray-400">Countries</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Compliance Automation */}
          <div className="card card-hover">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-4">Automated Compliance</h3>
                <p className="text-body-sm leading-relaxed mb-4">
                  AI-powered compliance engine that automatically generates required documentation and ensures adherence to international trade regulations.
                </p>
                <ul className="text-sm space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    Auto-generated certificates and reports
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    Multi-country regulation compliance
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    Audit trail and documentation
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Compliance Status Mockup */}
            <div className="mt-6 bg-gray-900/50 rounded-lg p-4 border border-gray-700">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-300">EU Organic Certification</span>
                  <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs">Compliant</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-300">USDA Documentation</span>
                  <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs">Approved</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-300">Phytosanitary Certificate</span>
                  <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded text-xs">Pending</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Supply Chain Visibility */}
          <div className="card card-hover">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-4">End-to-End Traceability</h3>
                <p className="text-body-sm leading-relaxed mb-4">
                  Complete visibility from farm to destination with blockchain-secured tracking and IoT sensor integration for quality assurance.
                </p>
                <ul className="text-sm space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    Real-time GPS and temperature monitoring
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    Blockchain-verified supply chain records
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    Quality control checkpoints
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Tracking Mockup */}
            <div className="mt-6 bg-gray-900/50 rounded-lg p-4 border border-gray-700">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-white">Shipment SH-2024-045</span>
                <span className="text-xs text-accent">In Transit</span>
              </div>
              <div className="space-y-1 text-xs text-gray-400">
                <div>📍 Current: Port of Rotterdam</div>
                <div>🌡️ Temperature: 2.5°C (Optimal)</div>
                <div>📦 ETA: Dec 15, 2024</div>
              </div>
            </div>
          </div>
          
          {/* Market Intelligence */}
          <div className="card card-hover">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-4">Market Intelligence & Analytics</h3>
                <p className="text-body-sm leading-relaxed mb-4">
                  Data-driven insights and market analysis to optimize pricing, identify opportunities, and reduce risks in global markets.
                </p>
                <ul className="text-sm space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    Price trend analysis and forecasting
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    Market demand insights
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    Risk assessment and mitigation
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Analytics Mockup */}
            <div className="mt-6 bg-gray-900/50 rounded-lg p-4 border border-gray-700">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm font-medium text-white mb-1">Avocado Prices</div>
                  <div className="text-lg font-bold text-green-400">↗ +12.5%</div>
                  <div className="text-xs text-gray-400">vs last month</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-white mb-1">Market Demand</div>
                  <div className="text-lg font-bold text-blue-400">High</div>
                  <div className="text-xs text-gray-400">EU & US markets</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="text-center">
          <div className="card card-hover max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Scale Your Export Business?</h3>
            <p className="text-lg leading-relaxed mb-8">
              Join leading exporters and traders who trust FarmRoket™ to streamline their operations and maximize profitability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary-large">
                Start Free Trial
              </button>
              <button className="btn-secondary-large">
                Schedule a Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}