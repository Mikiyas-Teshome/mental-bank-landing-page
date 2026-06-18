'use client';

interface ErrorMessageProps {
  error: string;
  onRetry: () => void;
}

export default function ErrorMessage({ error, onRetry }: ErrorMessageProps) {
  return (
    <main className="min-h-screen w-full py-16 px-4 flex items-center justify-center">
      <div className="relative w-full max-w-3xl rounded-[2rem] p-8 sm:p-10 md:p-14 bg-white/70 dark:bg-white/5 backdrop-blur-2xl shadow-[0_8px_60px_-15px_rgba(0,0,0,0.25)] ring-1 ring-black/5">
        <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[radial-gradient(120%_80%_at_20%_0%,rgba(168,85,247,0.25),transparent_60%),radial-gradient(90%_70%_at_80%_100%,rgba(99,102,241,0.25),transparent_60%)]"></div>

        <div className="relative z-10 text-center space-y-6 mx-auto max-w-md">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-100 text-red-600">
            {/* inline alert-circle icon */}
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          </div>

          <div>
            <h3 className="text-lg font-medium text-primary mb-2">Something went wrong</h3>
            <p className="text-sm text-muted mb-4">{error}</p>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-sm text-red-800">
              <strong>Possible reasons:</strong>
            </p>
            <ul className="text-sm text-red-700 mt-2 space-y-1 text-left">
              <li>• Email address not found in our system</li>
              <li>• Invalid or expired OTP code</li>
              <li>• Network connection issues</li>
              <li>• Server temporarily unavailable</li>
            </ul>
          </div>

          <button
            onClick={onRetry}
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors cursor-pointer"
          >
            Try Again
          </button>
        </div>
      </div>
    </main>
  );
}