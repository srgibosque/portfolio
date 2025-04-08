import { motion } from "motion/react";
import ExperienceCard from "../components/ExperienceCard";
import PersonalInfo from "../components/PersonalInfo";
import SectionTitle from "../components/sectionTitle";
import Button from "../components/Button";

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
              link="https://www.idneo.com/"
            />

            <ExperienceCard
              title="Junior mechanical engineer"
              company="Technip Energies"
              place="Barcelona"
              period="Jan. 2023 - Sep. 2023"
              link="https://www.ten.com/en"
            />

            <ExperienceCard
              title="Operations project coordinator"
              company="CaixaBank Payments & Consumers"
              place="Barcelona"
              period="Oct. 2022 - Des. 2022"
              link="https://www.caixabankpc.com/es/"
            />

            <ExperienceCard
              title="UX & Service design intern"
              company="The Argonauts"
              place="Antwerp, Belgium"
              period="Feb. 2022 - May. 2022"
              link="https://www.theargonauts.eu/"
            />
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
              link="https://www.uoc.edu/ca"
            />

            <ExperienceCard
              title="Postgraduate in space and service design"
              company="Thomas More University of Applied Sciences"
              place="Mechelen, Belgium"
              period="Oct. 2022 - Des. 2023"
              link="https://thomasmore.be/en"
            />

            <ExperienceCard
              title="Bachelor's degree in industrial design and product development engineering"
              company="Universitat Politècnica de Catalunya"
              place="Terrassa"
              period="Sep. 2016 - Jul. 2020"
              link="https://www.upc.edu/ca"
            />
          </div>
        </section>

        <Button
          label="Open resume in PDF"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="11"
              height="10"
              viewBox="0 0 11 10"
              fill="none"
            >
              <path
                d="M10 9.1087V0.5M10 0.5H1.3913M10 0.5L1 9.5"
                stroke="currentColor"
              />
            </svg>
          }
          onClick={() => {
            window.open("/pdfs/CV_SergiBosque_UI.pdf", "_blank");
          }}
        />
      </motion.div>
    </div>
  );
}

export default ResumePage;
