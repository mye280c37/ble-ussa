import {
  IconAperture,
  IconCopy,
  IconLayoutDashboard,
  IconChartBar,
  IconBuildingStore,
  IconHistory,
  IconLogin,
  IconMoodHappy,
  IconTypography,
  IconUserPlus,
} from "@tabler/icons-react";

import { uniqueId } from "lodash";

const Menuitems = [
  {
    navlabel: true,
    subheader: "Home",
  },

  {
    id: uniqueId(),
    title: "통계",
    icon: IconChartBar,
    href: "/dashboard",
  },
  {
    id: uniqueId(),
    title: "상품 관리",
    icon: IconBuildingStore,
    href: "/dashboard/products-management",
  },
  {
    id: uniqueId(),
    title: "사용자 로그",
    icon: IconHistory,
    href: "/dashboard/user-logs",
  },
  {
    navlabel: true,
    subheader: "Auth",
  },
  {
    id: uniqueId(),
    title: "Login",
    icon: IconLogin,
    href: "/authentication/login",
  },
  {
    id: uniqueId(),
    title: "Register",
    icon: IconUserPlus,
    href: "/authentication/register",
  },
];

export default Menuitems;
