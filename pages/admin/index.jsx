import AdminLayout from "@/components/Admin/Layout";
import {
  BiMessageDetail,
  BiBriefcase,
  BiEdit,
  BiHomeAlt,
} from "react-icons/bi";
import { GiNewspaper } from "react-icons/gi";
import {
  RiPagesLine,
  RiLuggageDepositLine,
  RiFileEditLine,
} from "react-icons/ri";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BsBookHalf } from "react-icons/bs";
import { HiOutlinePhotograph } from "react-icons/hi";

import Head from "next/head";
import { useRouter } from "next/router";

const Admin = () => {
  const icoClass = "text-minigreen-700 text-3xl mb-2";
  const menuItems = [
    {
      title: "Messages",
      icon: <BiMessageDetail className={icoClass} />,
      to: "/admin/messages",
    },
    {
      title: "Blogs",
      icon: <RiPagesLine className={icoClass} />,
      to: "/admin/blog",
    },
    {
      title: "News",
      icon: <GiNewspaper className={icoClass} />,
      to: "/admin/news",
    },
    {
      title: "CityPulse",
      icon: <BsBookHalf className={icoClass} />,
      to: "/admin/citypulse",
    },
    {
      title: "Gallery",
      icon: <HiOutlinePhotograph className={icoClass} />,
      to: "/admin/gallery",
    },
    {
      title: "Career",
      icon: <BiBriefcase className={icoClass} />,
      to: "/admin/career",
    },
    {
      title: "Job Positions",
      icon: <RiLuggageDepositLine className={icoClass} />,
      to: "/admin/career/positions",
    },
    {
      title: "Customize Site",
      icon: <BiEdit className={icoClass} />,
      to: "/admin/customize",
    },
    {
      title: "Edit Contents",
      icon: <RiFileEditLine className={icoClass} />,
      to: "/admin/customize/contents",
    },
    {
      title: "Edit Homepage",
      icon: <BiHomeAlt className={icoClass} />,
      to: "/admin/customize/home",
    },
    {
      title: "Edit About Page",
      icon: <AiOutlineInfoCircle className={icoClass} />,
      to: "/admin/customize/about",
    },
  ];

  return (
    <AdminLayout title="Dashboard" label="Dashboard">
      <Head>
        <title>Admin Panel - Markaz Knowledge City</title>
      </Head>
      <section className="grid xl:grid-cols-3 xl:w-8/12">
        {menuItems.map((menuItem) => (
          <Singletem
            title={menuItem.title}
            icon={menuItem.icon}
            to={menuItem.to}
          />
        ))}
      </section>
    </AdminLayout>
  );
};

export default Admin;

export const Singletem = (props) => {
  const router = useRouter();

  return (
    <div
      className="dashBox p-4 shadow-lg bg-gray-50 m-3 rounded-lg  border-2 border-minigreen-800"
      onClick={() => router.push(props.to)}
    >
      {props.icon}
      <h1 className="text-xl  rounded-lg text-gray-400">{props.title}</h1>
    </div>
  );
};
