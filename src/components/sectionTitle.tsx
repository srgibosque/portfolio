interface sectionTitleProps {
    text: string;
}

const sectionTitle = ({text}: sectionTitleProps) => {
  return (
    <h2 className="text-secondary-400 text-sm uppercase tracking-widest py-3 border-b-1 border-secondary-300">{text}</h2>
  )
}

export default sectionTitle