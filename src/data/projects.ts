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
    title: "Let Me Cook AI",
    techs: ["Angular, Gemini API"],
    link: "https://kennethtran91.github.io/let-me-cook-ai",
    description: "An intelligent web application designed to turn your available ingredients into delicious recipes using AI recommendation.",
    image: "https://i.imgur.com/n1DiiOY.png"
  },
   {
    title: "Sweet Land PWA",
    techs: ["Angular","Firebase","ExpressJS","NodeJS"],
    link: "https://github.com/kennethtran91/sweet-land-pwa",
    description: "Simple POS system for small shops owners to manage products and sales.",
    image: "https://imgur.com/Owws8em.png"
  },
  {
    title: "BookMe!",
    techs: ["Angular","MongoDB","ExpressJS","NodeJS"],
    link: "https://github.com/kennethtran91/appointment-booking",
    description: "Web app to schedule appointments using MEAN Stacks",
    image: "https://imgur.com/wvHESVX.png"
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
