import React from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-primary">Privacy Policy</h1>

      <p className="mb-4">
        Your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your personal information when you interact with our website or services.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">1. Information We Collect</h2>
      <p className="mb-4">
        We collect various types of information when you fill out a contact form, browse our website, or communicate with us. This may include:
        <ul className="list-disc ml-6 mt-2">
          <li>Your full name</li>
          <li>Email address and phone number</li>
          <li>Company name (optional)</li>
          <li>Message content and purpose of inquiry</li>
          <li>Browser and usage data for analytics</li>
        </ul>
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">2. How We Use Your Information</h2>
      <p className="mb-4">
        We use the information we collect to:
        <ul className="list-disc ml-6 mt-2">
          <li>Respond to inquiries or support requests</li>
          <li>Provide relevant information about our services</li>
          <li>Improve our website’s functionality and user experience</li>
          <li>Send updates, newsletters, or marketing emails (with your consent)</li>
          <li>Ensure security and compliance with legal obligations</li>
        </ul>
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">3. Legal Basis for Processing</h2>
      <p className="mb-4">
        We process your personal data based on:
        <ul className="list-disc ml-6 mt-2">
          <li>Your consent (e.g., submitting a contact form)</li>
          <li>Contractual obligations (e.g., service delivery)</li>
          <li>Legitimate interest (e.g., marketing or analytics)</li>
        </ul>
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">4. Data Retention</h2>
      <p className="mb-4">
        We retain your information for as long as necessary to fulfill the purposes outlined in this policy, or as required by law. Once data is no longer required, we delete or anonymize it.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">5. Sharing Your Information</h2>
      <p className="mb-4">
        We do not sell your personal information. However, we may share data with:
        <ul className="list-disc ml-6 mt-2">
          <li>Third-party vendors assisting with website and business operations</li>
          <li>Legal authorities when required by law</li>
          <li>Marketing platforms (only with your permission)</li>
        </ul>
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">6. Cookies and Tracking Technologies</h2>
      <p className="mb-4">
        Our website may use cookies and tracking tools (like Google Analytics) to understand user behavior and improve performance. You can control cookie settings through your browser preferences.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">7. Data Security</h2>
      <p className="mb-4">
        We implement strong security measures such as encryption, firewalls, and access controls to protect your personal information. However, no system is 100% secure, and we recommend not sharing sensitive information unless necessary.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">8. Your Rights</h2>
      <p className="mb-4">
        You have the right to:
        <ul className="list-disc ml-6 mt-2">
          <li>Access the data we hold about you</li>
          <li>Request corrections or deletion</li>
          <li>Withdraw your consent at any time</li>
          <li>Opt-out of marketing communications</li>
        </ul>
        To exercise any of these rights, contact us at <button><a href="mailto:info@theclickcatalysts.com" className="text-primary underline">info@theclickcatalysts.com</a></button>.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">9. Third-Party Links</h2>
      <p className="mb-4">
        Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. Please review their policies before submitting personal information.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">10. Changes to This Privacy Policy</h2>
      <p className="mb-4">
        We may update this Privacy Policy periodically. We encourage you to check this page regularly to stay informed about how we are protecting your information.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">11. Contact Information</h2>
      <p className="mb-4">
        If you have any questions or concerns about this Privacy Policy or how your data is handled, please contact us at:
        <br />
        <strong>Email:</strong> <button><a href="mailto:info@theclickcatalysts.com" className="text-primary underline">info@theclickcatalysts.com</a></button>
        <br />
        <strong>Phone:</strong> <button><a href="tel:+919038372666" className="text-primary underline">+91-9038372666</a></button>
      </p>

      <p className="text-sm text-gray-500 mt-6">Last updated: April 8, 2025</p>

      {/* Back to Home Button */}
      <button className="mt-10">
        <Link
          to="/"
          className="inline-block bg-primary text-white px-6 py-2 rounded hover:bg-primary/90 transition duration-200"
        >
          ← Back to Home
        </Link>
      </button>
    </div>
  );
};

export default PrivacyPolicy;
