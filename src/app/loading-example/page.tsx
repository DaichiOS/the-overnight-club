'use client';

import useLoadingState from '@/hooks/useLoadingState';
import { useState } from 'react';

export default function LoadingExamplePage() {
  const { showLoader, hideLoader, withLoading } = useLoadingState();
  const [message, setMessage] = useState('');
  
  // Simulate a network request
  const simulateRequest = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Operation completed successfully!');
      }, 2000); // 2 seconds delay
    });
  };
  
  // Handle click with manual loader control
  const handleManualLoading = () => {
    showLoader();
    
    // Hide after 3 seconds
    setTimeout(() => {
      hideLoader();
      setMessage('Manual loading completed!');
    }, 3000);
  };
  
  // Handle click with automatic loader control
  const handleAutoLoading = withLoading(async () => {
    const result = await simulateRequest();
    setMessage(result as string);
  });
  
  return (
    <main className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Loading Example</h1>
      
      <div className="space-y-8">
        <section className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Manual Loading Control</h2>
          <p className="mb-4">This example shows how to manually control the loader.</p>
          <button 
            onClick={handleManualLoading}
            className="px-4 py-2 bg-[var(--primary)] text-white rounded-md hover:bg-[var(--accent)] transition-colors"
          >
            Show Loader for 3 Seconds
          </button>
        </section>
        
        <section className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Automatic Loading Control</h2>
          <p className="mb-4">This example shows how to automatically control the loader during async operations.</p>
          <button 
            onClick={handleAutoLoading}
            className="px-4 py-2 bg-[var(--primary)] text-white rounded-md hover:bg-[var(--accent)] transition-colors"
          >
            Simulate API Request
          </button>
        </section>
        
        {message && (
          <div className="p-4 bg-green-50 border border-green-200 rounded-md text-green-800">
            {message}
          </div>
        )}
      </div>
    </main>
  );
} 