"use client"

import { useTranslation } from "@/lib/i18n"

export function RefundPolicyContent() {
  const { t } = useTranslation()

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
          {t("Haven Language Program — Refund Policy")}
        </h1>
        
        <p className="text-muted-foreground mb-12">
          {t("Last Updated: March 2026")}
        </p>

        <div className="prose prose-lg max-w-none">
          <p className="text-foreground/80 mb-8">
            {t("The Haven Language Program (HLP) provides structured language learning and conversation practice opportunities for refugees new to Canada. Due to the nature of the program and limited capacity, the following refund policy applies.")}
          </p>

          {/* General Policy */}
          <h2 className="font-heading text-2xl font-bold text-foreground mt-12 mb-4">
            {t("General Policy")}
          </h2>
          <p className="text-foreground/80 mb-4">
            {t("All Haven Language Program purchases are non-refundable once payment has been completed.")}
          </p>
          <p className="text-foreground/80 mb-8">
            {t("By enrolling in the Haven Language Program, participants acknowledge and agree that payments are final except in the limited circumstances outlined below.")}
          </p>

          {/* Program Cancellation by Haven */}
          <h2 className="font-heading text-2xl font-bold text-foreground mt-12 mb-4">
            {t("Program Cancellation by Haven")}
          </h2>
          <p className="text-foreground/80 mb-4">
            {t("If Haven cancels a program or is unable to deliver the program as scheduled, participants may be eligible for a refund.")}
          </p>
          <p className="text-foreground/80 mb-2">{t("In such cases:")}</p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li className="text-foreground/80">
              {t("Refunds will be issued using the original payment method")}
            </li>
            <li className="text-foreground/80">
              {t("Refunds will be processed within 30 days of cancellation")}
            </li>
          </ul>

          {/* Participant Withdrawal */}
          <h2 className="font-heading text-2xl font-bold text-foreground mt-12 mb-4">
            {t("Participant Withdrawal")}
          </h2>
          <p className="text-foreground/80 mb-4">
            {t("If a participant chooses to withdraw from the Haven Language Program after enrolling, refunds will generally not be issued.")}
          </p>
          <p className="text-foreground/80 mb-4">
            {t("Haven may, at its sole discretion, consider exceptional circumstances on a case-by-case basis.")}
          </p>
          <p className="text-foreground/80 mb-8">
            {t("Participation in the Haven Language Program does not guarantee specific outcomes, including language proficiency improvements, employment outcomes, or immigration-related results. Lack of perceived progress or outcomes does not qualify as grounds for a refund.")}
          </p>

          {/* Participant Removal */}
          <h2 className="font-heading text-2xl font-bold text-foreground mt-12 mb-4">
            {t("Participant Removal")}
          </h2>
          <p className="text-foreground/80 mb-4">
            {t("Haven reserves the right to remove participants from the Haven Language Program at any time if they fail to comply with program expectations or requirements.")}
          </p>
          <p className="text-foreground/80 mb-2">{t("This may include, but is not limited to:")}</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li className="text-foreground/80">
              {t("Repeated failure to attend scheduled classes with teachers")}
            </li>
            <li className="text-foreground/80">
              {t("Failure to participate in conversation practice with Canadian volunteers")}
            </li>
            <li className="text-foreground/80">
              {t("Failure to complete assigned homework or learning activities")}
            </li>
            <li className="text-foreground/80">
              {t("Failure to follow program guidelines or community standards")}
            </li>
            <li className="text-foreground/80">
              {t("Any other conduct that interferes with the effective delivery of the program")}
            </li>
          </ul>
          <p className="text-foreground/80 mb-4">
            {t("If a participant is removed from the Haven Language Program, refunds will generally not be issued.")}
          </p>
          <p className="text-foreground/80 mb-8">
            {t("Haven may, at its sole discretion, consider exceptional circumstances on a case-by-case basis.")}
          </p>

          {/* Scheduling and Participation */}
          <h2 className="font-heading text-2xl font-bold text-foreground mt-12 mb-4">
            {t("Scheduling and Participation")}
          </h2>
          <p className="text-foreground/80 mb-8">
            {t("Participants are responsible for attending scheduled sessions and participating in program activities. Missed sessions, scheduling conflicts, or personal circumstances do not qualify for refunds.")}
          </p>

          {/* Program Modifications */}
          <h2 className="font-heading text-2xl font-bold text-foreground mt-12 mb-4">
            {t("Program Modifications")}
          </h2>
          <p className="text-foreground/80 mb-8">
            {t("Haven reserves the right to make reasonable adjustments to the program structure, schedule, instructors, or content where necessary. Such adjustments do not qualify as grounds for a refund.")}
          </p>

          {/* Technical Issues */}
          <h2 className="font-heading text-2xl font-bold text-foreground mt-12 mb-4">
            {t("Technical Issues")}
          </h2>
          <p className="text-foreground/80 mb-8">
            {t("While Haven will make reasonable efforts to ensure a smooth learning experience, temporary technical disruptions or platform issues do not qualify for refunds.")}
          </p>

          {/* Discretion */}
          <h2 className="font-heading text-2xl font-bold text-foreground mt-12 mb-4">
            {t("Discretion")}
          </h2>
          <p className="text-foreground/80 mb-8">
            {t("All refund decisions are made at Haven's sole discretion, in accordance with this policy.")}
          </p>
        </div>
      </div>
    </section>
  )
}
