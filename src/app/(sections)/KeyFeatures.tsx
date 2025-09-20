export default function KeyFeatures() {
  return (
    <section id="features" className="section-container">
      <div className="section-wrapper">
        <div className="section-content">
          <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Key Features
          </h2>
          <p className="text-lg sm:text-xl text-base-content/70 max-w-3xl mx-auto leading-relaxed">
            Comprehensive tools designed specifically for suppliers to ensure compliance and build trust
          </p>
        </div>

        {/* 2x2 Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 max-w-7xl mx-auto">
          {/* Traceability Dashboard */}
          <div className="card glass-avocado-card shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full">
            <div className="card-body text-center p-6 sm:p-8 flex flex-col h-full">
              <div className="mx-auto mb-6 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl flex items-center justify-center shadow-lg shadow-accent/20">
                <svg className="w-12 h-12 sm:w-14 sm:h-14" fill="none" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="dashboardGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="var(--color-accent)" />
                      <stop offset="100%" stopColor="var(--color-primary)" />
                    </linearGradient>
                  </defs>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} stroke="url(#dashboardGradient)" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} stroke="url(#dashboardGradient)" d="M3 3h18v4l-7 7v7l-4-4v-3L3 7V3z" />
                </svg>
              </div>
              <h3 className="card-title justify-center text-xl sm:text-2xl mb-4">
                Traceability Dashboard
              </h3>
              <p className="text-base-content/70 mb-6 leading-relaxed">
                Real-time visibility into your entire supply chain with comprehensive batch tracking and analytics
              </p>
              <div className="flex flex-wrap gap-1 justify-center mt-auto">
                <div className="badge badge-sm bg-transparent flex items-center gap-1" style={{borderColor: 'var(--color-primary)', color: 'var(--text-primary)'}}>
                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: 'var(--color-primary)'}}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                  </svg>
                  Real-time tracking
                </div>
                <div className="badge badge-sm bg-transparent flex items-center gap-1" style={{borderColor: 'var(--color-primary)', color: 'var(--text-primary)'}}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: 'var(--color-primary)'}}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  Batch analytics
                </div>
                <div className="badge badge-sm bg-transparent flex items-center gap-1" style={{borderColor: 'var(--color-primary)', color: 'var(--text-primary)'}}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: 'var(--color-primary)'}}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  Supply chain visibility
                </div>
              </div>
            </div>
          </div>

          {/* QR Code Verification */}
          <div className="card glass-avocado-card shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full">
            <div className="card-body text-center p-6 sm:p-8 flex flex-col h-full">
              <div className="mx-auto mb-6 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl flex items-center justify-center shadow-lg shadow-accent/20">
                <svg className="w-12 h-12 sm:w-14 sm:h-14" fill="none" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="verificationGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="var(--color-accent)" />
                      <stop offset="100%" stopColor="var(--color-primary)" />
                    </linearGradient>
                  </defs>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} stroke="url(#verificationGradient)" d="M9 12l2 2 4-4m6-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} stroke="url(#verificationGradient)" d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
                </svg>
              </div>
              <h3 className="card-title justify-center text-xl sm:text-2xl mb-4">
                QR Code Verification
              </h3>
              <p className="text-base-content/70 mb-6 leading-relaxed">
                Instant product verification for consumers and regulators with blockchain-backed authenticity
              </p>
              <div className="flex flex-wrap gap-1 justify-center mt-auto">
                <div className="badge badge-sm bg-transparent flex items-center gap-1" style={{borderColor: 'var(--color-primary)', color: 'var(--text-primary)'}}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: 'var(--color-primary)'}}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Instant verification
                </div>
                <div className="badge badge-sm bg-transparent flex items-center gap-1" style={{borderColor: 'var(--color-primary)', color: 'var(--text-primary)'}}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: 'var(--color-primary)'}}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 10.5L21 3m-5.5 5.5L21 3m-5.5 5.5L21 3M6 21l1.5-1.5M6 21l1.5-1.5M6 21l1.5-1.5" />
                    <circle cx="12" cy="12" r="3" strokeWidth={1.5} />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 1v6m0 10v6m11-7h-6m-10 0H1" />
                  </svg>
                  Blockchain-backed
                </div>
                <div className="badge badge-sm bg-transparent flex items-center gap-1" style={{borderColor: 'var(--color-primary)', color: 'var(--text-primary)'}}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: 'var(--color-primary)'}}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                  Consumer trust
                </div>
              </div>
            </div>
          </div>

          {/* Compliance Reporting */}
          <div className="card glass-avocado-card shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full">
            <div className="card-body text-center p-6 sm:p-8 flex flex-col h-full">
              <div className="mx-auto mb-6 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl flex items-center justify-center shadow-lg shadow-accent/20">
                <svg className="w-12 h-12 sm:w-14 sm:h-14" fill="none" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="reportingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="var(--color-accent)" />
                      <stop offset="100%" stopColor="var(--color-primary)" />
                    </linearGradient>
                  </defs>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} stroke="url(#reportingGradient)" d="M9 17h6l3 3v-3h2V9h-2M4 4h11v8H9l-3 3v-3H4V4z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} stroke="url(#reportingGradient)" d="M7 8h6m-6 4h4" />
                </svg>
              </div>
              <h3 className="card-title justify-center text-xl sm:text-2xl mb-4">
                Compliance Reporting
              </h3>
              <p className="text-base-content/70 mb-6 leading-relaxed">
                Automated generation of FSMA, EUDR, and other regulatory reports with blockchain verification
              </p>
              <div className="flex flex-wrap gap-1 justify-center mt-auto">
                <div className="badge badge-sm bg-transparent flex items-center gap-1" style={{borderColor: 'var(--color-primary)', color: 'var(--text-primary)'}}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: 'var(--color-primary)'}}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                  FSMA ready
                </div>
                <div className="badge badge-sm bg-transparent flex items-center gap-1" style={{borderColor: 'var(--color-primary)', color: 'var(--text-primary)'}}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: 'var(--color-primary)'}}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                  EUDR compliant
                </div>
                <div className="badge badge-sm bg-transparent flex items-center gap-1" style={{borderColor: 'var(--color-primary)', color: 'var(--text-primary)'}}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: 'var(--color-primary)'}}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l-1-3m1 3l-1-3m-16.5-3h9.75" />
                  </svg>
                  Automated reports
                </div>
              </div>
            </div>
          </div>

          {/* Multi-tenant SaaS Access */}
          <div className="card glass-avocado-card shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full">
            <div className="card-body text-center p-6 sm:p-8 flex flex-col h-full">
              <div className="mx-auto mb-6 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl flex items-center justify-center shadow-lg shadow-accent/20">
                <svg className="w-12 h-12 sm:w-14 sm:h-14" fill="none" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="multiUserGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="var(--color-accent)" />
                      <stop offset="100%" stopColor="var(--color-primary)" />
                    </linearGradient>
                  </defs>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} stroke="url(#multiUserGradient)" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="card-title justify-center text-xl sm:text-2xl mb-4">
                Multi-tenant SaaS Access
              </h3>
              <p className="text-base-content/70 mb-6 leading-relaxed">
                Secure, scalable platform with role-based access for your entire organization and partners
              </p>
              <div className="flex flex-wrap gap-1 justify-center mt-auto">
                <div className="badge badge-sm bg-transparent flex items-center gap-1" style={{borderColor: 'var(--color-primary)', color: 'var(--text-primary)'}}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: 'var(--color-primary)'}}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                  Role-based access
                </div>
                <div className="badge badge-sm bg-transparent flex items-center gap-1" style={{borderColor: 'var(--color-primary)', color: 'var(--text-primary)'}}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: 'var(--color-primary)'}}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                  Secure platform
                </div>
                <div className="badge badge-sm bg-transparent flex items-center gap-1" style={{borderColor: 'var(--color-primary)', color: 'var(--text-primary)'}}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: 'var(--color-primary)'}}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                  </svg>
                  Team collaboration
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="flex justify-center mt-16">
          <button className="btn btn-primary btn-lg px-8 py-4 mx-auto">
            Explore All Features
          </button>
        </div>
        </div>
      </div>
    </section>
  );
}