import AdminLayout from '@/components/Admin/Layout'
import {BiMessageDetail, BiBriefcase} from 'react-icons/bi'
import {RiPagesLine} from 'react-icons/ri'
import {AiOutlineFileAdd} from 'react-icons/ai'
import {BsBookHalf} from 'react-icons/bs'

import Head from 'next/head'
import {useRouter} from 'next/router'

const Admin = () => {
    const icoClass = "text-minigreen-700 text-3xl mb-2";
    const menuItems = [
        {title:"View Blogs", icon:<RiPagesLine className={icoClass}/>, to:"/admin/blog"},
        {title:"New Blog", icon:<AiOutlineFileAdd className={icoClass}/>, to:"/admin/blog/new"},
        {title:"CityPulse", icon:<BsBookHalf className={icoClass}/>, to:"/admin/blog/new"},
        {title:"Messages", icon:<BiMessageDetail className={icoClass}/>, to:"/admin/messages"},
        {title:"Career", icon:<BiBriefcase className={icoClass}/>, to:"/admin/career"},
    ];


    return (
        <AdminLayout title="Dashboard" label="Dashboard">
            <Head>
                <title>Admin Panel - Markaz Knowledge City</title>
            </Head>
            <section className="grid xl:grid-cols-3 xl:w-8/12">
            {
                menuItems.map((menuItem) =>
                     <Singletem 
                     title={menuItem.title}
                     icon={menuItem.icon}
                     to={menuItem.to}
                     />   
                    
                )
            }
            </section>
        </AdminLayout>
    );
}
 
export default Admin;

export const Singletem = (props)=>{
    const router = useRouter();


    return (
        <div className="dashBox p-8 shadow-lg bg-gray-50 m-3 rounded-lg  border-2 border-minigreen-800"
        onClick={()=>
            router.push(props.to)}
        >
            {props.icon}
            <h1 className="text-2xl font-bold rounded-lg ">{props.title}</h1>
        </div>
    )
}