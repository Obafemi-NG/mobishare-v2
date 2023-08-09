import sendMoneyIcon from "../assets/icons/send_money_blue.svg";
import payBillIcon from "../assets/icons/paybill_icon.svg";
import buyGiftCardIcon from "../assets/icons/buy_gift_card.svg";
import buyGoodsIcon from "../assets/icons/buy_goods_icon.svg";

interface quickActionDataModel {
  id: string;
  action: string;
  icon: string;
}

export const quickActionData: quickActionDataModel[] = [
  {
    id: "1",
    action: "Send Money",
    icon: sendMoneyIcon,
  },
  {
    id: "2",
    action: "Paybill",
    icon: payBillIcon,
  },
  {
    id: "3",
    action: "Buy Gift Card",
    icon: buyGiftCardIcon,
  },
  {
    id: "4",
    action: "Buy Goods and Services",
    icon: buyGoodsIcon,
  },
];
