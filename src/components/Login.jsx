import Header from './Header'
import '../styles/login.css'
import img from '../assets/loginImgs/img.png'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Swal from 'sweetalert2'
import { useAuth } from '../context/AuthContext'
import { toast } from 'react-toastify'


export const Login = () => {

  const usertoLog = {
    email: 'Admin@zentech.com',
    password: '1234567890'
  }

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const { login } = useAuth();

  const envioForm = (e) => {
    e.preventDefault()

    if (email === usertoLog.email && password === usertoLog.password) {
      toast.success("Ha Iniciado sesión Exitosamente", {
        position: "top-right",
        autoClose: 3000,
      });

      localStorage.setItem("user", JSON.stringify({
        email: usertoLog.email,
        rol: "admin",
        isAuthenticated: true
      }));
      login();
      navigate('/panelAdministrador')
    } else {
      Swal.fire({
        title: '❌ Error',
        text: 'El correo o la contraseña son incorrectos',
        icon: 'error',
        confirmButtonText: 'Reintentar'
      })
    }

  }


  return (
    <>
      <Header />
      <div className='loginContainer'>
        <div className='loginSubContainer'>
          <div className='loginBienvenidos'>
            <img src={img} alt="Bienvenidos Img" />
            <h1>Bienvenidos</h1>
          </div>

          <div className='loginAutenticacion'>
            <form method="post" onSubmit={envioForm}>

              <h2>Iniciar Sesión</h2>
              <div className='loginInputEmail'>
                <label>Email:</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className='loginInputPassword'>
                <label>Contraseña</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className='loginButton'>
                <button className='button' type="submit" >Iniciar Sesion</button>
              </div>

              <div className='notAccount'>
                <a href="#">¿No tienes una cuenta?</a>
                <a href="#">Olvide mi contraseña</a>
              </div>

            </form>
          </div>
        </div>
      </div>
    </>
  )
}
