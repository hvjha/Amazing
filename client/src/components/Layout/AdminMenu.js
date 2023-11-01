import React from 'react'
import { NavLink } from 'react-router-dom'

import '../../../src/style/adminStyle/adminMenu.css'

const AdminMenu = () => {
  return (
    <>

  

    <div className='admin-navbar-1'>

 
  
  <NavLink to="/dashboard/admin/create-category" className="admin-link">Create Category</NavLink>
  <NavLink to="/dashboard/admin/create-product" className="admin-link">Create Product</NavLink>
  <NavLink to="/dashboard/admin/products" className="admin-link">Products</NavLink>
  <NavLink to="/dashboard/admin/orders" className="admin-link">Orders</NavLink>
  <NavLink to="/dashboard/admin/users" className="admin-link">Users</NavLink>
</div>
    

      
    </>
  )
}

export default AdminMenu
