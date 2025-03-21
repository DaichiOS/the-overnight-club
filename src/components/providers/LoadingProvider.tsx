'use client';

import BounceLoader from '@/components/ui/BounceLoader';
import { createContext, ReactNode, useContext, useState } from 'react';

// Create context
type LoadingContextType = {
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
};

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

// Custom hook to use the loading context
export function useLoading() {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
}

// Provider component
export function LoadingProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);
  
  // Function to set loading state
  const setLoading = (loading: boolean) => {
    setIsLoading(loading);
  };
  
  return (
    <LoadingContext.Provider value={{ isLoading, setLoading }}>
      {isLoading && <BounceLoader />}
      <div style={{ visibility: isLoading ? 'hidden' : 'visible' }}>
        {children}
      </div>
    </LoadingContext.Provider>
  );
} 