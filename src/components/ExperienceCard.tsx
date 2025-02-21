interface ExperienceCardProps {
    title: string;
    place: string;
    period: string;
    company: string;
    link: string;
}

const ExperienceCard = ({title, place, company, period, link}:  ExperienceCardProps) => {
  return (
    <div>
        <div>
            <h3><a href={link}>{title}</a></h3>
            <p>{company} | {place}</p>
        </div>
        <p>{period}</p>
    </div>
  )
}

export default ExperienceCard