export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
  description?: string;
  image?: string;
};

const projects: Project[] = [
  {
    title: "BookMe!",
    techs: ["Angular","MongoDB","ExpressJS","NodeJS"],
    link: "https://github.com/kennethtran91/appointment-booking",
    description: "Web app to schedule appointments using MEAN Stacks",
    image: "https://imgur.com/wvHESVX.png"
  },
  {
    title: "Mad Math",
    techs: ["VueJS"],
    link: "https://github.com/kennethtran91/MadMath",
    description: "JavaScript game for kid learning how to do basic math.",
    image: "https://i.imgur.com/zNWnuwJ.jpg"
  },
  {
    title: "Math Bingo",
    techs: ["JavaScript"],
    link: "https://kennethtran91.github.io/math-bingo/",
    description: "Simple game for kids learning addition.",
    image: "https://i.imgur.com/DDxtZrU.png"
  }
];

export default projects;
