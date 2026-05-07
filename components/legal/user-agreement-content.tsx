"use client"

import { useTranslation } from "@/lib/i18n"

export function UserAgreementContent() {
  const { t } = useTranslation()

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8">
          {t("Haven Refugees End-User License Agreement")}
        </h1>

        <div className="prose prose-lg max-w-none text-foreground/80">
          <p className="text-lg font-medium mb-4">{t("English Version")}</p>
          <p className="mb-8">
            <a href="/user-agreement-fr" className="text-primary hover:underline">
              {t("Click here to see the French Version")}
            </a>
          </p>

          <section className="mb-10">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
              {t("Introduction")}
            </h2>
            <p className="mb-4 leading-relaxed">
              {t("Haven Refugees (referred to as \"Haven\", \"us\" or \"we\") asks that you review the terms and conditions in this end-user license agreement which governs the use of our application (as described below). Please note that in order to use our application, you must agree to the terms and conditions below. If you have any questions, please contact us at: info@findhaven.org. Although we cannot reply to all comments, we will certainly consider your input and use it to make the Haven application even better.")}
            </p>
            <p className="leading-relaxed">
              {t("Haven is a not-for-profit corporation registered under the Canada Not-for-profit Corporations Act. Haven is headquartered in Toronto, Canada. Haven provides resettlement services to refugees by connecting them with Canadian supporters who can help. Our services are delivered through findhaven.org.")}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
              {t("End-User License Agreement")}
            </h2>
            <p className="mb-4 leading-relaxed">
              {t("This end-user license agreement (\"Agreement\") is a binding legal agreement between you, as an individual and entity, and Haven which governs the use of the Haven application (available at www.findhaven.org) and any other services or websites operated by Haven, including all content, materials and information therein or that link to this Agreement (\"Platform\"). By using the Platform in any way, you acknowledge having read this Agreement and that you agree to be bound hereby. Please read the terms set out herein carefully before accepting this Agreement. If you do not agree to this Agreement, you may not use any aspect of the Platform.")}
            </p>
            <p className="leading-relaxed">
              {t("The Platform is provided to you under this Agreement solely for your own personal non-commercial use of the Platform. This license granted herein (see below) does not allow you to use the Platform on any Device (as defined in Section 2 below) that you do not own or control or have the right to use, and you may not distribute or make the Platform available over a network where it could be used by multiple devices at the same time. Use of the Platform within an organization or the use of multiple copies of the Platform (except a back-up copy) requires a commercial license for the Platform.")}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
              {t("Grant of License")}
            </h2>
            <p className="leading-relaxed">
              {t("Subject to your continued compliance with this Agreement, Haven hereby grants you a limited, non-exclusive, personal, revocable, non-sublicensable and non-transferrable license to use the Platform for your own personal use on any compatible electronic device, smartphone or tablet (\"Devices\", and each a \"Device\") that you own or control. This license does not allow you to use the Platform on any Devices that you do not own or control. It is your responsibility for confirming whether the Device you have chosen is compatible with any aspect of the Platform and Haven does not guarantee that the Device you choose is compatible.")}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
              {t("Scope of License")}
            </h2>
            <p className="mb-4 leading-relaxed">{t("You may not, without Haven's consent:")}</p>
            <ul className="list-disc pl-6 space-y-3 mb-4">
              <li className="leading-relaxed">
                {t("copy, distribute, share, perform, transmit, display, reproduce, translate, modify, enhance, or create derivative works or improvements based on or from the Platform or merge, embed or combine the Platform with any other Platform, except as described in this Agreement;")}
              </li>
              <li className="leading-relaxed">
                {t("sell, assign, license, sublicense, disclose, distribute, rent, lease, lend or otherwise transfer or make available the Platform or any copies of the Platform in any form to any third parties;")}
              </li>
              <li className="leading-relaxed">
                {t("reverse engineer, reverse assemble, disassemble, decompile, translate, convert into human-readable form the Platform or the source code of the Platform, or otherwise attempt to do any of the foregoing, except to the extent this prohibition is not permitted under an applicable law;")}
              </li>
              <li className="leading-relaxed">
                {t("commercially exploit the Platform in any way;")}
              </li>
              <li className="leading-relaxed">
                {t("remove, alter, destroy or attempt to circumvent any trademarks, notices, proprietary codes, notices, legends or marks, means of identification, digital rights management information, or Platform license agreements on, in or in relation to the Platform, or circumvent any associated security measures or otherwise use any of the trademarks, notices, proprietary codes, marks, legends or other images contained in the Platform in any manner except as permitted herein;")}
              </li>
              <li className="leading-relaxed">
                {t("decrypt, extract, or otherwise attempt to discover any source code or trade secrets contained in or accessible via the Platform;")}
              </li>
              <li className="leading-relaxed">
                {t("access or use the Platform in any manner not otherwise authorized under this Agreement, including use the Platform on a Device that you do not own or control;")}
              </li>
              <li className="leading-relaxed">
                {t("access or use the Platform for any unlawful purpose or in a manner inconsistent with any law or in a reckless manner; or")}
              </li>
              <li className="leading-relaxed">
                {t("permit or assist any other person to use the Platform in a way that would constitute a breach of this Agreement.")}
              </li>
            </ul>
            <p className="mb-4 leading-relaxed">
              {t("You further agree not to use the Platform in any manner to transmit any viruses, worms or other malicious Platform or to trespass or burden network capacity or in any manner to harass, defame, infringe or make illegal transmissions in connection with the use of the Platform or any third party Platform.")}
            </p>
            <p className="leading-relaxed">
              {t("The terms of this Agreement will govern any upgrades provided by Haven or its affiliates that replace or supplement any prior version of the Platform, unless such upgrade or new version is accompanied by a separate license in which case the terms of that agreement will govern.")}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
              {t("Ownership of Intellectual Property")}
            </h2>
            <p className="mb-4 leading-relaxed">
              {t("The Platform is protected by Canadian and international copyright and other intellectual property laws, as applicable. The Platform is the sole property of Haven and notwithstanding any license contained herein, Haven retains all title, ownership, interest and rights in and to the Platform, including without limitation patents, trademarks, trade secrets, copyright and all other intellectual property rights and industrial property rights whether or not registered, in and to the Platform, including all rights to the source code, graphics, images, trademarks, themes and text embodied or contained in the Platform. Except for the limited license granted above, nothing in this Agreement shall be construed as granting you any title, ownership, interest or rights (including without limitation intellectual property rights) in and to the Platform. All title, ownership, interest and rights not expressly granted under this Agreement are reserved by Haven.")}
            </p>
            <p className="leading-relaxed">
              {t("If you give feedback about the Platform (including any ideas or suggestions for enhancements or improvements to Haven or related user documentation) to Haven, then Haven and its licensors, successors, assigns and licensees may use and/or commercialize the feedback in any way and for any purpose without providing any compensation to you or any other person.")}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
              {t("Privacy; Consent to Collection and Use of Data")}
            </h2>
            <p className="leading-relaxed">
              {t("Haven takes your privacy very seriously. The collection, storage, disclosure and permitted uses of your information are governed by Haven's Privacy Policy which can be found here. The Privacy Policy and the terms thereof are hereby incorporated into this Agreement by reference. By accepting the terms and conditions of this Agreement you are also accepting the terms of the Privacy Policy. Haven reserves the right to amend or modify the Privacy Policy at its sole discretion. You understand that third parties may at all times collect, store, disclose or use your information through your use of the Platform and that said collection, storage, disclosure or use by third parties is governed by the third party's applicable terms and conditions.")}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
              {t("Account/Credentials")}
            </h2>
            <p className="leading-relaxed">
              {t("To use the Platform, you must register for an account (an \"Account\") and select and register a unique user name and password (collectively \"Credentials\"). Your Account and Credentials are specific to you and may not be shared with or transferred to any other person. You will keep your Credentials secure and confidential at all times. You will not permit any other person to use your Account or Credentials, and you will immediately notify us if you know or suspect that your Account or Credentials have been used by any other person. We may act upon any communication that is given through your Account or by using your Credentials. Haven will verify the identity of a user when creating an Account. However, you agree that we are not required to verify the actual identity or authority of a person using your Account or Credentials after the Account has been created, but Haven may in its discretion at any time require verification of the identity of a person seeking to access your Account and may deny access to and use of your Account if we are not satisfied with the verification. If Haven in its discretion, considers your Account or Credentials to be unsecure or to have been used inappropriately, then we may immediately cancel the Account or Credentials without any notice to you. You may be required to change your Credentials from time to time.")}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
              {t("Third Party Services and Third Party Materials")}
            </h2>
            <p className="mb-4 leading-relaxed">
              {t("a) The Platform may enable access to or contain links to third party services and websites (the \"Third Party Services\"). You acknowledge that you have reviewed the terms and conditions of the applicable Third Party Services where such apply and that you will comply with all applicable restrictions, requirements and rules that govern the website from which you obtained the Platform.")}
            </p>
            <p className="mb-4 leading-relaxed">
              {t("b) You agree that by using any of the Third Party Services, you may encounter content that may be deemed offensive, indecent, or objectionable, which content may or may not be identified as having explicit language, and that the results of any search or entering of a particular URL may automatically and unintentionally generate links or references to objectionable material. You agree to use the Third Party Services at your own risk and that neither Haven nor its affiliates shall have any liability to you for content that may be found through the use of the Platform to be offensive, indecent or objectionable.")}
            </p>
            <p className="mb-4 leading-relaxed">
              {t("c) Certain Third Party Services may display, include or make available content, data, information, applications, advertisements, materials, solicitations and other software from third parties, which may include individuals, businesses, companies and other organizations (\"Third Party Materials\") or provide links to certain third party web sites. By using the Third Party Services, you acknowledge and agree that Haven is not responsible for examining, evaluating or verifying the content, accuracy, completeness, timeliness, validity, copyright compliance, legality, decency, quality or any other aspect of such Third Party Materials or web sites. The Third Party Services are made available solely for convenience, entertainment and informational purposes only. Haven does not warrant or endorse and does not assume and will not have any liability or responsibility to you or any other person for any Third Party Materials or websites, or for any other materials, products, or services of third parties. Third Party Materials and links to other web sites are provided solely as a convenience to you. Location data provided by any Third Party Services is for basic navigational purposes only and is not intended to be relied upon in situations where precise location information is needed or where erroneous, inaccurate or incomplete location data may lead to death, personal injury, property or environmental damage. Neither Haven, nor any of its content providers, guarantees the availability, accuracy, completeness, reliability, or timeliness of stock information or location data displayed by any Third Party Services.")}
            </p>
            <p className="mb-4 leading-relaxed">
              {t("d) You acknowledge and agree that any linking to Third Party Services does not imply in any way that Haven supports, recommends or endorses any Third Party Services.")}
            </p>
            <p className="mb-4 leading-relaxed">
              {t("e) You acknowledge and agree that Third Party Services contain proprietary content, information and material that is owned by third parties and that you are responsible for ensuring that your use of the Third Party Services whether in connection with the Platform or otherwise is compliant with applicable third party terms of use and applicable laws.")}
            </p>
            <p className="mb-4 leading-relaxed">
              {t("f) No portion of the Third Party Services may be reproduced in any form or by any means. You agree not to modify, rent, lease, loan, sell, distribute, or create derivative works based on the Third Party Services, in any manner, and you shall not exploit the Third Party Services in any unauthorized way whatsoever, including but not limited to, by trespass or burdening network capacity. You further agree not to use the Third Party Services in any manner to harass, abuse, stalk, threaten, defame or otherwise infringe or violate the rights of any other party, and that Haven is not in any way responsible for any such use by you, nor for any harassing, threatening, defamatory, offensive or illegal messages or transmissions that you may receive as a result of using any of the Third Party Services.")}
            </p>
            <p className="leading-relaxed">
              {t("g) In addition, Third Party Services and Third Party Materials that may be accessed from, displayed on or linked to from the Device are not available in all languages or in all provinces or countries. Haven makes no representation that such Third Party Services and Third Party Materials are appropriate or available for use in any particular location. To the extent you choose to access such Third Party Services or Third Party Materials, you do so at your own initiative and are responsible for compliance with any applicable laws, including but not limited to applicable local laws. Haven, and its licensors, where applicable, reserve the right to change, suspend, remove, or disable access to any Third Party Services at any time without notice. In no event will Haven be liable for the removal of or disabling of access to any such Third Party Services. Haven may also impose limits on the use of or access to certain Third Party Services, in any case and without notice or liability.")}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
              {t("Termination and Modification")}
            </h2>
            <p className="mb-4 leading-relaxed">
              {t("a) The license granted herein to use the Platform is effective until terminated by you or Haven. If you fail to comply with this Agreement, your rights will terminate automatically without notice. Without prejudice to any other rights or recourses it may have, Haven may terminate this Agreement for convenience, at its absolute discretion, immediately with or without notice to you.")}
            </p>
            <p className="mb-4 leading-relaxed">
              {t("b) Haven may modify the Platform and this Agreement with notice to you either to your last known email address or by publishing notice on Haven's website, including changing the functionality or appearance of the Platform, or changing the license scope or other terms of the Agreement. In the event Haven modifies the Platform or this Agreement, you may terminate this Agreement and cease use of the Platform.")}
            </p>
            <p className="leading-relaxed">
              {t("c) In the event that this Agreement is terminated pursuant to this Section 8, you must immediately cease to use the Platform and destroy all copies of content from the Platform under your control or in your possession. Notwithstanding the termination of this Agreement or anything herein to the contrary, Sections 4, 7, 8, 10, 11, 12, 13, 14 and 17 of this Agreement will survive the expiration or termination of this Agreement and will remain in full force and effect and be binding upon the parties.")}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
              {t("Updates, Maintenance and Technical Requirements")}
            </h2>
            <p className="mb-4 leading-relaxed">
              {t("a) Haven may, in its absolute, sole discretion, make available or provide updates, upgrades, maintenance, support in connection with the Platform and/or new version releases of the Platform, which may include bug fixes, enhancements, new features, deleted features, modifications, or other improvements (collectively, \"Updates\"). Updates may result in the removal of certain features or functions. To the extent Haven releases an Update of the Platform, you agree to cease use of the prior version of the Platform. Notwithstanding the foregoing, you understand and agree that Haven is under no duty or obligation to provide or make available any Updates or to otherwise retain any functionality provided in connection with the Platform or any subsequent Update, and Haven shall in no way be liable for any damages, costs, liabilities, fees, or expenses incurred by you arising out of or related to the removal of any functionality from the Platform or any subsequent Update.")}
            </p>
            <p className="leading-relaxed">
              {t("b) You are solely responsible to determine whether the Platform and your use thereof will achieve your intended results and to obtain, configure and protect all equipment and services necessary for the installation and use of the Platform and all Updates, data, programs or third party Platform used in association therewith. Under no circumstances will Haven be responsible for the foregoing.")}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
              {t("Disclaimer of Warranties")}
            </h2>
            <p className="mb-4 leading-relaxed uppercase text-sm">
              {t("YOU ACKNOWLEDGE AND AGREE THAT YOUR USE OF THE PLATFORM IS AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, THE PLATFORM, AND ALL CONTENT APPEARING THEREON OR AVAILABLE OR ACCESSIBLE THEREFROM, IS PROVIDED TO YOU \"AS IS\" AND WITH ALL FAULTS AND DEFECTS, AND WITHOUT ANY REPRESENTATIONS AND WARRANTIES, CONDITIONS OR GUARANTEES OF ANY KIND OR NATURE WHATSOEVER, WHETHER EXPRESS OR IMPLIED, STATUTORY, OR ARISING FROM CUSTOM, TRADE, USAGE OR ANY COURSE OF DEALING OR COURSE OF PERFORMANCE, INCLUDING, WITHOUT LIMITATION WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, NON-INFRINGEMENT, PERFORMANCE, RESULTS, SUITABILITY, QUALITY, TIMELINESS, TITLE, WORKMANSHIP, AND ARE HEREBY DISCLAIMED BY HAVEN, ON ITS OWN BEHALF AND ON BEHALF OF ITS AFFILIATES, SUBSIDIARIES, SUCCESSORS, AND ASSIGNS TO THE FULLEST EXTENT PERMITTED BY LAW. WITHOUT LIMITING THE GENERALITY OF THE FOREGOING, HAVEN MAKES NO REPRESENTATION, WARRANTY OR CONDITION THAT: (I) THE PLATFORM WILL BE COMPATIBLE WITH YOUR DEVICES AND RELATED EQUIPMENT, PLATFORM, APPLICATIONS OR SYSTEMS; (II) THE PLATFORM WILL BE AVAILABLE OR WILL FUNCTION WITHOUT INTERRUPTION OR WILL BE ERROR FREE OR THAT ANY ERRORS WILL BE CORRECTED; (III) THE PLATFORM WILL MEET YOUR REQUIREMENTS; (IV) DATA PROCESSED BY THE PLATFORM WILL BE ACCURATE, VALID, COMPLETE OR TIMELY; (V) CERTAIN RESULTS MAY BE OBTAINED OR ACHIEVED THROUGH THE USE OF THE PLATFORM; (VI) THE USE OF THE PLATFORM WILL BE FREE FROM ERRORS, VIRUSES OR OTHER DESTRUCTIVE OR DISRUPTIVE COMPONENTS; OR (VII) THE USE OF THE PLATFORM WILL NOT INFRINGE THE RIGHTS (INCLUDING INTELLECTUAL PROPERTY RIGHTS) OF ANY PERSON. HAVEN DISCLAIMS ANY AND ALL LIABILITY REGARDING SUCH MATTERS TO THE FULLEST EXTENT PERMITTED BY LAW. NO ORAL OR WRITTEN INFORMATION OR ADVICE GIVEN BY LICENSOR OR ITS AUTHORIZED REPRESENTATIVE SHALL CREATE A WARRANTY. YOU ASSUME ALL COSTS ASSOCIATED WITH SERVICING, REPAIR OR CORRECTION OF YOUR DEVICES AND THE CONTROL OF SECURITY AND CONFIDENTIALITY OF ANY INFORMATION OR DATA STORED ON YOUR DEVICES.")}
            </p>
            <p className="leading-relaxed">
              {t("SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF OR LIMITATIONS ON IMPLIED WARRANTIES OR THE LIMITATIONS ON THE APPLICABLE STATUTORY RIGHTS OF A CONSUMER, SO SOME OR ALL OF THE ABOVE EXCLUSIONS AND LIMITATIONS MAY NOT APPLY TO YOU.")}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
              {t("Limitation of Liability")}
            </h2>
            <p className="mb-4 leading-relaxed uppercase text-sm">
              {t("TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW AND NOTWITHSTANDING ANY OTHER PROVISION OF THIS AGREEMENT, UNDER NO CIRCUMSTANCES SHALL HAVEN, ITS AFFILIATES, SUCCESSORS, OR ASSIGNS, OR ANY OF ITS OR THEIR RESPECTIVE LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, REPRESENTATIVES, SPONSORS, PARTNERS, OFFICERS, DIRECTORS, EXECUTIVES, AND/OR MEMBERS BE LIABLE TO YOU FOR INJURY OF ANY KIND, PERSONAL OR OTHERWISE, AND FOR ANY AMOUNTS, OR FOR ANY LOSS, CLAIMS, THIRD PARTY CLAIMS THAT THE PLATFORM INFRINGES A THIRD PARTY'S INTELLECTUAL PROPERTY RIGHTS, PREJUDICE OR INCIDENTAL, SPECIAL, PUNITIVE, EXEMPLARY, INDIRECT OR CONSEQUENTIAL DAMAGES WHATSOEVER, INCLUDING DAMAGES FOR LOSS OF REVENUE, LOSS OF BUSINESS, LOSS OF DATA, LOSS OF GOODWILL, SAVINGS, INCOME, PROFITS, USE, PRODUCTION ANTICIPATED, BUSINESS INTERRUPTION, MALFUNCTION OR OTHERWISE, FAILURE TO PROVIDE SUPPORT, UPDATES, MAINTENANCE OR ANY OTHER COMMERCIAL DAMAGES OR LOSSES ARISING OUT OF OR RELATED TO YOUR USE OF THE PLATFORM, HOWEVER CAUSED.")}
            </p>
            <p className="mb-4 leading-relaxed uppercase text-sm">
              {t("THE FOREGOING DOES NOT AFFECT ANY LIABILITY WHICH CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW, HOWEVER, TO THE FULLEST EXTENT PERMITTED PER APPLICABLE LAW, THE FOREGOING LIMITATIONS WILL APPLY WHETHER SUCH DAMAGES ARISE OUT OF BREACH OF CONTRACT, TORT (INCLUDING NEGLIGENCE) OR OTHERWISE AND REGARDLESS OF WHETHER SUCH DAMAGES WERE FORESEEABLE OR HAVEN WAS ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.")}
            </p>
            <p className="leading-relaxed uppercase text-sm">
              {t("SOME JURISDICTIONS DO NOT ALLOW CERTAIN LIMITATIONS OF LIABILITY SO SOME OR ALL OF THE ABOVE LIMITATIONS OF LIABILITY MAY NOT APPLY TO YOU.")}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
              {t("Exclusive Remedy")}
            </h2>
            <p className="leading-relaxed">
              {t("To the fullest extent permitted by applicable law, your exclusive remedy in connection with the use of the Platform shall be to terminate this Agreement and the license granted hereunder and to cease using the Platform.")}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
              {t("Release and Discharge")}
            </h2>
            <p className="leading-relaxed">
              {t("You are solely responsible for the use of the Platform and your interactions with merchants and other sites. To the extent permitted under applicable law, you hereby release Haven from any and all claims, demands, proceedings or liability related to any Third Party Services or Third Party Materials including in respect of any offers, products or services.")}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
              {t("Indemnification")}
            </h2>
            <p className="leading-relaxed">
              {t("You and anyone you represent who makes use of the Platform, will indemnify, defend and hold harmless Haven and any of its officers, employers, employees, contractors, staff, sponsors, manager, agents, parents, subsidiaries, affiliates representatives, and other partners from any direct, indirect, incidental, special, consequential or exemplary damages from and against any and all claims, demands, suits, proceedings, whatsoever, threatened or pending, directly or indirectly, arising from, connected with or relating to, your use of the Platform, any other matter relating to the Platform and/or any negligence, misconduct, or breach of this Agreement by you.")}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
              {t("Compliance with Applicable Laws")}
            </h2>
            <p className="leading-relaxed">
              {t("You agree to use the Platform in compliance with all applicable local, state, provincial, national and foreign laws and regulations, including all applicable export laws. You represent and warrant to Haven that you are not located in a country whereby your use of the Platform would breach local or foreign laws. Haven reserves the right to change, suspend, remove, or disable access to the Platform at any time without notice. In no event will Haven be liable for the removal of or disabling of access to any such Platform.")}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
              {t("Applicable Laws")}
            </h2>
            <p className="leading-relaxed">
              {t("This Agreement, the Platform and the use thereof are governed by the laws of the Province of Ontario and the federal laws of Canada applicable therein. Each of the parties hereto irrevocably attorns and submits to the exclusive jurisdiction of the courts of the Province of Ontario and further agrees to commence any litigation which may arise hereunder in the courts located in the judicial district of Toronto, Province of Ontario.")}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
              {t("General")}
            </h2>
            <p className="leading-relaxed">
              {t("This Agreement is the entire Agreement between you and Haven and supersedes any other communications or advertising with respect to the Platform. Haven may amend or change the terms of this Agreement from time to time at its sole discretion. You may not assign this Agreement without Haven's consent, which consent may be withheld at Haven's sole discretion. Haven may assign this Agreement in its sole discretion without the need to obtain your consent. No consent or waiver in respect of your obligations hereunder will be effective unless in writing and signed by Haven. If any provisions of this Agreement are held to be invalid or unenforceable, the remaining provisions of this Agreement will remain in full force and effect without impairment or invalidation in any way. In this Agreement: (a) headings are for reference only; (b) \"person\" includes a legal entity; (c) words importing the singular number only include the plural, and vice versa; (d) words importing a gender include both genders; and (e) \"including\" or \"includes\" means including or includes (as applicable) without limitation or restriction.")}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
              {t("Haven Refugees SMS Messaging Program")}
            </h2>
            <p className="mb-4 leading-relaxed">
              {t("Haven Refugees operates a text messaging program to support users of the Haven platform with account verification and program participation. Messages may include one-time passcodes (OTP), inbox notifications, match requests or acceptances, reminders to respond, and scheduling prompts. Messages are not promotional.")}
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li className="leading-relaxed">
                <strong>{t("Message Frequency:")}</strong> {t("Message frequency varies based on user activity, typically 2-8 messages per month.")}
              </li>
              <li className="leading-relaxed">
                <strong>{t("Message & Data Rates:")}</strong> {t("Message and data rates may apply depending on your mobile carrier plan.")}
              </li>
              <li className="leading-relaxed">
                <strong>{t("Opt-Out:")}</strong> {t("You may opt out of receiving messages at any time by replying STOP to any message.")}
              </li>
              <li className="leading-relaxed">
                <strong>{t("Help / Support:")}</strong> {t("For help, reply HELP or contact us at info@findhaven.org.")}
              </li>
              <li className="leading-relaxed">
                <strong>{t("Privacy:")}</strong> {t("See our Privacy Policy:")}{" "}
                <a href="/privacy-policy" className="text-primary hover:underline">
                  https://www.findhaven.org/privacy-policy
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
