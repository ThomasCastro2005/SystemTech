import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/panelAdministrador/menuAdmin.css'

export const MenuAdmin = () => {
    return (
        <>
            <div className='menuAdmin'>
                <div className='menuAdminOptions'>
                    <h4>Administrador</h4>
                    <Link to="/productos">Productos</Link>
                    <a href="#">Pedidos</a>
                </div>
            </div>
        </>
    )
}
