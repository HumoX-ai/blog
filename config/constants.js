import { BiHomeAlt, BiCategoryAlt } from "react-icons/bi";
import { SiCodersrank } from "react-icons/si";
export const navItems = [
  {
    route: "/",
    label: "Bosh sahifa",
    icon: <BiHomeAlt />,
  },
  {
    id: 2,
    route: "/category",
    label: "Kategoriya",
    icon: <BiCategoryAlt />,
  },
  {
    id: 3,
    route: "/blog",
    label: "Men haqimda",
    icon: <SiCodersrank />,
  },
];
