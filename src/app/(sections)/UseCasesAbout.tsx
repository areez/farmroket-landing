export default function UseCasesAbout() {
  const useCases = [
    {
      title: "Organic Certification",
      description: "Verify organic farming practices with immutable blockchain records",
      link: "#organic-certification"
    },
    {
      title: "Food Safety Compliance",
      description: "Meet FDA and USDA requirements with automated compliance tracking",
      link: "#food-safety"
    },
    {
      title: "Supply Chain Audits",
      description: "Streamline third-party audits with transparent, accessible records",
      link: "#supply-chain-audits"
    },
    {
      title: "Carbon Footprint Tracking",
      description: "Monitor and report environmental impact throughout the supply chain",
      link: "#carbon-tracking"
    }
  ];

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
    <section className="section-padding">
      <div className="section-container">
        <div className="content-container">
          {/* Use Cases Section */}
          <div className="mb-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Use Cases */}
              <div>
                <h2 className="heading-lg mb-6">
                  Regulatory Compliance Made Simple
                </h2>
                <p className="text-body mb-6 leading-normal">
                  Stay ahead of evolving food safety regulations with automated compliance tracking and real-time reporting. Our platform ensures you&apos;re always audit-ready.
                </p>
                
                <div className="space-y-6">
                  {useCases.map((useCase, index) => (
                    <div key={index} className="border-l-4 border-accent pl-6">
                      <h3 className="heading-sm text-primary mb-3">
                        {useCase.title}
                      </h3>
                      <p className="text-body mb-4">
                        {useCase.description}
                      </p>
                      <a 
                        href={useCase.link} 
                        className="text-accent hover:text-avocado-600 font-medium inline-flex items-center"
                      >
                        Learn more
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Regulatory Push */}
              <div className="card p-8">
                <div className="text-center mb-8">
                  <svg className="w-12 h-12 text-accent mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <h3 className="heading-md mb-4">
                    Regulatory Landscape
                  </h3>
                </div>
                
                <div className="space-y-8 text-body px-2">
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-4 flex-shrink-0"></span>
                    <span className="leading-relaxed">FDA Food Traceability Rule requires enhanced record-keeping for high-risk foods</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-4 flex-shrink-0"></span>
                    <span className="leading-relaxed">EU regulations mandate farm-to-fork traceability by 2025</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-4 flex-shrink-0"></span>
                    <span className="leading-relaxed">Consumer demand for transparency driving market changes</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-4 flex-shrink-0"></span>
                    <span className="leading-relaxed">Blockchain adoption accelerating across food industry</span>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <a 
                    href="#regulatory-whitepaper" 
                    className="btn-primary"
                  >
                    Download Regulatory Guide
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div>
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              Meet Our Founders
            </h2>
            <p className="text-xl text-body max-w-3xl mx-auto">
              Passionate about transforming the food industry through technology and transparency
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {founders.map((founder, index) => (
              <div key={index} className="card">
                <div className="card-body text-center">
                  <div className="avatar mb-6">
                    <div className="w-32 h-32 rounded-full mx-auto bg-surface flex items-center justify-center">
                      <svg className="w-16 h-16 text-body" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="heading-md mb-1">
                    {founder.name}
                  </h3>
                  <p className="text-accent font-semibold mb-4">
                    {founder.title}
                  </p>
                  <p className="text-body leading-relaxed mb-6">
                    {founder.bio}
                  </p>
                  <div className="flex justify-center space-x-4">
                    <a 
                      href={founder.linkedin} 
                      className="w-8 h-8 flex items-center justify-center rounded-full border border-neutral-content/30 text-body hover:bg-accent hover:border-accent hover:text-white transition-all duration-300"
                      aria-label={`${founder.name} LinkedIn`}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a 
                      href={founder.twitter} 
                      className="w-8 h-8 flex items-center justify-center rounded-full border border-neutral-content/30 text-body hover:bg-accent hover:border-accent hover:text-white transition-all duration-300"
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

          <div className="text-center mt-24">
            <div className="max-w-5xl mx-auto text-center">
              <h3 className="heading-md mb-6">
                Our Mission
              </h3>
              <p className="text-body text-lg leading-relaxed">
                To create a world where every consumer can trust the food they eat by providing complete transparency 
                and traceability throughout the supply chain. We believe that technology should serve humanity, 
                and blockchain can be the foundation for a more sustainable and trustworthy food system.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}