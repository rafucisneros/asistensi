import React, { useState, useEffect, Fragment } from 'react'
import { getUsers, deleteUser } from '../api/users'
import Link from 'next/link'
import Layout from '../components/Layout'

const users = () => {
  const [ users, setUsers ] = useState([])

  const handleDeleteUser = async (user_id) => {
    if(confirm("Seguro que desea eliminar este usuario?")){
      if(await deleteUser(user_id)){
        alert("Eliminado exitosamente")
        setUsers(users.filter(x => x.id !== user_id))
      } else {
        alert("No se pudo eliminar el usuario")
      }
    }
  }

  useEffect(async () => {
    let listRequested = await getUsers()
    if(listRequested){
      setUsers(listRequested)
    } else { // User = null, error in request
      router.push("/")
    }
  }, [])

  return (
    <Layout>
      {!users.length ? (
        <div>
          <h1>Cargando</h1>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center">
          <h1>Usuarios</h1>
          <div className="flex w-full">
            <Link href="/users/add">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
                type="button"
              >
                Agregar Usuario
              </button>
            </Link>
          </div> 
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Usuario
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nombre
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Correo
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  City
                </th>
                <th>

                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.map( user => (
                <tr className="hover:bg-gray-100" key={`user-${user.id}`}>
                  <td className="px-2">{user.username}</td>
                  <td className="px-2">{user.name}</td>
                  <td className="px-2">{user.email}</td>
                  <td className="px-2">{user.address.city}</td>
                  <td className="px-2">
                    <Link href={`users/${user.id}`}>
                      <a className="px-2 text-indigo-600 hover:text-indigo-900">Detalle</a>
                    </Link>
                    <Link href={`users/edit/${user.id}`}>
                      <a className="px-2 text-indigo-600 hover:text-indigo-900">Editar</a>
                    </Link>
                    <a className="px-2 text-red-600 hover:text-red-600 cursor-pointer" 
                      onClick={()=>{handleDeleteUser(user.id)}}
                    >
                      Eliminar
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
      }
    </Layout>
  )
}

export default users
