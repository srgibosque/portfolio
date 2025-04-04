import { motion } from "motion/react";
import ExperienceCard from "../components/ExperienceCard";
import PersonalInfo from "../components/PersonalInfo";
import SectionTitle from "../components/sectionTitle";

function ResumePage() {

  return (
    <div className="flex flex-col gap-10 lg:flex-row lg:gap-12">

      <PersonalInfo
        name="Sergi Bosque i Ródenas"
        city="Barcelona"
        country="Catalunya"
        birthdate={new Date(1998, 6, 10)}
      />

      <motion.div
        className="flex flex-col gap-10 md:gap-18 md:w-full"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >

        <section className="flex flex-col gap-8">
          <SectionTitle text="Professional experience" />
          <div className="flex flex-col gap-8">
            <ExperienceCard
              title="UX/UI designer & Industrial design engineer"
              company="Idneo"
              place="Mollet del Vallès"
              period="Oct. 2023 - Currently working"
              link="/" />

            <ExperienceCard
              title="Junior mechanical engineer"
              company="Technip Energies "
              place="Barcelona"
              period="Jan. 2023 - Sep. 2023"
              link="/" />

            <ExperienceCard
              title="Operations project coordinator"
              company="CaixaBank Paymennts & Consumers"
              place="Barcelona"
              period="Oct. 2022 - Des. 2022"
              link="/" />

            <ExperienceCard
              title="UX & Service design intern"
              company="The Argonauts"
              place="Antwerp, Belgium"
              period="Feb. 2022 - May. 2022"
              link="/" />
          </div>
        </section>

        <section className="flex flex-col gap-8">
          <SectionTitle text="Education" />
          <div className="flex flex-col gap-8">
            <ExperienceCard
              title="Master's degree in web development"
              company="Universitat Oberta de Catalunya"
              place="Online"
              period="Feb. 2023 - Feb. 2025"
              link="/" />

            <ExperienceCard
              title="Postgraduate in space and service design"
              company="Thomas More University of Applied Sciences"
              place="Mechelen, Belgium"
              period="Oct. 2022 - Des. 2023"
              link="/" />

            <ExperienceCard
              title="Bachelor's degree in industrial design and product development engineering"
              company="Universitat Politècnica de Catalunya"
              place="Terrassa"
              period="Sep. 2016 - Jul. 2020"
              link="/" />
          </div>
        </section>


      </motion.div>

    </div>


  )
}

export default ResumePage;
