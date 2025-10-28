export default function ProblemSolution() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-80 h-80 glass-avocado-light rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 glass-avocado-light rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-padding relative z-10">
        <div className="content-container">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">
              Export Challenges & Our SaaS Solution
            </h2>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto">
              Food exporters face complex compliance requirements, supply chain opacity, and operational inefficiencies that limit growth and profitability.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            {/* The Problem */}
            <div className="card card-hover">
              <div className="flex items-start gap-6 mb-8">
                <div className="w-20 h-20 bg-red-500/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-10 h-10 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-red-400">
                    Export Challenges Costing You Millions
                  </h3>
                  <p className="text-lg leading-relaxed text-gray-300 mb-6">
                    Traditional export operations are plagued with manual processes, compliance risks, and lack of real-time visibility.
                  </p>
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Manual Compliance Management</h4>
                    <p className="text-sm text-gray-400">Hours spent on paperwork, high risk of human error, delayed shipments</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Supply Chain Opacity</h4>
                    <p className="text-sm text-gray-400">No real-time visibility, quality issues discovered too late, customer trust issues</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Fragmented Operations</h4>
                    <p className="text-sm text-gray-400">Multiple systems, data silos, inefficient workflows, scaling challenges</p>
                  </div>
                </div>
              </div>
              
              {/* Problem Impact Mockup */}
              <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                <div className="text-center">
                  <div className="text-sm text-gray-400 mb-2">Average Annual Loss</div>
                  <div className="text-2xl font-bold text-red-400">$2.3M</div>
                  <div className="text-xs text-gray-500">Due to compliance issues & inefficiencies</div>
                </div>
              </div>
            </div>

            {/* Our Solution */}
            <div className="card card-hover">
              <div className="flex items-start gap-6 mb-8">
                <div className="w-20 h-20 bg-green-500/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-green-400">
                    FarmRoket™ SaaS Platform
                  </h3>
                  <p className="text-lg leading-relaxed text-gray-300 mb-6">
                    All-in-one export management platform with automated compliance, real-time tracking, and AI-powered insights.
                  </p>
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Automated Compliance Engine</h4>
                    <p className="text-sm text-gray-400">AI-powered documentation, real-time monitoring, 99.9% compliance rate</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">End-to-End Visibility</h4>
                    <p className="text-sm text-gray-400">Blockchain traceability, IoT sensors, real-time quality monitoring</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Unified Operations Hub</h4>
                    <p className="text-sm text-gray-400">Single platform, integrated workflows, scalable infrastructure</p>
                  </div>
                </div>
              </div>
              
              {/* Solution Impact Mockup */}
              <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Compliance Rate</div>
                    <div className="text-xl font-bold text-green-400">99.9%</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Time Saved</div>
                    <div className="text-xl font-bold text-green-400">75%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Platform Preview Mockup */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold mb-4">See FarmRoket™ in Action</h3>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Experience how our platform transforms complex export operations into streamlined, automated workflows.
              </p>
            </div>
            
            <div className="card card-hover max-w-5xl mx-auto">
              <div className="bg-gray-900/50 rounded-lg p-8 border border-gray-700">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Dashboard Preview */}
                  <div className="text-center">
                    <div className="w-16 h-16 bg-brand-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold mb-2">Export Dashboard</h4>
                    <p className="text-sm text-gray-400">Real-time overview of all shipments, compliance status, and performance metrics</p>
                  </div>
                  
                  {/* Mobile App Preview */}
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold mb-2">Mobile Tracking</h4>
                    <p className="text-sm text-gray-400">On-the-go access to shipment tracking, quality updates, and instant alerts</p>
                  </div>
                  
                  {/* Analytics Preview */}
                  <div className="text-center">
                    <div className="w-16 h-16 bg-orange-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold mb-2">AI Analytics</h4>
                    <p className="text-sm text-gray-400">Predictive insights, market intelligence, and optimization recommendations</p>
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