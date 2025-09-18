export default function Benefits() {
  const userTypes = [
    {
      title: "Producers",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "emerald",
      benefits: [
        "Prove sustainable farming practices",
        "Access premium markets",
        "Reduce certification costs",
        "Build direct consumer relationships",
        "Streamline compliance reporting"
      ]
    },
    {
      title: "Traders",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M9 1v6m6-6v6" />
        </svg>
      ),
      color: "blue",
      benefits: [
        "Verify supplier authenticity",
        "Reduce supply chain risks",
        "Faster quality assessments",
        "Automated inventory tracking",
        "Enhanced brand reputation"
      ]
    },
    {
      title: "Regulators",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: "purple",
      benefits: [
        "Real-time compliance monitoring",
        "Automated audit trails",
        "Faster contamination tracking",
        "Reduced inspection costs",
        "Enhanced food safety oversight"
      ]
    },
    {
      title: "Consumers",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      color: "orange",
      benefits: [
        "Verify food origin and quality",
        "Access detailed product history",
        "Make informed purchasing decisions",
        "Support sustainable practices",
        "Instant authenticity verification"
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      emerald: {
        bg: "bg-emerald-50",
        border: "border-emerald-200",
        iconBg: "bg-emerald-500",
        text: "text-emerald-800",
        accent: "text-emerald-600"
      },
      blue: {
        bg: "bg-blue-50",
        border: "border-blue-200",
        iconBg: "bg-blue-500",
        text: "text-blue-800",
        accent: "text-blue-600"
      },
      purple: {
        bg: "bg-purple-50",
        border: "border-purple-200",
        iconBg: "bg-purple-500",
        text: "text-purple-800",
        accent: "text-purple-600"
      },
      orange: {
        bg: "bg-orange-50",
        border: "border-orange-200",
        iconBg: "bg-orange-500",
        text: "text-orange-800",
        accent: "text-orange-600"
      }
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Benefits for Everyone
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            FarmRoket creates value across the entire food ecosystem, from farm to fork
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {userTypes.map((userType, index) => {
            const colors = getColorClasses(userType.color);
            return (
              <div key={index} className={`card ${colors.bg} shadow-xl border ${colors.border} hover:shadow-2xl transition-all duration-300`}>
                <div className="card-body">
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 ${colors.iconBg} rounded-full flex items-center justify-center text-white mr-4`}>
                      {userType.icon}
                    </div>
                    <h3 className={`text-2xl font-bold ${colors.text}`}>
                      {userType.title}
                    </h3>
                  </div>
                  
                  <ul className="space-y-3">
                    {userType.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start">
                        <svg className={`w-5 h-5 ${colors.accent} mr-3 mt-0.5 flex-shrink-0`} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className={`${colors.text} text-sm leading-relaxed`}>
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto border border-gray-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Join the Food Transparency Revolution
            </h3>
            <p className="text-gray-600 mb-6 text-lg">
              Whether you&apos;re a farmer, trader, regulator, or consumer, FarmRoket empowers you with the transparency and trust you deserve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn btn-primary btn-lg text-white px-8">
                Join Waitlist
              </button>
              <button className="btn btn-outline btn-lg px-8">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}