import React, { useState, useRef, Fragment } from 'react'
import { useRouter } from 'next/router'
import { addUser } from '../../api/users'
import Link from 'next/link'
import Layout from '../../components/Layout'

const UserDetails = () => {
  const router = useRouter()
  const form = useRef(null)

  const handleAddUser = async (event) => {
    event.preventDefault()
    const formData = new FormData(form.current)
    let json = {}
    formData.forEach((value, key) => json[key] = value)
    if(await addUser(json)){
      alert("Agregado Exitosamente")
      router.push("/users")
    } else {
      alert("No se pudo agregar el usuario")
    }
  }

  return (
    <Layout>

      <div>
        <div className="flex justify-start">
          <Link href="/users">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
              type="button"
            >
              Volver
            </button>
          </Link>
        </div>
        <div className="flex justify-center">
          <h1>Agregar Usuario</h1>
        </div>
        <div className="flex flex-col items-center">
          <form 
            ref={form} 
            className="w-3/4 flex flex-col justify-center items-center p-4 bg-gray-100"
            onSubmit={handleAddUser}
          >
            <div className="w-full flex m-2">
              <label className="w-1/2" htmlFor="username">Usuario:</label>
              <input className="w-1/2" type="text" name="username" required/>
            </div>
            <div className="w-full flex m-2">
              <label className="w-1/2" htmlFor="name">Nombre:</label>
              <input className="w-1/2" type="text" name="name" required/>
            </div>
            <div className="w-full flex m-2">
              <label className="w-1/2" htmlFor="email">Correo:</label>
              <input className="w-1/2" type="text" name="email" required/>
            </div>
            {/* <div className="w-full flex m-2">
              <label className="w-1/2">Dirección:</label>
              <input className="w-1/2" type="text" name="address"/>
            </div> */}
            <div className="w-full flex m-2">
              <label className="w-1/2" htmlFor="phone">Teléfono:</label>
              <input className="w-1/2" type="text" name="phone"/>
            </div>
            <div className="w-full flex m-2">
              <label className="w-1/2" htmlFor="website">Sitio Web:</label>
              <input className="w-1/2" type="text" name="website"/>
            </div>
            {/* <div>
              <label className="w-1/2">Compañia:</label>
              <input className="w-1/2" type="text"/>
            </div> */}
            <div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
                type="submit"
              >
                Agregar
              </button>
            </div> 
          </form>   
        </div>
      </div>
    </Layout>
  )
}

export default UserDetails
