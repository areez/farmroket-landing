export default function SupplierDashboardPreview() {
  return (
    <section className="section-container">
      <div className="section-wrapper">
        <div className="section-content">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">
            Supplier Dashboard
          </h2>
          <p className="text-lg sm:text-xl text-base-content/70 max-w-3xl mx-auto leading-relaxed px-4 sm:px-6 lg:px-8">
            See how FarmRoket™ empowers suppliers with comprehensive traceability and compliance tools
          </p>
        </div>

        {/* DaisyUI Carousel */}
        <div className="carousel w-full max-w-7xl mx-auto rounded-xl overflow-hidden shadow-2xl">
          {/* Slide 1: Batch Registry Screen */}
          <div id="slide1" className="carousel-item relative w-full flex justify-center">
            <div className="mockup-window border bg-base-300 w-full max-w-5xl h-[600px]">
              <div className="flex justify-center px-6 py-8 bg-base-200 h-full overflow-y-auto">
                <div className="w-full max-w-4xl">
                  <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                      <h3 className="card-title text-lg mb-4">
                        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Batch Registry
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Batch ID</span>
                          </label>
                          <input type="text" placeholder="BT-2024-001" className="input input-bordered" disabled />
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Product Type</span>
                          </label>
                          <select className="select select-bordered" disabled>
                            <option>Organic Avocados</option>
                          </select>
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Origin Farm</span>
                          </label>
                          <input type="text" placeholder="Green Valley Farm" className="input input-bordered" disabled />
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Harvest Date</span>
                          </label>
                          <input type="date" className="input input-bordered" disabled />
                        </div>
                      </div>
                      <div className="card-actions justify-end mt-4">
                        <button className="btn btn-primary" disabled>Register Batch</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 sm:left-5 sm:right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle btn-sm sm:btn-md opacity-80 hover:opacity-100">❮</a>
              <a href="#slide2" className="btn btn-circle btn-sm sm:btn-md opacity-80 hover:opacity-100">❯</a>
            </div>
          </div>

          {/* Slide 2: Blockchain Proof Anchoring */}
          <div id="slide2" className="carousel-item relative w-full flex justify-center">
            <div className="mockup-window border bg-base-300 w-full max-w-5xl h-[600px]">
              <div className="flex justify-center px-6 py-8 bg-base-200 h-full overflow-y-auto">
                <div className="w-full max-w-4xl">
                  <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                      <h3 className="card-title text-lg mb-4">
                        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                        </svg>
                        Blockchain Proof Anchoring
                      </h3>
                      <div className="space-y-4">
                        <div className="alert alert-success">
                          <svg className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                          <span>Batch BT-2024-001 successfully anchored to blockchain</span>
                        </div>
                        <div className="stats shadow w-full">
                          <div className="stat">
                            <div className="stat-title">Transaction Hash</div>
                            <div className="stat-value text-sm">0x7a8b9c...</div>
                            <div className="stat-desc">Ethereum Mainnet</div>
                          </div>
                          <div className="stat">
                            <div className="stat-title">Block Number</div>
                            <div className="stat-value text-sm">#18,945,123</div>
                            <div className="stat-desc">Confirmed</div>
                          </div>
                        </div>
                        <div className="timeline">
                          <div className="timeline-item">
                            <div className="timeline-start">09:00</div>
                            <div className="timeline-middle">
                              <svg className="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                              </svg>
                            </div>
                            <div className="timeline-end timeline-box">Data collected</div>
                          </div>
                          <div className="timeline-item">
                            <div className="timeline-start">09:15</div>
                            <div className="timeline-middle">
                              <svg className="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                              </svg>
                            </div>
                            <div className="timeline-end timeline-box">Hash generated</div>
                          </div>
                          <div className="timeline-item">
                            <div className="timeline-start">09:30</div>
                            <div className="timeline-middle">
                              <svg className="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                              </svg>
                            </div>
                            <div className="timeline-end timeline-box">Blockchain anchored</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 sm:left-5 sm:right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle btn-sm sm:btn-md opacity-80 hover:opacity-100">❮</a>
              <a href="#slide3" className="btn btn-circle btn-sm sm:btn-md opacity-80 hover:opacity-100">❯</a>
            </div>
          </div>

          {/* Slide 3: QR Code Verification */}
          <div id="slide3" className="carousel-item relative w-full flex justify-center">
            <div className="mockup-window border bg-base-300 w-full max-w-5xl h-[600px]">
              <div className="flex justify-center px-6 py-8 bg-base-200 h-full overflow-y-auto">
                <div className="w-full max-w-4xl">
                  <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                      <h3 className="card-title text-xl mb-6 flex items-center gap-3">
                        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h4" />
                        </svg>
                        QR Code Verification
                      </h3>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="text-center">
                          <div className="mockup-code bg-base-200 p-8">
                            <div className="w-32 h-32 bg-base-300 mx-auto flex items-center justify-center rounded-lg">
                              <svg className="w-16 h-16" viewBox="0 0 100 100">
                                <rect x="0" y="0" width="100" height="100" fill="white"/>
                                <rect x="10" y="10" width="15" height="15" fill="black"/>
                                <rect x="75" y="10" width="15" height="15" fill="black"/>
                                <rect x="10" y="75" width="15" height="15" fill="black"/>
                                <rect x="30" y="30" width="5" height="5" fill="black"/>
                                <rect x="40" y="30" width="5" height="5" fill="black"/>
                                <rect x="50" y="30" width="5" height="5" fill="black"/>
                                <rect x="60" y="30" width="5" height="5" fill="black"/>
                                <rect x="30" y="40" width="5" height="5" fill="black"/>
                                <rect x="50" y="40" width="5" height="5" fill="black"/>
                                <rect x="30" y="50" width="5" height="5" fill="black"/>
                                <rect x="40" y="50" width="5" height="5" fill="black"/>
                                <rect x="60" y="50" width="5" height="5" fill="black"/>
                                <rect x="40" y="60" width="5" height="5" fill="black"/>
                                <rect x="50" y="60" width="5" height="5" fill="black"/>
                                <rect x="60" y="60" width="5" height="5" fill="black"/>
                              </svg>
                            </div>
                            <p className="text-sm mt-2">Batch: BT-2024-001</p>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div className="alert alert-success">
                            <svg className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <span>Verified ✓</span>
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="font-medium">Product:</span>
                              <span>Organic Avocados</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="font-medium">Origin:</span>
                              <span>Green Valley Farm</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="font-medium">Harvest:</span>
                              <span>Dec 15, 2024</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="font-medium">Certifications:</span>
                              <div className="flex gap-1">
                                <div className="badge badge-success badge-sm">Organic</div>
                                <div className="badge badge-info badge-sm">FSMA</div>
                              </div>
                            </div>
                          </div>
                          <button className="btn btn-primary w-full" disabled>
                            View Full Trace
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 sm:left-5 sm:right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle btn-sm sm:btn-md opacity-80 hover:opacity-100">❮</a>
              <a href="#slide4" className="btn btn-circle btn-sm sm:btn-md opacity-80 hover:opacity-100">❯</a>
            </div>
          </div>

          {/* Slide 4: Compliance Report Export */}
          <div id="slide4" className="carousel-item relative w-full flex justify-center">
            <div className="mockup-window border bg-base-300 w-full max-w-5xl h-[600px]">
              <div className="flex justify-center px-6 py-8 bg-base-200 h-full overflow-y-auto">
                <div className="w-full max-w-4xl">
                  <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                      <h3 className="card-title text-xl mb-6 flex items-center gap-3">
                        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Compliance Report Export
                      </h3>
                      <div className="space-y-6">
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Report Type</span>
                          </label>
                          <select className="select select-bordered" disabled>
                            <option>FSMA Traceability Report</option>
                          </select>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text">Date Range</span>
                            </label>
                            <input type="text" placeholder="Dec 1-31, 2024" className="input input-bordered" disabled />
                          </div>
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text">Format</span>
                            </label>
                            <select className="select select-bordered" disabled>
                              <option>PDF</option>
                            </select>
                          </div>
                        </div>
                        <div className="stats shadow w-full">
                          <div className="stat">
                            <div className="stat-title">Total Batches</div>
                            <div className="stat-value text-2xl">247</div>
                            <div className="stat-desc">This month</div>
                          </div>
                          <div className="stat">
                            <div className="stat-title">Compliance Rate</div>
                            <div className="stat-value text-2xl text-success">99.8%</div>
                            <div className="stat-desc">Above target</div>
                          </div>
                        </div>
                        <div className="alert alert-info">
                          <svg className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                          <span>Report includes blockchain verification hashes</span>
                        </div>
                        <div className="card-actions justify-end">
                          <button className="btn btn-outline" disabled>Preview</button>
                          <button className="btn btn-primary" disabled>Generate Report</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 sm:left-5 sm:right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle btn-sm sm:btn-md opacity-80 hover:opacity-100">❮</a>
              <a href="#slide1" className="btn btn-circle btn-sm sm:btn-md opacity-80 hover:opacity-100">❯</a>
            </div>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center w-full py-4 gap-2 mt-8 lg:mt-12">
          <a href="#slide1" className="btn btn-sm btn-circle">1</a>
          <a href="#slide2" className="btn btn-sm btn-circle">2</a>
          <a href="#slide3" className="btn btn-sm btn-circle">3</a>
          <a href="#slide4" className="btn btn-sm btn-circle">4</a>
        </div>
        </div>
      </div>
    </section>
  );
}