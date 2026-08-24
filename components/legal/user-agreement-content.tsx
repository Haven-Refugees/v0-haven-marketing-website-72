"use client"

import { useTranslation } from "@/lib/i18n"

export function UserAgreementContent() {
  const { t } = useTranslation()

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
          {t("Haven Refugees End-User License Agreement")}
        </h1>

        <p className="text-muted-foreground mb-8">
          <strong>{t("Effective")}: </strong>
          {t("August 24, 2026 (replaces the prior version)")}
          <br />
          <span>{"Ce contrat est aussi offert en français. "}</span>
          <a href="/fr/user-agreement" className="text-primary hover:underline">
            {"Voir la version française"}
          </a>
        </p>

        <div className="prose prose-lg max-w-none text-foreground/80">
          <section className="mb-10">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">{t("Introduction")}</h2>
            <p className="mb-4 leading-relaxed">
              {t(
                'Haven Refugees (referred to as "Haven", "us" or "we") asks that you review the terms and conditions in this end-user license agreement which governs the use of our application (as described below). Please note that in order to use our application, you must agree to the terms and conditions below. If you have any questions, please contact us at: info@findhaven.org. Although we cannot reply to all comments, we will certainly consider your input and use it to make the Haven application even better.',
              )}
            </p>
            <p className="leading-relaxed">
              {t(
                "Haven is a registered Canadian charity and a not-for-profit corporation incorporated under the Canada Not-for-profit Corporations Act. Haven is headquartered in Toronto, Canada. Haven provides resettlement services to refugees by connecting them with Canadian supporters who can help. Our services are delivered through findhaven.org.",
              )}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
              {t("1. End-User License Agreement")}
            </h2>
            <p className="mb-4 leading-relaxed">
              {t(
                'This end-user license agreement ("Agreement") is a binding legal agreement between you, as an individual and entity, and Haven which governs the use of the Haven application (available at www.findhaven.org) and any other services or websites operated by Haven, including all content, materials and information therein or that link to this Agreement ("Platform"). By using the Platform in any way, you acknowledge having read this Agreement and that you agree to be bound hereby. Please read the terms set out herein carefully before accepting this Agreement. If you do not agree to this Agreement, you may not use any aspect of the Platform.',
              )}
            </p>
            <p className="leading-relaxed">
              {t(
                "The Platform is provided to you under this Agreement solely for your own personal non-commercial use of the Platform. This license granted herein (see below) does not allow you to use the Platform on any Device (as defined in Section 2 below) that you do not own or control or have the right to use, and you may not distribute or make the Platform available over a network where it could be used by multiple devices at the same time. Use of the Platform within an organization or the use of multiple copies of the Platform (except a back-up copy) requires a commercial license for the Platform.",
              )}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">{t("2. Grant of License")}</h2>
            <p className="leading-relaxed">
              {t(
                'Subject to your continued compliance with this Agreement, Haven hereby grants you a limited, non-exclusive, personal, revocable, non-sublicensable and non-transferrable license to use the Platform for your own personal use on any compatible electronic device, smartphone or tablet ("Devices", and each a "Device") that you own or control. This license does not allow you to use the Platform on any Devices that you do not own or control. It is your responsibility for confirming whether the Device you have chosen is compatible with any aspect of the Platform and Haven does not guarantee that the Device you choose is compatible.',
              )}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">{t("3. Scope of License")}</h2>
            <p className="mb-4 leading-relaxed">{t("You may not, without Haven's consent:")}</p>
            <ul className="list-disc pl-6 space-y-3 mb-4">
              <li className="leading-relaxed">
                {t(
                  "copy, distribute, share, perform, transmit, display, reproduce, translate, modify, enhance, or create derivative works or improvements based on or from the Platform or merge, embed or combine the Platform with any other Platform, except as described in this Agreement;",
                )}
              </li>
              <li className="leading-relaxed">
                {t(
                  "sell, assign, license, sublicense, disclose, distribute, rent, lease, lend or otherwise transfer or make available the Platform or any copies of the Platform in any form to any third parties;",
                )}
              </li>
              <li className="leading-relaxed">
                {t(
                  "reverse engineer, reverse assemble, disassemble, decompile, translate, convert into human-readable form the Platform or the source code of the Platform, or otherwise attempt to do any of the foregoing, except to the extent this prohibition is not permitted under an applicable law;",
                )}
              </li>
              <li className="leading-relaxed">{t("commercially exploit the Platform in any way;")}</li>
              <li className="leading-relaxed">
                {t(
                  "remove, alter, destroy or attempt to circumvent any trademarks, notices, proprietary codes, notices, legends or marks, means of identification, digital rights management information, or Platform license agreements on, in or in relation to the Platform, or circumvent any associated security measures or otherwise use any of the trademarks, notices, proprietary codes, marks, legends or other images contained in the Platform in any manner except as permitted herein;",
                )}
              </li>
              <li className="leading-relaxed">
                {t(
                  "decrypt, extract, or otherwise attempt to discover any source code or trade secrets contained in or accessible via the Platform;",
                )}
              </li>
              <li className="leading-relaxed">
                {t(
                  "access or use the Platform in any manner not otherwise authorized under this Agreement, including use the Platform on a Device that you do not own or control;",
                )}
              </li>
              <li className="leading-relaxed">
                {t(
                  "access or use the Platform for any unlawful purpose or in a manner inconsistent with any law or in a reckless manner; or",
                )}
              </li>
              <li className="leading-relaxed">
                {t(
                  "permit or assist any other person to use the Platform in a way that would constitute a breach of this Agreement.",
                )}
              </li>
            </ul>
            <p className="mb-4 leading-relaxed">
              {t(
                "You further agree not to use the Platform in any manner to transmit any viruses, worms or other malicious Platform or to trespass or burden network capacity or in any manner to harass, defame, infringe or make illegal transmissions in connection with the use of the Platform or any third party Platform.",
              )}
            </p>
            <p className="leading-relaxed">
              {t(
                "The terms of this Agreement will govern any upgrades provided by Haven or its affiliates that replace or supplement any prior version of the Platform, unless such upgrade or new version is accompanied by a separate license in which case the terms of that agreement will govern.",
              )}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
              {t("4. Ownership of Intellectual Property")}
            </h2>
            <p className="mb-4 leading-relaxed">
              {t(
                "The Platform is protected by Canadian and international copyright and other intellectual property laws, as applicable. The Platform is the sole property of Haven and notwithstanding any license contained herein, Haven retains all title, ownership, interest and rights in and to the Platform, including without limitation patents, trademarks, trade secrets, copyright and all other intellectual property rights and industrial property rights whether or not registered, in and to the Platform, including all rights to the source code, graphics, images, trademarks, themes and text embodied or contained in the Platform. Except for the limited license granted above, nothing in this Agreement shall be construed as granting you any title, ownership, interest or rights (including without limitation intellectual property rights) in and to the Platform. All title, ownership, interest and rights not expressly granted under this Agreement are reserved by Haven.",
              )}
            </p>
            <p className="leading-relaxed">
              {t(
                "If you give feedback about the Platform (including any ideas or suggestions for enhancements or improvements to Haven or related user documentation) to Haven, then Haven and its licensors, successors, assigns and licensees may use and/or commercialize the feedback in any way and for any purpose without providing any compensation to you or any other person.",
              )}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
              {t("5. Privacy; Consent to Collection and Use of Data")}
            </h2>
            <p className="leading-relaxed">
              {t("Haven takes your privacy very seriously. The collection, storage, disclosure and permitted uses of your information are governed by Haven's Privacy Policy which can be found at")}{" "}
              <a href="/privacy-policy" className="text-primary hover:underline">
                https://findhaven.org/en/privacy-policy
              </a>
              {". "}
              {t(
                "The Privacy Policy and the terms thereof are hereby incorporated into this Agreement by reference. By accepting the terms and conditions of this Agreement you are also accepting the terms of the Privacy Policy. Haven may update the Privacy Policy as described in it: material changes are notified to you, and where the law requires your consent to a change, Haven will ask for it. You understand that third parties may at all times collect, store, disclose or use your information through your use of the Platform and that said collection, storage, disclosure or use by third parties is governed by the third party's applicable terms and conditions.",
              )}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
              {t("6. Eligibility, Account and Credentials")}
            </h2>
            <p className="mb-4 leading-relaxed">
              <strong>{t("Age.")}</strong>{" "}
              {t(
                "Haven's services are for adults. You must be at least 18 years old to create an Account or use the Platform. By creating an Account, you confirm that you are 18 or older and that the information you provide is true, accurate and complete, and you agree to keep it up to date.",
              )}
            </p>
            <p className="mb-4 leading-relaxed">
              <strong>{t("Eligibility documents.")}</strong>{" "}
              {t(
                "Some programs require confirmation of identity or eligibility. If we ask you for documents, a trained staff member will review them, record the outcome, and the documents will then be deleted, as described in the Privacy Policy. Submitting falsified documents is a violation of this Agreement.",
              )}
            </p>
            <p className="leading-relaxed">
              <strong>{t("Account and Credentials.")}</strong>{" "}
              {t(
                'To use the Platform, you must register for an account (an "Account") and select and register a unique user name and password (collectively "Credentials"). Your Account and Credentials are specific to you and may not be shared with or transferred to any other person. You will keep your Credentials secure and confidential at all times. You will not permit any other person to use your Account or Credentials, and you will immediately notify us if you know or suspect that your Account or Credentials have been used by any other person. We may act upon any communication that is given through your Account or by using your Credentials. Haven will verify the identity of a user when creating an Account. However, you agree that we are not required to verify the actual identity or authority of a person using your Account or Credentials after the Account has been created, but Haven may in its discretion at any time require verification of the identity of a person seeking to access your Account and may deny access to and use of your Account if we are not satisfied with the verification. If Haven in its discretion, considers your Account or Credentials to be unsecure or to have been used inappropriately, then we may immediately cancel the Account or Credentials without any notice to you. You may be required to change your Credentials from time to time.',
              )}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
              {t("7. Programs and Practice Conversations")}
            </h2>
            <p className="mb-4 leading-relaxed">
              <strong>{t("Matching and conversations.")}</strong>{" "}
              {t(
                "Haven matches newcomers with volunteer supporters for one-to-one practice conversations. Matching depends on availability and suitability; Haven does not guarantee a match or any particular match.",
              )}
            </p>
            <p className="mb-4 leading-relaxed">
              <strong>{t("Haven Language Program.")}</strong>{" "}
              {t(
                'Practice conversations are a required part of the Haven Language Program ("HLP"). HLP students are expected to take part in practice conversations as part of the program.',
              )}
            </p>
            <p className="leading-relaxed">
              <strong>{t("Exceptions.")}</strong>{" "}
              {t(
                "If you have a genuine difficulty with a program requirement, you may ask Haven for an exception by writing to info@findhaven.org and explaining your situation. Haven considers each request individually and may, at its discretion, allow a student to remain in the program with modified requirements. An exception is not guaranteed.",
              )}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
              {t("8. Acceptable Conduct and Safety Measures")}
            </h2>
            <p className="mb-4 leading-relaxed">
              {t(
                "Haven exists to provide a safe place for newcomers and volunteers to practise conversation. When you use the Platform, you agree that you will not:",
              )}
            </p>
            <ul className="list-disc pl-6 space-y-3 mb-4">
              <li className="leading-relaxed">
                {t(
                  "ask another user for money, gifts, financial assistance or financial information, or offer them;",
                )}
              </li>
              <li className="leading-relaxed">
                {t(
                  "engage in sexual, romantic or otherwise intimate advances toward another user, or send sexual content;",
                )}
              </li>
              <li className="leading-relaxed">{t("threaten, intimidate, harass, demean or abuse another user;")}</li>
              <li className="leading-relaxed">
                {t("pressure another user to communicate or meet outside Haven;")}
              </li>
              <li className="leading-relaxed">
                {t("misrepresent who you are, your age, or your reasons for being on Haven;")}
              </li>
              <li className="leading-relaxed">
                {t(
                  "use the Platform to recruit, solicit, proselytize or promote services, causes or businesses; or",
                )}
              </li>
              <li className="leading-relaxed">{t("use the Platform in violation of any applicable law.")}</li>
            </ul>
            <p className="mb-4 leading-relaxed">
              <strong>{t("Safety measures.")}</strong>{" "}
              {t(
                "If we have reason to believe your conduct violates this Section or puts another user at risk, we may take any measure we consider appropriate to protect users, including limiting features of your Account (for example, new calls or new matches) while trained staff review the matter, restricting your Account, ending a match, or removing you from the Platform permanently, with or without notice to you. Decisions to restrict or remove your Account are made by a person, never by software alone. Some protections are automatic — for example, messages containing contact details may be blocked. Where the law gives you a right to ask what information was used in a decision about you, you may exercise it as described in the Privacy Policy.",
              )}
            </p>
            <p className="leading-relaxed">
              <strong>{t("Reporting.")}</strong>{" "}
              {t(
                "If another user makes you uncomfortable or you believe someone is at risk, report it in the app or write to info@findhaven.org. Where the law requires Haven to report harm or risk of harm to a child, Haven reports to child-protection authorities. If anyone is in immediate danger, call 911.",
              )}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
              {t("9. Third Party Services and Third Party Materials")}
            </h2>
            <p className="mb-4 leading-relaxed">
              {t(
                'The Platform may enable access to or contain links to third party services and websites (the "Third Party Services"). You acknowledge that you have reviewed the terms and conditions of the applicable Third Party Services where such apply and that you will comply with all applicable restrictions, requirements and rules that govern the website from which you obtained the Platform.',
              )}
            </p>
            <p className="mb-4 leading-relaxed">
              {t(
                "You agree that by using any of the Third Party Services, you may encounter content that may be deemed offensive, indecent, or objectionable, which content may or may not be identified as having explicit language, and that the results of any search or entering of a particular URL may automatically and unintentionally generate links or references to objectionable material. You agree to use the Third Party Services at your own risk and that neither Haven nor its affiliates shall have any liability to you for content that may be found through the use of the Platform to be offensive, indecent or objectionable.",
              )}
            </p>
            <p className="mb-4 leading-relaxed">
              {t(
                'Certain Third Party Services may display, include or make available content, data, information, applications, advertisements, materials, solicitations and other software from third parties, which may include individuals, businesses, companies and other organizations ("Third Party Materials") or provide links to certain third party web sites. By using the Third Party Services, you acknowledge and agree that Haven is not responsible for examining, evaluating or verifying the content, accuracy, completeness, timeliness, validity, copyright compliance, legality, decency, quality or any other aspect of such Third Party Materials or web sites. The Third Party Services are made available solely for convenience, entertainment and informational purposes only. Haven does not warrant or endorse and does not assume and will not have any liability or responsibility to you or any other person for any Third Party Materials or websites, or for any other materials, products, or services of third parties. Third Party Materials and links to other web sites are provided solely as a convenience to you. Location data provided by any Third Party Services is for basic navigational purposes only and is not intended to be relied upon in situations where precise location information is needed or where erroneous, inaccurate or incomplete location data may lead to death, personal injury, property or environmental damage. Neither Haven, nor any of its content providers, guarantees the availability, accuracy, completeness, reliability, or timeliness of stock information or location data displayed by any Third Party Services.',
              )}
            </p>
            <p className="mb-4 leading-relaxed">
              {t(
                "You acknowledge and agree that any linking to Third Party Services does not imply in any way that Haven supports, recommends or endorses any Third Party Services.",
              )}
            </p>
            <p className="mb-4 leading-relaxed">
              {t(
                "You acknowledge and agree that Third Party Services contain proprietary content, information and material that is owned by third parties and that you are responsible for ensuring that your use of the Third Party Services whether in connection with the Platform or otherwise is compliant with applicable third party terms of use and applicable laws.",
              )}
            </p>
            <p className="mb-4 leading-relaxed">
              {t(
                "No portion of the Third Party Services may be reproduced in any form or by any means. You agree not to modify, rent, lease, loan, sell, distribute, or create derivative works based on the Third Party Services, in any manner, and you shall not exploit the Third Party Services in any unauthorized way whatsoever, including but not limited to, by trespass or burdening network capacity. You further agree not to use the Third Party Services in any manner to harass, abuse, stalk, threaten, defame or otherwise infringe or violate the rights of any other party, and that Haven is not in any way responsible for any such use by you, nor for any harassing, threatening, defamatory, offensive or illegal messages or transmissions that you may receive as a result of using any of the Third Party Services.",
              )}
            </p>
            <p className="leading-relaxed">
              {t(
                "In addition, Third Party Services and Third Party Materials that may be accessed from, displayed on or linked to from the Device are not available in all languages or in all provinces or countries. Haven makes no representation that such Third Party Services and Third Party Materials are appropriate or available for use in any particular location. To the extent you choose to access such Third Party Services or Third Party Materials, you do so at your own initiative and are responsible for compliance with any applicable laws, including but not limited to applicable local laws. Haven, and its licensors, where applicable, reserve the right to change, suspend, remove, or disable access to any Third Party Services at any time without notice. In no event will Haven be liable for the removal of or disabling of access to any such Third Party Services. Haven may also impose limits on the use of or access to certain Third Party Services, in any case and without notice or liability.",
              )}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
              {t("10. Termination and Modification")}
            </h2>
            <p className="mb-4 leading-relaxed">
              {t(
                "The license granted herein to use the Platform is effective until terminated by you or Haven. If you fail to comply with this Agreement, your rights will terminate automatically without notice. Without prejudice to any other rights or recourses it may have, Haven may terminate this Agreement for convenience, at its absolute discretion, immediately with or without notice to you.",
              )}
            </p>
            <p className="mb-4 leading-relaxed">
              {t(
                "Haven may modify the Platform and this Agreement with notice to you either to your last known email address or by publishing notice on Haven's website, including changing the functionality or appearance of the Platform, or changing the license scope or other terms of the Agreement. Where the law requires your consent to a change, Haven will ask for it. In the event Haven modifies the Platform or this Agreement, you may terminate this Agreement and cease use of the Platform.",
              )}
            </p>
            <p className="leading-relaxed">
              {t(
                "In the event that this Agreement is terminated pursuant to this Section 10, you must immediately cease to use the Platform and destroy all copies of content from the Platform under your control or in your possession. Notwithstanding the termination of this Agreement or anything herein to the contrary, Sections 4, 9, 10, 12, 13, 14, 15, 16 and 18 of this Agreement will survive the expiration or termination of this Agreement and will remain in full force and effect and be binding upon the parties.",
              )}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
              {t("11. Updates, Maintenance and Technical Requirements")}
            </h2>
            <p className="mb-4 leading-relaxed">
              {t(
                'Haven may, in its absolute, sole discretion, make available or provide updates, upgrades, maintenance, support in connection with the Platform and/or new version releases of the Platform, which may include bug fixes, enhancements, new features, deleted features, modifications, or other improvements (collectively, "Updates"). Updates may result in the removal of certain features or functions. To the extent Haven releases an Update of the Platform, you agree to cease use of the prior version of the Platform. Notwithstanding the foregoing, you understand and agree that Haven is under no duty or obligation to provide or make available any Updates or to otherwise retain any functionality provided in connection with the Platform or any subsequent Update, and Haven shall in no way be liable for any damages, costs, liabilities, fees, or expenses incurred by you arising out of or related to the removal of any functionality from the Platform or any subsequent Update.',
              )}
            </p>
            <p className="leading-relaxed">
              {t(
                "You are solely responsible to determine whether the Platform and your use thereof will achieve your intended results and to obtain, configure and protect all equipment and services necessary for the installation and use of the Platform and all Updates, data, programs or third party Platform used in association therewith. Under no circumstances will Haven be responsible for the foregoing.",
              )}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
              {t("12. Disclaimer of Warranties")}
            </h2>
            <p className="mb-4 leading-relaxed uppercase text-sm">
              {t(
                'YOU ACKNOWLEDGE AND AGREE THAT YOUR USE OF THE PLATFORM IS AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, THE PLATFORM, AND ALL CONTENT APPEARING THEREON OR AVAILABLE OR ACCESSIBLE THEREFROM, IS PROVIDED TO YOU "AS IS" AND WITH ALL FAULTS AND DEFECTS, AND WITHOUT ANY REPRESENTATIONS AND WARRANTIES, CONDITIONS OR GUARANTEES OF ANY KIND OR NATURE WHATSOEVER, WHETHER EXPRESS OR IMPLIED, STATUTORY, OR ARISING FROM CUSTOM, TRADE, USAGE OR ANY COURSE OF DEALING OR COURSE OF PERFORMANCE, INCLUDING, WITHOUT LIMITATION WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, NON-INFRINGEMENT, PERFORMANCE, RESULTS, SUITABILITY, QUALITY, TIMELINESS, TITLE, WORKMANSHIP, AND ARE HEREBY DISCLAIMED BY HAVEN, ON ITS OWN BEHALF AND ON BEHALF OF ITS AFFILIATES, SUBSIDIARIES, SUCCESSORS, AND ASSIGNS TO THE FULLEST EXTENT PERMITTED BY LAW. WITHOUT LIMITING THE GENERALITY OF THE FOREGOING, HAVEN MAKES NO REPRESENTATION, WARRANTY OR CONDITION THAT: (I) THE PLATFORM WILL BE COMPATIBLE WITH YOUR DEVICES AND RELATED EQUIPMENT, PLATFORM, APPLICATIONS OR SYSTEMS; (II) THE PLATFORM WILL BE AVAILABLE OR WILL FUNCTION WITHOUT INTERRUPTION OR WILL BE ERROR FREE OR THAT ANY ERRORS WILL BE CORRECTED; (III) THE PLATFORM WILL MEET YOUR REQUIREMENTS; (IV) DATA PROCESSED BY THE PLATFORM WILL BE ACCURATE, VALID, COMPLETE OR TIMELY; (V) CERTAIN RESULTS MAY BE OBTAINED OR ACHIEVED THROUGH THE USE OF THE PLATFORM; (VI) THE USE OF THE PLATFORM WILL BE FREE FROM ERRORS, VIRUSES OR OTHER DESTRUCTIVE OR DISRUPTIVE COMPONENTS; OR (VII) THE USE OF THE PLATFORM WILL NOT INFRINGE THE RIGHTS (INCLUDING INTELLECTUAL PROPERTY RIGHTS) OF ANY PERSON. HAVEN DISCLAIMS ANY AND ALL LIABILITY REGARDING SUCH MATTERS TO THE FULLEST EXTENT PERMITTED BY LAW. NO ORAL OR WRITTEN INFORMATION OR ADVICE GIVEN BY LICENSOR OR ITS AUTHORIZED REPRESENTATIVE SHALL CREATE A WARRANTY. YOU ASSUME ALL COSTS ASSOCIATED WITH SERVICING, REPAIR OR CORRECTION OF YOUR DEVICES AND THE CONTROL OF SECURITY AND CONFIDENTIALITY OF ANY INFORMATION OR DATA STORED ON YOUR DEVICES.',
              )}
            </p>
            <p className="leading-relaxed uppercase text-sm">
              {t(
                "SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF OR LIMITATIONS ON IMPLIED WARRANTIES OR THE LIMITATIONS ON THE APPLICABLE STATUTORY RIGHTS OF A CONSUMER, SO SOME OR ALL OF THE ABOVE EXCLUSIONS AND LIMITATIONS MAY NOT APPLY TO YOU.",
              )}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
              {t("13. Limitation of Liability")}
            </h2>
            <p className="mb-4 leading-relaxed uppercase text-sm">
              {t(
                "TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW AND NOTWITHSTANDING ANY OTHER PROVISION OF THIS AGREEMENT, UNDER NO CIRCUMSTANCES SHALL HAVEN, ITS AFFILIATES, SUCCESSORS, OR ASSIGNS, OR ANY OF ITS OR THEIR RESPECTIVE LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, REPRESENTATIVES, SPONSORS, PARTNERS, OFFICERS, DIRECTORS, EXECUTIVES, AND/OR MEMBERS BE LIABLE TO YOU FOR INJURY OF ANY KIND, PERSONAL OR OTHERWISE, AND FOR ANY AMOUNTS, OR FOR ANY LOSS, CLAIMS, THIRD PARTY CLAIMS THAT THE PLATFORM INFRINGES A THIRD PARTY'S INTELLECTUAL PROPERTY RIGHTS, PREJUDICE OR INCIDENTAL, SPECIAL, PUNITIVE, EXEMPLARY, INDIRECT OR CONSEQUENTIAL DAMAGES WHATSOEVER, INCLUDING DAMAGES FOR LOSS OF REVENUE, LOSS OF BUSINESS, LOSS OF DATA, LOSS OF GOODWILL, SAVINGS, INCOME, PROFITS, USE, PRODUCTION ANTICIPATED, BUSINESS INTERRUPTION, MALFUNCTION OR OTHERWISE, FAILURE TO PROVIDE SUPPORT, UPDATES, MAINTENANCE OR ANY OTHER COMMERCIAL DAMAGES OR LOSSES ARISING OUT OF OR RELATED TO YOUR USE OF THE PLATFORM, HOWEVER CAUSED.",
              )}
            </p>
            <p className="mb-4 leading-relaxed uppercase text-sm">
              {t(
                "THE FOREGOING DOES NOT AFFECT ANY LIABILITY WHICH CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW, HOWEVER, TO THE FULLEST EXTENT PERMITTED PER APPLICABLE LAW, THE FOREGOING LIMITATIONS WILL APPLY WHETHER SUCH DAMAGES ARISE OUT OF BREACH OF CONTRACT, TORT (INCLUDING NEGLIGENCE) OR OTHERWISE AND REGARDLESS OF WHETHER SUCH DAMAGES WERE FORESEEABLE OR HAVEN WAS ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.",
              )}
            </p>
            <p className="leading-relaxed uppercase text-sm">
              {t(
                "SOME JURISDICTIONS DO NOT ALLOW CERTAIN LIMITATIONS OF LIABILITY SO SOME OR ALL OF THE ABOVE LIMITATIONS OF LIABILITY MAY NOT APPLY TO YOU.",
              )}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">{t("14. Exclusive Remedy")}</h2>
            <p className="leading-relaxed">
              {t(
                "To the fullest extent permitted by applicable law, your exclusive remedy in connection with the use of the Platform shall be to terminate this Agreement and the license granted hereunder and to cease using the Platform.",
              )}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">{t("15. Release and Discharge")}</h2>
            <p className="leading-relaxed">
              {t(
                "You are solely responsible for the use of the Platform and your interactions with merchants and other sites. To the extent permitted under applicable law, you hereby release Haven from any and all claims, demands, proceedings or liability related to any Third Party Services or Third Party Materials including in respect of any offers, products or services.",
              )}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">{t("16. Indemnification")}</h2>
            <p className="leading-relaxed">
              {t(
                "You and anyone you represent who makes use of the Platform, will indemnify, defend and hold harmless Haven and any of its officers, employers, employees, contractors, staff, sponsors, manager, agents, parents, subsidiaries, affiliates representatives, and other partners from any direct, indirect, incidental, special, consequential or exemplary damages from and against any and all claims, demands, suits, proceedings, whatsoever, threatened or pending, directly or indirectly, arising from, connected with or relating to, your use of the Platform, any other matter relating to the Platform and/or any negligence, misconduct, or breach of this Agreement by you.",
              )}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
              {t("17. Compliance with Applicable Laws")}
            </h2>
            <p className="leading-relaxed">
              {t(
                "You agree to use the Platform in compliance with all applicable local, state, provincial, national and foreign laws and regulations, including all applicable export laws. You represent and warrant to Haven that you are not located in a country whereby your use of the Platform would breach local or foreign laws. Haven reserves the right to change, suspend, remove, or disable access to the Platform at any time without notice. In no event will Haven be liable for the removal of or disabling of access to any such Platform.",
              )}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">{t("18. Applicable Laws")}</h2>
            <p className="leading-relaxed">
              {t(
                "This Agreement, the Platform and the use thereof are governed by the laws of the Province of Ontario and the federal laws of Canada applicable therein. Each of the parties hereto irrevocably attorns and submits to the exclusive jurisdiction of the courts of the Province of Ontario and further agrees to commence any litigation which may arise hereunder in the courts located in the judicial district of Toronto, Province of Ontario.",
              )}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">{t("19. General")}</h2>
            <p className="leading-relaxed">
              {t(
                'This Agreement is the entire Agreement between you and Haven and supersedes any other communications or advertising with respect to the Platform. Haven may amend or change the terms of this Agreement from time to time as described in Section 10. You may not assign this Agreement without Haven\'s consent, which consent may be withheld at Haven\'s sole discretion. Haven may assign this Agreement in its sole discretion without the need to obtain your consent. No consent or waiver in respect of your obligations hereunder will be effective unless in writing and signed by Haven. If any provisions of this Agreement are held to be invalid or unenforceable, the remaining provisions of this Agreement will remain in full force and effect without impairment or invalidation in any way. In this Agreement: (a) headings are for reference only; (b) "person" includes a legal entity; (c) words importing the singular number only include the plural, and vice versa; (d) words importing a gender include both genders; and (e) "including" or "includes" means including or includes (as applicable) without limitation or restriction.',
              )}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
              {t("20. Haven SMS Messaging Program")}
            </h2>
            <p className="mb-4 leading-relaxed">{t("Haven sends two kinds of text messages.")}</p>
            <p className="mb-4 leading-relaxed">
              <strong>{t("Service messages")}</strong>{" "}
              {t(
                "relate to your Account and participation: verification codes, security alerts, match and message notifications, scheduling and class reminders, program updates, safety notices, and support replies. These are part of operating your Account.",
              )}
            </p>
            <p className="mb-4 leading-relaxed">
              <strong>{t("Marketing messages")}</strong>{" "}
              {t(
                "— Haven news, programs, events and campaigns — are optional. We send them only if you opted in, and you can opt out at any time. Opting in is never a condition of using the Platform.",
              )}
            </p>
            <p className="leading-relaxed">
              {t(
                "You can manage which messages you receive in your account notification settings. Reply STOP to any message to stop texts; opt-outs are processed within ten (10) business days. Depending on the sending number, replying STOP may stop all texts from that number; essential account and safety notices may still reach you through another channel where the law permits. Reply HELP for help, or contact info@findhaven.org. Message frequency varies. Message and data rates may apply. Haven does not sell phone numbers or share them for anyone else's marketing.",
              )}
            </p>
          </section>

          <section className="mb-10 border-t border-border pt-8">
            <p className="mb-2 leading-relaxed">
              <strong>{t("Questions about this agreement:")}</strong> info@findhaven.org
            </p>
            <p className="leading-relaxed">
              <strong>{t("Questions about privacy or your rights:")}</strong>{" "}
              {t("Privacy Officer")} — privacy@findhaven.org
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
