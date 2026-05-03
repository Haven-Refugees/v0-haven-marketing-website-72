"use client"

import { useTranslation } from "@/lib/i18n"

const teachers = [
  { initials: "T1", name: "Teacher Name", city: "City, Canada" },
  { initials: "T2", name: "Teacher Name", city: "City, Canada" },
  { initials: "T3", name: "Teacher Name", city: "City, Canada" },
  { initials: "T4", name: "Teacher Name", city: "City, Canada" },
  { initials: "T5", name: "Teacher Name", city: "City, Canada" },
  { initials: "T6", name: "Teacher Name", city: "City, Canada" },
  { initials: "T7", name: "Teacher Name", city: "City, Canada" },
]

export function Teachers() {
  const { t } = useTranslation()

  return (
    <section className="py-16 md:py-20 bg-[#F0EEFE]">
      <div className="max-w-[900px] mx-auto px-6">
        <h2 className="font-sans font-bold text-[32px] text-foreground mb-4 text-center">
          {t("Our teachers.")}
        </h2>
        <p className="text-[17px] text-muted-foreground max-w-[700px] mx-auto mb-12 text-center">
          {t("Haven's language program is supported by 30+ professional ESL teachers across Canada. Many are refugees themselves — a special advantage for lower-level students who benefit from learning with a teacher from their community who speaks their language.")}
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-10">
          {teachers.map((teacher, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-[90px] h-[90px] rounded-full bg-[#D4CCF9] flex items-center justify-center mb-3">
                <span className="text-[#6B4EFF] text-xl font-medium">
                  {teacher.initials}
                </span>
              </div>
              <p className="text-sm font-medium text-foreground">
                {teacher.name}
              </p>
              <p className="text-sm text-muted-foreground">
                {teacher.city}
              </p>
            </div>
          ))}

          {/* "And many more" slot */}
          <div className="flex flex-col items-center text-center">
            <div className="w-[90px] h-[90px] rounded-full border-2 border-dashed border-[#6B4EFF] flex items-center justify-center mb-3">
              <span className="text-[#6B4EFF] text-xl font-medium">
                30+
              </span>
            </div>
            <p className="text-sm font-medium text-foreground">
              {t("And many more")}
            </p>
            <p className="text-sm text-muted-foreground">
              {t("Across Canada")}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
