"use client"

import { Fragment } from "react"

import { useTranslation } from "@/lib/i18n"

const sections = [
  {
    title: '1. What is "personal information"?',
    content: [
      'In this Privacy Policy, "personal information" generally means information about an identifiable individual.',
      'This may include, for example, your name, phone number, home address, email address, birth date or other information about yourself. It may also include other types of more technical information, but only when this information can identify you as an individual. Information that is anonymized so that it irreversibly no longer allows the person to be identified directly or indirectly and cannot be associated with an identifiable individual is not considered to be personal information.',
    ],
  },
]

const retentionRows: [string, string][] = [
  [
    'Material used to make a decision about a person (for example, in a safety review)',
    'Up to 24 months from the decision, then deleted (the law requires at least 12 months)',
  ],
  [
    'Messages sent on Haven',
    'Kept as your conversation history while your account exists, so you and the person you are talking with can refer back to what you discussed',
  ],
  [
    'Safety screening and review records (date, outcome, reviewer where applicable — no conversation content)',
    'Up to 24 months from the decision',
  ],
  ['Eligibility documents', 'Deleted when a staff member confirms validity'],
  [
    'Your record of accepting our terms and notices (the exact text shown, date, version, language)',
    'Life of your account plus 24 months',
  ],
  ['Account and profile information', 'Life of your account, then deleted or de-identified'],
  [
    'Marketing consent and opt-out records (what you agreed to or opted out of, and when)',
    'Kept as long as necessary to demonstrate consent and to honour your opt-out requests',
  ],
]

const urlPattern = /(https?:\/\/[^\s]+)/g

