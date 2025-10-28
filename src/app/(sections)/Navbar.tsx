'use client';

import { useAuth } from '@/contexts/AuthContext';
import { useState } from 'react';
import AuthModal from '@/components/AuthModal';
import Link from 'next/link';

export default function Navbar() {
  const { user, signOut } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <>
      {/* Regular navbar with logo and CTA */}
      <div className="navbar py-6 max-w-7xl mx-auto px-4">
        <div className="navbar-start">
          <Link href="/" className="btn btn-ghost text-xl">
            <svg className="h-8 w-auto" viewBox="0 0 1388.18 181.39" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <style>
                  {`.cls-1 { fill: #55883d; stroke-width: 0px; }
                   .cls-2 { fill: #fff; stroke-width: 0px; }
                   .cls-3 { fill: #a5ce39; stroke-width: 0px; }`}
                </style>
              </defs>
              <g>
                <g>
                  <path className="cls-2" d="M332.84,77.56h-21.13v-20.98h21.13v-5.58c0-19.66,16.14-30.67,44.02-30.67,13.65,0,27.29,3.52,37.13,9.69l-7.48,19.96c-6.9-4.26-15.41-6.75-23.04-6.75-9.98,0-15.85,4.26-15.85,11.45v1.91h40.65v20.98h-40.65v54.74h-34.78v-54.74Z"/>
                  <path className="cls-2" d="M411.49,113.81c0-15.11,18.34-25.39,49.75-28.32l28.91-2.64c3.23-.29,5.14-1.47,5.14-2.94,0-3.67-8.36-6.46-21.13-6.46-18.34,0-38.89,5.87-53.27,15.11l-9.1-18.05c14.67-9.98,38.45-16.44,62.37-16.44,33.31,0,55.32,10.57,55.32,29.2v49.01h-30.08l-4.7-16.44h-.15c-7.48,11.59-24.07,18.78-44.9,18.78-24.07,0-38.15-7.63-38.15-20.84ZM494.69,98.55v-.29l-31.11,2.79c-11.3.88-17.32,3.08-17.32,7.04s5.43,6.02,15.7,6.02c19.66,0,32.72-6.31,32.72-15.55Z"/>
                  <path className="cls-2" d="M634.83,87.39l-31.7,6.16c-.59-11.3-5.58-18.49-12.77-18.49-9.83,0-15.7,9.1-15.7,23.48v33.75h-34.78V56.58h28.91l4.7,17.46h.15c5.58-12.33,17.9-19.96,31.55-19.96,16.88,0,28.47,13.06,29.64,33.31Z"/>
                  <path className="cls-2" d="M642.01,56.58h28.91l4.55,19.22h.15c6.9-13.35,21.13-21.72,38.45-21.72s29.2,8.51,33.46,22.01h.15c7.04-13.79,22.45-22.01,39.18-22.01,22.45,0,35.66,13.5,35.66,33.75v44.46h-34.78v-39.33c0-10.57-6.31-16.88-17.17-16.88-13.21,0-20.98,8.07-20.98,21.42v34.78h-34.63v-39.33c0-10.57-6.46-16.88-17.17-16.88-13.21,0-20.98,8.07-20.98,21.42v34.78h-34.78V56.58Z"/>
                  <path className="cls-2" d="M927.86,87.39l-31.7,6.16c-.59-11.3-5.58-18.49-12.77-18.49-9.83,0-15.7,9.1-15.7,23.48v33.75h-34.78V56.58h28.91l4.7,17.46h.15c5.58-12.33,17.9-19.96,31.55-19.96,16.88,0,28.47,13.06,29.64,33.31Z"/>
                  <path className="cls-2" d="M932.11,94.44c0-24.36,24.07-40.35,60.75-40.35s60.9,16,60.9,40.35-24.07,40.21-60.9,40.21-60.75-15.85-60.75-40.21ZM1018.99,94.44c0-12.03-10.27-19.96-26.12-19.96s-26.12,7.92-26.12,19.96,10.27,19.96,26.12,19.96,26.12-7.92,26.12-19.96Z"/>
                  <path className="cls-2" d="M1062.86,22.83h34.78v56.2h.15l29.35-22.45h43l-38.3,28.76,39.03,46.96h-39.77l-23.63-29.94-9.83,7.34v22.6h-34.78V22.83Z"/>
                  <path className="cls-2" d="M1162.05,94.29c0-23.63,24.51-40.21,59.58-40.21s57.23,16,57.23,40.35c0,2.2-.29,5.43-1.03,7.92h-79.24c3.96,8.8,17.17,12.33,31.4,12.33,14.97,0,30.08-3.23,37.86-7.63l9.54,16.44c-10.27,6.6-29.64,11.15-49.89,11.15-39.03,0-65.45-15.7-65.45-40.35ZM1243.93,87.54c-.44-8.66-10.42-14.53-22.6-14.53s-22.01,6.02-23.33,14.53h45.93Z"/>
                  <path className="cls-2" d="M1304.97,105.3l-.15-27.59h-21.13v-21.13h21.13v-20.25l34.63-6.16v26.41h46.22v21.13h-46.22v19.81c0,9.1,4.7,13.79,15.26,13.79s17.9-3.67,26.12-11.15l7.34,19.52c-11.74,10.57-24.8,14.97-43.44,14.97-24.65,0-39.77-11.15-39.77-29.35Z"/>
                </g>
                <g>
                  <g>
                    <path className="cls-1" d="M87.93,35.11c4.3,1.02,8.39,2.97,11.92,5.83,3.58,2.81,6.34,6.45,8.24,10.44,1.89,4.04,4.09,10.74,3.84,22.31l3.38-9.26c2.66-6.4,5.78-12.33,9.36-17.75-.31-.87-.72-1.74-1.07-2.61-3.02-6.29-7.42-11.97-13-16.47-5.58-4.5-12.07-7.57-18.88-9.16-6.8-1.53-13.97-1.59-20.93,0h-.01c-3.11.73-5.56,3.11-6.38,6.19-2.46,9.41-2.61,19.13-.72,28.45,1.94,9.26,5.99,18.16,11.97,25.84,5.99,7.62,13.61,13.71,22.15,17.8,5.68,2.71,11.72,4.6,17.96,5.53.67-5.88,1.59-11.51,2.76-16.88-4.66-.67-9.16-2-13.35-4.04-6.19-2.97-11.72-7.37-16.06-12.94-4.35-5.58-7.26-11.97-8.7-18.73-1.02-4.96-1.23-10.13-.51-15.25,2.71-.1,5.37.15,8.03.72Z"/>
                    <path className="cls-1" d="M229.03,118.63c-2.8,2.47-5.7,4.81-8.77,6.94-.25.17-.5.31-.75.48,2.36,1.25,4,3.7,4,6.56,0,4.1-3.34,7.44-7.44,7.44s-7.44-3.34-7.44-7.44c0-.05.01-.09.01-.14-3.63,1.81-7.34,3.32-11.12,4.6,2.02,8.38,9.56,14.63,18.54,14.63,10.53,0,19.09-8.57,19.09-19.09,0-5.52-2.37-10.49-6.13-13.98Z"/>
                    <path className="cls-1" d="M104.48,140.43c-3.09-15.79-17.02-27.75-33.7-27.75-5.04,0-9.81,1.12-14.12,3.07-11.91,5.4-20.23,17.38-20.23,31.28,0,18.94,15.41,34.36,34.36,34.36s34.36-15.41,34.36-34.36c0-2.26-.23-4.47-.65-6.61ZM70.78,164.14c-9.43,0-17.1-7.67-17.1-17.1s7.67-17.1,17.1-17.1,17.1,7.67,17.1,17.1-7.67,17.1-17.1,17.1Z"/>
                  </g>
                  <path className="cls-3" d="M249.57,72.46c-4.63-2.1-10.08-.05-12.18,4.58-12.72,28.06-39,46.19-66.95,46.19h-38.75c.11-30.13,6.84-54.02,20.14-71.54,11.87-15.6,29.16-26.45,51.98-32.59.67,16.47-4.3,32.74-13.76,45.89-10.08,14.12-25.33,24.61-44.2,27.83-.31.1-.61.15-.92.2-1.23,5.58-2.1,11.41-2.66,17.55,2.35-.2,4.5-.51,6.5-.87,23.59-4.04,42.62-17.14,55.25-34.69,12.53-17.5,18.67-39.5,16.53-61.5-.2-2.3-.51-4.45-.87-6.4v-.05c-.82-4.73-5.38-7.86-10.08-6.91-31.57,6.45-55.36,20.16-71.37,41.24-15.57,20.56-23.48,47.79-23.62,81.71-34.64-2.05-64.91-31.8-69.82-69.42l-1.68-12.9c-.6-4.58-4.5-8.01-9.12-8.01H9.2c-5.08,0-9.2,4.12-9.2,9.2s4.12,9.2,9.2,9.2h16.7l.64,4.9c2.96,22.7,13.65,43.83,30.12,59.68,4.31-1.96,9.09-3.07,14.12-3.07,16.68,0,30.61,11.96,33.7,27.75,4.6.78,9.25,1.21,13.93,1.21h52.02c9.19,0,18.3-1.58,27.08-4.56,3.77-1.28,7.49-2.79,11.12-4.6,3.73-1.86,7.35-4.02,10.88-6.42.25-.17.5-.31.75-.48,3.07-2.13,5.97-4.48,8.77-6.94,10.57-9.32,19.18-20.87,25.12-33.99,2.1-4.63.05-10.08-4.58-12.18Z"/>
                </g>
              </g>
            </svg>
          </Link>
        </div>
        <div className="navbar-center">
          {/* Empty center for mobile, dock menu will be fixed separately */}
        </div>
        <div className="navbar-end">
          <div className="flex items-center gap-2">
            {user ? (
              <div className="flex items-center gap-2">
                <div className="dropdown dropdown-end">
                  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-8 rounded-full bg-primary flex items-center justify-center">
                      <span className="text-primary-content text-sm font-medium">
                        {user.user_metadata?.full_name?.charAt(0) || user.email?.charAt(0) || 'U'}
                      </span>
                    </div>
                  </div>
                  <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                      <div className="text-sm">
                        <div className="font-medium">{user.user_metadata?.full_name || 'User'}</div>
                        <div className="text-base-content/60">{user.email}</div>
                      </div>
                    </li>
                    <li><hr className="my-1" /></li>
                    {user.app_metadata?.role === 'admin' && (
                      <li>
                        <Link href="/admin" className="flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                          Admin Dashboard
                        </Link>
                      </li>
                    )}
                    <li>
                      <button onClick={handleSignOut} className="flex items-center gap-2 text-error">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        Sign Out
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <button 
                onClick={() => setShowAuthModal(true)}
                className="btn btn-ghost btn-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
                <span className="hidden sm:inline">Sign In</span>
              </button>
            )}
            
            <a href="https://outlook.office.com/bookwithme/user/48cc795072e74f5c997fec66dfc15db8@valiant.com.bd/meetingtype/dXqpDcIwYEqrf8q0lr6ijg2?anonymous&ismsaljsauthenabled&ep=mLinkFromTile" target="_blank" className="btn btn-primary btn-sm px-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span className="hidden sm:inline">Request a Demo</span>
              <span className="sm:hidden">Demo</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Fixed dock-style menu for desktop */}
      <div className="hidden lg:block lg:fixed lg:top-6 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:z-50">
        <div className="bg-black/20 backdrop-blur-md rounded-xl shadow-2xl border border-white/10 px-3 py-1.5">
          <div className="flex items-center gap-1">
            <a href="#features" className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg hover:bg-white/5 transition-all duration-200 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-xs font-medium">Features</span>
            </a>
            
            <a href="#benefits" className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg hover:bg-white/5 transition-all duration-200 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <span className="text-xs font-medium">Benefits</span>
            </a>
            
            <a href="#how-it-works" className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg hover:bg-white/5 transition-all duration-200 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-xs font-medium">How It Works</span>
            </a>
            
            <a href="#compliance" className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg hover:bg-white/5 transition-all duration-200 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.623 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
              <span className="text-xs font-medium">Compliance</span>
            </a>
            
            <a href="#about" className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg hover:bg-white/5 transition-all duration-200 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-xs font-medium">About</span>
            </a>
          </div>
        </div>
      </div>

      {/* Authentication Modal */}
      <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => setShowAuthModal(false)} 
        onSuccess={() => setShowAuthModal(false)}
      />
    </>
  );
}