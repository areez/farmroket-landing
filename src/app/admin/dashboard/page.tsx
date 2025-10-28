"use client";

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { PilotApplication } from '@/types/database';

interface ApplicationStats {
  total: number;
  pending: number;
  approved: number;
  rejected: number;
  latest_application: string | null;
}

export default function AdminDashboard() {
  const router = useRouter();
  const [applications, setApplications] = useState<PilotApplication[]>([]);
  const [stats, setStats] = useState<ApplicationStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [user, setUser] = useState<{ id: string; email: string; role?: string } | null>(null);
  const [selectedApplication, setSelectedApplication] = useState<PilotApplication | null>(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [adminNotes, setAdminNotes] = useState<string>('');
  const [isUpdatingNotes, setIsUpdatingNotes] = useState(false);
  const [isAuthChecking, setIsAuthChecking] = useState(true);

  useEffect(() => {
    checkAuth();
    fetchApplications();
    fetchStats();
  }, [checkAuth]);

  const checkAuth = useCallback(async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        router.push('/');
        return;
      }

      const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', session.user.id)
        .single();

      if (profileError || !profile?.is_admin) {
        router.push('/');
        return;
      }

      setUser(session.user);
      setIsAuthChecking(false);
    } catch (error: unknown) {
      console.error('Auth check failed:', error);
      router.push('/');
    }
  }, [router]);

  const fetchApplications = async () => {
    try {
      const { data, error } = await supabase
        .from('pilot_applications')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        throw error;
      }

      setApplications(data || []);
    } catch (error: unknown) {
      console.error('Error fetching applications:', error);
      setError('Failed to fetch applications');
    } finally {
      setIsLoading(false);
    }
  };

  const fetchStats = async () => {
    try {
      const { data, error } = await supabase
        .from('pilot_applications')
        .select('status, created_at')
        .order('created_at', { ascending: false });

      if (error) {
        throw error;
      }

      const stats = {
        total: data?.length || 0,
        pending: data?.filter(app => app.status === 'pending').length || 0,
        approved: data?.filter(app => app.status === 'approved').length || 0,
        rejected: data?.filter(app => app.status === 'rejected').length || 0,
        latest_application: data?.[0]?.created_at || null
      };

      setStats(stats);
    } catch (error: unknown) {
      console.error('Error fetching stats:', error);
    }
  };

  const updateApplicationStatus = async (id: string, status: string) => {
    try {
      const { error } = await supabase
        .from('pilot_applications')
        .update({ status, updated_at: new Date().toISOString() })
        .eq('id', id);

      if (error) {
        throw error;
      }

      fetchApplications();
      fetchStats();
    } catch (error: unknown) {
      console.error('Error updating application status:', error);
      setError('Failed to update application status');
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  const viewApplicationDetails = (application: PilotApplication) => {
    setSelectedApplication(application);
    setAdminNotes(application.admin_notes || '');
    setShowDetailsModal(true);
  };

  const closeDetailsModal = () => {
    setShowDetailsModal(false);
    setSelectedApplication(null);
    setAdminNotes('');
  };

  const toggleApplicationStatus = async (id: string, currentStatus: boolean) => {
    try {
      const { error } = await supabase
        .from('pilot_applications')
        .update({ is_active: !currentStatus, updated_at: new Date().toISOString() })
        .eq('id', id);

      if (error) {
        throw error;
      }

      // Refresh data
      fetchApplications();
      
      // Update the selected application if it's the one being toggled
      if (selectedApplication && selectedApplication.id === id) {
        setSelectedApplication({
          ...selectedApplication,
          is_active: !currentStatus
        });
      }
    } catch (error: unknown) {
      console.error('Error toggling application status:', error);
      setError('Failed to toggle application status');
    }
  };

  const updateAdminNotes = async (id: string, notes: string) => {
    setIsUpdatingNotes(true);
    try {
      const { error } = await supabase
        .from('pilot_applications')
        .update({ admin_notes: notes, updated_at: new Date().toISOString() })
        .eq('id', id);

      if (error) {
        throw error;
      }

      // Update the selected application
      if (selectedApplication && selectedApplication.id === id) {
        setSelectedApplication({
          ...selectedApplication,
          admin_notes: notes
        });
      }

      // Refresh data
      fetchApplications();
    } catch (error: unknown) {
      console.error('Error updating admin notes:', error);
      setError('Failed to update notes');
    } finally {
      setIsUpdatingNotes(false);
    }
  };

  const filteredApplications = selectedStatus === 'all' 
    ? applications 
    : applications.filter(app => app.status === selectedStatus);

  if (isLoading || isAuthChecking) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="loading-spinner-brand mx-auto mb-4"></div>
          <p className="text-slate-300">Loading admin dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col">
      {/* Header */}
      <header className="bg-slate-800/50 backdrop-blur-sm border-b border-slate-700/50 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img src="/icon-farmroket.svg" alt="FarmRoket" className="h-8 w-8" />
              <span className="text-slate-400 leading-none">|</span>
              <h1 className="text-sm font-semibold text-white leading-none">Dashboard</h1>
            </div>
            <div className="flex items-center space-x-6">
              <span className="text-sm text-slate-300">Welcome, Admin</span>
              <button
                onClick={() => router.push('/admin/profile')}
                className="text-blue-400 hover:text-blue-300 transition-colors duration-200 text-sm font-medium"
              >
                Profile
              </button>
              <button
                onClick={handleLogout}
                className="text-red-400 hover:text-red-300 transition-colors duration-200 text-sm font-medium"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        {stats && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6 shadow-xl">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg className="h-8 w-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-slate-400 truncate">Total Applications</dt>
                    <dd>
                      <p className="text-2xl font-bold text-white">{stats.total}</p>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6 shadow-xl">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg className="h-8 w-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-slate-400 truncate">Pending Review</dt>
                    <dd>
                      <p className="text-2xl font-bold text-white">{stats.pending}</p>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6 shadow-xl">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg className="h-8 w-8 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-slate-400 truncate">Approved</dt>
                    <dd>
                      <p className="text-2xl font-bold text-white">{stats.approved}</p>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6 shadow-xl">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg className="h-8 w-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-slate-400 truncate">Rejected</dt>
                    <dd>
                      <p className="text-2xl font-bold text-white">{stats.rejected}</p>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Filters */}
        <div className="mb-6">
          <select
            className="bg-slate-800/50 border border-slate-700/50 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
          >
            <option value="all">All Applications</option>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>

        {/* Applications Table */}
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-700">
              <thead className="bg-slate-700/50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">Company</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">Contact</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">Size</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">Timeline</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-slate-800/30 divide-y divide-slate-700">
                {filteredApplications.map((application) => (
                  <tr key={application.id} className="hover:bg-slate-700/30">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                      {application.company_name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-300">
                      {application.contact_name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-300">
                      {application.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-300">
                      {application.company_size}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-300">
                      {application.timeline}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full uppercase ${
                        application.status === 'approved' && application.is_active === false ? 'bg-orange-500/20 text-orange-400' :
                        application.status === 'approved' ? 'bg-brand-primary/20 text-brand-primary' :
                        application.status === 'rejected' ? 'bg-red-500/20 text-red-400' :
                        'bg-amber-500/20 text-amber-400'
                      }`}>
                        {application.status === 'approved' && application.is_active === false ? 'paused' : application.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                      <button
                        onClick={() => viewApplicationDetails(application)}
                        className="text-blue-400 hover:text-blue-300"
                      >
                        View
                      </button>
                      {application.status === 'pending' && (
                        <>
                          <button
                            onClick={() => updateApplicationStatus(application.id, 'approved')}
                            className="text-brand-primary hover:text-brand-primary-light"
                          >
                            Approve
                          </button>
                          <button
                            onClick={() => updateApplicationStatus(application.id, 'rejected')}
                            className="text-red-400 hover:text-red-300"
                          >
                            Reject
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
                {filteredApplications.length === 0 && (
                  <tr>
                    <td colSpan={7} className="px-6 py-4 text-center text-slate-400">
                      No applications found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="fixed bottom-4 right-4 bg-red-600 text-white px-4 py-2 rounded-lg shadow-lg">
          {error}
        </div>
      )}

      {/* Application Details Modal */}
      {showDetailsModal && selectedApplication && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border border-slate-700/50 w-11/12 md:w-3/4 lg:w-1/2 shadow-2xl rounded-lg bg-slate-800/90 backdrop-blur-md">
            <div className="mt-3">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-white">Application Details</h3>
                <button
                  onClick={closeDetailsModal}
                  className="text-slate-400 hover:text-slate-200 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300">Company Name</label>
                    <p className="mt-1 text-sm text-white">{selectedApplication.company_name}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300">Contact Name</label>
                    <p className="mt-1 text-sm text-white">{selectedApplication.contact_name}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300">Email</label>
                    <p className="mt-1 text-sm text-white">{selectedApplication.email}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300">Phone</label>
                    <p className="mt-1 text-sm text-white">{selectedApplication.phone || 'Not provided'}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300">Company Size</label>
                    <p className="mt-1 text-sm text-white">{selectedApplication.company_size}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300">Timeline</label>
                    <p className="mt-1 text-sm text-white">{selectedApplication.timeline}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300">Status</label>
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full uppercase ${
                      selectedApplication.status === 'approved' ? 'bg-brand-primary-light text-brand-primary-dark' :
                      selectedApplication.status === 'rejected' ? 'bg-red-500/20 text-red-400' :
                      'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {selectedApplication.status}
                    </span>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300">Submitted</label>
                    <p className="mt-1 text-sm text-white">
                      {new Date(selectedApplication.created_at).toLocaleDateString()} at {new Date(selectedApplication.created_at).toLocaleTimeString()}
                    </p>
                  </div>
                </div>

                {selectedApplication.current_challenges && selectedApplication.current_challenges.length > 0 && (
                  <div>
                    <label className="block text-sm font-medium text-slate-300">Current Challenges</label>
                    <ul className="mt-1 text-sm text-white list-disc list-inside">
                      {selectedApplication.current_challenges.map((challenge, index) => (
                        <li key={index}>{challenge}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedApplication.interested_features && selectedApplication.interested_features.length > 0 && (
                  <div>
                    <label className="block text-sm font-medium text-slate-300">Interested Features</label>
                    <ul className="mt-1 text-sm text-white list-disc list-inside">
                      {selectedApplication.interested_features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedApplication.additional_info && (
                  <div>
                    <label className="block text-sm font-medium text-slate-300">Additional Information</label>
                    <p className="mt-1 text-sm text-white whitespace-pre-wrap">{selectedApplication.additional_info}</p>
                  </div>
                )}

                {/* Admin Notes Section */}
                <div className="pt-6 border-t border-slate-700">
                  <label className="block text-sm font-medium text-slate-300 mb-3">Admin Notes</label>
                  <textarea
                    value={adminNotes}
                    onChange={(e) => setAdminNotes(e.target.value)}
                    className="w-full h-24 px-3 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent resize-none"
                    placeholder="Add internal notes about this application..."
                  />
                  <div className="flex justify-end mt-3">
                    <button
                      onClick={() => updateAdminNotes(selectedApplication.id, adminNotes)}
                      disabled={isUpdatingNotes}
                      className="btn-brand-primary-sm"
                    >
                      {isUpdatingNotes ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Saving...
                        </>
                      ) : (
                        'Save Notes'
                      )}
                    </button>
                  </div>
                </div>

                {/* Toggle Status for Approved Applications */}
                {selectedApplication.status === 'approved' && (
                  <div className="pt-6 border-t border-slate-700">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <label className="block text-sm font-medium text-slate-300 mb-1">Application Status</label>
                        <div className="flex items-center space-x-2">
                          <div className={`w-2 h-2 rounded-full ${selectedApplication.is_active ? 'bg-brand-primary' : 'bg-yellow-500'}`}></div>
                          <p className="text-sm text-slate-400">
                            {selectedApplication.is_active ? 'Active and running' : 'Paused'}
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => toggleApplicationStatus(selectedApplication.id, selectedApplication.is_active || false)}
                        className={`inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 ${
                          selectedApplication.is_active 
                            ? 'text-yellow-800 bg-yellow-100 hover:bg-yellow-200 focus:ring-yellow-500 border border-yellow-300' 
                            : 'text-brand-primary bg-brand-primary/10 hover:bg-brand-primary/20 focus:ring-brand-primary border border-brand-primary/30'
                        }`}
                      >
                        <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          {selectedApplication.is_active ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-9 4h10a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2v9a2 2 0 002 2z" />
                          )}
                        </svg>
                        {selectedApplication.is_active ? 'Pause' : 'Activate'}
                      </button>
                    </div>
                  </div>
                )}

                {/* Action Links for Pending Applications */}
                {selectedApplication.status === 'pending' && (
                  <div className="pt-6 border-t border-slate-700">
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-slate-400">Review this application:</p>
                      <div className="flex space-x-3">
                        <button
                          onClick={() => {
                            updateApplicationStatus(selectedApplication.id, 'approved');
                            closeDetailsModal();
                          }}
                          className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-brand-primary bg-brand-primary/10 hover:bg-brand-primary/20 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 focus:ring-offset-slate-800 border border-brand-primary/30"
                        >
                          <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          Approve
                        </button>
                        <button
                          onClick={() => {
                            updateApplicationStatus(selectedApplication.id, 'rejected');
                            closeDetailsModal();
                          }}
                          className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-red-400 bg-red-500/10 hover:bg-red-500/20 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-slate-800 border border-red-500/30"
                        >
                          <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          Reject
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-slate-800/30 backdrop-blur-sm border-t border-slate-700/50 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="text-center">
            <p className="text-sm text-slate-400">
              © {new Date().getFullYear()} FarmRoket. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}