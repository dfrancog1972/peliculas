import React from 'react'
import Menu from '../Home/Home'
import Productos from '../Productos/Productos'
import { Outlet } from 'react-router-dom'

export default function Home() {
return (
    <>
    <Menu/>
    <Outlet/>
    </>
)
}
