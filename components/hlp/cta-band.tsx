import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShieldCheck } from "lucide-react"

export function HLPCtaBand() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="font-sans font-bold text-2xl md:text-3xl text-[#26215C] mb-6">
          Start improving your English today.
        </h2>
        <Button 
          asChild 
          size="lg"
          className="bg-[#2457F1] hover:bg-[#2457F1]/90 text-white px-8 py-6 text-base mb-6"
        >
          <Link href="https://app.findhaven.org">Join Haven now</Link>
        </Button>
        <div className="flex items-center justify-center gap-2 text-[#26215C]/60 text-sm">
          <ShieldCheck className="w-4 h-4" />
          <span>
            Haven is a registered Canadian charity · Check us out on{" "}
            <Link 
              href="https://canadahelps.org" 
              className="underline hover:text-[#26215C]"
              target="_blank"
              rel="noopener noreferrer"
            >
              CanadaHelps
            </Link>
          </span>
        </div>
      </div>
    </section>
  )
}
