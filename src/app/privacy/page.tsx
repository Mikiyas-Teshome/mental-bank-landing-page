import MainHeader from "@/components/mainHeader";
import Footer from "@/components/footer";
import Wrapper from "@/components/Wrapper";
import { bebasNeue } from "@/app/fonts";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
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
                  Privacy Policy
                </h1>
                <p className="text-muted text-lg max-w-2xl mx-auto">
                  Your privacy is important to us. This policy explains how we
                  collect, use, and protect your personal information when you
                  use Mental Bank.
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
                  Mental Bank (&quot;we,&quot; &quot;our,&quot; or
                  &quot;us&quot;) is committed to protecting your privacy. This
                  Privacy Policy explains how we collect, use, disclose, and
                  safeguard your information when you use our mobile application
                  and related services.
                </p>
                <p>
                  Please read this Privacy Policy carefully. If you do not agree
                  with the terms of this Privacy Policy, please do not access
                  the application.
                </p>
              </div>
            </section>

            {/* Information We Collect */}
            <section className="space-y-6">
              <h2
                className={`${bebasNeue.className} text-3xl md:text-4xl text-primary uppercase`}>
                Information We Collect
              </h2>
              <div className="prose prose-lg max-w-none text-foreground space-y-4">
                <h3 className="text-xl font-semibold text-primary">
                  Personal Information
                </h3>
                <p>
                  We may collect personal information that you voluntarily
                  provide to us when you:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Create an account</li>
                  <li>Use our journaling and tracking features</li>
                  <li>Contact us for support</li>
                  <li>Participate in surveys or feedback forms</li>
                </ul>
                <p>This information may include:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Name and email address</li>
                  <li>Profile information and preferences</li>
                  <li>Journal entries and personal reflections</li>
                  <li>Goal setting and progress tracking data</li>
                  <li>Device information and usage patterns</li>
                </ul>

                <h3 className="text-xl font-semibold text-primary mt-8">
                  Automatically Collected Information
                </h3>
                <p>
                  We may automatically collect certain information about your
                  device and usage of our Service, including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Device type, operating system, and unique device identifiers
                  </li>
                  <li>IP address and location data (with your permission)</li>
                  <li>App usage statistics and performance data</li>
                  <li>Crash reports and error logs</li>
                  <li>Advertising identifiers (if applicable)</li>
                </ul>
              </div>
            </section>

            {/* How We Use Your Information */}
            <section className="space-y-6">
              <h2
                className={`${bebasNeue.className} text-3xl md:text-4xl text-primary uppercase`}>
                How We Use Your Information
              </h2>
              <div className="prose prose-lg max-w-none text-foreground space-y-4">
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide, operate, and maintain our Service</li>
                  <li>Improve, personalize, and expand our Service</li>
                  <li>Understand and analyze how you use our Service</li>
                  <li>
                    Develop new products, services, features, and functionality
                  </li>
                  <li>Communicate with you for customer service and support</li>
                  <li>
                    Send you updates, marketing communications, and promotional
                    materials
                  </li>
                  <li>Process transactions and send related information</li>
                  <li>Find and prevent fraud and security issues</li>
                </ul>
              </div>
            </section>

            {/* Information Sharing and Disclosure */}
            <section className="space-y-6">
              <h2
                className={`${bebasNeue.className} text-3xl md:text-4xl text-primary uppercase`}>
                Information Sharing and Disclosure
              </h2>
              <div className="prose prose-lg max-w-none text-foreground space-y-4">
                <p>
                  We do not sell, trade, or otherwise transfer your personal
                  information to third parties without your consent, except in
                  the following circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Service Providers:</strong> We may share information
                    with trusted third-party service providers who assist us in
                    operating our Service, conducting our business, or serving
                    our users. These include analytics providers, cloud storage
                    services, and customer support platforms.
                  </li>
                  <li>
                    <strong>Advertising Partners:</strong> We may share
                    anonymized data with advertising partners for targeted
                    advertising purposes, subject to your consent and applicable
                    privacy laws.
                  </li>
                  <li>
                    <strong>Legal Requirements:</strong> We may disclose your
                    information if required to do so by law or in response to
                    valid requests by public authorities.
                  </li>
                  <li>
                    <strong>Business Transfers:</strong> In the event of a
                    merger, acquisition, or sale of assets, your information may
                    be transferred as part of that transaction.
                  </li>
                  <li>
                    <strong>Consent:</strong> We may share your information with
                    your explicit consent for specific purposes.
                  </li>
                </ul>
              </div>
            </section>

            {/* Data Security */}
            <section className="space-y-6">
              <h2
                className={`${bebasNeue.className} text-3xl md:text-4xl text-primary uppercase`}>
                Data Security
              </h2>
              <div className="prose prose-lg max-w-none text-foreground space-y-4">
                <p>
                  We implement appropriate technical and organizational security
                  measures to protect your personal information against
                  unauthorized access, alteration, disclosure, or destruction.
                  These measures include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security assessments and updates</li>
                  <li>Access controls and authentication mechanisms</li>
                  <li>Secure data storage and backup procedures</li>
                  <li>Employee training on data protection practices</li>
                </ul>
                <p>
                  However, no method of transmission over the internet or
                  electronic storage is 100% secure. While we strive to protect
                  your personal information, we cannot guarantee absolute
                  security.
                </p>
              </div>
            </section>

            {/* Data Retention */}
            <section className="space-y-6">
              <h2
                className={`${bebasNeue.className} text-3xl md:text-4xl text-primary uppercase`}>
                Data Retention
              </h2>
              <div className="prose prose-lg max-w-none text-foreground space-y-4">
                <p>
                  We retain your personal information only for as long as
                  necessary to fulfill the purposes outlined in this Privacy
                  Policy, unless a longer retention period is required or
                  permitted by law.
                </p>
                <p>
                  When you delete your account, we will delete or anonymize your
                  personal information, except where we are required to retain
                  it for legal, regulatory, or legitimate business purposes.
                </p>
              </div>
            </section>

            {/* Your Rights and Choices */}
            <section className="space-y-6">
              <h2
                className={`${bebasNeue.className} text-3xl md:text-4xl text-primary uppercase`}>
                Your Rights and Choices
              </h2>
              <div className="prose prose-lg max-w-none text-foreground space-y-4">
                <p>
                  Depending on your location, you may have certain rights
                  regarding your personal information:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Access:</strong> Request access to your personal
                    information
                  </li>
                  <li>
                    <strong>Correction:</strong> Request correction of
                    inaccurate or incomplete information
                  </li>
                  <li>
                    <strong>Deletion:</strong> Request deletion of your personal
                    information
                  </li>
                  <li>
                    <strong>Portability:</strong> Request a copy of your data in
                    a portable format
                  </li>
                  <li>
                    <strong>Restriction:</strong> Request restriction of
                    processing of your information
                  </li>
                  <li>
                    <strong>Objection:</strong> Object to certain types of
                    processing
                  </li>
                </ul>
                <p>
                  To exercise these rights, please contact us using the
                  information provided in the Contact section below.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
                  <h4 className="font-semibold text-blue-800 mb-2">
                    Opt-Out Options
                  </h4>
                  <ul className="list-disc pl-6 space-y-1 text-blue-700">
                    <li>
                      You can opt out of marketing communications by clicking
                      unsubscribe links in emails
                    </li>
                    <li>
                      You can disable location tracking in your device settings
                    </li>
                    <li>
                      You can opt out of personalized advertising through your
                      device settings
                    </li>
                    <li>
                      You can contact us directly to opt out of any data
                      processing
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Children's Privacy */}
            <section className="space-y-6">
              <h2
                className={`${bebasNeue.className} text-3xl md:text-4xl text-primary uppercase`}>
                Children&apos;s Privacy
              </h2>
              <div className="prose prose-lg max-w-none text-foreground space-y-4">
                <p>
                  Our Service is not intended for children under the age of 13.
                  We do not knowingly collect personal information from children
                  under 13. If you are a parent or guardian and believe your
                  child has provided us with personal information, please
                  contact us immediately.
                </p>
                <p>
                  If we discover that we have collected personal information
                  from a child under 13 without parental consent, we will take
                  steps to delete such information from our servers.
                </p>
              </div>
            </section>

            {/* Third-Party Services */}
            <section className="space-y-6">
              <h2
                className={`${bebasNeue.className} text-3xl md:text-4xl text-primary uppercase`}>
                Third-Party Services
              </h2>
              <div className="prose prose-lg max-w-none text-foreground space-y-4">
                <p>
                  Our Service may contain links to third-party websites or
                  services that are not owned or controlled by Mental Bank. We
                  are not responsible for the privacy practices of these
                  third-party services.
                </p>
                <p>
                  We encourage you to review the privacy policies of any
                  third-party services you access through our Service.
                </p>
              </div>
            </section>

            {/* International Data Transfers */}
            <section className="space-y-6">
              <h2
                className={`${bebasNeue.className} text-3xl md:text-4xl text-primary uppercase`}>
                International Data Transfers
              </h2>
              <div className="prose prose-lg max-w-none text-foreground space-y-4">
                <p>
                  Your information may be transferred to and processed in
                  countries other than your own. We ensure that such transfers
                  comply with applicable data protection laws and implement
                  appropriate safeguards to protect your information.
                </p>
              </div>
            </section>

            {/* Changes to This Privacy Policy */}
            <section className="space-y-6">
              <h2
                className={`${bebasNeue.className} text-3xl md:text-4xl text-primary uppercase`}>
                Changes to This Privacy Policy
              </h2>
              <div className="prose prose-lg max-w-none text-foreground space-y-4">
                <p>
                  We may update this Privacy Policy from time to time. We will
                  notify you of any changes by posting the new Privacy Policy on
                  this page and updating the &quot;Last updated&quot; date.
                </p>
                <p>
                  We encourage you to review this Privacy Policy periodically
                  for any changes. Changes to this Privacy Policy are effective
                  when they are posted on this page.
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
                  If you have any questions about this Privacy Policy or our
                  privacy practices, please contact us:
                </p>
                <div className="bg-card border border-border rounded-lg p-6 space-y-2">
                  <p>
                    <strong>Email:</strong> privacy@mentalbank.app
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
