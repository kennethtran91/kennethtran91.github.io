export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "BookMe!",
    techs: ["Angular", "NodeJS", "ExpresJS", "MongoDB"],
    link: "https://github.com/kennethtran91/appointment-booking",
  },
  {
    title: "Mad Math",
    techs: ["JavaScript", "VueJS"],
    link: "https://github.com/kennethtran91/MadMath",
  }
];

export default projects;
