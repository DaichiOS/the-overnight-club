"use client";

import { useLoading } from "@/components/providers/LoadingProvider";
import { useCallback } from "react";

/**
 * A hook to easily manage loading state and wrap async functions
 */
export function useLoadingState() {
  const { setLoading } = useLoading();

  /**
   * Wrap an async function with loading state
   * @param asyncFn The async function to wrap
   * @returns A function that shows loader while the async operation runs
   */
  const withLoading = useCallback(
    <T, Args extends unknown[]>(asyncFn: (...args: Args) => Promise<T>) => {
      return async (...args: Args): Promise<T> => {
        setLoading(true);
        try {
          return await asyncFn(...args);
        } finally {
          setLoading(false);
        }
      };
    },
    [setLoading]
  );

  return {
    showLoader: () => setLoading(true),
    hideLoader: () => setLoading(false),
    withLoading,
  };
}

export default useLoadingState;
