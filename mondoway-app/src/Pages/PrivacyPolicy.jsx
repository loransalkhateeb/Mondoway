export default function PrivacyPolicy(){
    return(
        <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100 py-12 px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl border border-red-200/30 overflow-hidden">
                <div className="bg-gradient-to-r from-red-600 to-red-800 text-white p-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        User Terms & Conditions
                    </h1>
                    <p className="text-xl opacity-90">
                        MONDOWAY Digital Platform
                    </p>
                </div>

                <div className="p-8 md:p-12 space-y-10">
                    <section className="border-l-4 border-red-500 pl-6">
                        <h2 className="text-2xl font-bold text-red-800 mb-4 flex items-center">
                            <span className="bg-red-100 text-red-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
                            Introduction
                        </h2>
                        <p className="text-gray-700 leading-relaxed text-lg">
                            Welcome to MONDOWAY, a multifunctional digital platform that enables you to easily and securely buy, sell, and rent products and services. By using this application, you agree to comply with these Terms & Conditions, which govern the legal relationship between you as a user and the application management.
                        </p>
                    </section>

                    <section className="border-l-4 border-red-500 pl-6">
                        <h2 className="text-2xl font-bold text-red-800 mb-4 flex items-center">
                            <span className="bg-red-100 text-red-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
                            Account Creation
                        </h2>
                        <ul className="space-y-3 text-gray-700 text-lg">
                            <li className="flex items-start">
                                <span className="text-red-500 mr-3 mt-2">•</span>
                                Registration is completely free of charge.
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-500 mr-3 mt-2">•</span>
                                Accurate and up-to-date information must be provided when creating an account.
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-500 mr-3 mt-2">•</span>
                                The management reserves the right to suspend or delete any account found to be in violation of these terms.
                            </li>
                        </ul>
                    </section>

                    <section className="border-l-4 border-red-500 pl-6">
                        <h2 className="text-2xl font-bold text-red-800 mb-4 flex items-center">
                            <span className="bg-red-100 text-red-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
                            Use of the "Bazaar" Section
                        </h2>
                        <p className="text-gray-700 leading-relaxed text-lg mb-4">
                            The Bazaar section allows users to post advertisements for selling or renting products and services, including:
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
                                Deleting the entire account easily from within the application without needing to contact management.
                            </li>
                        </ul>
                    </section>

                    <section className="border-l-4 border-red-500 pl-6">
                        <h2 className="text-2xl font-bold text-red-800 mb-4 flex items-center">
                            <span className="bg-red-100 text-red-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">4</span>
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
                                        Real estate, vehicles, electronics, furniture, personal services, and others.
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
                                ⚠️ Any violating content will be removed without prior notice, and accounts may be permanently banned.
                            </p>
                        </div>
                    </section>

                    {/* Section 5 */}
                    <section className="border-l-4 border-red-500 pl-6">
                        <h2 className="text-2xl font-bold text-red-800 mb-4 flex items-center">
                            <span className="bg-red-100 text-red-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">5</span>
                            Payments and Fees
                        </h2>
                        <ul className="space-y-3 text-gray-700 text-lg">
                            <li className="flex items-start">
                                <span className="text-red-500 mr-3 mt-2">•</span>
                                Use of the application and basic services is entirely free.
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-500 mr-3 mt-2">•</span>
                                Optional paid services may be available, such as promoting ads or pinning them to the top.
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-500 mr-3 mt-2">•</span>
                                All payments are exclusively processed via secure and encrypted electronic payment gateways using credit cards.
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-500 mr-3 mt-2">•</span>
                                Users bear full responsibility for the accuracy of payment details.
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-500 mr-3 mt-2">•</span>
                                No refunds will be issued once a service has been successfully executed.
                            </li>
                        </ul>
                    </section>

                    {/* Section 6 */}
                    <section className="border-l-4 border-red-500 pl-6">
                        <h2 className="text-2xl font-bold text-red-800 mb-4 flex items-center">
                            <span className="bg-red-100 text-red-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">6</span>
                            Privacy
                        </h2>
                        <ul className="space-y-3 text-gray-700 text-lg">
                            <li className="flex items-start">
                                <span className="text-red-500 mr-3 mt-2">•</span>
                                The management respects user privacy and does not share data with any external parties without prior consent.
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-500 mr-3 mt-2">•</span>
                                Users can delete their accounts along with all their data and ads permanently through the account settings inside the app.
                            </li>
                        </ul>
                    </section>

                    {/* Section 7 */}
                    <section className="border-l-4 border-red-500 pl-6">
                        <h2 className="text-2xl font-bold text-red-800 mb-4 flex items-center">
                            <span className="bg-red-100 text-red-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">7</span>
                            Intellectual Property Rights
                        </h2>
                        <ul className="space-y-3 text-gray-700 text-lg">
                            <li className="flex items-start">
                                <span className="text-red-500 mr-3 mt-2">•</span>
                                All intellectual property rights related to the application's design, content, and services are reserved by MONDOWAY management.
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-500 mr-3 mt-2">•</span>
                                Users bear full responsibility for the content they post and commit not to infringe upon third-party intellectual property rights or trademarks.
                            </li>
                        </ul>
                    </section>

                    {/* Section 8 */}
                    <section className="border-l-4 border-red-500 pl-6">
                        <h2 className="text-2xl font-bold text-red-800 mb-4 flex items-center">
                            <span className="bg-red-100 text-red-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">8</span>
                            Disclaimer Regarding Products
                        </h2>
                        <ul className="space-y-3 text-gray-700 text-lg">
                            <li className="flex items-start">
                                <span className="text-red-500 mr-3 mt-2">•</span>
                                MONDOWAY assumes no responsibility for the quality, condition, or any defects of the products listed.
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-500 mr-3 mt-2">•</span>
                                Both sellers and buyers are fully responsible for verifying the product condition and the accuracy of specifications before completing any transaction.
                            </li>
                        </ul>
                    </section>

                    {/* Section 9 */}
                    <section className="border-l-4 border-red-500 pl-6">
                        <h2 className="text-2xl font-bold text-red-800 mb-4 flex items-center">
                            <span className="bg-red-100 text-red-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">9</span>
                            Amendments to the Terms
                        </h2>
                        <ul className="space-y-3 text-gray-700 text-lg">
                            <li className="flex items-start">
                                <span className="text-red-500 mr-3 mt-2">•</span>
                                The management reserves the right to modify these Terms and Conditions at any time.
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-500 mr-3 mt-2">•</span>
                                Continued use of the application after any changes constitutes implicit acceptance of the updated terms.
                            </li>
                        </ul>
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
    )
}