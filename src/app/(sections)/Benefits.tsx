export default function Benefits() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-96 h-96 glass-avocado-light rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 glass-avocado-light rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-padding relative z-10">
        <div className="content-container text-center mb-16">
          <h2 className="heading-lg mb-6">
            Why Leading Exporters Choose FarmRoket™
          </h2>
          <p className="text-xl leading-relaxed max-w-3xl mx-auto">
            Maximize profitability, reduce risks, and scale your export business with our comprehensive SaaS platform.
          </p>
        </div>
        
        {/* Primary Benefits for Exporters/Traders */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Increase Profitability */}
          <div className="card card-hover">
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 bg-green-500/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4 text-green-400">Increase Profitability by 25-40%</h3>
                <p className="text-lg leading-relaxed mb-6 text-gray-300">
                  Command premium prices with verified quality credentials and optimize operations with data-driven insights.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm">Premium pricing for verified products</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm">Reduced operational costs through automation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm">Market intelligence for optimal pricing</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* ROI Mockup */}
            <div className="mt-6 bg-gray-900/50 rounded-lg p-4 border border-gray-700">
              <div className="text-center">
                <div className="text-sm text-gray-400 mb-2">Average ROI Increase</div>
                <div className="text-3xl font-bold text-green-400">+32%</div>
                <div className="text-xs text-gray-500">Within 6 months</div>
              </div>
            </div>
          </div>
          
          {/* Reduce Risks */}
          <div className="card card-hover">
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 bg-blue-500/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">Reduce Compliance Risks by 90%</h3>
                <p className="text-lg leading-relaxed mb-6 text-gray-300">
                  Automated compliance monitoring and documentation ensures you meet all international trade requirements.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm">Real-time compliance monitoring</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm">Automated documentation generation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm">Early risk detection and alerts</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Risk Reduction Mockup */}
            <div className="mt-6 bg-gray-900/50 rounded-lg p-4 border border-gray-700">
              <div className="text-center">
                <div className="text-sm text-gray-400 mb-2">Compliance Issues Prevented</div>
                <div className="text-3xl font-bold text-blue-400">847</div>
                <div className="text-xs text-gray-500">This quarter</div>
              </div>
            </div>
          </div>
          
          {/* Scale Operations */}
          <div className="card card-hover">
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 bg-purple-500/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                <svg className="w-10 h-10 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4 text-purple-400">Scale Operations 3x Faster</h3>
                <p className="text-lg leading-relaxed mb-6 text-gray-300">
                  Streamlined workflows and automated processes enable rapid expansion into new markets and product lines.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm">Multi-market management from one platform</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm">Automated workflow orchestration</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm">Scalable infrastructure and support</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Growth Mockup */}
            <div className="mt-6 bg-gray-900/50 rounded-lg p-4 border border-gray-700">
              <div className="text-center">
                <div className="text-sm text-gray-400 mb-2">Average Growth Rate</div>
                <div className="text-3xl font-bold text-purple-400">+180%</div>
                <div className="text-xs text-gray-500">Year over year</div>
              </div>
            </div>
          </div>
          
          {/* Market Access */}
          <div className="card card-hover">
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 bg-orange-500/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                <svg className="w-10 h-10 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4 text-orange-400">Access Premium Global Markets</h3>
                <p className="text-lg leading-relaxed mb-6 text-gray-300">
                  Meet the highest international standards and unlock access to premium markets worldwide.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-orange-500/20 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm">EU, US, and Asian market compliance</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-orange-500/20 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm">Organic and sustainability certifications</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-orange-500/20 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm">Buyer network and marketplace access</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Market Access Mockup */}
            <div className="mt-6 bg-gray-900/50 rounded-lg p-4 border border-gray-700">
              <div className="text-center">
                <div className="text-sm text-gray-400 mb-2">New Markets Accessed</div>
                <div className="text-3xl font-bold text-orange-400">12</div>
                <div className="text-xs text-gray-500">In the last year</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Supporting Roles */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h4 className="text-lg font-semibold mb-6 text-gray-400">Supporting Roles</h4>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card card-hover text-center bg-gray-800/30">
              <div className="w-12 h-12 mx-auto mb-4 bg-accent/10 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-2">Farmers & Producers</h4>
              <p className="text-sm text-gray-400">
                Build trust and command premium prices with verified credentials
              </p>
            </div>
            
            <div className="card card-hover text-center bg-gray-800/30">
              <div className="w-12 h-12 mx-auto mb-4 bg-accent/10 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-2">Regulators</h4>
              <p className="text-sm text-gray-400">
                Ensure compliance with immutable records and real-time monitoring
              </p>
            </div>
            
            <div className="card card-hover text-center bg-gray-800/30">
              <div className="w-12 h-12 mx-auto mb-4 bg-accent/10 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-2">End Consumers</h4>
              <p className="text-sm text-gray-400">
                Make informed choices with complete transparency and quality assurance
              </p>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="text-center">
          <div className="card card-hover max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Export Business?</h3>
            <p className="text-lg leading-relaxed mb-8">
              Join leading exporters and traders who have increased their profitability by an average of 32% with FarmRoket™.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary-large">
                Start Free Trial
              </button>
              <a href="https://outlook.office.com/bookwithme/user/48cc795072e74f5c997fec66dfc15db8@valiant.com.bd/meetingtype/dXqpDcIwYEqrf8q0lr6ijg2?anonymous&ismsaljsauthenabled&ep=mLinkFromTile" target="_blank" className="btn-secondary-large">
                Schedule a Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}