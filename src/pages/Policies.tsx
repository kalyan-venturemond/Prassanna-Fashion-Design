import { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, CreditCard, RefreshCcw, Mail, Phone, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';

const Policies = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#refund') {
      const element = document.getElementById('refund');
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-secondary">
        <div className="container-custom mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="badge-fashion mb-4 inline-block">Legal</span>
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              Privacy & Refund Policies
            </h1>
            <p className="text-muted-foreground text-lg">
              Your trust is important to us. Read our policies to understand how we protect your data and handle refunds.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-8 border-b border-border">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#privacy"
              className="px-6 py-3 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors text-sm font-medium"
            >
              Privacy Policy
            </a>
            <a
              href="#refund"
              className="px-6 py-3 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors text-sm font-medium"
            >
              Refund Policy
            </a>
            <a
              href="#payment"
              className="px-6 py-3 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors text-sm font-medium"
            >
              Payment Security
            </a>
          </div>
        </div>
      </section>

      {/* Privacy Policy */}
      <section id="privacy" className="section-padding">
        <div className="container-custom mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h2 className="font-display text-3xl text-foreground">Privacy Policy</h2>
            </div>

            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-foreground font-medium">
                Last Updated: January 2026
              </p>

              <p>
                At Prassanna Fashion Designs and Institute Pvt. Ltd., we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data.
              </p>

              <h3 className="font-display text-xl text-foreground mt-8 mb-4">Information We Collect</h3>
              <ul className="space-y-2">
                <li><strong>Personal Information:</strong> Name, email address, phone number, and mailing address when you register for courses or events.</li>
                <li><strong>Payment Information:</strong> Credit/debit card details are processed securely through our payment gateway and are not stored on our servers.</li>
                <li><strong>Course Progress:</strong> Information about your enrollment, attendance, and progress in our programs.</li>
                <li><strong>Communication Data:</strong> Records of your communications with us including emails and WhatsApp messages.</li>
              </ul>

              <h3 className="font-display text-xl text-foreground mt-8 mb-4">How We Use Your Information</h3>
              <ul className="space-y-2">
                <li>To process your course registrations and payments</li>
                <li>To send you course materials and updates</li>
                <li>To communicate about upcoming events and workshops</li>
                <li>To improve our services and course content</li>
                <li>To respond to your inquiries and provide customer support</li>
              </ul>

              <h3 className="font-display text-xl text-foreground mt-8 mb-4">Data Protection</h3>
              <p>
                We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. This includes encrypted data transmission, secure servers, and limited access to personal information.
              </p>

              <h3 className="font-display text-xl text-foreground mt-8 mb-4">Your Rights</h3>
              <ul className="space-y-2">
                <li>Access your personal data that we hold</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your data (subject to legal requirements)</li>
                <li>Opt-out of marketing communications</li>
              </ul>

              <h3 className="font-display text-xl text-foreground mt-8 mb-4">Third-Party Services</h3>
              <p>
                We may use third-party services for payment processing, email communications, and analytics. These services have their own privacy policies, and we encourage you to review them.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Refund Policy */}
      <section id="refund" className="section-padding bg-muted">
        <div className="container-custom mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <RefreshCcw className="w-6 h-6 text-primary" />
              </div>
              <h2 className="font-display text-3xl text-foreground">Refund Policy</h2>
            </div>

            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-foreground font-medium">
                We want you to be completely satisfied with your learning experience. Please read our refund policy carefully.
              </p>

              <h3 className="font-display text-xl text-foreground mt-8 mb-4">Course Refund Eligibility</h3>

              <div className="bg-card p-6 rounded-lg border border-border mb-6">
                <h4 className="font-semibold text-foreground mb-3">Full Refund (100%)</h4>
                <ul className="space-y-2">
                  <li>Cancellation request received at least 7 days before course start date</li>
                  <li>Course cancelled by the institute</li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border mb-6">
                <h4 className="font-semibold text-foreground mb-3">Partial Refund (50%)</h4>
                <ul className="space-y-2">
                  <li>Cancellation request received 3-6 days before course start date</li>
                  <li>Withdrawal within first 2 classes (for long-term courses)</li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border mb-6">
                <h4 className="font-semibold text-foreground mb-3">No Refund</h4>
                <ul className="space-y-2">
                  <li>Cancellation request less than 3 days before course start</li>
                  <li>After attending more than 2 classes</li>
                  <li>Webinars and workshops (due to their one-time nature)</li>
                </ul>
              </div>

              <h3 className="font-display text-xl text-foreground mt-8 mb-4">How to Request a Refund</h3>
              <ol className="space-y-2 list-decimal list-inside">
                <li>Send an email to <a href="mailto:refunds@prassannafashion.com" className="text-primary hover:underline">refunds@prassannafashion.com</a></li>
                <li>Include your full name, course name, registration date, and reason for cancellation</li>
                <li>Our team will review your request within 2-3 business days</li>
                <li>Approved refunds will be processed within 7-10 business days</li>
              </ol>

              <h3 className="font-display text-xl text-foreground mt-8 mb-4">Course Transfer Option</h3>
              <p>
                Instead of a refund, you may transfer your enrollment to a future batch of the same course. This option is available up to 24 hours before the course starts and can be used once per enrollment.
              </p>

              <h3 className="font-display text-xl text-foreground mt-8 mb-4">Special Circumstances</h3>
              <p>
                In case of medical emergencies or other extenuating circumstances, please contact us directly. We review such cases individually and may offer exceptions to our standard policy.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Payment Security */}
      <section id="payment" className="section-padding">
        <div className="container-custom mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-primary" />
              </div>
              <h2 className="font-display text-3xl text-foreground">Payment Security</h2>
            </div>

            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>
                Your payment security is our top priority. We use industry-standard security measures to protect your financial information.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-card p-6 rounded-lg border border-border">
                  <h4 className="font-semibold text-foreground mb-2">🔒 SSL Encryption</h4>
                  <p className="text-sm">All transactions are encrypted using 256-bit SSL technology.</p>
                </div>
                <div className="bg-card p-6 rounded-lg border border-border">
                  <h4 className="font-semibold text-foreground mb-2">💳 PCI Compliant</h4>
                  <p className="text-sm">Our payment gateway is PCI DSS Level 1 compliant.</p>
                </div>
                <div className="bg-card p-6 rounded-lg border border-border">
                  <h4 className="font-semibold text-foreground mb-2">🏦 Secure Gateway</h4>
                  <p className="text-sm">We partner with trusted payment processors for secure transactions.</p>
                </div>
                <div className="bg-card p-6 rounded-lg border border-border">
                  <h4 className="font-semibold text-foreground mb-2">📧 Instant Confirmation</h4>
                  <p className="text-sm">Receive immediate email confirmation for all payments.</p>
                </div>
              </div>

              <h3 className="font-display text-xl text-foreground mt-8 mb-4">Accepted Payment Methods</h3>
              <ul className="space-y-2">
                <li>Credit Cards (Visa, MasterCard, American Express)</li>
                <li>Debit Cards</li>
                <li>UPI Payments</li>
                <li>Net Banking</li>
                <li>EMI Options (for select courses)</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-secondary">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="text-center">
            <h3 className="font-display text-2xl text-foreground mb-4">
              Have Questions About Our Policies?
            </h3>
            <p className="text-muted-foreground mb-8">
              We're here to help. Contact us for any clarifications.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:info@prassannafashion.com"
                className="flex items-center gap-2 text-primary hover:text-primary/80"
              >
                <Mail className="w-5 h-5" />
                info@prassannafashion.com
              </a>
              <span className="hidden sm:block text-muted-foreground">|</span>
              <a
                href="tel:+916302458752"
                className="flex items-center gap-2 text-primary hover:text-primary/80"
              >
                <Phone className="w-5 h-5" />
                +91 63024 58752
              </a>
            </div>
            <div className="mt-8">
              <Button variant="outline" asChild>
                <Link to="/">
                  <ArrowLeft className="mr-2 w-4 h-4" />
                  Back to Home
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Policies;
