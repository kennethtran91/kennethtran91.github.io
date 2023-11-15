export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
  description?: string;
};

const projects: Project[] = [
  {
    title: "BookMe!",
    techs: ["MEAN Stacks"],
    link: "https://github.com/kennethtran91/appointment-booking",
    description: "Web app to schedule appointments using MEAN Stacks"
  },
  {
    title: "Mad Math",
    techs: ["JavaScript", "VueJS"],
    link: "https://github.com/kennethtran91/MadMath",
    description: "JavaScript game for kid learning how to do basic math."
  },
  {
    title: "Math Bingo",
    techs: ["JavaScript"],
    link: "https://kennethtran91.github.io/math-bingo/",
    description: "Simple game for kids learning addition."
  }
];

export default projects;
