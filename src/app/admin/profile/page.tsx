"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

export default function AdminProfile() {
  const router = useRouter();
  const [user, setUser] = useState<{ id: string; email?: string; role?: string } | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isUpdating, setIsUpdating] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);
  const [isAuthChecking, setIsAuthChecking] = useState(true);
  
  // Form states
  const [email, setEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showOtpForm, setShowOtpForm] = useState(false);
  const [otp, setOtp] = useState('');
  const [pendingEmail, setPendingEmail] = useState('');

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
      router.push('/');
      return;
    }

      // Check if user is admin
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
      setEmail(session.user.email || '');
      setIsAuthChecking(false);
    } catch (error) {
      console.error('Auth check error:', error);
      router.push('/');
    } finally {
      setIsLoading(false);
    }
  };

  const handleEmailUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsUpdating(true);
    setMessage(null);

    try {
      if (email === user?.email) {
        setMessage({ type: 'error', text: 'New email must be different from current email' });
        return;
      }

      const { error } = await supabase.auth.updateUser({ email });
      
      if (error) {
        throw error;
      }

      setPendingEmail(email);
      setShowOtpForm(true);
      setMessage({ 
        type: 'success', 
        text: 'Verification email sent! Please check your new email and enter the OTP below.' 
      });
    } catch (error: unknown) {
      console.error('Email update error:', error);
      setMessage({ type: 'error', text: error instanceof Error ? error.message : 'Failed to update email' });
    } finally {
      setIsUpdating(false);
    }
  };

  const handleOtpVerification = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsUpdating(true);
    setMessage(null);

    try {
      const { error } = await supabase.auth.verifyOtp({
        email: pendingEmail,
        token: otp,
        type: 'email_change'
      });

      if (error) {
        throw error;
      }

      setMessage({ type: 'success', text: 'Email updated successfully!' });
      setShowOtpForm(false);
      setOtp('');
      setPendingEmail('');
      
      // Refresh user data
      setTimeout(() => {
        checkAuth();
      }, 1000);
    } catch (error: unknown) {
      console.error('OTP verification error:', error);
      setMessage({ type: 'error', text: error instanceof Error ? error.message : 'Invalid OTP' });
    } finally {
      setIsUpdating(false);
    }
  };

  const handlePasswordUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsUpdating(true);
    setMessage(null);

    try {
      if (newPassword !== confirmPassword) {
        setMessage({ type: 'error', text: 'New passwords do not match' });
        return;
      }

      if (newPassword.length < 6) {
        setMessage({ type: 'error', text: 'Password must be at least 6 characters long' });
        return;
      }

      const { error } = await supabase.auth.updateUser({ password: newPassword });
      
      if (error) {
        throw error;
      }

      setMessage({ type: 'success', text: 'Password updated successfully!' });
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } catch (error: unknown) {
      console.error('Password update error:', error);
      setMessage({ type: 'error', text: error instanceof Error ? error.message : 'Failed to update password' });
    } finally {
      setIsUpdating(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  if (isLoading || isAuthChecking) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="loading-spinner-brand mx-auto mb-4"></div>
          <p className="text-slate-300">Loading admin profile...</p>
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
              <button
                onClick={() => router.push('/admin/dashboard')}
                className="text-slate-300 hover:text-white transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <img src="/icon-farmroket.svg" alt="FarmRoket" className="w-8 h-8" />
              <span className="text-slate-400 leading-none">|</span>
              <h1 className="text-sm font-semibold text-white leading-none">Admin Profile</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-slate-300">Welcome, Admin</span>
              <button
                onClick={handleLogout}
                className="text-red-400 hover:text-red-300 transition-colors duration-200 text-sm font-medium"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex-1">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Message Display */}
        {message && (
          <div className={`mb-6 p-4 rounded-lg border backdrop-blur-sm ${
            message.type === 'success' 
              ? 'bg-green-900/50 border-green-700 text-green-300' 
              : 'bg-red-900/50 border-red-700 text-red-300'
          }`}>
            {message.text}
          </div>
        )}

        {/* Email Update Form */}
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg shadow-xl p-6 mb-6">
          <h2 className="text-lg font-medium text-white mb-4">Update Email</h2>
          {!showOtpForm ? (
            <form onSubmit={handleEmailUpdate} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  New Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-300"
                  placeholder="Enter new email address"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isUpdating}
                className={`btn btn-primary btn-lg px-8 w-full ${isUpdating ? 'loading' : ''}`}
              >
                {isUpdating ? 'Sending...' : 'Send Verification Email'}
              </button>
            </form>
          ) : (
            <form onSubmit={handleOtpVerification} className="space-y-4">
              <div>
                <label htmlFor="otp" className="block text-sm font-medium text-slate-300 mb-2">
                  Enter OTP from {pendingEmail}
                </label>
                <input
                  type="text"
                  id="otp"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-300"
                  placeholder="Enter 6-digit OTP"
                  maxLength={6}
                  required
                />
              </div>
              <div className="flex space-x-3">
                <button
                  type="submit"
                  disabled={isUpdating}
                  className={`btn btn-primary btn-lg px-8 flex-1 ${isUpdating ? 'loading' : ''}`}
                >
                  {isUpdating ? 'Verifying...' : 'Verify OTP'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowOtpForm(false);
                    setOtp('');
                    setPendingEmail('');
                  }}
                  className="bg-slate-700/50 border border-slate-600 text-slate-300 hover:bg-slate-600/50 hover:text-white transition-all duration-300 px-8 py-3 rounded-lg font-medium flex-1"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Password Update Form */}
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg shadow-xl p-6">
          <h2 className="text-lg font-medium text-white mb-4">Update Password</h2>
          <form onSubmit={handlePasswordUpdate} className="space-y-4">
            <div>
              <label htmlFor="currentPassword" className="block text-sm font-medium text-slate-300 mb-2">
                Current Password
              </label>
              <input
                type="password"
                id="currentPassword"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-300"
                placeholder="Enter current password"
                required
              />
            </div>
            <div>
              <label htmlFor="newPassword" className="block text-sm font-medium text-slate-300 mb-2">
                New Password
              </label>
              <input
                type="password"
                id="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-300"
                placeholder="Enter new password"
                minLength={6}
                required
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-slate-300 mb-2">
                Confirm New Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-300"
                placeholder="Confirm new password"
                minLength={6}
                required
              />
            </div>
            <button
              type="submit"
              disabled={isUpdating}
              className={`btn btn-primary btn-lg px-8 w-full ${isUpdating ? 'loading' : ''}`}
            >
              {isUpdating ? 'Updating...' : 'Update Password'}
            </button>
          </form>
        </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-auto bg-slate-800/30 backdrop-blur-sm border-t border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="text-center text-slate-400 text-sm">
            © {new Date().getFullYear()} FarmRoket Admin Panel. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}