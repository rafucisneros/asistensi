import React, { useEffect, useRef, Fragment } from 'react'
import { useRouter } from 'next/router'
import { editUser, getUser } from '../../../api/users'
import Link from 'next/link'
import Layout from '../../../components/Layout'

const UserDetails = () => {
  const router = useRouter()
  const { user_id } = router.query
  const form = useRef(null)

  useEffect(async () => {
    if(user_id){
      let userRequested = await getUser(user_id)
      if(userRequested){
        form.current.username.value = userRequested.username
        form.current.name.value = userRequested.name
        form.current.email.value = userRequested.email
        form.current.phone.value = userRequested.phone
        form.current.website.value = userRequested.website
      } else { // User = null, error in request
        router.push("../users")
      }
    }
  }, [user_id])

  const handleUpdateUser = async user => {
    const formData = new FormData(form.current)
    let json = {}
    formData.forEach((value, key) => json[key] = value)
    if(confirm("Seguro que desea editar este usuario?")){
      if(await editUser(json)){
        alert("Actualizado exitosamente")
        router.push("/users")
      } else {
        alert("No se pudo actualizar el usuario")
      }
    }
  }

  return (
    <Layout>
      <div>
        { !user_id ? (
          <h1>Cargando usuario {user_id}...</h1>
        ): (
          <Fragment>
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
              <h1>Editando al Usuario {user_id}</h1>
            </div>
            <div className="flex flex-col items-center">
              <form ref={form} className="w-3/4 flex flex-col justify-center items-center p-4 bg-gray-100">
                <div className="w-full flex m-2">
                  <label className="w-1/2" htmlFor="username">Usuario:</label>
                  <input className="w-1/2" type="text" name="username"/>
                </div>
                <div className="w-full flex m-2">
                  <label className="w-1/2" htmlFor="name">Nombre:</label>
                  <input className="w-1/2" type="text" name="name"/>
                </div>
                <div className="w-full flex m-2">
                  <label className="w-1/2" htmlFor="email">Correo:</label>
                  <input className="w-1/2" type="text" name="email"/>
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
                    type="button" onClick={handleUpdateUser}
                  >
                    Actualizar
                  </button>
                </div> 
              </form>   
            </div>
          </Fragment>
        ) }
      </div>
    </Layout>
  )
}

export default UserDetails
