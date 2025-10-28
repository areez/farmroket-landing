"use client";

import { useState, useEffect, useCallback } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { PilotApplicationRow } from '@/types/database';

interface ApplicationStats {
  total: number;
  pending: number;
  approved: number;
  rejected: number;
  latest_application: string | null;
}

export default function AdminDashboard() {
  const { user, session, loading } = useAuth();
  const router = useRouter();
  const [applications, setApplications] = useState<PilotApplicationRow[]>([]);
  const [stats, setStats] = useState<ApplicationStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedStatus, setSelectedStatus] = useState<string>('all');

  useEffect(() => {
    if (!loading && !user) {
      router.push('/');
      return;
    }

    if (user) {
      fetchApplications();
      fetchStats();
    }
  }, [user, loading, router, fetchApplications]);

  const fetchApplications = useCallback(async () => {
    try {
      if (!session?.access_token) {
        throw new Error('No authentication token available');
      }

      const response = await fetch('/api/admin/applications', {
        headers: {
          'Authorization': `Bearer ${session.access_token}`,
        },
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch applications');
      }
      const data = await response.json();
      setApplications(data.applications);
    } catch (error) {
      console.error('Error fetching applications:', error);
      setError('Failed to load applications');
    }
  }, [session?.access_token]);

  const fetchStats = async () => {
    try {
      const response = await fetch('/api/waitlist');
      if (!response.ok) {
        throw new Error('Failed to fetch stats');
      }
      const data = await response.json();
      setStats(data);
    } catch (error) {
      console.error('Error fetching stats:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const updateApplicationStatus = async (id: string, status: 'pending' | 'approved' | 'rejected') => {
    try {
      if (!session?.access_token) {
        throw new Error('No authentication token available');
      }

      const response = await fetch(`/api/admin/applications/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${session.access_token}`,
        },
        body: JSON.stringify({ status }),
      });

      if (!response.ok) {
        throw new Error('Failed to update application');
      }

      // Refresh applications and stats
      await fetchApplications();
      await fetchStats();
    } catch (error) {
      console.error('Error updating application:', error);
      setError('Failed to update application status');
    }
  };

  const filteredApplications = applications.filter(app => 
    selectedStatus === 'all' || app.status === selectedStatus
  );

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusBadge = (status: string) => {
    const statusClasses = {
      pending: 'badge-warning',
      approved: 'badge-success',
      rejected: 'badge-error'
    };
    return `badge ${statusClasses[status as keyof typeof statusClasses] || 'badge-neutral'}`;
  };

  if (loading || isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-base-content/70">Manage pilot program applications</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-sm text-base-content/70">
              Welcome, {user.email}
            </div>
            <button 
              className="btn btn-outline btn-sm"
              onClick={() => router.push('/')}
            >
              Back to Site
            </button>
          </div>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="alert alert-error mb-6">
            <svg className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>{error}</span>
            <button 
              className="btn btn-sm btn-ghost"
              onClick={() => setError(null)}
            >
              Dismiss
            </button>
          </div>
        )}

        {/* Stats Cards */}
        {stats && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="stat bg-base-100 rounded-lg shadow">
              <div className="stat-title">Total Applications</div>
              <div className="stat-value text-primary">{stats.total}</div>
            </div>
            <div className="stat bg-base-100 rounded-lg shadow">
              <div className="stat-title">Pending</div>
              <div className="stat-value text-warning">{stats.pending}</div>
            </div>
            <div className="stat bg-base-100 rounded-lg shadow">
              <div className="stat-title">Approved</div>
              <div className="stat-value text-success">{stats.approved}</div>
            </div>
            <div className="stat bg-base-100 rounded-lg shadow">
              <div className="stat-title">Rejected</div>
              <div className="stat-value text-error">{stats.rejected}</div>
            </div>
          </div>
        )}

        {/* Filters */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-2">
            <button 
              className={`btn btn-sm ${selectedStatus === 'all' ? 'btn-primary' : 'btn-outline'}`}
              onClick={() => setSelectedStatus('all')}
            >
              All ({applications.length})
            </button>
            <button 
              className={`btn btn-sm ${selectedStatus === 'pending' ? 'btn-warning' : 'btn-outline'}`}
              onClick={() => setSelectedStatus('pending')}
            >
              Pending ({applications.filter(a => a.status === 'pending').length})
            </button>
            <button 
              className={`btn btn-sm ${selectedStatus === 'approved' ? 'btn-success' : 'btn-outline'}`}
              onClick={() => setSelectedStatus('approved')}
            >
              Approved ({applications.filter(a => a.status === 'approved').length})
            </button>
            <button 
              className={`btn btn-sm ${selectedStatus === 'rejected' ? 'btn-error' : 'btn-outline'}`}
              onClick={() => setSelectedStatus('rejected')}
            >
              Rejected ({applications.filter(a => a.status === 'rejected').length})
            </button>
          </div>
          <button 
            className="btn btn-primary btn-sm"
            onClick={() => {
              fetchApplications();
              fetchStats();
            }}
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Refresh
          </button>
        </div>

        {/* Applications Table */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body p-0">
            <div className="overflow-x-auto">
              <table className="table table-zebra">
                <thead>
                  <tr>
                    <th>Company</th>
                    <th>Contact</th>
                    <th>Email</th>
                    <th>Size</th>
                    <th>Timeline</th>
                    <th>Status</th>
                    <th>Applied</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredApplications.length === 0 ? (
                    <tr>
                      <td colSpan={8} className="text-center py-8 text-base-content/50">
                        No applications found
                      </td>
                    </tr>
                  ) : (
                    filteredApplications.map((application) => (
                      <tr key={application.id}>
                        <td>
                          <div className="font-semibold">{application.company_name}</div>
                        </td>
                        <td>{application.contact_name}</td>
                        <td>
                          <a href={`mailto:${application.email}`} className="link link-primary">
                            {application.email}
                          </a>
                        </td>
                        <td>
                          <span className="badge badge-outline">{application.company_size}</span>
                        </td>
                        <td>
                          <span className="badge badge-outline">{application.timeline}</span>
                        </td>
                        <td>
                          <span className={getStatusBadge(application.status)}>
                            {application.status}
                          </span>
                        </td>
                        <td className="text-sm text-base-content/70">
                          {formatDate(application.created_at)}
                        </td>
                        <td>
                          <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-sm">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                              </svg>
                            </div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                              <li>
                                <button 
                                  onClick={() => updateApplicationStatus(application.id, 'approved')}
                                  className="text-success"
                                  disabled={application.status === 'approved'}
                                >
                                  Approve
                                </button>
                              </li>
                              <li>
                                <button 
                                  onClick={() => updateApplicationStatus(application.id, 'rejected')}
                                  className="text-error"
                                  disabled={application.status === 'rejected'}
                                >
                                  Reject
                                </button>
                              </li>
                              <li>
                                <button 
                                  onClick={() => updateApplicationStatus(application.id, 'pending')}
                                  className="text-warning"
                                  disabled={application.status === 'pending'}
                                >
                                  Mark Pending
                                </button>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}