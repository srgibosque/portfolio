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
    link: "https://www.linkedin.com/in/sergibosqueirodenas/",
    text: "LinkedIn",
  },
  {
    link: "https://github.com/srgibosque",
    text: "Github",
  },
];

const Footer = () => {
  return (
    <footer className="flex flex-row md:items-center gap-8 md:gap-4 py-8 px-5 border-t-1 border-secondary-300 dark:border-secondary-dark-300 mt-12 text-sm">
      <h3 className="text-secondary-400 dark:text-secondary-dark-400 text-sm uppercase tracking-widest">
        Contact me
      </h3>
      <ul className="flex flex-col md:flex-row gap-4">
        {links.map((link) => {
          return (
            <li
              className="flex items-center gap-2 hover:underline font-mono text-sm"
              key={link.text}
            >
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
              <a href={link.link} target="_blank">{link.text}</a>
            </li>
          );
        })}
      </ul>
    </footer>
  );
};

export default Footer;
