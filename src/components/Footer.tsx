interface Link {
  link: string;
  text: string;
}

const links: Link[] = [
  {
    link: "mailto:sergibosquerodenas@gmail.com",
    text: "Email",
  },
  {
    link: "/",
    text: "LinkedIn",
  },
  {
    link: "/",
    text: "Github",
  },
]

const Footer = () => {

  return (
    <footer className="flex flex-row items-center gap-4 py-8 px-5 border-t-1 border-secondary-300 mt-12 text-sm">
      <h3 className="text-secondary-400 text-sm uppercase tracking-widest">Contact me</h3>
      <ul className="flex flex-wrap gap-2">
        {links.map((link) => {
          return (
            <li className="hover:text-secondary-400" key={link.text}>
              <a href={link.link}>{link.text}</a>
            </li>
          )
        })}
      </ul>
    </footer>
  )
}

export default Footer