import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { 
  Accessibility, 
  Sun, 
  Moon, 
  Plus, 
  Minus,
  Volume2,
  VolumeX
} from 'lucide-react';

export function AccessibilityHelper() {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isSoundEnabled, setIsSoundEnabled] = useState(true);

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}px`;
  }, [fontSize]);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    if (isHighContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
  }, [isHighContrast]);

  const increaseFontSize = () => {
    if (fontSize < 24) setFontSize(prev => prev + 2);
  };

  const decreaseFontSize = () => {
    if (fontSize > 12) setFontSize(prev => prev - 2);
  };

  const resetSettings = () => {
    setFontSize(16);
    setIsDarkMode(false);
    setIsHighContrast(false);
    setIsSoundEnabled(true);
  };

  return (
    <div className="fixed top-1/2 left-0 z-50 transform -translate-y-1/2">
      <div className={`transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="bg-white shadow-lg border border-gray-200 rounded-r-lg p-4 space-y-4 w-64">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Accessibility Options</h3>
          
          {/* Font Size Controls */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Font Size</label>
            <div className="flex items-center space-x-2">
              <Button 
                size="sm" 
                variant="outline" 
                onClick={decreaseFontSize}
                disabled={fontSize <= 12}
              >
                <Minus className="w-4 h-4" />
              </Button>
              <span className="text-sm px-2">{fontSize}px</span>
              <Button 
                size="sm" 
                variant="outline" 
                onClick={increaseFontSize}
                disabled={fontSize >= 24}
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Dark Mode Toggle */}
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-gray-700">Dark Mode</label>
            <Button
              size="sm"
              variant={isDarkMode ? "default" : "outline"}
              onClick={() => setIsDarkMode(!isDarkMode)}
            >
              {isDarkMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </Button>
          </div>

          {/* High Contrast Toggle */}
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-gray-700">High Contrast</label>
            <Button
              size="sm"
              variant={isHighContrast ? "default" : "outline"}
              onClick={() => setIsHighContrast(!isHighContrast)}
            >
              <Accessibility className="w-4 h-4" />
            </Button>
          </div>

          {/* Sound Toggle */}
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-gray-700">Sound</label>
            <Button
              size="sm"
              variant={isSoundEnabled ? "default" : "outline"}
              onClick={() => setIsSoundEnabled(!isSoundEnabled)}
            >
              {isSoundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </Button>
          </div>

          {/* Reset Button */}
          <Button 
            size="sm" 
            variant="secondary" 
            onClick={resetSettings}
            className="w-full"
          >
            Reset All
          </Button>
        </div>
      </div>

      {/* Toggle Button */}
      <Button
        className={`rounded-l-none rounded-r-lg bg-primary hover:bg-primary/90 text-white p-3 shadow-lg transition-transform duration-300 ${
          isOpen ? 'translate-x-64' : 'translate-x-0'
        }`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle accessibility options"
      >
        <Accessibility className="w-5 h-5" />
      </Button>
    </div>
  );
}