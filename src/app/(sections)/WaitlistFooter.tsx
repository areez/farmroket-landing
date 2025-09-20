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

            <div className="bg-gray-900/50 backdrop-blur-sm p-6 max-w-xl mx-auto rounded-xl">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-4">
                  <input
                     type="text"
                     name="name"
                     value={formData.name}
                     onChange={handleInputChange}
                     placeholder="Enter your full name"
                     className="form-input-large w-full"
                     required
                   />
                   <input
                     type="email"
                     name="email"
                     value={formData.email}
                     onChange={handleInputChange}
                     placeholder="Enter your email address"
                     className="form-input-large w-full"
                     required
                   />
                   <input
                     type="text"
                     name="organization"
                     value={formData.organization}
                     onChange={handleInputChange}
                     placeholder="Your company or organization"
                     className="form-input-large w-full"
                     required
                   />
                </div>
                
                <button
                   type="submit"
                   disabled={isSubmitting}
                   className="btn-primary-large w-full mt-6"
                 >
                  {isSubmitting ? (
                    <>
                      <span className="loading loading-spinner loading-sm mr-2"></span>
                      Joining...
                    </>
                  ) : (
                    'Get Early Access'
                  )}
                </button>
                
                <p className="text-xs text-gray-500 text-center mt-3">
                  We&apos;ll only email about pilot and product updates.
                </p>

                {submitStatus === 'success' && (
                  <div className="alert alert-success">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Thank you! You&apos;ve been added to our waitlist.</span>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="alert alert-error">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <span>Something went wrong. Please try again.</span>
                  </div>
                )}
              </form>
            </div>

              <div className="mt-12 grid md:grid-cols-3 gap-8 text-gray-100">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">500+</div>
                  <div>Early Adopters</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">Q2 2024</div>
                  <div>Expected Launch</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">Free</div>
                  <div>Beta Access</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Footer */}
      <footer className="section-padding bg-surface">
        <div className="container mx-auto container-padding">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
              {/* Company Info */}
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold text-accent mb-4">FarmRoket&trade;</h3>
                <p className="text-body mb-4 max-w-md">
                  Revolutionizing food supply chains with blockchain technology. 
                  Complete transparency from farm to fork.
                </p>
                <div className="flex space-x-4">
                  <a href="#twitter" className="w-8 h-8 flex items-center justify-center rounded-full border border-neutral-content/30 text-body hover:bg-accent hover:border-accent hover:text-white transition-all duration-300">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a href="#linkedin" className="w-8 h-8 flex items-center justify-center rounded-full border border-neutral-content/30 text-body hover:bg-accent hover:border-accent hover:text-white transition-all duration-300">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href="#github" className="w-8 h-8 flex items-center justify-center rounded-full border border-neutral-content/30 text-body hover:bg-accent hover:border-accent hover:text-white transition-all duration-300">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-semibold text-primary mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><a href="#features" className="text-body hover:text-accent transition-colors">Features</a></li>
                  <li><a href="#how-it-works" className="text-body hover:text-accent transition-colors">How It Works</a></li>
                  <li><a href="#benefits" className="text-body hover:text-accent transition-colors">Benefits</a></li>
                  <li><a href="#about" className="text-body hover:text-accent transition-colors">About Us</a></li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="font-semibold text-primary mb-4">Contact</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="mailto:info@farmroket.com" className="text-body hover:text-accent transition-colors">
                      info@farmroket.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:+1-555-0123" className="text-body hover:text-accent transition-colors">
                      +8801707080930
                    </a>
                  </li>
                  <li className="text-body">
                    San Francisco, CA
                  </li>
                </ul>
              </div>
            </div>

            <div className="divider my-8"></div>
            
            <div className="flex flex-col md:flex-row justify-between items-center w-full">
              <p className="text-body">&copy; 2024-2025 FarmRoket&trade;. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#privacy" className="text-body hover:text-accent transition-colors">Privacy Policy</a>
                <a href="#terms" className="text-body hover:text-accent transition-colors">Terms of Service</a>
                <a href="#cookies" className="text-body hover:text-accent transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}