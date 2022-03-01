import AdminLayout from '@/components/Admin/Layout'

const Admin = () => {
    return (
        <AdminLayout title="Dashboard" label="Dashboard">
            <h1 className="text-5xl font-extrabold text-blue-700">
                Markaz Knowledge City
            </h1>
            <h3 className="text-2xl font-bold">Admin Panel</h3> <br /> <br />
            <img src="/assets/img/admin.svg" width="400px" alt="" />
        </AdminLayout>
    );
}
 
export default Admin;