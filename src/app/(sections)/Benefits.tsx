export default function Benefits() {
  const userTypes = [
    {
      title: "Producers",
      icon: (
        <svg className="icon-slim-lg icon-gradient" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
      benefits: [
        "Efficiency, risk mitigation, profitability ↑"
      ]
    },
    {
      title: "Traders",
      icon: (
        <svg className="icon-slim-lg icon-gradient" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
      benefits: [
        "Streamlined ops, enhanced tracking"
      ]
    },
    {
      title: "Regulators",
      icon: (
        <svg className="icon-slim-lg icon-gradient" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      benefits: [
        "Meet global market regulations & food safety standards"
      ]
    },
    {
      title: "Consumers",
      icon: (
        <svg className="icon-slim-lg icon-gradient" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      benefits: [
        "Assurance of safety, quality, transparency"
      ]
    }
  ];



  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="content-container">
          <div className="text-center mb-20">
            <h2 className="heading-lg mb-4">
              Benefits for Every Stakeholder
            </h2>
            <p className="text-xl text-body max-w-3xl mx-auto">
              Our platform delivers value across the entire food ecosystem, from <strong>producers</strong> to <strong>consumers</strong>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {userTypes.map((userType, index) => {
            return (
              <div key={index} className="card-primary p-8">
                <div className="flex flex-col items-center text-center mb-6">
                  {userType.icon}
                  <h3 className="heading-sm mt-4">
                    {userType.title}
                  </h3>
                </div>
                <div className="text-center">
                  {userType.benefits.map((benefit, benefitIndex) => (
                    <p key={benefitIndex} className="text-body leading-relaxed">
                      {benefit}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
          </div>

          <div className="mt-12 text-center">
            <div className="max-w-5xl mx-auto text-center py-12">
              <h3 className="heading-md">
                Join the Food Transparency Revolution
              </h3>
              <p className="text-body mb-8">
                Be part of the movement that&apos;s transforming how we track, verify, and trust our food supply chains.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary">
                  Join Waitlist
                </button>
                <button className="btn-secondary">
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