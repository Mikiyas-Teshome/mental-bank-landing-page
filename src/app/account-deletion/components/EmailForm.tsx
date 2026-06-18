"use client";

import { useState } from "react";
import { AlertTriangle, Mail, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EmailFormProps {
    onSubmit: (email: string) => void;
    isLoading: boolean;
  }

export default function EmailForm({ onSubmit, isLoading }: EmailFormProps) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email.trim()) {
      setError("Email is required");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }
    onSubmit(email);
  };
  
  return (
    <main className="min-h-screen w-full py-16 px-4 flex items-center justify-center">
      <div className="relative w-full max-w-3xl rounded-[2rem] p-8 sm:p-10 md:p-14 bg-white/70 dark:bg-white/5 backdrop-blur-2xl shadow-[0_8px_60px_-15px_rgba(0,0,0,0.25)] ring-1 ring-black/5">
        {/* soft gradient wash */}
        <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[radial-gradient(120%_80%_at_20%_0%,rgba(168,85,247,0.25),transparent_60%),radial-gradient(90%_70%_at_80%_100%,rgba(99,102,241,0.25),transparent_60%)]"></div>

        <div className="relative z-10 mx-auto max-w-md text-center">
          <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-destructive/10 text-destructive">
            <AlertTriangle className="size-6" aria-hidden="true" />
          </div>

          <h1 className="text-2xl font-semibold tracking-tight text-foreground">
            Delete an account
          </h1>
          <p className="mt-2 text-sm text-muted">
            Permanently remove your account and all associated data.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 grid gap-4 text-left">
            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm font-medium text-foreground">
                Email
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-muted">
                  <Mail className="h-4 w-4" aria-hidden="true" />
                </div>
                <input
                  id="email"
                  type="email"
                  inputMode="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-invalid={!!error}
                  className="h-10 w-full rounded-md border border-white/30 bg-accent/15 pl-10 pr-3 text-sm text-foreground placeholder:text-muted outline-none focus:ring-2 focus:ring-ring/50 focus:border-transparent dark:bg-input/30 dark:border-input"
                  disabled={isLoading}
                />
              </div>
              {error && (
                <div className="mt-1 flex items-center text-destructive text-xs">
                  <AlertCircle className="h-4 w-4 mr-1" aria-hidden="true" />
                  {error}
                </div>
              )}
            </div>

            <Button type="submit" disabled={isLoading} className="h-10 w-full cursor-pointer">
              {isLoading ? "Verifying..." : "Continue to Delete Account"}
            </Button>
          </form>

          <p className="mt-6 text-center text-xs text-muted">
            This action cannot be undone. All your data will be permanently deleted.
          </p>
        </div>
      </div>
    </main>
  );
}
