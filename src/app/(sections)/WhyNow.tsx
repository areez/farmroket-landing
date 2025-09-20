export default function WhyNow() {
  return (
    <section className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Why Exporters Choose FarmRoket™ Now
          </h2>
          <p className="text-xl text-base-content/70 max-w-4xl mx-auto">
            The export landscape is changing rapidly. Early adopters gain competitive advantages while others struggle to catch up.
          </p>
        </div>

        {/* DaisyUI Collapse/Accordion for detailed information */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="collapse collapse-plus bg-base-200 mb-4">
            <input type="radio" name="urgency-accordion" defaultChecked />
            <div className="collapse-title text-xl font-medium flex items-center">
              <div className="badge badge-error mr-3">ACTIVE</div>
              Current FDA & FSMA Requirements
            </div>
            <div className="collapse-content">
              <div className="grid md:grid-cols-2 gap-6 pt-4">
                <div>
                  <h4 className="font-semibold mb-3">Active Regulations:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center"><span className="w-2 h-2 bg-error rounded-full mr-2"></span>FSMA Traceability Rule: In Effect Since Jan 2026 <a href="https://www.fda.gov/food/food-safety-modernization-act-fsma/fsma-final-rule-requirements-additional-traceability-records-certain-foods" target="_blank" rel="noopener noreferrer" className="link link-primary text-xs">↗</a></li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-warning rounded-full mr-2"></span>FSVP Requirements: Mandatory for Importers <a href="https://www.fda.gov/food/food-safety-modernization-act-fsma/fsma-final-rule-foreign-supplier-verification-programs-fsvp-importers-food-humans-and-animals" target="_blank" rel="noopener noreferrer" className="link link-primary text-xs">↗</a></li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-info rounded-full mr-2"></span>Enhanced FDA Enforcement: 2024 Updates <a href="https://www.eaglepi.com/blog/fsma-2024-updates/" target="_blank" rel="noopener noreferrer" className="link link-primary text-xs">↗</a></li>
                  </ul>
                </div>
                <div className="bg-base-300 p-4 rounded-lg">
                  <div className="text-xs text-base-content/60 mb-2">Compliance Status</div>
                  <div className="bg-gradient-to-r from-error/20 to-warning/20 h-16 rounded flex items-center justify-center text-base-content/60">
                    FSMA Compliance Dashboard
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-200 mb-4">
            <input type="radio" name="urgency-accordion" />
            <div className="collapse-title text-xl font-medium flex items-center">
              <div className="badge badge-warning mr-3">COMPETITIVE</div>
              Market Opportunity
            </div>
            <div className="collapse-content">
              <div className="grid md:grid-cols-3 gap-4 pt-4">
                <div className="stat bg-primary text-primary-content rounded-lg">
                  <div className="stat-title text-primary-content/70">Market Size</div>
                  <div className="stat-value text-2xl">$303M</div>
                  <div className="stat-desc text-primary-content/70">2023 blockchain food supply <a href="https://www.gminsights.com/industry-analysis/blockchain-in-agriculture-and-food-supply-chain-market" target="_blank" rel="noopener noreferrer" className="link text-primary-content/70 text-xs">↗</a></div>
                </div>
                <div className="stat bg-secondary text-secondary-content rounded-lg">
                  <div className="stat-title text-secondary-content/70">Growth Rate</div>
                  <div className="stat-value text-2xl">36.2%</div>
                  <div className="stat-desc text-secondary-content/70">CAGR 2024-2032 <a href="https://www.gminsights.com/industry-analysis/blockchain-in-agriculture-and-food-supply-chain-market" target="_blank" rel="noopener noreferrer" className="link text-secondary-content/70 text-xs">↗</a></div>
                </div>
                <div className="stat bg-accent text-accent-content rounded-lg">
                  <div className="stat-title text-accent-content/70">US Ag Exports</div>
                  <div className="stat-value text-2xl">$176B</div>
                  <div className="stat-desc text-accent-content/70">2024 total value <a href="https://www.ers.usda.gov/topics/international-markets-us-trade/us-agricultural-trade/us-agricultural-trade-at-a-glance" target="_blank" rel="noopener noreferrer" className="link text-accent-content/70 text-xs">↗</a></div>
                </div>
              </div>
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="urgency-accordion" />
            <div className="collapse-title text-xl font-medium flex items-center">
              <div className="badge badge-info mr-3">COST</div>
              Rising Compliance Costs Without Automation
            </div>
            <div className="collapse-content">
              <div className="grid md:grid-cols-2 gap-6 pt-4">
                <div>
                  <h4 className="font-semibold mb-3">Manual Process Costs:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center"><span className="w-2 h-2 bg-error rounded-full mr-2"></span>$50K+ annual compliance staff</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-error rounded-full mr-2"></span>3-5 days per audit preparation</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-error rounded-full mr-2"></span>15-20% rejected shipments</li>
                  </ul>
                </div>
                <div className="bg-base-300 p-4 rounded-lg">
                  <div className="text-xs text-base-content/60 mb-2">Cost Calculator</div>
                  <div className="bg-gradient-to-r from-warning/20 to-error/20 h-16 rounded flex items-center justify-center text-base-content/60">
                    ROI Calculator Interface
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced CTA with DaisyUI Hero */}
        <div className="hero bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl">
          <div className="hero-content text-center py-16">
            <div className="max-w-4xl">
              <h3 className="text-3xl font-bold mb-6">
                Don&apos;t Wait Until Compliance Becomes Crisis
              </h3>
              <p className="text-lg mb-8 text-base-content/70">
                Join 200+ exporters who are already building their competitive advantage with FarmRoket™&apos;s automated compliance platform.
              </p>
              
              {/* Action buttons with better DaisyUI styling */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <button className="btn btn-primary btn-lg">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Get Early Access
                </button>
                <button className="btn btn-outline btn-lg">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Schedule Demo
                </button>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-base-content/60">
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-success" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  No setup fees
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-success" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  30-day free trial
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-success" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Cancel anytime
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}