'use client';

import { useEffect, useRef, useState } from 'react';

interface OTPFormProps {
  email: string;
  onSubmit: (otp: string) => void;
  onBack: () => void;
  isLoading: boolean;
}

export default function OTPForm({ email, onSubmit, onBack: _onBack, isLoading }: OTPFormProps) {
  const [digits, setDigits] = useState<string[]>(['', '', '', '', '', '']);
  const [resendCooldown, setResendCooldown] = useState(0);
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  useEffect(() => {
    if (resendCooldown > 0) {
      const timer = setTimeout(() => setResendCooldown(resendCooldown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [resendCooldown]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const value = digits.join('');
    if (value.length !== 6) {
      // No toast UI here; keep UX minimal per design
      return;
    }

    onSubmit(value);
  };

  const handleResend = async () => {
    if (resendCooldown > 0) return;

    setResendCooldown(60);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/resend-otp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      // Intentionally no toast UI; design doesn't show notifications
      void response;
    } catch {
      // swallow errors to keep UI simple
    }
  };

  const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\D/g, '');
    if (!raw) {
      const cleared = [...digits];
      cleared[index] = '';
      setDigits(cleared);
      return;
    }

    const chars = raw.slice(0, 6 - index).split('');
    const next = [...digits];
    for (let i = 0; i < chars.length; i++) {
      const pos = index + i;
      if (pos < 6) next[pos] = chars[i];
    }
    setDigits(next);

    const nextIndex = Math.min(index + chars.length, 5);
    inputRefs.current[nextIndex]?.focus();
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace') {
      if (digits[index]) {
        const next = [...digits];
        next[index] = '';
        setDigits(next);
      } else if (index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    } else if (e.key === 'ArrowLeft' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === 'ArrowRight' && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (index: number, e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '');
    if (!pasted) return;

    const next = [...digits];
    let cursor = index;
    for (const ch of pasted) {
      if (cursor > 5) break;
      next[cursor] = ch;
      cursor += 1;
    }
    setDigits(next);
    inputRefs.current[Math.min(cursor, 5)]?.focus();
  };

  return (
    <main className="min-h-screen w-full py-16 px-4 flex items-center justify-center">
      <div className="relative w-full max-w-3xl rounded-[2rem] p-8 sm:p-10 md:p-14 bg-white/70 dark:bg-white/5 backdrop-blur-2xl shadow-[0_8px_60px_-15px_rgba(0,0,0,0.25)] ring-1 ring-black/5">
        <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[radial-gradient(120%_80%_at_20%_0%,rgba(168,85,247,0.25),transparent_60%),radial-gradient(90%_70%_at_80%_100%,rgba(99,102,241,0.25),transparent_60%)]"></div>

        <div className="relative z-10 mx-auto max-w-xl space-y-8 text-center">
          <div className="mx-auto mb-1 flex size-10 items-center justify-center rounded-full bg-destructive/10 text-destructive">
            {/* inline shield-check icon */}
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
              <path d="m9 12 2 2 4-4" />
            </svg>
          </div>
          <h3 className="text-2xl font-semibold text-foreground">Enter Verification Code</h3>
          <div className="text-sm text-muted -mt-2">
            We have sent a 6-digit code to:
            <div className="mt-1 text-[13px] text-foreground/80">{email}</div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <span className="sr-only" id="otp-label">Verification Code</span>
            <div className="flex items-center justify-center gap-3 sm:gap-4" aria-labelledby="otp-label">
              {digits.map((digit, idx) => (
                <input
                  key={idx}
                  ref={(el) => { inputRefs.current[idx] = el; }}
                  inputMode="numeric"
                  autoComplete="one-time-code"
                  pattern="[0-9]*"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(idx, e)}
                  onKeyDown={(e) => handleKeyDown(idx, e)}
                  onPaste={(e) => handlePaste(idx, e)}
                  className="h-14 w-14 rounded-lg border border-white/60 bg-white text-center text-xl font-medium text-foreground shadow-sm outline-none focus:border-black focus:ring-0 dark:bg-input/30 dark:border-input"
                  disabled={isLoading}
                />
              ))}
            </div>

            <button
              type="submit"
              disabled={isLoading || digits.join('').length !== 6}
              className="w-full h-11 rounded-md bg-black text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              {isLoading ? 'Deleting Account...' : 'Delete Account'}
            </button>
          </form>

          <button
            onClick={handleResend}
            disabled={resendCooldown > 0 || isLoading}
            className="text-sm text-muted hover:text-foreground/80 disabled:text-muted/60 cursor-pointer"
          >
            {resendCooldown > 0 ? `Resend in ${resendCooldown}s` : 'Resend code'}
          </button>
          <button
            onClick={_onBack}
            type="button"
            disabled={isLoading}
            className="mt-2 text-sm text-muted hover:text-foreground/80 disabled:text-muted/60 cursor-pointer"
          >
            Cancel
          </button>
        </div>
      </div>
    </main>
  );
}