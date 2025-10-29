export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl border border-red-200/30 overflow-hidden">
        <div className="bg-gradient-to-r from-red-600 to-red-800 text-white p-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            User Terms & Conditions
          </h1>
          <p className="text-xl opacity-90">MONDOWAY Digital Platform</p>
        </div>

        <div className="p-8 md:p-12 space-y-10">
          {/* Section 1 */}
          <section className="border-l-4 border-red-500 pl-6">
            <h2 className="text-2xl font-bold text-red-800 mb-4 flex items-center">
              <span className="bg-red-100 text-red-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                1
              </span>
              Introduction
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Welcome to MONDOWAY, a multifunctional digital platform that
              enables you to easily and securely buy, sell, and rent products
              and services. By using this application, you agree to comply with
              these Terms & Conditions, which govern the legal relationship
              between you as a user and the application management.
            </p>
          </section>

          {/* Section 2 */}
          <section className="border-l-4 border-red-500 pl-6">
            <h2 className="text-2xl font-bold text-red-800 mb-4 flex items-center">
              <span className="bg-red-100 text-red-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                2
              </span>
              Account Creation
            </h2>
            <ul className="space-y-3 text-gray-700 text-lg">
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-2">•</span>
                Registration is completely free of charge.
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-2">•</span>
                Accurate and up-to-date information must be provided when
                creating an account.
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-2">•</span>
                The management reserves the right to suspend or delete any
                account found to be in violation of these terms.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="border-l-4 border-red-500 pl-6">
            <h2 className="text-2xl font-bold text-red-800 mb-4 flex items-center">
              <span className="bg-red-100 text-red-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                3
              </span>
              Use of the "Bazaar" Section
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-4">
              The Bazaar section allows users to post advertisements for selling
              or renting products and services, including:
            </p>
            <ul className="space-y-3 text-gray-700 text-lg">
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-2">•</span>
                The ability to post free ads.
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-2">•</span>
                Editing ads at any time.
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-2">•</span>
                Deleting ads at any time.
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-2">•</span>
                Deleting the entire account easily from within the application
                without needing to contact management.
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="border-l-4 border-red-500 pl-6">
            <h2 className="text-2xl font-bold text-red-800 mb-4 flex items-center">
              <span className="bg-red-100 text-red-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                4
              </span>
              Permitted and Prohibited Content
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Permitted */}
              <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center">
                  <span className="text-2xl mr-2">✅</span>
                  Permitted to post:
                </h3>
                <ul className="space-y-2 text-green-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    Used personal items.
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    Real estate, vehicles, electronics, furniture, personal
                    services, and others.
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    Legal offers that do not violate laws or social norms.
                  </li>
                </ul>
              </div>

              {/* Prohibited */}
              <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center">
                  <span className="text-2xl mr-2">❌</span>
                  Prohibited to post:
                </h3>
                <ul className="space-y-2 text-red-700">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">•</span>
                    Weapons and ammunition of all kinds.
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">•</span>
                    Narcotics or any substances prohibited by law.
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">•</span>
                    Political, sectarian, or racist content.
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">•</span>
                    Immoral or pornographic images and videos.
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">•</span>
                    Counterfeit or unlicensed goods.
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">•</span>
                    Fraudulent or misleading offers.
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
              <p className="text-yellow-800 font-medium">
                ⚠️ Any violating content will be removed without prior notice,
                and accounts may be permanently banned.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section className="border-l-4 border-red-500 pl-6">
            <h2 className="text-2xl font-bold text-red-800 mb-4 flex items-center">
              <span className="bg-red-100 text-red-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                5
              </span>
              Payments and Fees
            </h2>
            <ul className="space-y-3 text-gray-700 text-lg">
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-2">•</span>
                Use of the application and basic services is entirely free.
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-2">•</span>
                Optional paid services may be available, such as promoting ads
                or pinning them to the top.
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-2">•</span>
                All payments are exclusively processed via secure and encrypted
                electronic payment gateways using credit cards.
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-2">•</span>
                Users bear full responsibility for the accuracy of payment
                details.
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-2">•</span>
                No refunds will be issued once a service has been successfully
                executed.
              </li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="border-l-4 border-red-500 pl-6">
            <h2 className="text-2xl font-bold text-red-800 mb-4 flex items-center">
              <span className="bg-red-100 text-red-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                6
              </span>
              Privacy
            </h2>
            <ul className="space-y-3 text-gray-700 text-lg">
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-2">•</span>
                The management respects user privacy and does not share data
                with any external parties without prior consent.
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-2">•</span>
                Users can delete their accounts along with all their data and
                ads permanently through the account settings inside the app.
              </li>
            </ul>
          </section>

          {/* Section 7 */}
          <section className="border-l-4 border-red-500 pl-6">
            <h2 className="text-2xl font-bold text-red-800 mb-4 flex items-center">
              <span className="bg-red-100 text-red-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                7
              </span>
              Intellectual Property Rights
            </h2>
            <ul className="space-y-3 text-gray-700 text-lg">
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-2">•</span>
                All intellectual property rights related to the application's
                design, content, and services are reserved by MONDOWAY
                management.
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-2">•</span>
                Users bear full responsibility for the content they post and
                commit not to infringe upon third-party intellectual property
                rights or trademarks.
              </li>
            </ul>
          </section>

          {/* Section 8 */}
          <section className="border-l-4 border-red-500 pl-6">
            <h2 className="text-2xl font-bold text-red-800 mb-4 flex items-center">
              <span className="bg-red-100 text-red-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                8
              </span>
              Disclaimer Regarding Products
            </h2>
            <ul className="space-y-3 text-gray-700 text-lg">
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-2">•</span>
                MONDOWAY assumes no responsibility for the quality, condition,
                or any defects of the products listed.
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-2">•</span>
                Both sellers and buyers are fully responsible for verifying the
                product condition and the accuracy of specifications before
                completing any transaction.
              </li>
            </ul>
          </section>

          {/* Section 9 */}
          <section className="border-l-4 border-red-500 pl-6">
            <h2 className="text-2xl font-bold text-red-800 mb-4 flex items-center">
              <span className="bg-red-100 text-red-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                9
              </span>
              Amendments to the Terms
            </h2>
            <ul className="space-y-3 text-gray-700 text-lg">
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-2">•</span>
                The management reserves the right to modify these Terms and
                Conditions at any time.
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-2">•</span>
                Continued use of the application after any changes constitutes
                implicit acceptance of the updated terms.
              </li>
            </ul>
          </section>

          {/* === FULL BUSINESS USERS SECTION === */}
          <section className="border-l-4 border-red-500 pl-6">
            <h2 className="text-2xl font-bold text-red-800 mb-4 flex items-center">
              <span className="bg-red-100 text-red-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                10
              </span>
              Terms and Conditions for Business Users (Merchants)
            </h2>

            <div className="space-y-6 text-gray-700 text-lg">
              <div>
                <h3 className="font-bold text-red-700 mb-2">1. Introduction</h3>
                <p>
                  These Terms and Conditions govern the use of MONDOWAY’s
                  Business Account services (“the Platform”) by registered
                  merchants and business users. By creating or using a Business
                  Account, you agree to be bound by these Terms and Conditions,
                  as well as MONDOWAY’s general policies, privacy policy, and
                  applicable laws.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-red-700 mb-2">
                  2. Business Account Registration
                </h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    The merchant must provide complete and accurate information
                    when registering a Business Account, including: Company name
                    and contact details, valid commercial registration
                    certificate, tax number (if applicable), and any additional
                    licenses required by law.
                  </li>
                  <li>
                    The merchant must upload a valid commercial registration
                    document to verify business identity and compliance with
                    legal requirements.
                  </li>
                  <li>
                    MONDOWAY reserves the right to verify the authenticity of
                    any provided information or documents and to suspend or
                    terminate any account providing false or misleading
                    information.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-red-700 mb-2">
                  3. Profile Management
                </h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    The merchant has full control over their Business Profile,
                    including the ability to create, edit, and update profile
                    information; upload business logos, descriptions, and
                    promotional materials; and delete the entire profile at any
                    time via account settings.
                  </li>
                  <li>
                    MONDOWAY may retain certain transactional data for legal or
                    auditing purposes even after account deletion, in accordance
                    with applicable laws.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-red-700 mb-2">
                  4. Product and Advertisement Posting
                </h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    Merchants may freely upload, edit, or remove their products
                    or advertisements on the platform’s Home Page, Showroom, or
                    any other marketplace section.
                  </li>
                  <li>
                    Each merchant is responsible for setting their own prices,
                    offers, and product availability.
                  </li>
                  <li>
                    All published advertisements must comply with MONDOWAY’s
                    content standards and applicable legal requirements.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-red-700 mb-2">
                  5. Content and Legal Compliance
                </h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    It is strictly prohibited to post: immoral or inappropriate
                    images; weapons or ammunition; illegal substances;
                    counterfeit goods; or political/religiously offensive
                    content.
                  </li>
                  <li>
                    Any food, supplement, or drug-related product must have
                    proper licensing from the Jordan Food and Drug
                    Administration (JFDA) or equivalent.
                  </li>
                  <li>
                    Real estate or accommodation ads must comply with relevant
                    advertising laws.
                  </li>
                  <li>
                    MONDOWAY reserves the right to remove any violating
                    advertisement without prior notice.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-red-700 mb-2">
                  6. Merchant Responsibilities
                </h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    The merchant shall ensure all content is lawful, accurate,
                    and compliant with intellectual property and consumer
                    protection laws.
                  </li>
                  <li>
                    The merchant bears full legal responsibility for all
                    content, products, and transactions.
                  </li>
                  <li>
                    The merchant must respond promptly to customer inquiries and
                    complaints per MONDOWAY’s dispute policy.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-red-700 mb-2">
                  7. Platform Rights and Limitations
                </h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    MONDOWAY may monitor, review, or remove any content at its
                    sole discretion.
                  </li>
                  <li>
                    MONDOWAY is not responsible for the accuracy or legality of
                    merchant-posted content.
                  </li>
                  <li>
                    Repeated violations may result in account suspension or
                    permanent deletion without compensation.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-red-700 mb-2">
                  8. Payment, Fees, and Commissions
                </h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    Merchants agree to pay applicable fees or commissions as per
                    MONDOWAY’s pricing policy.
                  </li>
                  <li>
                    Commissions may be automatically deducted from transactions.
                  </li>
                  <li>
                    Failure to maintain sufficient balance in the linked wallet
                    (e.g., Zain Cash) may suspend new orders or ads.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-red-700 mb-2">
                  9. Intellectual Property
                </h3>
                <p>
                  All trademarks, logos, software, and design elements of
                  MONDOWAY are the property of MONDOWAY and may not be copied,
                  modified, or reused without prior written approval.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-red-700 mb-2">10. Termination</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    The merchant may terminate their account at any time via
                    settings.
                  </li>
                  <li>
                    MONDOWAY may suspend or terminate any violating Business
                    Account.
                  </li>
                  <li>
                    Upon termination, all active listings will be removed from
                    the platform.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-red-700 mb-2">
                  11. Liability Disclaimer
                </h3>
                <p>
                  MONDOWAY is a digital intermediary platform and shall not be
                  held liable for: misrepresentation by merchants, losses from
                  third-party transactions, or violations committed by the
                  merchant.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-red-700 mb-2">12. Amendments</h3>
                <p>
                  MONDOWAY reserves the right to modify these Terms at any time.
                  Continued use constitutes acceptance of revised terms.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-red-700 mb-2">
                  13. Governing Law and Jurisdiction
                </h3>
                <p>
                  These Terms are governed by the laws of the Hashemite Kingdom
                  of Jordan. Any disputes shall be settled by the competent
                  courts in Amman.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-red-700 mb-2">
                  14. Acknowledgment
                </h3>
                <p>
                  By registering as a Business User on MONDOWAY, you acknowledge
                  that you have read, understood, and agreed to all the above
                  terms, and you commit to complying with all legal and ethical
                  standards when using the platform.
                </p>
              </div>
            </div>
          </section>

          {/* === FULL DRIVERS SECTION === */}
          <section className="border-l-4 border-red-500 pl-6">
            <h2 className="text-2xl font-bold text-red-800 mb-4 flex items-center">
              <span className="bg-red-100 text-red-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                11
              </span>
              MONDOWAY Driver Terms and Conditions
            </h2>

            <div className="space-y-6 text-gray-700 text-lg">
              <div>
                <h3 className="font-bold text-red-700 mb-2">1. Introduction</h3>
                <p>
                  These Terms and Conditions govern the relationship between
                  MONDOWAY (hereinafter referred to as “the Company”) and
                  drivers registered on the MONDOWAY application (hereinafter
                  referred to as “the Driver”). By registering, activating, or
                  using the MONDOWAY Driver App, the Driver acknowledges full
                  acceptance of these Terms and agrees to comply with all
                  policies, procedures, and operational standards set forth by
                  the Company.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-red-700 mb-2">
                  2. Driver Eligibility
                </h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    The Driver must be at least 18 years old and possess a valid
                    driver’s license recognized in the operating jurisdiction.
                  </li>
                  <li>
                    The Driver must own or legally operate a vehicle that meets
                    MONDOWAY’s technical and safety requirements.
                  </li>
                  <li>
                    The Driver must maintain a clean criminal record and provide
                    ID, vehicle registration, and insurance as requested.
                  </li>
                  <li>
                    The Company reserves the right to reject or suspend any
                    non-compliant Driver.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-red-700 mb-2">
                  3. Use of the Application
                </h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    The Driver is responsible for login credential
                    confidentiality and liable for all account activity.
                  </li>
                  <li>
                    The app shall only be used for legitimate
                    delivery/transportation services.
                  </li>
                  <li>
                    Unauthorized use (e.g., account transfer, third-party
                    software, request manipulation) is prohibited.
                  </li>
                  <li>Violation may result in suspension or termination.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-red-700 mb-2">
                  4. Service Standards
                </h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    Services must be professional, courteous, timely, and safe.
                  </li>
                  <li>
                    Deliveries must follow MONDOWAY’s procedures and customer
                    instructions.
                  </li>
                  <li>
                    Drivers must represent MONDOWAY positively and avoid
                    reputation-harming behavior.
                  </li>
                  <li>
                    Repeated complaints, late deliveries, or misconduct may lead
                    to account suspension.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-red-700 mb-2">
                  5. Financial Policy (Zain Cash Wallet)
                </h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    Drivers must maintain a positive Zain Cash Wallet balance to
                    cover commissions.
                  </li>
                  <li>Commissions are auto-deducted after each order.</li>
                  <li>
                    If the balance is zero or negative, new delivery requests
                    stop until recharged.
                  </li>
                  <li>
                    A minimum balance may be required to keep the account
                    active.
                  </li>
                  <li>
                    Earnings are transferred daily at midnight after deductions.
                  </li>
                  <li>
                    Financial claims are cleared after daily transfer; system
                    reports are final.
                  </li>
                  <li>Repeated failure to recharge may cause suspension.</li>
                  <li>The wallet is operational only—not a savings account.</li>
                  <li>
                    Upon termination, a final settlement may be requested after
                    deductions.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-red-700 mb-2">
                  6. Earnings and Payouts
                </h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    All customer payments are processed via MONDOWAY’s system
                    and paid per schedule.
                  </li>
                  <li>Payment disputes must be reported within 48 hours.</li>
                  <li>
                    MONDOWAY may withhold payments in cases of fraud, misuse, or
                    unresolved complaints.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-red-700 mb-2">
                  7. Suspension and Termination
                </h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    The Company may suspend or terminate accounts for violations
                    or misconduct.
                  </li>
                  <li>
                    Upon termination, pending payments are settled after
                    deductions.
                  </li>
                  <li>
                    Drivers may request voluntary termination via support.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-red-700 mb-2">8. Data Privacy</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Driver data is processed per data protection laws.</li>
                  <li>
                    Data is used for operational/verification purposes and not
                    shared without consent, except as required by law.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-red-700 mb-2">
                  9. Liability and Insurance
                </h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    The Driver is fully responsible for damages or incidents
                    during service.
                  </li>
                  <li>
                    The Company is not liable for accidents, traffic violations,
                    or personal damages.
                  </li>
                  <li>
                    Drivers must maintain valid vehicle insurance and comply
                    with commercial operation laws.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-red-700 mb-2">
                  10. Modifications
                </h3>
                <p>
                  MONDOWAY reserves the right to modify these Terms at any time.
                  Changes will be communicated via app or email. Continued use
                  constitutes acceptance.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-red-700 mb-2">
                  11. Governing Law and Jurisdiction
                </h3>
                <p>
                  These Terms are governed by the laws of the Hashemite Kingdom
                  of Jordan. Any disputes shall be subject to the exclusive
                  jurisdiction of the competent courts in Amman, Jordan.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="bg-gradient-to-r from-red-600 to-red-800 text-white p-6 text-center">
          <p className="text-lg font-medium">
            © 2025 MONDOWAY. All rights reserved.
          </p>
          <p className="text-sm opacity-80 mt-2">
            By using our application, you agree to these terms and conditions.
          </p>
        </div>
      </div>
    </div>
  );
}
