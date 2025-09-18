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
    <>
      {/* Use Cases & Regulatory Section */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Use Cases */}
              <div>
                <h2 className="text-4xl font-bold text-base-content mb-6">
                  Regulatory Compliance Made Simple
                </h2>
                <p className="text-xl text-base-content/80 mb-8 leading-relaxed">
                  Stay ahead of evolving food safety regulations with automated compliance tracking and real-time reporting. Our platform ensures you&apos;re always audit-ready.
                </p>
                
                <div className="space-y-6">
                  {useCases.map((useCase, index) => (
                    <div key={index} className="border-l-4 border-emerald-500 pl-6">
                      <h3 className="text-xl font-semibold text-base-content mb-2">
                        {useCase.title}
                      </h3>
                      <p className="text-base-content/80 mb-3">
                        {useCase.description}
                      </p>
                      <a 
                        href={useCase.link} 
                        className="text-accent hover:text-accent-focus font-medium inline-flex items-center"
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
              <div className="bg-base-200 rounded-2xl p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-base-content mb-4">
                    Regulatory Landscape
                  </h3>
                </div>
                
                <div className="space-y-4 text-base-content/90">
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>FDA Food Traceability Rule requires enhanced record-keeping for high-risk foods</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>EU regulations mandate farm-to-fork traceability by 2025</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Consumer demand for transparency driving market changes</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Blockchain adoption accelerating across food industry</span>
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <a 
                    href="#regulatory-whitepaper" 
                    className="btn btn-primary text-white px-6"
                  >
                    Download Regulatory Guide
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-base-content mb-4">
              Meet Our Founders
            </h2>
            <p className="text-xl text-base-content/80 max-w-3xl mx-auto">
              Passionate about transforming the food industry through technology and transparency
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {founders.map((founder, index) => (
              <div key={index} className="card bg-base-100 shadow-xl">
                <div className="card-body text-center">
                  <div className="avatar mb-6">
                    <div className="w-32 h-32 rounded-full mx-auto bg-base-300 flex items-center justify-center">
                      <svg className="w-16 h-16 text-base-content/40" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-base-content mb-1">
                    {founder.name}
                  </h3>
                  <p className="text-accent font-semibold mb-4">
                    {founder.title}
                  </p>
                  <p className="text-base-content/80 leading-relaxed mb-6">
                    {founder.bio}
                  </p>
                  <div className="flex justify-center space-x-4">
                    <a 
                      href={founder.linkedin} 
                      className="btn btn-circle btn-outline btn-sm"
                      aria-label={`${founder.name} LinkedIn`}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a 
                      href={founder.twitter} 
                      className="btn btn-circle btn-outline btn-sm"
                      aria-label={`${founder.name} Twitter`}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="bg-base-100 rounded-2xl shadow-xl p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-base-content mb-4">
                Our Mission
              </h3>
              <p className="text-base-content/80 text-lg leading-relaxed">
                To create a world where every consumer can trust the food they eat by providing complete transparency 
                and traceability throughout the supply chain. We believe that technology should serve humanity, 
                and blockchain can be the foundation for a more sustainable and trustworthy food system.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}