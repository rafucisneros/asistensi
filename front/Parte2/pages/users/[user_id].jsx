import React, { useState, useEffect, Fragment } from 'react'
import { useRouter } from 'next/router'
import { getUser } from '../../api/users'
import Link from 'next/link'
import Layout from '../../components/Layout'

const UserDetails = () => {
  const router = useRouter()
  const [ user, setUser ] = useState(null)
  const { user_id } = router.query

  useEffect(async () => {
    if(user_id){
      let userRequested = await getUser(user_id)
      if(userRequested){
        setUser(userRequested)
      } else { // User = null, error in request
        router.push("../users")
      }
    }
  }, [user_id])

  return (
    <Layout>

      <div>
        { !user ? (
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
              <h1>Detalles del usuario {user_id}</h1>
            </div>
            <div className="flex justify-center">
              <div className="w-1/2 flex">
                <div className="w-1/2">
                  <ul>
                    <li>Usuario:</li>
                    <li>Nombre:</li>
                    <li>Correo:</li>
                    <li>Dirección:</li>
                    <li>Teléfono:</li>
                    <li>Sitio Web:</li>
                    <li>Compañia:</li>
                  </ul>
                </div>
                <div className="w-1/2">
                  <ul>
                    <li>{user.username}</li>
                    <li>{user.name}</li>
                    <li>{user.email}</li>
                    <li>{[user.address.street, user.address.suite, user.address.city].join(", ")}</li>
                    <li>{user.phone}</li>
                    <li>{user.website}</li>
                    <li>{user.company.name}</li>
                  </ul>
                </div>
              </div>
            </div>
          </Fragment>
        ) }
      </div>
    </Layout>
  )
}

export default UserDetails
