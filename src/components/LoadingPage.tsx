import React from 'react';
import { LoadingSkeleton } from './ui/loading-skeleton';

export function LoadingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Skeleton */}
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <LoadingSkeleton className="h-8 w-32" />
            <div className="hidden md:flex space-x-8">
              <LoadingSkeleton className="h-4 w-16" />
              <LoadingSkeleton className="h-4 w-20" />
              <LoadingSkeleton className="h-4 w-18" />
              <LoadingSkeleton className="h-4 w-24" />
            </div>
            <div className="flex space-x-4">
              <LoadingSkeleton className="h-8 w-20" />
              <LoadingSkeleton className="h-8 w-32" />
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section Skeleton */}
      <div className="relative h-[600px] bg-gray-300">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-4">
            <LoadingSkeleton className="h-12 w-96 mx-auto" />
            <LoadingSkeleton className="h-6 w-80 mx-auto" />
            <div className="flex space-x-4 justify-center mt-8">
              <LoadingSkeleton className="h-12 w-32" />
              <LoadingSkeleton className="h-12 w-32" />
            </div>
          </div>
        </div>
      </div>

      {/* Content Sections Skeleton */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <LoadingSkeleton className="h-8 w-64 mx-auto mb-4" />
          <LoadingSkeleton className="h-4 w-96 mx-auto" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="bg-white rounded-lg p-6 shadow-md">
              <LoadingSkeleton className="h-16 w-16 rounded-full mx-auto mb-4" />
              <LoadingSkeleton className="h-6 w-32 mx-auto mb-2" />
              <LoadingSkeleton className="h-4 w-full mb-2" />
              <LoadingSkeleton className="h-4 w-3/4 mx-auto" />
            </div>
          ))}
        </div>
      </div>

      {/* Loading Animation */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-primary rounded-full animate-pulse"></div>
          <span className="text-primary text-lg">Loading NMSL...</span>
        </div>
      </div>
    </div>
  );
}