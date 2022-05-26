import React from "react"
import EventCard from "./event-card"

const Events = () => {
  const events = [
    {
      title: "Summer Academy",
      asset: "/assets/summer_academy.png",
      description:
        "A TIMES egy esettanulmányi verseny, ahol az ESTIEMerek és barátaik egyaránt versenyezhetnek hasonlóan kvalifikált társaikkal. A verseny angolul folyik és semmilyen elektronikai eszköz nem használható hozzá, a résztvevőknek így a leghasznosabb eszközük a korábban megszerzett tudásuk. A helyi Local Qualification után a nyertes csapat továbbjut a Semi Finalre, majd a Final-re, ahol már a külföldi csapatokkal kell összemérniük a tudásukat.",
    },
    {
      title: "Activity Week",
      asset: "/assets/activity_week.png",
      description:
        "A TIMES egy esettanulmányi verseny, ahol az ESTIEMerek és barátaik egyaránt versenyezhetnek hasonlóan kvalifikált társaikkal. A verseny angolul folyik és semmilyen elektronikai eszköz nem használható hozzá, a résztvevőknek így a leghasznosabb eszközük a korábban megszerzett tudásuk. A helyi Local Qualification után a nyertes csapat továbbjut a Semi Finalre, majd a Final-re, ahol már a külföldi csapatokkal kell összemérniük a tudásukat.",
    },
    {
      title: "LG Exchange",
      asset: "/assets/lg_exchange.png",
      description:
        "A TIMES egy esettanulmányi verseny, ahol az ESTIEMerek és barátaik egyaránt versenyezhetnek hasonlóan kvalifikált társaikkal. A verseny angolul folyik és semmilyen elektronikai eszköz nem használható hozzá, a résztvevőknek így a leghasznosabb eszközük a korábban megszerzett tudásuk. A helyi Local Qualification után a nyertes csapat továbbjut a Semi Finalre, majd a Final-re, ahol már a külföldi csapatokkal kell összemérniük a tudásukat.",
    },
    {
      title: "Europe 3D",
      asset: "/assets/e3d.png",
      description:
        "A TIMES egy esettanulmányi verseny, ahol az ESTIEMerek és barátaik egyaránt versenyezhetnek hasonlóan kvalifikált társaikkal. A verseny angolul folyik és semmilyen elektronikai eszköz nem használható hozzá, a résztvevőknek így a leghasznosabb eszközük a korábban megszerzett tudásuk. A helyi Local Qualification után a nyertes csapat továbbjut a Semi Finalre, majd a Final-re, ahol már a külföldi csapatokkal kell összemérniük a tudásukat.",
    },
    {
      title: "TIMES",
      asset: "/assets/times.png",
      description:
        "A TIMES egy esettanulmányi verseny, ahol az ESTIEMerek és barátaik egyaránt versenyezhetnek hasonlóan kvalifikált társaikkal. A verseny angolul folyik és semmilyen elektronikai eszköz nem használható hozzá, a résztvevőknek így a leghasznosabb eszközük a korábban megszerzett tudásuk. A helyi Local Qualification után a nyertes csapat továbbjut a Semi Finalre, majd a Final-re, ahol már a külföldi csapatokkal kell összemérniük a tudásukat.",
    },
    {
      title: "Vision",
      asset: "/assets/vision.png",
      description:
        "A TIMES egy esettanulmányi verseny, ahol az ESTIEMerek és barátaik egyaránt versenyezhetnek hasonlóan kvalifikált társaikkal. A verseny angolul folyik és semmilyen elektronikai eszköz nem használható hozzá, a résztvevőknek így a leghasznosabb eszközük a korábban megszerzett tudásuk. A helyi Local Qualification után a nyertes csapat továbbjut a Semi Finalre, majd a Final-re, ahol már a külföldi csapatokkal kell összemérniük a tudásukat.",
    },
    {
      title: "Business Booster",
      asset: "/assets/businessbooster.png",
      description:
        "A TIMES egy esettanulmányi verseny, ahol az ESTIEMerek és barátaik egyaránt versenyezhetnek hasonlóan kvalifikált társaikkal. A verseny angolul folyik és semmilyen elektronikai eszköz nem használható hozzá, a résztvevőknek így a leghasznosabb eszközük a korábban megszerzett tudásuk. A helyi Local Qualification után a nyertes csapat továbbjut a Semi Finalre, majd a Final-re, ahol már a külföldi csapatokkal kell összemérniük a tudásukat.",
    },
    {
      title: "Academic Days",
      asset: "/assets/academic_days.png",
      description:
        "A TIMES egy esettanulmányi verseny, ahol az ESTIEMerek és barátaik egyaránt versenyezhetnek hasonlóan kvalifikált társaikkal. A verseny angolul folyik és semmilyen elektronikai eszköz nem használható hozzá, a résztvevőknek így a leghasznosabb eszközük a korábban megszerzett tudásuk. A helyi Local Qualification után a nyertes csapat továbbjut a Semi Finalre, majd a Final-re, ahol már a külföldi csapatokkal kell összemérniük a tudásukat.",
    },
  ]

  return (
    <div className="flex flex-col items-center justify-center py-12">
      {/* <p className="mb-8 text-4xl font-bold">Eseményeink</p> */}
      <div className="grid gap-x-4 gap-y-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {events.map((event) => (
          <EventCard key={event.title} {...event} />
        ))}
      </div>
    </div>
  )
}

export default Events
