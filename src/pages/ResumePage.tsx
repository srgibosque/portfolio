import ExperienceCard from "../components/ExperienceCard";
import SectionTitle from "../components/sectionTitle";

function ResumePage() {

  return (
    <section>
      <SectionTitle text="Professional experience" />
      <div>
        <ExperienceCard
          title="UX/UI designer & Industrial design engineer"
          company="Idneo" 
          place="Mollet del Vallès"
          period="Oct. 2022 - Des. 2023"
          link="/" />
      </div>
    </section>
  )
}

export default ResumePage;
