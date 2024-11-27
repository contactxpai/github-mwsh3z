import React, { useEffect, useRef, useState } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        url: string;
        'events-target'?: string;
        'loading-status'?: string;
      };
    }
  }
}

export default function SplineViewer() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const splineRef = useRef<HTMLElement>(null);
  const scriptRef = useRef<HTMLScriptElement | null>(null);

  useEffect(() => {
    const loadSplineViewer = () => {
      return new Promise<void>((resolve, reject) => {
        if (scriptRef.current || document.querySelector('script[src*="spline-viewer"]')) {
          resolve();
          return;
        }

        const script = document.createElement('script');
        script.src = 'https://unpkg.com/@splinetool/viewer/build/spline-viewer.js';
        script.type = 'module';
        script.crossOrigin = 'anonymous';
        
        script.onload = () => {
          scriptRef.current = script;
          resolve();
        };
        
        script.onerror = () => {
          setHasError(true);
          reject(new Error('Failed to load Spline viewer'));
        };

        document.head.appendChild(script);
      });
    };

    loadSplineViewer()
      .then(() => setIsLoaded(true))
      .catch(error => {
        console.error('Error loading Spline viewer:', error);
        setHasError(true);
      });

    return () => {
      if (scriptRef.current) {
        scriptRef.current.remove();
        scriptRef.current = null;
      }
    };
  }, []);

  if (hasError) {
    return (
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-[600px] -z-10 flex items-center justify-center">
        <div className="text-[#cdcbbb]">Failed to load 3D scene</div>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-[600px] -z-10 flex items-center justify-center">
        <div className="animate-pulse text-[#cdcbbb]">Loading 3D Scene...</div>
      </div>
    );
  }

  return (
    <spline-viewer
      ref={splineRef}
      url="https://prod.spline.design/kjxiNKygcNiha1nq/scene.splinecode"
      events-target="global"
      loading-status="loading"
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-[600px] -z-10"
    />
  );
}