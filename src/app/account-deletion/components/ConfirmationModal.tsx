'use client';

interface ConfirmationModalProps {
    email: string;
    onConfirm: () => void;
    onCancel: () => void;
    isLoading: boolean;
}

export default function ConfirmationModal({
    email,
    onConfirm,
    onCancel,
    isLoading
}: ConfirmationModalProps) {
    return (
        <main className="min-h-screen w-full py-16 px-4 flex items-center justify-center">
            <div className="relative w-full max-w-3xl rounded-[2rem] p-8 sm:p-10 md:p-14 bg-white/70 dark:bg-white/5 backdrop-blur-2xl shadow-[0_8px_60px_-15px_rgba(0,0,0,0.25)] ring-1 ring-black/5">
                {/* soft gradient wash */}
                <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[radial-gradient(120%_80%_at_20%_0%,rgba(168,85,247,0.25),transparent_60%),radial-gradient(90%_70%_at_80%_100%,rgba(99,102,241,0.25),transparent_60%)]"></div>

                <div className="relative z-10 mx-auto max-w-md space-y-8">
                    <div className="text-center">
                        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600">
                            {/* inline alert-triangle icon */}
                            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" />
                                <path d="M12 9v4" />
                                <path d="M12 17h.01" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-semibold text-primary">Confirm Account Deletion</h3>
                        <p className="mt-2 text-sm text-muted">Are you sure you want to delete the account for:</p>
                        <p className="mt-1 text-sm font-medium text-primary">{email}</p>
                    </div>

                    <div>
                        <label htmlFor="confirm-email" className="mb-2 block text-sm font-medium text-primary">Email</label>
                        <input
                            id="confirm-email"
                            type="email"
                            value={email}
                            readOnly
                            disabled
                            className="block w-full rounded-lg border border-white/30 bg-accent/15 px-4 py-2.5 text-sm text-foreground placeholder:text-muted outline-none focus:ring-2 focus:ring-ring/50 focus:border-transparent dark:bg-input/30 dark:border-input"
                            placeholder="Email"
                        />
                    </div>

                    <div className="flex items-center gap-3">
                        <button
                            onClick={onCancel}
                            disabled={isLoading}
                            className="flex-1 rounded-lg bg-muted/10 px-4 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-muted/15 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={onConfirm}
                            disabled={isLoading}
                            className="rounded-lg bg-red-600 px-4 py-2.5 text-sm font-medium text-primary-text transition-colors hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
                        >
                            {isLoading ? 'Sending OTP...' : 'Yes,Delete Account'}
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}