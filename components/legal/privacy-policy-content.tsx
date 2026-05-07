"use client"

import { useTranslation } from "@/lib/i18n"

export function PrivacyPolicyContent() {
  const { t } = useTranslation()

  return (
    <article className="prose prose-lg max-w-none">
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        {t("Privacy Policy")}
      </h1>

      <p className="text-muted-foreground mb-8">
        <strong>{t("Effective")}: </strong>{t("February 2, 2023")}
      </p>

      <p className="mb-6">
        {t("Haven Refugees (\"Haven\", \"we\", \"our\", \"us\") is a not-for-profit corporation registered under the Canada Not-for-profit Corporations Act and headquartered in Toronto, Canada. Haven provides resettlement services in Canada to refugees by connecting them with local supporters who can help.")}
      </p>

      <p className="mb-6">
        {t("When you visit and/or use www.findhaven.org (the \"Website\"), you will share some personal information with us and we will collect personal information about you.")}
      </p>

      <p className="mb-6">
        {t("We want to be transparent about the information we collect, how we use it, whom we share it with, and the controls we give you to your personal information. This Privacy Policy describes the way in which Haven collects, uses, and discloses personal information about you and how you can exercise your privacy rights.")}
      </p>

      <p className="mb-8">
        {t("By continuing to use the Website, you consent to this Privacy Policy. If you do not consent to this Privacy Policy, you may not use this Website.")}
      </p>

      {/* Table of Contents */}
      <div className="bg-muted/50 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-4">{t("Table of Contents")}</h2>
        <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
          <li><a href="#section-1" className="hover:text-primary">{t("What is \"personal information\"?")}</a></li>
          <li>
            <a href="#section-2" className="hover:text-primary">{t("What Personal Information Does Haven Collect?")}</a>
            <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
              <li>{t("2.1 Information We Collect from You Directly")}</li>
              <li>{t("2.2 Information We Collect Automatically From Your Device")}</li>
            </ul>
          </li>
          <li><a href="#section-3" className="hover:text-primary">{t("How Does Haven Use Personal Information?")}</a></li>
          <li><a href="#section-4" className="hover:text-primary">{t("Under What Circumstances May Haven Disclose Personal Information?")}</a></li>
          <li><a href="#section-5" className="hover:text-primary">{t("How Does Haven Secure Personal Information?")}</a></li>
          <li><a href="#section-6" className="hover:text-primary">{t("How Long Does Haven Keep Personal Information?")}</a></li>
          <li><a href="#section-7" className="hover:text-primary">{t("Cross-Border Data Transfer And Data Retention")}</a></li>
          <li><a href="#section-8" className="hover:text-primary">{t("What Are Your Choices?")}</a></li>
          <li><a href="#section-9" className="hover:text-primary">{t("What Are Your Rights?")}</a></li>
          <li><a href="#section-10" className="hover:text-primary">{t("Children's Privacy")}</a></li>
          <li><a href="#section-11" className="hover:text-primary">{t("Changes To This Privacy Policy")}</a></li>
          <li><a href="#section-12" className="hover:text-primary">{t("Contact Us")}</a></li>
        </ol>
      </div>

      {/* Section 1 */}
      <section id="section-1" className="mb-8">
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          {t("1. What is \"personal information\"?")}
        </h2>
        <p className="mb-4">
          {t("In this Privacy Policy, \"personal information\" generally means information about an identifiable individual.")}
        </p>
        <p>
          {t("This may include, for example, your name, phone number, home address, email address birth date or other information about yourself. It may also include other types of more technical information, but only when this information can identify you as an individual. Information that is anonymized so that it irreversibly no longer allows the person to be identified directly or indirectly and cannot be associated with an identifiable individual is not considered to be personal information.")}
        </p>
      </section>

      {/* Section 2 */}
      <section id="section-2" className="mb-8">
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          {t("2. What Personal Information Does Haven Collect?")}
        </h2>

        <h3 className="text-xl font-semibold text-foreground mb-3">
          {t("2.1 Information We Collect from You Directly")}
        </h3>

        <h4 className="text-lg font-medium text-foreground mb-2">{t("When")}</h4>
        <p className="mb-4">{t("We may ask you to provide personal information when:")}</p>
        <ul className="list-disc list-inside mb-6 space-y-2 text-muted-foreground">
          <li>{t("You use the Website to create a user account.")}</li>
          <li>{t("You connect with us directly via telephone or video conferencing platforms.")}</li>
          <li>{t("We grant you a user account with full access to the Website.")}</li>
          <li>{t("You participate in a marketing/sales promotion.")}</li>
          <li>{t("You register or attend a webinar or other event hosted by Haven.")}</li>
          <li>{t("You participate in programs we may offer from time to time.")}</li>
          <li>{t("You participate in conversations with other Haven users through the Website.")}</li>
        </ul>

        <p className="mb-6">
          {t("If you choose to provide us with a third-party's personal information (the person's name, email, and other relevant personal details) when referring users to Haven, you represent that you have the third-party's permission to do so.")}
        </p>

        <h4 className="text-lg font-medium text-foreground mb-2">{t("What")}</h4>
        <p className="mb-6">
          {t("We collect personal information that may include your first and last name, email address, phone number, any images you upload to the Website, current city and country, destination city and country, city and country of birth, language(s) spoken, your stage of resettlement, your family composition and structure, any comments you make on the website, and any other biographical information you may provide (including anything you decide to share with us about your profile, for example, about your living situation or general living circumstances).")}
        </p>

        <h3 className="text-xl font-semibold text-foreground mb-3">
          {t("2.2 Information We Collect Automatically From Your Device")}
        </h3>

        <h4 className="text-lg font-medium text-foreground mb-2">{t("When")}</h4>
        <p className="mb-6">
          {t("Like most online services, we may use cookies and other technologies, such as web beacons, web storage, and unique advertising identifiers, to collect information about your activity, browser, and device when you use the Website. We and our service providers may also automatically collect certain technical information from your computer or mobile device over time and across different websites when you use the Website.")}
        </p>

        <h4 className="text-lg font-medium text-foreground mb-2">{t("What")}</h4>
        <p>
          {t("The information we collect when you access the Website may include your IP address, the type of device you are using, the country you are visiting the Website from, your browser type, your operating system, the pages you view on the Website, the pages you view immediately before and after you access the Website, the search terms you enter on the Website, and the links you click on the Website. This information allows us to recognize you and personalize your experience if you return to the Website, and to improve the Website.")}
        </p>
      </section>

      {/* Section 3 */}
      <section id="section-3" className="mb-8">
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          {t("3. How Does Haven Use Personal Information?")}
        </h2>
        <p className="mb-4">{t("We may use your personal information for a number of purposes, including to:")}</p>
        <ul className="list-disc list-inside mb-6 space-y-2 text-muted-foreground">
          <li>{t("Make your profile available to other users of the Website;")}</li>
          <li>{t("Develop, operate, improve, deliver, maintain, and protect the Website;")}</li>
          <li>{t("Personalize your experience when you use the Website, such as by providing interactive or personalized elements on the Website and providing you with content based on your interests;")}</li>
          <li>{t("Monitor and analyze trends and usage of the Website;")}</li>
          <li>{t("Improve customer service, including to more effectively respond to your requests and support needs;")}</li>
          <li>{t("Protect the security or integrity of the Website, our business or services, including to prevent fraud and other prohibited or illegal activities;")}</li>
          <li>{t("Deliver marketing communications, promotional materials, or advertisements that may be of interest to you, including by email, on the Website or on third-party websites hosting our advertisements. You can always choose not to receive marketing or promotional messages from us by email by clicking on \"unsubscribe\" in any email you receive;")}</li>
          <li>{t("Send you communications, including by email, telephone, SMS messaging, or video conferencing. For example, we may use email to respond to support inquiries or to provide you with information about the Website or required notices;")}</li>
          <li>{t("Enforce, investigate, and report conduct violating our Community Guidelines, User Agreement and other usage policies, respond to requests from law enforcement, and comply with legal requirements; and")}</li>
          <li>{t("As disclosed to you at the point of collection or as required or permitted by law.")}</li>
        </ul>
        <p className="font-medium">
          {t("We do not sell your information to any third party.")}
        </p>
      </section>

      {/* Section 4 */}
      <section id="section-4" className="mb-8">
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          {t("4. Under What Circumstances May Haven Disclose Personal Information?")}
        </h2>
        <p className="mb-4">{t("We may disclose the information we collect from you through the Website as follows:")}</p>
        <ul className="list-disc list-inside mb-6 space-y-2 text-muted-foreground">
          <li>{t("To other organizations and businesses that provide services to us (such as hosting provider, ID verification and background screening providers, and website maintenance providers). We require these service providers to protect personal information with appropriate security safeguards;")}</li>
          <li>{t("As required by law, such as to comply with a subpoena or other legal process, or to comply with government reporting obligations;")}</li>
          <li>{t("When we believe in good faith that disclosure is necessary (a) to protect our rights, the integrity of the Website, or your safety or the safety of others, or (b) to detect, prevent, or respond to fraud, intellectual property infringement, violations of our policies, violations of law, or other misuse of the Website; and")}</li>
          <li>{t("To service providers, advisors, potential transactional partners, or other third parties in connection with the consideration, negotiation, or completion of a corporate transaction in which we are acquired by or merged with another company or we sell, liquidate, or transfer all or a portion of our assets. We will take steps to ensure that your personal information will remain protected in accordance with applicable law.")}</li>
        </ul>
        <p>
          {t("We may also share with third parties that provide us services with information in aggregated, anonymized, or de-identified information to the extent permitted by applicable laws.")}
        </p>
      </section>

      {/* Section 5 */}
      <section id="section-5" className="mb-8">
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          {t("5. How Does Haven Secure Personal Information?")}
        </h2>
        <p>
          {t("We are committed to protecting the security of all of the personal information we collect and use. We use a variety of physical, administrative and technical safeguards designed to help protect it from unauthorized access, use and disclosure.")}
        </p>
      </section>

      {/* Section 6 */}
      <section id="section-6" className="mb-8">
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          {t("6. How Long Does Haven Keep Personal Information?")}
        </h2>
        <p className="mb-4">
          {t("We keep your personal information only as long as it is reasonably necessary or relevant for the identified purposes or as permitted or required by applicable law.")}
        </p>
        <p className="mb-4">
          {t("The information we retain will be handled in accordance with this Privacy Policy.")}
        </p>
        <p>
          {t("Information connected to you that is no longer necessary and relevant to provide our services may be anonymized or aggregated with other non-personal data. This information may provide insights that are valuable to Haven, such as statistics about the use of the Website.")}
        </p>
      </section>

      {/* Section 7 */}
      <section id="section-7" className="mb-8">
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          {t("7. Cross-Border Data Transfer And Data Retention")}
        </h2>
        <p>
          {t("In some cases, personal information that we manage may be transferred, processed and stored outside Canada, including in the United States, and therefore may be available to government authorities under lawful orders and laws applicable in such foreign jurisdictions. We rely on legally-provided mechanisms to lawfully transfer data across borders, such as contracts incorporating data protection and sharing obligations.")}
        </p>
      </section>

      {/* Section 8 */}
      <section id="section-8" className="mb-8">
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          {t("8. What Are Your Choices?")}
        </h2>

        <h3 className="text-xl font-semibold text-foreground mb-3">{t("Cookies")}</h3>
        <p className="mb-4">
          {t("If you do not want the Website to collect information through the use of cookies, you can set your web browser to reject cookies from the Website. Each browser is different, so you should check your browser's \"Help\" menu to learn how to change your cookie preferences. Please note that if you reject or block cookies from the Website, the Website may not function as intended.")}
        </p>
        <p className="mb-6">
          {t("Moreover, Haven uses Google Analytics to obtain information about the activities of its website's visitors, including pages viewed and time spent on its website. This information is not provided to Haven in a format that personally identifies you. If you wish to disable Google Analytics, you may use the Google Opt-Out add-on located at")}{" "}
          <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            https://tools.google.com/dlpage/gaoptout
          </a>.
        </p>

        <h3 className="text-xl font-semibold text-foreground mb-3">{t("Emails")}</h3>
        <p>
          {t("Email communications are aimed at keeping you informed about Haven's news, activities and events, and for other specific purposes that may arise. You can always choose not to receive marketing or promotional messages from us by email by clicking on \"unsubscribe\" in any email you receive. Please note that even if you have indicated your choice not to receive commercial messages from us, we may still communicate with you in connection with our Website, in accordance with applicable law (for example, to send you a customer service message or a service notification). In addition, it may take up to ten (10) business days to register a change of preference across all our records.")}
        </p>
      </section>

      {/* Section 9 */}
      <section id="section-9" className="mb-8">
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          {t("9. What Are Your Rights?")}
        </h2>
        <p className="mb-4">
          {t("Depending on where you reside and the laws applicable to you, you may have certain privacy rights such as the right to access your personal information and request the correction of inaccurate information, subject to limited exceptions set out in applicable laws. To access and correct your personal information, please contact us in writing using the relevant contact information listed in the Contact Us section below.")}
        </p>
        <p>
          {t("Upon reasonable notice and subject to legal or contractual restrictions, you may withdraw your consent to the use and disclosure of your personal information by Haven. For example, you may opt-out from the use of your personal information for advertising purposes. To withdraw your consent, please use the contact information listed in the Contact us section below. Withdrawing your consent may impact the services we are able to provide to you.")}
        </p>
      </section>

      {/* Section 10 */}
      <section id="section-10" className="mb-8">
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          {t("10. Children's Privacy")}
        </h2>
        <p>
          {t("Our Website is not intended for—and we don't direct them to—anyone under 14 and that's why we do not knowingly collect personal information from anyone under 14. If you are under the age of 14, do not use the Website.")}
        </p>
      </section>

      {/* Section 11 */}
      <section id="section-11" className="mb-8">
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          {t("11. Changes To This Privacy Policy")}
        </h2>
        <p className="mb-4">
          {t("We may change this Privacy Policy from time to time. We will notify you if we update this Privacy Policy by posting a new Privacy Policy on this page. If we make any changes that materially modify the ways we process or protect your information, we will provide additional notification of changes or obtain consent when required by law.")}
        </p>
        <p>
          {t("By continuing to interact with us after the modified version of the policy has been posted, you are accepting the changes to the policy, subject to any additional requirements that may apply. The \"Effective Date\" at the top of this policy indicates when it was last updated.")}
        </p>
      </section>

      {/* Section 12 */}
      <section id="section-12" className="mb-8">
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          {t("12. Contact Us")}
        </h2>
        <p>
          {t("You may contact us to exercise any of your rights or ask for more information about your personal information and our privacy practices by contacting our Privacy Officer at")}{" "}
          <a href="mailto:privacy@findhaven.org" className="text-primary hover:underline">
            privacy@findhaven.org
          </a>
        </p>
      </section>
    </article>
  )
}
