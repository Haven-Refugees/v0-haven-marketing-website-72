"use client"

import { useTranslation } from "@/lib/i18n"

const teachers = [
  { name: "Larysa Sokolovska", city: "Ottawa, Ontario", image: "/team/larysa-sokolovska.jpg" },
  { name: "Areej Alasadi", city: "Montreal, Quebec", image: "/team/areej-alasadi.png" },
  { name: "Horia Sardarzada", city: "Toronto, Ontario", image: "/team/horia-sardarzada.jpg" },
  { name: "Lidia Castro", city: "Montreal, Quebec", image: "/team/lidia-castro.png" },
  { name: "Olga Kasyan", city: "Winnipeg, Manitoba", image: "/team/olga-kasyan.png" },
  { name: "Anna Kovalenko", city: "Calgary, Alberta", image: "/team/anna-kovalenko.png" },
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
              <div className="w-[90px] h-[90px] rounded-full bg-[#D4CCF9] overflow-hidden mb-3">
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-full h-full object-cover"
                />
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
