

import AdminLayout from '@/components/Admin/Layout'
import { useRouter } from 'next/router';

const Blog = () => {
    const router = useRouter();
    return (
        <AdminLayout title="Blog">
           <div className="flex justify-between">
               <div></div>
               <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">New Blog</button>
           </div>
        </AdminLayout>
    );
}
 
export default Blog;
