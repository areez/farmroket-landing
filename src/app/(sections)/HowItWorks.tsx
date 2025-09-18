export default function HowItWorks() {
  return (
    <section className="py-24 bg-base-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-2xl md:text-4xl font-bold text-base-content mb-6">
            How It Works
          </h2>
          <p className="text-xl text-base-content/80 max-w-3xl mx-auto font-medium">
            Three simple steps to complete food traceability
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* DaisyUI Steps Component */}
          <ul className="steps steps-vertical lg:steps-horizontal w-full mb-16">
            <li className="step step-accent">Farmer Captures</li>
            <li className="step step-accent">Blockchain Anchors</li>
            <li className="step step-accent">Buyer Verifies</li>
          </ul>

          {/* Detailed Step Cards */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Step 1: Farmer */}
            <div className="card bg-base-100 shadow-xl hover:scale-105 transition-transform duration-300 rounded-2xl">
              <div className="card-body text-center p-8">
                <div className="mb-6">
                  <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-2xl">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="badge badge-accent badge-lg font-bold">Step 1</div>
                </div>
                <h3 className="text-2xl font-bold text-base-content mb-4">Farmer Captures Data</h3>
                <p className="text-base-content/70 leading-relaxed">
                  Farmer captures batch data including harvest details, farming practices, and certifications using our mobile app.
                </p>
              </div>
            </div>

            {/* Step 2: Blockchain */}
            <div className="card bg-base-100 shadow-xl hover:scale-105 transition-transform duration-300 rounded-2xl">
              <div className="card-body text-center p-8">
                <div className="mb-6">
                  <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-2xl">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </div>
                  <div className="badge badge-info badge-lg font-bold">Step 2</div>
                </div>
                <h3 className="text-2xl font-bold text-base-content mb-4">Blockchain Anchors Proof</h3>
                <p className="text-base-content/70 leading-relaxed">
                  Blockchain anchors immutable proof of all data, creating a permanent, tamper-proof record that cannot be altered.
                </p>
              </div>
            </div>

            {/* Step 3: QR Verify */}
            <div className="card bg-base-100 shadow-xl hover:scale-105 transition-transform duration-300 rounded-2xl">
              <div className="card-body text-center p-8">
                <div className="mb-6">
                  <div className="w-24 h-24 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-2xl">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                    </svg>
                  </div>
                  <div className="badge badge-secondary badge-lg font-bold">Step 3</div>
                </div>
                <h3 className="text-2xl font-bold text-base-content mb-4">Buyer/Regulator Verifies</h3>
                <p className="text-base-content/70 leading-relaxed">
                  Buyer/Regulator verifies with QR code to instantly access complete traceability data and verify authenticity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}