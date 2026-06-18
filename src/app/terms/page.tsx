import MainHeader from "@/components/mainHeader";
import Footer from "@/components/footer";
import Wrapper from "@/components/Wrapper";
import { bebasNeue } from "@/app/fonts";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-[url('/bg.svg')] bg-cover bg-center">
        <MainHeader />

        {/* Page Header */}
        <div className="pt-16 pb-20">
          <Wrapper>
            <div className="flex flex-col items-center text-center space-y-6">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-muted hover:text-foreground transition-colors">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>

              <div className="space-y-4">
                <h1
                  className={`${bebasNeue.className} text-4xl md:text-5xl lg:text-6xl text-primary uppercase leading-none`}>
                  Terms of Service
                </h1>
                <p className="text-muted text-lg max-w-2xl mx-auto">
                  Please read these terms carefully before using Mental Bank. By
                  using our service, you agree to be bound by these terms.
                </p>
              </div>

              <div className="text-sm text-muted">
                Last updated:{" "}
                {new Date().toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
            </div>
          </Wrapper>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16">
        <Wrapper>
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Introduction */}
            <section className="space-y-6">
              <h2
                className={`${bebasNeue.className} text-3xl md:text-4xl text-primary uppercase`}>
                Introduction
              </h2>
              <div className="prose prose-lg max-w-none text-foreground space-y-4">
                <p>
                  Welcome to Mental Bank (&quot;we,&quot; &quot;our,&quot; or
                  &quot;us&quot;). These Terms of Service (&quot;Terms&quot;)
                  govern your use of our mobile application and related services
                  (collectively, the &quot;Service&quot;) operated by Mental
                  Bank.
                </p>
                <p>
                  By accessing or using our Service, you agree to be bound by
                  these Terms. If you disagree with any part of these terms,
                  then you may not access the Service.
                </p>
              </div>
            </section>

            {/* Acceptance of Terms */}
            <section className="space-y-6">
              <h2
                className={`${bebasNeue.className} text-3xl md:text-4xl text-primary uppercase`}>
                Acceptance of Terms
              </h2>
              <div className="prose prose-lg max-w-none text-foreground space-y-4">
                <p>
                  By downloading, installing, or using the Mental Bank
                  application, you acknowledge that you have read, understood,
                  and agree to be bound by these Terms and our Privacy Policy.
                </p>
                <p>
                  If you do not agree to these Terms, you must not use our
                  Service.
                </p>
              </div>
            </section>

            {/* Description of Service */}
            <section className="space-y-6">
              <h2
                className={`${bebasNeue.className} text-3xl md:text-4xl text-primary uppercase`}>
                Description of Service
              </h2>
              <div className="prose prose-lg max-w-none text-foreground space-y-4">
                <p>
                  Mental Bank is a mobile application designed to help users
                  develop positive mental habits and achieve their goals through
                  daily journaling, visualization exercises, and subconscious
                  programming techniques.
                </p>
                <p>Our Service includes:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Daily journaling and reflection tools</li>
                  <li>Goal setting and tracking features</li>
                  <li>Visualization and affirmation exercises</li>
                  <li>Progress monitoring and analytics</li>
                  <li>Educational content and resources</li>
                </ul>
              </div>
            </section>

            {/* User Accounts */}
            <section className="space-y-6">
              <h2
                className={`${bebasNeue.className} text-3xl md:text-4xl text-primary uppercase`}>
                User Accounts
              </h2>
              <div className="prose prose-lg max-w-none text-foreground space-y-4">
                <p>
                  To access certain features of our Service, you may be required
                  to create an account. You are responsible for:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Providing accurate and complete information</li>
                  <li>Maintaining the security of your account credentials</li>
                  <li>All activities that occur under your account</li>
                  <li>Notifying us immediately of any unauthorized use</li>
                </ul>
                <p>
                  We reserve the right to suspend or terminate accounts that
                  violate these Terms.
                </p>
              </div>
            </section>

            {/* User Conduct */}
            <section className="space-y-6">
              <h2
                className={`${bebasNeue.className} text-3xl md:text-4xl text-primary uppercase`}>
                User Conduct
              </h2>
              <div className="prose prose-lg max-w-none text-foreground space-y-4">
                <p>
                  You agree to use our Service only for lawful purposes and in
                  accordance with these Terms. You agree not to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Use the Service for any illegal or unauthorized purpose
                  </li>
                  <li>Violate any laws or regulations</li>
                  <li>Infringe on the rights of others</li>
                  <li>Transmit harmful, malicious, or objectionable content</li>
                  <li>
                    Post spam, impersonate others, or engage in fraudulent
                    activities
                  </li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with the proper functioning of the Service</li>
                  <li>
                    Use automated systems to access the Service without
                    permission
                  </li>
                  <li>
                    Share content that promotes violence, discrimination, or
                    illegal activities
                  </li>
                </ul>
              </div>
            </section>

            {/* Content Moderation and Reporting */}
            <section className="space-y-6">
              <h2
                className={`${bebasNeue.className} text-3xl md:text-4xl text-primary uppercase`}>
                Content Moderation and Reporting
              </h2>
              <div className="prose prose-lg max-w-none text-foreground space-y-4">
                <p>
                  We reserve the right to monitor, review, and moderate content
                  shared through our Service. We may remove content that
                  violates these Terms or is otherwise inappropriate.
                </p>
                <p>
                  If you encounter content that violates these Terms or is
                  inappropriate, please report it to us immediately at{" "}
                  <a
                    href="mailto:report@mentalbank.app"
                    className="text-primary hover:underline">
                    report@mentalbank.app
                  </a>
                  .
                </p>
                <p>
                  We will investigate all reports and take appropriate action,
                  which may include content removal, account warnings, or
                  account termination.
                </p>
              </div>
            </section>

            {/* Privacy and Data */}
            <section className="space-y-6">
              <h2
                className={`${bebasNeue.className} text-3xl md:text-4xl text-primary uppercase`}>
                Privacy and Data Protection
              </h2>
              <div className="prose prose-lg max-w-none text-foreground space-y-4">
                <p>
                  Your privacy is important to us. Our collection and use of
                  personal information is governed by our Privacy Policy, which
                  is incorporated into these Terms by reference.
                </p>
                <p>
                  We implement appropriate security measures to protect your
                  data, but no method of transmission over the internet is 100%
                  secure. You use our Service at your own risk.
                </p>
              </div>
            </section>

            {/* Intellectual Property */}
            <section className="space-y-6">
              <h2
                className={`${bebasNeue.className} text-3xl md:text-4xl text-primary uppercase`}>
                Intellectual Property
              </h2>
              <div className="prose prose-lg max-w-none text-foreground space-y-4">
                <p>
                  The Service and its original content, features, and
                  functionality are owned by Mental Bank and are protected by
                  international copyright, trademark, patent, trade secret, and
                  other intellectual property laws.
                </p>
                <p>
                  You may not copy, modify, distribute, sell, or lease any part
                  of our Service without our written permission.
                </p>
              </div>
            </section>

            {/* Disclaimers */}
            <section className="space-y-6">
              <h2
                className={`${bebasNeue.className} text-3xl md:text-4xl text-primary uppercase`}>
                Disclaimers
              </h2>
              <div className="prose prose-lg max-w-none text-foreground space-y-4">
                <p>
                  Our Service is provided &quot;as is&quot; and &quot;as
                  available&quot; without warranties of any kind. We do not
                  guarantee that:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>The Service will be uninterrupted or error-free</li>
                  <li>Defects will be corrected</li>
                  <li>
                    The Service is free of viruses or other harmful components
                  </li>
                  <li>
                    Results from using the Service will meet your expectations
                  </li>
                </ul>
                <p>
                  Mental Bank is not a substitute for professional medical,
                  psychological, or therapeutic advice. Always consult with
                  qualified professionals for serious mental health concerns.
                </p>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section className="space-y-6">
              <h2
                className={`${bebasNeue.className} text-3xl md:text-4xl text-primary uppercase`}>
                Limitation of Liability
              </h2>
              <div className="prose prose-lg max-w-none text-foreground space-y-4">
                <p>
                  To the maximum extent permitted by law, Mental Bank shall not
                  be liable for any indirect, incidental, special,
                  consequential, or punitive damages, including without
                  limitation, loss of profits, data, use, goodwill, or other
                  intangible losses.
                </p>
              </div>
            </section>

            {/* Termination */}
            <section className="space-y-6">
              <h2
                className={`${bebasNeue.className} text-3xl md:text-4xl text-primary uppercase`}>
                Termination
              </h2>
              <div className="prose prose-lg max-w-none text-foreground space-y-4">
                <p>
                  We may terminate or suspend your account and access to the
                  Service immediately, without prior notice, for any reason,
                  including if you breach these Terms.
                </p>
                <p>
                  You may also terminate your account at any time by contacting
                  us or deleting the application from your device.
                </p>
              </div>
            </section>

            {/* Changes to Terms */}
            <section className="space-y-6">
              <h2
                className={`${bebasNeue.className} text-3xl md:text-4xl text-primary uppercase`}>
                Changes to Terms
              </h2>
              <div className="prose prose-lg max-w-none text-foreground space-y-4">
                <p>
                  We reserve the right to modify these Terms at any time. We
                  will notify users of any material changes through the Service
                  or by email.
                </p>
                <p>
                  Your continued use of the Service after such modifications
                  constitutes acceptance of the updated Terms.
                </p>
              </div>
            </section>

            {/* Contact Information */}
            <section className="space-y-6">
              <h2
                className={`${bebasNeue.className} text-3xl md:text-4xl text-primary uppercase`}>
                Contact Information
              </h2>
              <div className="prose prose-lg max-w-none text-foreground space-y-4">
                <p>
                  If you have any questions about these Terms of Service, please
                  contact us:
                </p>
                <div className="bg-card border border-border rounded-lg p-6 space-y-2">
                  <p>
                    <strong>Email:</strong> support@mentalbank.app
                  </p>
                  <p>
                    <strong>Website:</strong> www.mentalbank.app
                  </p>
                  <p>
                    <strong>Company:</strong>{" "}
                    <a
                      href="https://www.bekurtechnologies.com"
                      target="_blank"
                      rel="noopener noreferrer">
                      Bekur Technologies, LLC.
                    </a>
                  </p>
                </div>
              </div>
            </section>

            {/* Back to Home Button */}
            <div className="pt-8 text-center">
              <Link href="/">
                <Button size="lg" className="px-8">
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </Wrapper>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
