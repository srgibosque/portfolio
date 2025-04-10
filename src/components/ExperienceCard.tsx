interface ExperienceCardProps {
  title: string;
  place: string;
  period: string;
  company: string;
  link: string;
}

const ExperienceCard = ({ title, place, company, period, link }: ExperienceCardProps) => {
  return (
    <div className="flex flex-row gap-4">
      <div className="flex flex-col gap-2 basis-3/4">
        <h3 className="text-sm">{title}</h3>
        <p className="text-sm text-secondary-400 dark:text-secondary-dark-400 font-light"><a href={link} target="_blank" className="hover:underline">{company}</a> | {place}</p>
      </div>
      <p className="basis-1/4 text-sm text-secondary-400 dark:text-secondary-dark-400 font-light">{period}</p>
    </div>
  )
}

export default ExperienceCard