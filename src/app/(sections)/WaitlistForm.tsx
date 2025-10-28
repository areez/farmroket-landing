"use client";

import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import AuthModal from '@/components/AuthModal';

export default function WaitlistForm() {
  const { user } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    companySize: '',
    currentChallenges: [],
    interestedFeatures: [],
    timeline: '',
    additionalInfo: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>, field: 'currentChallenges' | 'interestedFeatures') => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [field]: checked 
        ? [...prev[field], value]
        : prev[field].filter(item => item !== value)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if user is authenticated
    if (!user) {
      setShowAuthModal(true);
      return;
    }
    
    setIsSubmitting(true);
    setError(null);
    
    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          userId: user.id,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        setError(result.error || 'An error occurred during submission');
      }
    } catch (error) {
      console.error('Network error:', error);
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className="section-padding bg-gradient-to-r from-success/10 to-primary/10">
        <div className="container-padding">
          <div className="max-w-2xl mx-auto text-center">
            <div className="card bg-base-100 shadow-2xl">
              <div className="card-body p-8 lg:p-12">
                <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">Thank You!</h2>
                <p className="text-lg lg:text-xl text-base-content/70 mb-8">
                  We've received your application for the FarmRoket™ pilot program. Our team will review your submission and contact you within 2-3 business days.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 justify-center">
                    <svg className="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Confirmation email sent to {formData.email}</span>
                  </div>
                  <div className="flex items-center gap-3 justify-center">
                    <svg className="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Priority access to pilot program</span>
                  </div>
                  <div className="flex items-center gap-3 justify-center">
                    <svg className="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Dedicated onboarding support</span>
                  </div>
                </div>
                <button 
                  className="btn btn-primary"
                  onClick={() => window.location.reload()}
                >
                  Return to Homepage
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="section-container">
      <div className="section-wrapper">
        <div className="section-content">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="badge bg-gray-800 text-white badge-lg mb-4">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Limited Pilot Access
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Join the Future of Food Traceability
            </h2>
            <p className="text-xl lg:text-2xl text-base-content/70 max-w-3xl mx-auto">
              Be among the first suppliers to implement blockchain-powered traceability. Apply for our exclusive pilot program.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Benefits Column */}
            <div className="space-y-8">
              <div className="card bg-gradient-to-br from-primary/10 to-secondary/10 shadow-lg hover:shadow-xl transition-shadow">
                <div className="card-body p-6 lg:p-8">
                  <h3 className="text-2xl font-bold mb-4 text-primary">What You Get</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Early Platform Access</h4>
                        <p className="text-sm text-white">Get full access to our blockchain traceability platform before public launch</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Locked-in Pricing</h4>
                        <p className="text-sm text-white">Special pilot pricing guaranteed for 12 months after launch</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Dedicated Support</h4>
                        <p className="text-sm text-white">Personal onboarding specialist and priority technical support</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Compliance Readiness</h4>
                        <p className="text-sm text-white">Get ahead of FSMA 204 and EUDR requirements with our guidance</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="stats stats-vertical shadow-lg">
                <div className="stat">
                  <div className="stat-title">Pilot Spots Available</div>
                  <div className="stat-value text-white">12</div>
                  <div className="stat-desc">Out of 50 total spots</div>
                </div>
                <div className="stat">
                  <div className="stat-title">Average Setup Time</div>
                  <div className="stat-value text-primary">2 weeks</div>
                  <div className="stat-desc">With dedicated support</div>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="card-body p-4 lg:p-6">
                <h3 id="pilot-access" className="text-xl font-bold mb-6 text-center">Apply for Pilot Access</h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   {/* Company Information */}
                    <div className="form-control">
                      <label className="label pb-1">
                        <span className="label-text font-semibold text-sm">Company Name *</span>
                      </label>
                      <input 
                        type="text" 
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        placeholder="Your company name" 
                        className="input input-bordered input-md focus:input-primary text-sm" 
                        required 
                      />
                    </div>
                    <div className="form-control">
                      <label className="label pb-1">
                        <span className="label-text font-semibold text-sm">Contact Name *</span>
                      </label>
                      <input 
                        type="text" 
                        name="contactName"
                        value={formData.contactName}
                        onChange={handleInputChange}
                        placeholder="Your full name" 
                        className="input input-bordered input-md focus:input-primary text-sm" 
                        required 
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-control">
                      <label className="label pb-1">
                        <span className="label-text font-semibold text-sm">Business Email *</span>
                      </label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="you@company.com" 
                        className="input input-bordered input-md focus:input-primary text-sm" 
                        required 
                      />
                    </div>
                    <div className="form-control">
                      <label className="label pb-1">
                        <span className="label-text font-semibold text-sm">Phone Number</span>
                      </label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 123-4567" 
                        className="input input-bordered input-md focus:input-primary text-sm" 
                      />
                    </div>
                  </div>

                   {/* Company Size */}
                   <div className="form-control col-span-full">
                     <label className="label pb-1">
                       <span className="label-text font-semibold text-sm">Company Size *</span>
                     </label>
                     <div className="dropdown dropdown-bottom w-full">
                       <div tabIndex={0} role="button" className="input input-bordered input-md focus:input-primary w-full flex justify-between items-center cursor-pointer">
                         <span className="text-sm">
                           {formData.companySize ? 
                             (formData.companySize === '1-10' ? '1-10 employees' :
                              formData.companySize === '11-50' ? '11-50 employees' :
                              formData.companySize === '51-200' ? '51-200 employees' :
                              formData.companySize === '201-500' ? '201-500 employees' :
                              formData.companySize === '500+' ? '500+ employees' : formData.companySize)
                             : 'Select company size'}
                         </span>
                         <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                         </svg>
                       </div>
                       <div tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-full">
                         {[
                           { value: '1-10', label: '1-10 employees' },
                           { value: '11-50', label: '11-50 employees' },
                           { value: '51-200', label: '51-200 employees' },
                           { value: '201-500', label: '201-500 employees' },
                           { value: '500+', label: '500+ employees' }
                         ].map((size) => (
                           <button
                             key={size.value}
                             type="button"
                             className="text-left p-2 rounded hover:bg-base-200 transition-colors text-sm w-full"
                             onClick={() => {
                                setFormData(prev => ({ ...prev, companySize: size.value }));
                                (document.activeElement as HTMLElement)?.blur();
                              }}
                           >
                             {size.label}
                           </button>
                         ))}
                       </div>
                     </div>
                   </div>

                  {/* Current Challenges */}
                  <div className="form-control col-span-full">
                    <label className="label pb-1">
                      <span className="label-text font-semibold text-sm">Challenges Facing</span>
                    </label>
                    <div className="dropdown dropdown-bottom w-full">
                      <div tabIndex={0} role="button" className="input input-bordered input-md focus:input-primary w-full flex justify-between items-center cursor-pointer">
                        <span className="text-sm">
                          {formData.currentChallenges.length > 0 
                            ? `${formData.currentChallenges.length} selected`
                            : 'Select challenges...'}
                        </span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                      <div tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-full max-h-60 overflow-y-auto">
                        {[
                          'Manual compliance reporting',
                          'Lack of traceability visibility',
                          'Audit preparation time',
                          'Customer transparency demands',
                          'Regulatory compliance costs',
                          'Supply chain fraud concerns'
                        ].map((challenge) => (
                          <label key={challenge} className="label cursor-pointer justify-start gap-2 p-2 rounded hover:bg-base-200 transition-colors flex items-start">
                            <input 
                              type="checkbox" 
                              value={challenge}
                              onChange={(e) => handleCheckboxChange(e, 'currentChallenges')}
                              className="checkbox checkbox-primary checkbox-sm flex-shrink-0" 
                            />
                            <span className="label-text text-sm leading-tight break-words flex-1">{challenge}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Interested Features */}
                  <div className="form-control col-span-full">
                    <label className="label pb-1">
                      <span className="label-text font-semibold text-sm">Interested in Features</span>
                    </label>
                    <div className="dropdown dropdown-bottom w-full">
                      <div tabIndex={0} role="button" className="input input-bordered input-md focus:input-primary w-full flex justify-between items-center cursor-pointer">
                        <span className="text-sm">
                          {formData.interestedFeatures.length > 0 
                            ? `${formData.interestedFeatures.length} selected`
                            : 'Select features...'}
                        </span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                      <div tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-full max-h-60 overflow-y-auto">
                        {[
                          'Blockchain proof anchoring',
                          'QR code generation',
                          'Automated compliance reports',
                          'Real-time batch tracking',
                          'Farmer mobile app integration',
                          'API integrations'
                        ].map((feature) => (
                          <label key={feature} className="label cursor-pointer justify-start gap-2 p-2 rounded hover:bg-base-200 transition-colors flex items-start">
                            <input 
                              type="checkbox" 
                              value={feature}
                              onChange={(e) => handleCheckboxChange(e, 'interestedFeatures')}
                              className="checkbox checkbox-primary checkbox-sm flex-shrink-0" 
                            />
                            <span className="label-text text-sm leading-tight break-words flex-1">{feature}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Implementation Timeline */}
                  <div className="form-control col-span-full">
                    <label className="label pb-1">
                      <span className="label-text font-semibold text-sm">Preferred Implementation Timeline *</span>
                    </label>
                    <div className="dropdown dropdown-bottom w-full">
                      <div tabIndex={0} role="button" className="input input-bordered input-md focus:input-primary w-full flex justify-between items-center cursor-pointer">
                        <span className="text-sm">
                          {formData.timeline ? 
                             (formData.timeline === 'immediate' ? 'Immediate (within 1 month)' :
                              formData.timeline === '1-3-months' ? 'This quarter (1-3 months)' :
                              formData.timeline === '3-6-months' ? 'This half-year (3-6 months)' :
                              formData.timeline === '6-12-months' ? 'This year (6-12 months)' : formData.timeline)
                             : 'Select timeline'}
                        </span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                      <div tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-full">
                        {[
                           { value: 'immediate', label: 'Immediate (within 1 month)' },
                           { value: '1-3-months', label: 'This quarter (1-3 months)' },
                           { value: '3-6-months', label: 'This half-year (3-6 months)' },
                           { value: '6-12-months', label: 'This year (6-12 months)' }
                         ].map((option) => (
                          <button
                            key={option.value}
                            type="button"
                            className="text-left p-2 rounded hover:bg-base-200 transition-colors text-sm w-full"
                            onClick={() => {
                                setFormData(prev => ({ ...prev, timeline: option.value }));
                                (document.activeElement as HTMLElement)?.blur();
                              }}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div className="form-control col-span-full">
                    <label className="label pb-1">
                      <span className="label-text font-semibold text-sm">Additional Information</span>
                    </label>
                    <textarea 
                      name="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={handleInputChange}
                      className="textarea textarea-bordered textarea-md h-28 focus:textarea-primary text-sm w-full" 
                      placeholder="Tell us about your specific use case, current systems, or any questions you have..."
                    ></textarea>
                  </div>

                  {/* Error Display */}
                  {error && (
                    <div className="alert alert-error col-span-full">
                      <svg className="w-6 h-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span>{error}</span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="form-control mt-6 col-span-full">
                    <button 
                      type="submit" 
                      className={`btn btn-primary btn-md lg:btn-lg w-full ${isSubmitting ? 'loading' : ''}`}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="loading loading-spinner"></span>
                          <span className="text-sm lg:text-base">Submitting Application...</span>
                        </>
                      ) : (
                        <>
                          <svg className="w-4 h-4 lg:w-5 lg:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                          <span className="text-sm lg:text-base">Apply for Pilot Access</span>
                        </>
                      )}
                    </button>

                    {/* Privacy Notice */}
                    <div className="text-center mt-4 col-span-full">
                      <p className="text-xs text-base-content/60 leading-relaxed">
                        By submitting this form, you agree to our privacy policy and terms of service. We'll only use your information to evaluate your pilot application and provide relevant updates.
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Authentication Modal */}
      <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => setShowAuthModal(false)} 
      />
    </section>
  );
}