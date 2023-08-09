import homeIcon from "../assets/icons/home_svg.svg";
import sendMoneyIcon from "../assets/icons/send_money_svg.svg";
import productsIcon from "../assets/icons/products_svg.svg";
import moreIcon from "../assets/icons/more_svg.svg";

interface dashboardLink {
  id: string;
  imgUrl: string;
  text: string;
  url: string;
}

export const dashboardLinks: dashboardLink[] = [
  {
    id: "1",
    imgUrl: homeIcon,
    text: "Home",
    url: "",
  },
  {
    id: "2",
    imgUrl: sendMoneyIcon,
    text: "Send Money",
    url: "sendmoney",
  },
  {
    id: "1",
    imgUrl: productsIcon,
    text: "Products",
    url: "products",
  },
  {
    id: "1",
    imgUrl: moreIcon,
    text: "More",
    url: "more",
  },
];
