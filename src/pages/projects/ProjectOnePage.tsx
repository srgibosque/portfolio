import ProjectDetail from "../../components/ProjectDetail";
import SectionTitle from "../../components/sectionTitle";
import projects from "../../assets/data/projects";
import designLines from "../../assets/img/mythra/DesignLines-01.jpg";
import general from "../../assets/img/mythra/01-General.jpg";
import context from "../../assets/img/mythra/03-Context.jpg";
import gun from "../../assets/img/mythra/05-Laser-handle-design.jpg";
import handleDetail from "../../assets/img/mythra/04-Handle-detail.jpg";

const ProjectOnePage = () => {
  return (
    <ProjectDetail
      image={projects[0].imageUrl}
      title={projects[0].title}
      subtitle={projects[0].subtitle}
      description={projects[0].description}
      year={projects[0].year}
    >
      <article className="flex flex-col gap-8">
        <section className="flex flex-row items-center gap-4">
          <div className="basis-3/4">
            <img src={designLines} alt="front and left view sketched on top" />
          </div>
          <ul className="flex flex-col gap-2 basis-1/4 font-medium">
            <li>Fluidity.</li>
            <li>Dinamism.</li>
            <li>Organic design.</li>
            <li>Modernity.</li>
            <li>Simplicity.</li>
          </ul>
        </section>
        <section className="flex flex-col gap-4">
          <SectionTitle text="Features" />
          <p>
            Myhrta's thoughtful details include a front-integrated handle for
            effortless transport, a holster for secure storage of the Diode
            laser handle, a tool tray and front drawer for organization, and an
            automatic LED light for enhanced visibility in low-light settings.
          </p>
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="lg:basis-1/2">
              <img src={general} alt="Isometric view of teh Mythra product" className="w-full h-full object-cover" />
            </div>
            <div className="lg:basis-1/2">
              <img src={context} alt="Mythra product located in a clinic" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-4">
          <SectionTitle text="Ergonomics and protection" />
          <p>
            Designed with long workdays in mind, Myhrta reduces user fatigue
            through balanced weight distribution, intuitive handle design, and
            an angled touchscreen that supports natural posture—making
            treatments more comfortable and less strenuous.
          </p>
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="lg:basis-1/2">
              <img src={gun} alt="Isometric view of teh Mythra product" className="w-full h-full object-cover" />
            </div>
            <div className="lg:basis-1/2">
              <img src={handleDetail} alt="Mythra product located in a clinic" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>
      </article>
    </ProjectDetail>
  );
};

export default ProjectOnePage;
