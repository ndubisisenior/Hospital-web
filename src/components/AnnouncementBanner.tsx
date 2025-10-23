import React, { useState } from 'react';
import { X, Megaphone } from 'lucide-react';
import { Button } from './ui/button';

interface AnnouncementBannerProps {
  message: string;
  type?: 'info' | 'warning' | 'success';
  closable?: boolean;
}

export function AnnouncementBanner({ 
  message, 
  type = 'info', 
  closable = true 
}: AnnouncementBannerProps) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const typeColors = {
    info: 'bg-primary text-white',
    warning: 'bg-yellow-600 text-white',
    success: 'bg-primary text-white'
  };

  return (
    <div className={`${typeColors[type]} py-2 px-4 relative`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Megaphone className="w-4 h-4 flex-shrink-0" />
          <p className="text-sm md:text-base">
            {message}
          </p>
        </div>
        {closable && (
          <button
            onClick={() => setIsVisible(false)}
            className="hover:opacity-75 transition-opacity"
            aria-label="Close announcement"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}