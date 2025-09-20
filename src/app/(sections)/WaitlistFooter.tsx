'use client';

import { useState } from 'react';

export default function WaitlistFooter() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', organization: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Waitlist CTA Section */}
      <section className="section-padding">
      <div className="section-container">
        <div className="content-container">
          <div className="max-w-5xl mx-auto text-center">
            <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm p-8 mb-6 rounded-xl">
              <h2 className="heading-lg mb-4">
                Get Pilot Access
              </h2>
              <p className="text-body-lg text-gray-100 mb-4 max-w-2xl mx-auto">
                Be among the first to experience the future of food traceability. 
                Get early access and exclusive updates on our platform launch.
              </p>
              <p className="text-avocado-green font-semibold text-base mb-6">
                Q1 2026 Expected Launch
              </p>

            <div className="hero bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl">
              <div className="hero-content text-center py-8">
                <div className="max-w-2xl">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="form-control">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                          className="input input-bordered w-full"
                          required
                        />
                      </div>
                      <div className="form-control">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your email address"
                          className="input input-bordered w-full"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="form-control">
                      <input
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleInputChange}
                        placeholder="Your company or organization"
                        className="input input-bordered w-full"
                        required
                      />
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`btn btn-primary btn-lg w-full ${isSubmitting ? 'loading' : ''}`}
                    >
                      {isSubmitting ? 'Joining...' : (
                        <>
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                          Get Early Access - Free
                        </>
                      )}
                    </button>
                    
                    <p className="text-xs text-base-content/60 text-center">
                      We&apos;ll only email about pilot and product updates.
                    </p>

                    {submitStatus === 'success' && (
                      <div className="alert alert-success">
                        <svg className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span>Thank you! You&apos;ve been added to our waitlist.</span>
                      </div>
                    )}

                    {submitStatus === 'error' && (
                      <div className="alert alert-error">
                        <svg className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span>Something went wrong. Please try again.</span>
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>

              <div className="stats stats-vertical lg:stats-horizontal shadow mt-12 w-full">
                <div className="stat">
                  <div className="stat-figure text-primary">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="stat-title">US Ag Exports</div>
                  <div className="stat-value text-primary">$176B</div>
                  <div className="stat-desc">2024 total value <a href="https://www.ers.usda.gov/topics/international-markets-us-trade/us-agricultural-trade/us-agricultural-trade-at-a-glance" target="_blank" rel="noopener noreferrer" className="link link-primary text-xs">↗</a></div>
                </div>
                
                <div className="stat">
                  <div className="stat-figure text-secondary">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="stat-title">Food GDP</div>
                  <div className="stat-value text-secondary">$1.53T</div>
                  <div className="stat-desc">US food sectors 2024 <a href="https://www.ers.usda.gov/topics/international-markets-us-trade/us-agricultural-trade/us-agricultural-trade-at-a-glance" target="_blank" rel="noopener noreferrer" className="link link-primary text-xs">↗</a></div>
                </div>
                
                <div className="stat">
                  <div className="stat-figure text-accent">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div className="stat-title">Blockchain Growth</div>
                  <div className="stat-value text-accent">36.2%</div>
                  <div className="stat-desc">CAGR 2024-2032 <a href="https://www.gminsights.com/industry-analysis/blockchain-in-agriculture-and-food-supply-chain-market" target="_blank" rel="noopener noreferrer" className="link link-primary text-xs">↗</a></div>
                </div>
                
                <div className="stat">
                  <div className="stat-figure text-info">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div className="stat-title">Market Size</div>
                  <div className="stat-value text-info">$303M</div>
                  <div className="stat-desc">2023 blockchain food supply <a href="https://www.gminsights.com/industry-analysis/blockchain-in-agriculture-and-food-supply-chain-market" target="_blank" rel="noopener noreferrer" className="link link-primary text-xs">↗</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Enhanced Footer with DaisyUI */}
      <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded-t-2xl">
        <div className="grid grid-flow-col gap-4">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mr-3">
              <span className="text-white font-bold">FR</span>
            </div>
            <span className="text-2xl font-bold">FarmRoket™</span>
          </div>
        </div>
        
        <div className="grid grid-flow-col gap-4">
          <a className="link link-hover" href="#features">Features</a>
          <a className="link link-hover" href="#compliance">Compliance</a>
          <a className="link link-hover" href="#pricing">Pricing</a>
          <a className="link link-hover" href="#about">About</a>
          <a className="link link-hover" href="#contact">Contact</a>
        </div>
        
        <div>
          <div className="grid grid-flow-col gap-4">
            <a className="link" href="#" aria-label="Twitter">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a className="link" href="#" aria-label="LinkedIn">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a className="link" href="#" aria-label="GitHub">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-base-content/70">
            Revolutionizing food export compliance through blockchain technology.
          </p>
          <p className="text-sm text-base-content/60 mt-2">
            © 2024 FarmRoket™. All rights reserved.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <a href="#privacy" className="link link-hover">Privacy Policy</a>
          <a href="#terms" className="link link-hover">Terms of Service</a>
          <a href="#cookies" className="link link-hover">Cookie Policy</a>
          <a href="#security" className="link link-hover">Security</a>
        </div>
      </footer>
    </>
  );
}