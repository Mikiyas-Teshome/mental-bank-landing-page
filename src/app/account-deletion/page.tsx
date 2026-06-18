'use client';

import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import EmailForm from './components/EmailForm';
import ConfirmationModal from './components/ConfirmationModal';
import OTPForm from './components/OTPForm';
import SuccessMessage from './components/SuccessMessage';
import ErrorMessage from './components/ErrorMessage';

export type Step = 'email' | 'confirmation' | 'otp' | 'success' | 'error';

export default function Home() {
    const [currentStep, setCurrentStep] = useState<Step>('email');
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleEmailSubmit = (email: string) => {
        setEmail(email);
        setCurrentStep('confirmation');
    };

    const handleConfirmation = async () => {
        setIsLoading(true);
        setError('');

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/verify-email`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (response.ok) {
                setCurrentStep('otp');
            } else {
                setError(data.message || 'Failed to verify email');
                setCurrentStep('error');
            }
        } catch {
            setError('Network error. Please try again.');
            setCurrentStep('error');
        } finally {
            setIsLoading(false);
        }
    };

    const handleOTPSubmit = async (otp: string) => {
        setIsLoading(true);
        setError('');

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/delete-account`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, otp }),
            });

            const data = await response.json();

            if (response.ok) {
                setCurrentStep('success');
            } else {
                setError(data.message || 'Failed to delete account');
                setCurrentStep('error');
            }
        } catch {
            setError('Network error. Please try again.');
            setCurrentStep('error');
        } finally {
            setIsLoading(false);
        }
    };

    const handleReset = () => {
        setCurrentStep('email');
        setEmail('');
        setError('');
    };

    return (
        <main className="min-h-screen bg-gradient-to-br  from-blue-50 to-indigo-100 flex items-center justify-center">
            <div className=" ">

                    {currentStep === 'email' && (
                        <EmailForm onSubmit={handleEmailSubmit} isLoading={isLoading} />
                    )}

                    {currentStep === 'confirmation' && (
                        <ConfirmationModal
                            email={email}
                            onConfirm={handleConfirmation}
                            onCancel={handleReset}
                            isLoading={isLoading}
                        />
                    )}

                    {currentStep === 'otp' && (
                        <OTPForm
                            email={email}
                            onSubmit={handleOTPSubmit}
                            onBack={handleReset}
                            isLoading={isLoading}
                        />
                    )}

                    {currentStep === 'success' && (
                        <SuccessMessage onReset={handleReset} />
                    )}

                    {currentStep === 'error' && (
                        <ErrorMessage
                            error={error}
                            onRetry={handleReset}
                        />
                    )}
            </div>
            <Toaster position="top-right" />
        </main>
    );
}