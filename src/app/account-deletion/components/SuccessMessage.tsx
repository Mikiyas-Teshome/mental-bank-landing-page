'use client';

import { RotateCcw } from "lucide-react";

interface SuccessMessageProps {
    onReset: () => void;
}

export default function SuccessMessage({ onReset }: SuccessMessageProps) {
    return (
        <main className="min-h-screen w-full py-16 px-4 flex items-center justify-center">
            <div className="relative w-full max-w-3xl rounded-[2rem] p-8 sm:p-10 md:p-14 bg-white/70 dark:bg-white/5 backdrop-blur-2xl shadow-[0_8px_60px_-15px_rgba(0,0,0,0.25)] ring-1 ring-black/5">
                {/* soft gradient wash */}
                <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[radial-gradient(120%_80%_at_20%_0%,rgba(168,85,247,0.25),transparent_60%),radial-gradient(90%_70%_at_80%_100%,rgba(99,102,241,0.25),transparent_60%)]"></div>

                <div className="relative z-10 mx-auto max-w-md space-y-8 text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600">
                        {/* inline alert-triangle icon */}
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" />
                            <path d="M12 9v4" />
                            <path d="M12 17h.01" />
                        </svg>
                    </div>

                    <h3 className="text-2xl font-semibold text-foreground">Account Deleted Successfully</h3>
                    <p className="mt-1 text-sm text-muted">
                        Your account and all associated data have been
                        <br />
                        permanently deleted.
                    </p>

                    {/* <div>
                        <label htmlFor="success-email" className="mb-2 block text-sm font-medium text-foreground">Email</label>
                        <input
                            id="success-email"
                            type="email"
                            value={''}
                            readOnly
                            disabled
                            className="block w-full rounded-lg border border-white/30 bg-white px-4 py-2.5 text-sm text-foreground placeholder:text-muted outline-none focus:ring-2 focus:ring-ring/50 focus:border-transparent dark:bg-input/30 dark:border-input"
                            placeholder="Email"
                        />
                    </div> */}

                    {/* <div className="flex items-center gap-3">
                        <button
                            onClick={onReset}
                            className="flex-1 rounded-lg bg-gray-100 px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
                        >
                            Cancel
                        </button>
                        <button
                            type="button"
                            className="rounded-lg bg-red-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
                        >
                            Yes,Delete Account
                        </button>
                    </div> */}

                    {/* <div className="flex items-center gap-3">
                    <button
                        onClick={onReset}
                        className="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-200 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors flex items-center justify-center"
                    >
                        <RotateCcw className="h-4 w-4 mr-2" />
                        Delete Another Account
                    </button>
                    </div> */}




                    <button
                        onClick={onReset}
                        className="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-200 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors flex items-center justify-center"
                    >
                        <RotateCcw className="h-4 w-4 mr-2" />
                        Delete Another Account
                    </button>
                </div>
            </div>
        </main>
    );
}