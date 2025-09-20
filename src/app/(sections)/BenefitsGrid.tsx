export default function BenefitsGrid() {
  return (
    <section className="section-container">
      <div className="section-wrapper">
        <div className="section-content">
          <div className="section-header">
            <h2 className="section-title">
              Benefits for Everyone in the Supply Chain
            </h2>
            <p className="section-subtitle">
              FarmRoket™ creates value for all stakeholders, with suppliers at the center driving compliance and transparency
            </p>
          </div>

        {/* Primary Supplier Benefits - Featured */}
        <div className="mb-16">
          <div className="card bg-gradient-to-r from-accent/10 to-primary/10 shadow-xl border border-accent/20">
            <div className="card-body p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl sm:text-3xl font-bold text-accent mb-2">Suppliers (Primary Focus)</h3>
                  <p className="text-lg sm:text-xl text-base-content/80">Exporters, Importers, and Co-ops</p>
                </div>
                <div className="badge badge-accent badge-lg">Primary Users</div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
                <div className="bg-base-100/50 rounded-lg p-4 sm:p-6 lg:px-8 h-full flex flex-row items-start gap-4">
                  <div className="flex-1">
                    <div className="text-xl sm:text-2xl mb-4 text-base-content">Stay Compliant</div>
                    <div className="text-base-content/70 mb-6 leading-relaxed">Meet FSMA, EUDR, and global regulatory standards automatically</div>
                  </div>
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                
                <div className="bg-base-100/50 rounded-lg p-4 sm:p-6 lg:px-8 h-full flex flex-row items-start gap-4">
                  <div className="flex-1">
                    <div className="text-xl sm:text-2xl mb-4 text-base-content">Build Trust</div>
                    <div className="text-base-content/70 mb-6 leading-relaxed">Transparent supply chains increase customer confidence and loyalty</div>
                  </div>
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                </div>
                
                <div className="bg-base-100/50 rounded-lg p-4 sm:p-6 lg:px-8 h-full flex flex-row items-start gap-4">
                  <div className="flex-1">
                    <div className="text-xl sm:text-2xl mb-4 text-base-content">Reduce Fraud</div>
                    <div className="text-base-content/70 mb-6 leading-relaxed">Blockchain verification eliminates counterfeit products and false claims</div>
                  </div>
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Beneficiaries Section */}
        <div className="mb-8">
          <h3 className="heading-lg text-center mb-4">Other Beneficiaries</h3>
          <p className="text-body text-center max-w-2xl mx-auto">Supporting stakeholders who benefit from transparent and traceable supply chains</p>
        </div>

        {/* Supporting Stakeholders Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Photo Placeholder */}
          <div className="bg-base-200 rounded-lg p-8 flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <div className="w-16 h-16 bg-base-300 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-base-content/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-base-content/50">Photo placeholder</p>
            </div>
          </div>

          {/* Accordion */}
            <div className="space-y-6">
              {/* Farmers Accordion */}
              <div className="card glass-avocado-card shadow-xl">
                <div className="collapse collapse-plus">
                  <input type="radio" name="stakeholders-accordion" defaultChecked />
                  <div className="collapse-title text-base lg:text-lg font-medium flex items-center gap-2">
                    <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-accent/20 to-accent/5 rounded-md flex items-center justify-center flex-shrink-0 shadow-lg shadow-accent/20">
                      <svg className="w-5 h-5 lg:w-6 lg:h-6 text-avocado-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16l-3-9m3 9l3-9" />
                       </svg>
                    </div>
                    <span className="text-avocado-green">Farmers</span>
                  </div>
                  <div className="collapse-content">
                    <p className="text-sm text-base-content/70 leading-snug">Enable simple mobile record-keeping and direct supplier connections while earning premium pricing for transparency and traceability.</p>
                  </div>
                </div>
              </div>
  
              {/* Regulators Accordion */}
              <div className="card glass-avocado-card shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="collapse collapse-plus">
                  <input type="radio" name="stakeholders-accordion" />
                  <div className="collapse-title text-base lg:text-lg font-medium flex items-center gap-2">
                     <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-accent/20 to-accent/5 rounded-md flex items-center justify-center flex-shrink-0 shadow-lg shadow-accent/20">
                       <svg className="w-5 h-5 lg:w-6 lg:h-6 text-avocado-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                     </div>
                     <span className="text-avocado-green">Regulators</span>
                   </div>
                   <div className="collapse-content">
                    <p className="text-sm text-base-content/70 leading-snug">Access instant blockchain verification with automated compliance monitoring and reduced audit overhead for streamlined regulatory oversight.</p>
                  </div>
                </div>
              </div>
  
              {/* Consumers Accordion */}
              <div className="card glass-avocado-card shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="collapse collapse-plus">
                  <input type="radio" name="stakeholders-accordion" />
                  <div className="collapse-title text-base lg:text-lg font-medium flex items-center gap-2">
                     <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-accent/20 to-accent/5 rounded-md flex items-center justify-center flex-shrink-0 shadow-lg shadow-accent/20">
                       <svg className="w-5 h-5 lg:w-6 lg:h-6 text-avocado-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 3H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                        </svg>
                     </div>
                     <span className="text-avocado-green">Consumers</span>
                   </div>
                   <div className="collapse-content">
                    <p className="text-sm text-base-content/70 leading-snug">Scan QR codes for complete transparency, verify product authenticity, and access the complete journey of your food from farm to table.</p>
                  </div>
                </div>
              </div>
            </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="card bg-gradient-to-r from-primary/10 to-accent/10 shadow-lg hover:shadow-xl transition-all duration-300 max-w-2xl mx-auto">
            <div className="card-body text-center p-8">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6">
                Ready to Transform Your Supply Chain?
              </h3>
              <p className="text-base-content/70 mb-8 text-lg leading-relaxed">
                Join leading suppliers who are already building trust and ensuring compliance with FarmRoket™
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn btn-primary btn-lg px-8">
                  Request Demo
                </button>
                <button className="btn btn-outline btn-lg px-8">
                  View Case Studies
                </button>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}