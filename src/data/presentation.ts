type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "kenneth.tran91@outlook.com",
  title: "Hi, I’m Kenneth Tran 👋",
  profile: "/portrait.jpg",
  description:
    "Xin chào, i'm a vietnamese *software engineer* with over *4 years* experience. Outside of work, you'll often find me on the soccer field, or immersed in the world of video gaming.",
  socials: [
    {
      label: "X",
      link: "https://twitter.com/bobbyisadog",
    },
    {
      label: "Linkedin",
      link: "https://www.linkedin.com/in/kennethtran91/",
    },
    {
      label: "Github",
      link: "https://github.com/kennethtran91",
    },
    {
      label: "Resume",
      link: "/[Software-Enginner]KennethTran.pdf",
    },
  ],
};

export default presentation;
