export default function UseCasesAbout() {
  const founders = [
    {
      name: "Areez Afsar Khan",
      title: "Founder",
      bio: "Driving safe, healthy agro supply chains via tech & innovation.",
      image: "/api/placeholder/150/150",
      linkedin: "#areez-linkedin",
      twitter: "#areez-twitter"
    },
    {
      name: "H M Sahadat",
      title: "Co-Founder",
      bio: "Veteran engineer & architect focused on customer-centric solutions.",
      image: "/api/placeholder/150/150",
      linkedin: "#sahadat-linkedin",
      twitter: "#sahadat-twitter"
    }
  ];

  return (
    <section className="py-20 bg-base-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Export Compliance Solutions for Every Challenge
          </h2>
          <p className="text-xl text-base-content/70 max-w-4xl mx-auto">
            From regulatory compliance to market access, FarmRoket™ covers every aspect of modern food export operations
          </p>
        </div>

        {/* DaisyUI Tabs for different solution categories */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="tabs tabs-boxed justify-center mb-8">
            <input type="radio" name="solution_tabs" className="tab" aria-label="Compliance" defaultChecked />
            <div className="tab-content bg-base-100 border-base-300 rounded-box p-6">
              <h3 className="text-2xl font-bold mb-6 text-center">Regulatory Compliance</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="card bg-base-100 shadow-sm">
                  <div className="card-body">
                    <div className="flex items-center mb-3">
                      <div className="badge badge-error mr-3">URGENT</div>
                      <h4 className="card-title text-lg">EU EUDR Compliance</h4>
                    </div>
                    <p className="text-sm text-base-content/70">
                      Automated deforestation-free supply chain verification for EU market access
                    </p>
                    <div className="bg-base-200 p-3 rounded mt-3">
                      <div className="text-xs text-base-content/60 mb-1">EUDR Dashboard</div>
                      <div className="bg-gradient-to-r from-error/20 to-warning/20 h-8 rounded flex items-center justify-center text-xs">
                        Risk Assessment Interface
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card bg-base-100 shadow-sm">
                  <div className="card-body">
                    <div className="flex items-center mb-3">
                      <div className="badge badge-warning mr-3">FDA</div>
                      <h4 className="card-title text-lg">FSMA Traceability Rule</h4>
                    </div>
                    <p className="text-sm text-base-content/70">
                      Complete food traceability records for FDA compliance - mandatory since January 2026 <a href="https://www.fda.gov/food/food-safety-modernization-act-fsma/fsma-final-rule-requirements-additional-traceability-records-certain-foods" target="_blank" rel="noopener noreferrer" className="link link-primary text-xs">↗</a>
                    </p>
                    <div className="bg-base-200 p-3 rounded mt-3">
                      <div className="text-xs text-base-content/60 mb-1">FDA Traceability</div>
                      <div className="bg-gradient-to-r from-info/20 to-primary/20 h-8 rounded flex items-center justify-center text-xs">
                        FSMA 204 Compliance System
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card bg-base-100 shadow-sm">
                  <div className="card-body">
                    <div className="flex items-center mb-3">
                      <div className="badge badge-success mr-3">ORGANIC</div>
                      <h4 className="card-title text-lg">Organic Certification</h4>
                    </div>
                    <p className="text-sm text-base-content/70">
                      Streamlined organic certification with automated documentation and audit trails
                    </p>
                    <div className="bg-base-200 p-3 rounded mt-3">
                      <div className="text-xs text-base-content/60 mb-1">Organic Tracker</div>
                      <div className="bg-gradient-to-r from-success/20 to-accent/20 h-8 rounded flex items-center justify-center text-xs">
                        Certification Dashboard
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <input type="radio" name="solution_tabs" className="tab" aria-label="Operations" />
            <div className="tab-content bg-base-100 border-base-300 rounded-box p-6">
              <h3 className="text-2xl font-bold mb-6 text-center">Export Operations</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="card bg-base-100 shadow-sm">
                  <div className="card-body">
                    <div className="flex items-center mb-3">
                      <div className="badge badge-primary mr-3">DOCS</div>
                      <h4 className="card-title text-lg">Export Documentation</h4>
                    </div>
                    <p className="text-sm text-base-content/70">
                      Automated generation of certificates, invoices, and shipping documents
                    </p>
                    <div className="bg-base-200 p-3 rounded mt-3">
                      <div className="text-xs text-base-content/60 mb-1">Document Generator</div>
                      <div className="bg-gradient-to-r from-primary/20 to-secondary/20 h-8 rounded flex items-center justify-center text-xs">
                        Certificate Templates
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card bg-base-100 shadow-sm">
                  <div className="card-body">
                    <div className="flex items-center mb-3">
                      <div className="badge badge-info mr-3">TRACK</div>
                      <h4 className="card-title text-lg">Shipment Tracking</h4>
                    </div>
                    <p className="text-sm text-base-content/70">
                      Real-time visibility of shipments from origin to destination
                    </p>
                    <div className="bg-base-200 p-3 rounded mt-3">
                      <div className="text-xs text-base-content/60 mb-1">Logistics Dashboard</div>
                      <div className="bg-gradient-to-r from-info/20 to-accent/20 h-8 rounded flex items-center justify-center text-xs">
                        GPS Tracking Map
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card bg-base-100 shadow-sm">
                  <div className="card-body">
                    <div className="flex items-center mb-3">
                      <div className="badge badge-secondary mr-3">QC</div>
                      <h4 className="card-title text-lg">Quality Control</h4>
                    </div>
                    <p className="text-sm text-base-content/70">
                      Comprehensive quality assurance with automated testing protocols
                    </p>
                    <div className="bg-base-200 p-3 rounded mt-3">
                      <div className="text-xs text-base-content/60 mb-1">QC Dashboard</div>
                      <div className="bg-gradient-to-r from-secondary/20 to-accent/20 h-8 rounded flex items-center justify-center text-xs">
                        Test Results Interface
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <input type="radio" name="solution_tabs" className="tab" aria-label="Analytics" />
            <div className="tab-content bg-base-100 border-base-300 rounded-box p-6">
              <h3 className="text-2xl font-bold mb-6 text-center">Market Intelligence</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="card bg-base-100 shadow-sm">
                  <div className="card-body">
                    <div className="flex items-center mb-3">
                      <div className="badge badge-accent mr-3">PRICE</div>
                      <h4 className="card-title text-lg">Price Analytics</h4>
                    </div>
                    <p className="text-sm text-base-content/70">
                      Real-time market pricing and trend analysis for optimal timing
                    </p>
                    <div className="bg-base-200 p-3 rounded mt-3">
                      <div className="text-xs text-base-content/60 mb-1">Price Tracker</div>
                      <div className="bg-gradient-to-r from-accent/20 to-warning/20 h-8 rounded flex items-center justify-center text-xs">
                        Market Trends Chart
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card bg-base-100 shadow-sm">
                  <div className="card-body">
                    <div className="flex items-center mb-3">
                      <div className="badge badge-warning mr-3">RISK</div>
                      <h4 className="card-title text-lg">Risk Assessment</h4>
                    </div>
                    <p className="text-sm text-base-content/70">
                      Predictive risk analysis for supply chain and market volatility
                    </p>
                    <div className="bg-base-200 p-3 rounded mt-3">
                      <div className="text-xs text-base-content/60 mb-1">Risk Monitor</div>
                      <div className="bg-gradient-to-r from-warning/20 to-error/20 h-8 rounded flex items-center justify-center text-xs">
                        Risk Heatmap
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card bg-base-100 shadow-sm">
                  <div className="card-body">
                    <div className="flex items-center mb-3">
                      <div className="badge badge-success mr-3">ROI</div>
                      <h4 className="card-title text-lg">Performance Metrics</h4>
                    </div>
                    <p className="text-sm text-base-content/70">
                      Comprehensive analytics on export performance and profitability
                    </p>
                    <div className="bg-base-200 p-3 rounded mt-3">
                      <div className="text-xs text-base-content/60 mb-1">Analytics Suite</div>
                      <div className="bg-gradient-to-r from-success/20 to-primary/20 h-8 rounded flex items-center justify-center text-xs">
                        Performance Dashboard
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Team Section with DaisyUI */}
        <div className="divider my-16"></div>
        
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Meet the Export Compliance Experts
          </h2>
          <p className="text-lg text-base-content/70 max-w-3xl mx-auto">
            Industry veterans with deep expertise in food export regulations and supply chain technology
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {founders.map((founder, index) => (
            <div key={index} className="card bg-base-100 shadow-lg">
              <div className="card-body items-center text-center">
                <div className="avatar placeholder mb-4">
                  <div className="bg-primary text-primary-content rounded-full w-20">
                    <span className="text-xl font-bold">
                      {founder.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                <h3 className="card-title text-xl">
                  {founder.name}
                </h3>
                <div className="badge badge-secondary mb-3">
                  {founder.title}
                </div>
                <p className="text-base-content/70 leading-relaxed mb-4">
                  {founder.bio}
                </p>
                <div className="flex justify-center space-x-4">
                  <a 
                    href={founder.linkedin} 
                    className="btn btn-circle btn-outline btn-sm"
                    aria-label={`${founder.name} LinkedIn`}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a 
                    href={founder.twitter} 
                    className="btn btn-circle btn-outline btn-sm"
                    aria-label={`${founder.name} Twitter`}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mission Statement with DaisyUI Hero */}
        <div className="hero bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl">
          <div className="hero-content text-center py-16">
            <div className="max-w-4xl">
              <h2 className="text-4xl font-bold mb-6">
                Transforming Global Food Export
              </h2>
              <p className="text-lg mb-8 text-base-content/70 leading-relaxed">
                Our mission is to empower food exporters with cutting-edge compliance technology, 
                making international trade more transparent, efficient, and profitable. We're building 
                the infrastructure that connects farms to global markets with complete traceability.
              </p>
              
              {/* Industry Stats */}
              <div className="stats stats-vertical lg:stats-horizontal shadow mb-8">
                <div className="stat">
                  <div className="stat-title">US Export Partners</div>
                  <div className="stat-value text-primary">170+</div>
                  <div className="stat-desc">Countries importing US ag <a href="https://www.ers.usda.gov/topics/international-markets-us-trade/us-agricultural-trade/us-agricultural-trade-at-a-glance" target="_blank" rel="noopener noreferrer" className="link link-primary text-xs">↗</a></div>
                </div>
                
                <div className="stat">
                  <div className="stat-title">Market Growth</div>
                  <div className="stat-value text-secondary">36.2%</div>
                  <div className="stat-desc">Blockchain CAGR 2024-2032 <a href="https://www.gminsights.com/industry-analysis/blockchain-in-agriculture-and-food-supply-chain-market" target="_blank" rel="noopener noreferrer" className="link link-primary text-xs">↗</a></div>
                </div>
                
                <div className="stat">
                  <div className="stat-title">Export Value</div>
                  <div className="stat-value text-accent">$176B</div>
                  <div className="stat-desc">US ag exports 2024 <a href="https://www.ers.usda.gov/topics/international-markets-us-trade/us-agricultural-trade/us-agricultural-trade-at-a-glance" target="_blank" rel="noopener noreferrer" className="link link-primary text-xs">↗</a></div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn btn-primary btn-lg">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Join Our Mission
                </button>
                <button className="btn btn-outline btn-lg">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}