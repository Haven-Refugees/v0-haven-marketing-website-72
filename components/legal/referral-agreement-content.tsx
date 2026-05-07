"use client"

import { useTranslations } from "next-intl"

export function ReferralAgreementContent() {
  const t = useTranslations()

  return (
    <div className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
          {t("Haven Language Program Referral Program — Terms & Conditions")}
        </h1>
        <p className="text-muted-foreground mb-12">
          {t("Last Updated")}: {t("March 2026")}
        </p>

        <div className="prose prose-lg max-w-none">
          <p className="text-foreground/80 mb-8">
            {t("The Haven Referral Program allows participants to earn promotional discounts for referring friends to the Haven Language Program (HLP). By participating in the referral program, you agree to the following terms.")}
          </p>

          {/* Eligibility */}
          <section className="mb-10">
            <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
              {t("Eligibility")}
            </h2>
            <p className="text-foreground/80">
              {t("The referral program is available to past, current or prospective participants of the Haven Language Program. Haven reserves the right to determine eligibility at its sole discretion.")}
            </p>
          </section>

          {/* Referral Rewards */}
          <section className="mb-10">
            <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
              {t("Referral Rewards")}
            </h2>
            <p className="text-foreground/80 mb-4">
              {t("Participants may receive promotional discounts when a referred individual successfully enrolls in the Haven Language Program.")}
            </p>
            <p className="text-foreground/80 mb-2">
              {t("To qualify for a referral reward:")}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-4">
              <li>{t("The referred individual must be a new participant in the Haven Language Program.")}</li>
              <li>{t("The referred individual must meet Haven's eligibility requirements for participation in the Haven Language Program, including but not limited to age requirements, eligibility as a newcomer affected by conflict, and any other program requirements established by Haven from time to time.")}</li>
              <li>{t("The referred individual must successfully enroll in HLP. Enrollment is considered successful once the individual has been accepted into the program and has paid any required deposit or program fees.")}</li>
              <li>{t("The referral must be tracked through Haven's referral system.")}</li>
            </ul>
            <p className="text-foreground/80">
              {t("Referral rewards are issued in the form of discount coupon codes that may be applied to Haven Language Program purchases.")}
            </p>
          </section>

          {/* Coupon Value and Use */}
          <section className="mb-10">
            <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
              {t("Coupon Value and Use")}
            </h2>
            <p className="text-foreground/80 mb-4">
              {t("Referral rewards have no cash value and may only be applied toward eligible Haven Language Program purchases.")}
            </p>
            <p className="text-foreground/80 mb-2">{t("Coupons:")}</p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              <li>{t("Cannot be exchanged for cash")}</li>
              <li>{t("Cannot be transferred or resold")}</li>
              <li>{t("Cannot be combined with other promotions unless explicitly stated by Haven")}</li>
            </ul>
          </section>

          {/* Referral Limits */}
          <section className="mb-10">
            <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
              {t("Referral Limits")}
            </h2>
            <p className="text-foreground/80 mb-4">
              {t("Haven may place limits on the number of referral rewards that a participant can earn. Haven reserves the right to cap or withhold rewards if referral activity appears excessive or inconsistent with the intended use of the program.")}
            </p>
            <p className="text-foreground/80">
              {t("Referral rewards are issued only for referrals that are properly tracked through Haven's referral system. Haven is not responsible for referrals that are not correctly recorded due to technical issues or user error.")}
            </p>
          </section>

          {/* Coupon Expiration */}
          <section className="mb-10">
            <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
              {t("Coupon Expiration")}
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              <li>{t("All referral coupons expire six (6) months after the date they are issued, unless otherwise specified.")}</li>
              <li>{t("Expired coupons cannot be reinstated or replaced.")}</li>
            </ul>
          </section>

          {/* Program Changes */}
          <section className="mb-10">
            <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
              {t("Program Changes")}
            </h2>
            <p className="text-foreground/80 mb-2">{t("Haven reserves the right to:")}</p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-4">
              <li>{t("Modify the referral program")}</li>
              <li>{t("Change reward amounts")}</li>
              <li>{t("Adjust eligibility requirements")}</li>
              <li>{t("Suspend or terminate the program")}</li>
            </ul>
            <p className="text-foreground/80">
              {t("At any time and at Haven's sole discretion.")}
            </p>
          </section>

          {/* Fraud and Abuse */}
          <section className="mb-10">
            <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
              {t("Fraud and Abuse")}
            </h2>
            <p className="text-foreground/80 mb-4">
              {t("Participants must use the referral program in good faith.")}
            </p>
            <p className="text-foreground/80 mb-2">{t("Any individual suspected of:")}</p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-4">
              <li>{t("Creating fake accounts")}</li>
              <li>{t("Referring themselves")}</li>
              <li>{t("Manipulating the referral system")}</li>
              <li>{t("Engaging in any form of fraudulent activity")}</li>
            </ul>
            <p className="text-foreground/80 mb-4">
              {t("may have their rewards revoked and may be removed from the Haven Language Program at Haven's discretion.")}
            </p>
            <p className="text-foreground/80">
              {t("Haven's determination of fraudulent activity is final.")}
            </p>
          </section>

          {/* Final Decision */}
          <section className="mb-10">
            <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
              {t("Final Decision")}
            </h2>
            <p className="text-foreground/80">
              {t("All decisions regarding referral eligibility, reward issuance, and program participation are made at Haven's sole discretion.")}
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
