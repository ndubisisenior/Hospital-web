import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Cookie, X } from 'lucide-react';

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setTimeout(() => setShowBanner(true), 2000);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-50 p-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-3">
          <Cookie className="w-6 h-6 text-primary flex-shrink-0" />
          <div>
            <p className="text-sm text-gray-700">
              We use cookies to enhance your experience and analyze our website traffic. 
              <a href="/privacy" className="text-primary hover:underline ml-1">
                Learn more about our privacy policy
              </a>
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={declineCookies}
            className="text-gray-600"
          >
            Decline
          </Button>
          <Button 
            size="sm" 
            onClick={acceptCookies}
            className="bg-primary hover:bg-primary/90"
          >
            Accept All
          </Button>
          <button
            onClick={declineCookies}
            className="text-gray-400 hover:text-gray-600"
            aria-label="Close cookie banner"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}