import { FaWallet, FaMoneyBillTransfer } from "react-icons/fa6";
import { MdOutlineEventNote } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

export const fMenuLink = [
    {
      label: "Home",
      icon: <FaWallet />,
      slug: "/dashboard",
    },
    {
      label: "Send",
      icon: <FaMoneyBillTransfer />,
      slug: "/dashboard/send-to-friends",
    },
    {
      label: "Request",
      icon: <MdOutlineEventNote />,
      slug: "/dashboard/request",
    },
    {
      label: "Activity",
      icon: <CgProfile />,
      slug: "/dashboard/activity",
    },
  ];