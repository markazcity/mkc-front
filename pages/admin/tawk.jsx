import AdminLayout from '@/components/Admin/Layout'

import Head from 'next/head'
import Iframe from 'react-iframe'
import { useEffect } from 'react'

const Tawk = () => {
    useEffect(() => {
        var cc = document.getElementById('tawk');
        cc.style.minHeight=window.innerHeight-70 + "px";
    
    },[])


    return (
        <AdminLayout title="Tawk Panel" label="Tawk" fullScreen={true}>
            <Head>
                <title>Tawl Chat Panel</title>
            </Head>
            <section className="">
            <Iframe url="https://dashboard.tawk.to/"
            width="100%"
            height='100%'
        id="tawk"
      
       
        display="initial"
        position="relative"/>
            </section>
        </AdminLayout>
    );
}
 
export default Tawk;