function renderWithLinks(text: string) {
  return text.split(urlPattern).map((part, index) => {
    if (!part.match(/^https?:\/\//)) return <Fragment key={index}>{part}</Fragment>

    const trailing = part.match(/[.,;:)]+$/)?.[0] ?? ""
    const url = trailing ? part.slice(0, part.length - trailing.length) : part

    return (
      <Fragment key={index}>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline underline-offset-2 break-words hover:no-underline"
        >
          {url.replace(/^https?:\/\//, "")}
        </a>
        {trailing}
      </Fragment>
    )
  })
}

export function PrivacyPolicyContent() {
  const { t } = useTranslation()

  return (
    <article className="prose prose-lg max-w-none [&>section]:scroll-mt-28">
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t("Privacy Policy")}</h1>
      <p className="text-muted-foreground mb-8">
        <strong>{t("Effective")}: </strong>{t("September 4, 2026 (replaces the version effective August 24, 2026)")}
      </p>

      <p className="mb-6">{t('Haven Refugees ("Haven", "we", "our", "us") is a registered Canadian charity and a not-for-profit corporation registered under the Canada Not-for-profit Corporations Act, and headquartered in Toronto, Canada. Haven provides resettlement services to refugees by connecting them with supporters who can help.')}</p>
      <p className="mb-6">{t('When you visit and/or use www.findhaven.org or Haven\'s mobile application (together, the "Website"), you will share some personal information with us and we will collect personal information about you. Haven\'s services are intended for adults aged 18 and over.')}</p>
      <p className="mb-6">{t('We want to be transparent about the information we collect, how we use it, whom we share it with, and the controls we give you over your personal information. This Privacy Policy describes the way in which Haven collects, uses, and discloses personal information about you and how you can exercise your privacy rights.')}</p>
      <p className="mb-6">{t('Where the law requires your consent to a collection, use or disclosure of your personal information, Haven asks for that consent separately, at or before the time of collection. We do not treat your continued use of the Website as consent.')}</p>
      <p className="mb-8">
        {t("This Privacy Policy is available in French and English.")}{" "}
        {"Cette politique est offerte en français et en anglais. "}
        <a href="/fr/privacy-policy" className="text-primary hover:underline">{"Voir la version française"}</a>
      </p>
      <div className="bg-muted/50 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-4">{t("Table of Contents")}</h2>
        <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
          {['What is "personal information"?', 'What Personal Information Does Haven Collect?', 'How Does Haven Use Personal Information?', 'Message Safety Screening', 'Under What Circumstances May Haven Disclose Personal Information?', 'How Does Haven Secure Personal Information?', 'How Long Does Haven Keep Personal Information?', 'Cross-Border Data Transfer And Data Retention', 'What Are Your Choices?', 'What Are Your Rights?', "Children's Privacy", 'Changes To This Privacy Policy', 'Contact Us'].map((title, index) => (
            <li key={title}><a href={`#section-${index + 1}`} className="hover:text-primary">{t(title)}</a></li>
          ))}
        </ol>
      </div>

      {sections.map((section) => (
        <section key={section.title} id="section-1" className="scroll-mt-28 mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4">{t(section.title)}</h2>
          {section.content.map((paragraph) => <p key={paragraph} className="mb-4">{t(paragraph)}</p>)}
        </section>
      ))}

      <section id="section-2" className="scroll-mt-28 mb-8">
        <h2 className="text-2xl font-semibold text-foreground mb-4">{t('2. What Personal Information Does Haven Collect?')}</h2>
        <h3 className="text-xl font-semibold text-foreground mb-3">{t('2.1 Information We Collect from You Directly')}</h3>
        <h4 className="text-lg font-medium text-foreground mb-2">{t('When')}</h4>
        <p className="mb-4">{t('We may ask you to provide personal information when:')}</p>
        <ul className="list-disc list-inside mb-6 space-y-2 text-muted-foreground">{['You use the Website to create a user account.', 'You connect with us directly via telephone or video conferencing platforms.', 'We grant you a user account with full access to the Website.', 'You participate in a marketing/sales promotion.', 'You register or attend a webinar or other event hosted by Haven.', 'You participate in programs we may offer from time to time.', 'You participate in conversations with other Haven users through the Website.'].map((item) => <li key={item}>{t(item)}</li>)}</ul>
        <p className="mb-6">{t("If you choose to provide us with a third-party's personal information (the person's name, email, and other relevant personal details) when referring users to Haven, you represent that you have the third-party's permission to do so.")}</p>
        <h4 className="text-lg font-medium text-foreground mb-2">{t('What')}</h4>
        <p className="mb-6">{t('We collect personal information that may include your first and last name, email address, phone number, date of birth, any images you upload to the Website, current city and country, destination city and country, city and country of birth, language(s) spoken, your stage of resettlement, your family composition and structure, any comments you make on the website, and any other biographical information you may provide (including anything you decide to share with us about your profile, for example, about your living situation or general living circumstances).')}</p>
        <p className="mb-6"><strong>{t('Messages.')}</strong> {t("When you send messages through Haven's messaging, those messages are processed by our safety systems. Section 4 explains why, who can see them, and the strict limits that apply.")}</p>
        <p className="mb-6"><strong>{t('Eligibility documents.')}</strong> {t('For some programs, we ask a subset of applicants for documents confirming identity, immigration or refugee status, or program eligibility. A trained staff member reviews the document and records the outcome, and the document is then deleted. We do not keep copies of eligibility documents after review, and we never use them, or the information in them, for advertising, marketing or any purpose other than confirming eligibility.')}</p>
        <h3 className="text-xl font-semibold text-foreground mb-3">{t('2.2 Information We Collect Automatically From Your Device')}</h3>
        <h4 className="text-lg font-medium text-foreground mb-2">{t('When')}</h4>
        <p className="mb-6">{t('Like most online services, we may use cookies and other technologies, such as web beacons, web storage, and unique advertising identifiers, to collect information about your activity, browser, and device when you use the Website. We and our service providers may also automatically collect certain technical information from your computer or mobile device over time and across different websites when you use the Website.')}</p>
        <h4 className="text-lg font-medium text-foreground mb-2">{t('What')}</h4>
        <p>{t('The information we collect when you access the Website may include your IP address, the type of device you are using, the country you are visiting the Website from, your browser type, your operating system, the pages you view on the Website, the pages you view immediately before and after you access the Website, the search terms you enter on the Website, and the links you click on the Website. This information allows us to recognize you and personalize your experience if you return to the Website, and to improve the Website.')}</p>
      </section>

      <section id="section-3" className="scroll-mt-28 mb-8"><h2 className="text-2xl font-semibold text-foreground mb-4">{t('3. How Does Haven Use Personal Information?')}</h2><p className="mb-4">{t('We may use your personal information for a number of purposes, including to:')}</p><ul className="list-disc list-inside mb-6 space-y-2 text-muted-foreground">{['Make your profile available to other users of the Website;', 'Develop, operate, improve, deliver, maintain, and protect the Website;', 'Protect the safety of participants in Haven\'s programs, including by screening messages sent on Haven for signs of harm, as described in Section 4;', 'Personalize your experience when you use the Website, such as by providing interactive or personalized elements on the Website and providing you with content based on your interests;', 'Monitor and analyze trends and usage of the Website;', 'Improve customer service, including to more effectively respond to your requests and support needs;', 'Protect the security or integrity of the Website, our business or services, including to prevent fraud and other prohibited or illegal activities;', 'Deliver marketing communications, promotional materials, or advertisements that may be of interest to you, where you have opted in, including by email or SMS. You can always choose to stop receiving marketing messages by clicking "unsubscribe" in any email or replying STOP to any text message;', 'Send you communications, including by email, telephone, SMS messaging, or video conferencing. For example, we may use email to respond to support inquiries or to provide you with information about the Website or required notices;', 'Enforce, investigate, and report conduct violating our Community Guidelines, User Agreement and other usage policies, respond to requests from law enforcement, and comply with legal requirements; and', 'As disclosed to you at the point of collection or as required or permitted by law.'].map((item) => <li key={item}>{t(item)}</li>)}</ul><p>{t('We do not sell your information to any third party. We do not use your personal information for any purpose not described in this Privacy Policy; if we ever propose a new purpose, we will tell you and, where the law requires it, ask for your consent.')}</p></section>

      {[['4. Message Safety Screening', 'In short: a computer system checks messages sent on Haven for signs of harm. No one at Haven reads your messages unless the system flags a possible problem. A person, never the computer alone, decides what happens.\n\nWhat happens. Software screens messages sent through Haven\'s messaging for signs of harm to participants: requests for money or financial information; sexual messages or solicitation; threats, intimidation or harassment; and pressure to move the conversation outside Haven. The software assesses the content and conduct of the conversation for these signs.\n\nWhy. Haven pairs people who may have been through very difficult circumstances with volunteers drawn from the public. Screening exists for one purpose: participant safety.\n\nWho sees what. No one at Haven reads your messages unless the software flags a possible problem. If it does, trained Haven staff whose duties require it review the flagged material; access is limited to those staff and every access is recorded. Message content is never used by other Haven systems, including analytics or advertising, and is never shared with advertising providers.\n\nHow the technology works. The screening software analyses the content and conduct of conversations to assess behaviour for the signs listed above. This is a required part of using Haven\'s messaging — it cannot be turned off, and it applies to all messages sent on the Platform. It is used only to detect the harms described in this section.\n\nA person always decides. No decision that affects you — a warning, a restriction, a suspension, a removal — is ever made by software alone. In every case, a Haven staff member reviews the material and makes the decision.'], ['5. Under What Circumstances May Haven Disclose Personal Information?', 'We may disclose the information we collect from you through the Website as follows:\n\nTo other organizations and businesses that provide services to us (such as hosting providers, safety analysis providers, ID verification and background screening providers, and website maintenance providers). We require these service providers, under written agreements, to protect personal information with appropriate security safeguards, to use it only to provide services to us, and to return or delete it when their work for us ends;\n\nAs required by law, such as to comply with a subpoena or other legal process, or to comply with government reporting obligations — including any duty to report harm or risk of harm to a child to child-protection authorities;\n\nWhen we believe in good faith that disclosure is necessary (a) to protect our rights, the integrity of the Website, or your safety or the safety of others, or (b) to detect, prevent, or respond to fraud, intellectual property infringement, violations of our policies, violations of law, or other misuse of the Website. Where the law permits disclosure to protect a person from a serious and urgent risk, we disclose only what is necessary and keep a record of the disclosure; and\n\nTo service providers, advisors, potential transactional partners, or other third parties in connection with the consideration, negotiation, or completion of a corporate transaction in which we are acquired by or merged with another company or we sell, liquidate, or transfer all or a portion of our assets. We will take steps to ensure that your personal information will remain protected in accordance with applicable law.\n\nWe may also share with third parties that provide us services with information in aggregated, anonymized, or de-identified information to the extent permitted by applicable laws.\n\nWe will tell you if we have disclosed your personal information under this section, unless the law prevents us or telling you would put someone at risk.'], ['6. How Does Haven Secure Personal Information?', 'We are committed to protecting the security of all of the personal information we collect and use. We use a variety of physical, administrative and technical safeguards designed to help protect it from unauthorized access, use and disclosure.'], ['7. How Long Does Haven Keep Personal Information?', 'We keep your personal information only as long as it is reasonably necessary or relevant for the identified purposes or as permitted or required by applicable law. For the categories below, that means:\n\nInformation connected to you that is no longer necessary and relevant to provide our services may be anonymized or aggregated with other non-personal data. This information may provide insights that are valuable to Haven, such as statistics about the use of the Website.'], ['8. Cross-Border Data Transfer And Data Retention', 'In some cases, personal information that we manage may be transferred, processed and stored outside Canada, including in the United States, and therefore may be available to government authorities under lawful orders and laws applicable in such foreign jurisdictions. We rely on legally-provided mechanisms to lawfully transfer data across borders, such as contracts incorporating data protection and sharing obligations, and we assess the protection of personal information before entrusting it to a service provider outside the province or country, as applicable law requires.\n\nYou may request written information about our policies and practices regarding service providers outside Canada, or ask questions about how they collect, use, disclose or store personal information, by contacting our Privacy Officer at privacy@findhaven.org.'], ['9. What Are Your Choices?', 'Cookies. Cookies necessary for the Website to work are always on. Non-essential cookies and similar technologies — including analytics and outreach measurement — are off until you allow them, and you can change your choices at any time in our privacy settings. Where these technologies can be used to identify, locate or profile you, they are deactivated by default and activated only if you choose to allow them. You can also set your browser to reject cookies, though the Website may not function as intended.\n\nAnalytics and advertising tools. Haven uses Google Analytics, Google Tag Manager, the Meta pixel and PostHog to obtain information about the activities of the Website\'s visitors, including pages viewed and time spent on the Website, and to measure our outreach. If you wish to disable Google Analytics, you may use the Google Opt-Out add-on located at https://tools.google.com/dlpage/gaoptout. We never send these providers your messages, eligibility documents, refugee or immigration information, or safety information, and we do not provide your contact information to advertising platforms to build advertising audiences.\n\nEmails. Email communications are aimed at keeping you informed about Haven\'s news, activities and events, and for other specific purposes that may arise. You can always choose not to receive marketing or promotional messages from us by email by clicking on "unsubscribe" in any email you receive. Please note that even if you have indicated your choice not to receive commercial messages from us, we may still communicate with you in connection with our Website, in accordance with applicable law (for example, to send you a customer service message or a service notification). In addition, it may take up to ten (10) business days to register a change of preference across all our records.\n\nText messages. Marketing text messages are sent only if you opted in, and opting in is never a condition of using Haven\'s services. Reply STOP to any text message to stop receiving texts, or HELP for help; opt-outs are processed within ten (10) business days. Opting out of marketing texts does not stop service messages about your account. The User Agreement describes our SMS program in full.'], ['10. What Are Your Rights?', 'Depending on where you reside and the laws applicable to you, you may have certain privacy rights such as the right to access your personal information and request the correction of inaccurate information, subject to limited exceptions set out in applicable laws, and the right to receive computerized personal information you provided to us in a structured, commonly used technological format. To access and correct your personal information, please contact us in writing using the relevant contact information listed in the Contact Us section below. We reply in writing within 30 days. Where a call or conversation involves another person, we provide you with your own personal information and remove details identifying the other person. If you need help making a request or understanding anything we ask you to agree to, tell us and we will help you, in English or French.\n\nUpon reasonable notice and subject to legal or contractual restrictions, you may withdraw your consent to the use and disclosure of your personal information by Haven. For example, you may opt out from the use of your personal information for marketing purposes. To withdraw your consent, please use the contact information listed in the Contact Us section below. Withdrawing your consent may impact the services we are able to provide to you.\n\nIf you are not satisfied with our response, you may complain to Haven\'s Privacy Officer, to the privacy regulator in your province (in Quebec, the Commission d\'accès à l\'information), or to the Office of the Privacy Commissioner of Canada.'], ['11. Children\'s Privacy', 'Our Website is not intended for — and we don\'t direct it to — anyone under 18, and that\'s why we do not knowingly collect personal information from anyone under 18. If you are under the age of 18, do not use the Website. If we learn that we hold personal information of a person under 18, we will delete it.'], ['12. Changes To This Privacy Policy', 'We may change this Privacy Policy from time to time. We will notify you if we update this Privacy Policy by posting a new Privacy Policy on this page. If we make any changes that materially modify the ways we process or protect your information, we will provide additional notification of changes and obtain consent when required by law before the change applies to you. We do not treat your continued use of the Website as acceptance of a material change. The "Effective Date" at the top of this policy indicates when it was last updated.'], ['13. Contact Us', 'You may contact us to exercise any of your rights or ask for more information about your personal information and our privacy practices by contacting our Privacy Officer:'],].map(([title, content], index) => (<section key={title} id={`section-${index + 4}`} className="scroll-mt-28 mb-8"><h2 className="text-2xl font-semibold text-foreground mb-4">{t(title)}</h2>{content.split('\n\n').map((paragraph, paragraphIndex) => (<Fragment key={paragraph}><p className="mb-4 whitespace-pre-line">{title === '9. What Are Your Choices?' || (title === '4. Message Safety Screening' && paragraphIndex > 0) ? (() => {const translated = t(paragraph); const splitIndex = translated.indexOf('. '); if (splitIndex === -1) return renderWithLinks(translated); return (<><strong className="font-semibold text-foreground">{translated.slice(0, splitIndex + 1)}</strong>{renderWithLinks(translated.slice(splitIndex + 1))}</>)})() : renderWithLinks(t(paragraph))}</p>{title === '7. How Long Does Haven Keep Personal Information?' && paragraphIndex === 0 && (<div className="overflow-x-auto my-6 rounded-lg border border-border">
<table className="w-full my-0 text-left text-base border-collapse"><thead><tr className="bg-muted/50"><th scope="col" className="p-3 font-semibold text-foreground align-top border-b border-border">{t('Information')}</th><th scope="col" className="p-3 font-semibold text-foreground align-top border-b border-border">{t('How long we keep it')}</th></tr></thead><tbody>{retentionRows.map(([information, retention]) => (<tr key={information} className="border-b border-border last:border-0"><th scope="row" className="p-3 font-normal text-foreground align-top">{t(information)}</th><td className="p-3 text-muted-foreground align-top">{t(retention)}</td></tr>))}</tbody></table></div>)}{title === '7. How Long Does Haven Keep Personal Information?' && paragraphIndex === 0 && (<p className="mb-4">{t('Where the law requires us to keep information longer — for example, information that is the subject of a request or proceeding — that longer period applies.')}</p>)}</Fragment>))}{title === '13. Contact Us' && <><p className="mb-4">{t('Privacy Officer, Haven Refugees')} <a href="mailto:privacy@findhaven.org" className="text-primary hover:underline">privacy@findhaven.org</a></p><p>{t('We reply to privacy requests in writing within 30 days.')}</p></>}</section>))}
    </article>
  )
}
