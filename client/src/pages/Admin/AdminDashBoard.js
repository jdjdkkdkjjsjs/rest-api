import React from 'react'
import AdminMenu from '../../components/Layout/AdminMenu';
import Layout from './../../components/Layout/Layout';
import { useAuth } from '../../context/auth';

const AdminDashBoard = () => {
    const [auth] = useAuth()

    return (
        <Layout>
            <div className='container-fluid mt-5'>
                <div className='row'>
                    <div className='col-md-3'>
                        <AdminMenu/>
                    </div>
                    <div className='col-md-9'>
                        <div className='card p-4'>
                            <h2 className='mb-4'>Admin Dashboard</h2>
                            <div className='admin-info'>
                                <p><strong>Admin Name:</strong> {auth?.user.name}</p>
                                <p><strong>Admin Email:</strong> {auth?.user.email}</p>
                                <p><strong>Admin Contact:</strong> {auth?.user.phone}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default AdminDashBoard
