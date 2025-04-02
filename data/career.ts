export const careersData: Career[] = [
  // {
  //   id: "wordpress-developer",
  //   title: "Wordpress Developer",
  //   experience: "2 Years",
  //   deadline: "2021-05-08",
  // },
  // {
  //   id: "customer-service-representative",
  //   title: "Customer Service Representative",
  //   experience: "1-3 Years",
  //   deadline: "2025-02-20",
  // },
  // {
  //   id: "growth-marketer",
  //   title: "Growth Marketer",
  //   experience: "3-5 Years",
  //   deadline: "2025-02-20",
  // },
  {
    id: "personal-assistant-to-ceo",
    title: "Personal Assistant to CEO",
    experience: "2+ Years",
    deadline: "2025-05-30",
  },
];

export interface Career {
  id: string;
  title: string;
  experience: string;
  deadline: string;
}