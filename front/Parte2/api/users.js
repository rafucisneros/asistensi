const url = "https://jsonplaceholder.typicode.com"

export const getUsers = async () => {
  let users = null
  try {
    let request = await fetch(`${url}/users`)
    if(!request.ok){
      throw new Error(request.statusText)
    }
    users = await request.json()
  } catch (ex) {
    console.error(ex)
    alert("Ocurrio un error")
  }
  return users
} 

export const getUser = async (user_id) => {
  let user = null
  try {
    let request = await fetch(`${url}/users/${user_id}`)
    if(!request.ok){
      throw new Error(request.statusText)
    }
    user = await request.json()
  } catch (ex) {
    console.error(ex)
    alert("Ocurrio un error")
  }
  return user
} 

export const deleteUser = async (user_id) => {
  let result = false
  try {
    let request = await fetch(`${url}/users/${user_id}`, {
      method: "DELETE"
    })
    if(!request.ok){
      throw new Error(request.statusText)
    }
    result = true
  } catch (ex) {
    console.error(ex)
    alert("Ocurrio un error")
  }
  return result
} 

export const editUser = async user => {
  let result = false
  try {
    let request = await fetch(`${url}/users/${user.id}`, {
      method: "PUT",
      body: JSON.stringify(user),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    })
    if(!request.ok){
      throw new Error(request.statusText)
    }
    result = true
  } catch (ex) {
    console.error(ex)
    alert("Ocurrio un error")
  }
  return result
} 

export const addUser = async user => {
  let result = false
  try {
    let request = await fetch(`${url}/users`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    })
    if(!request.ok){
      throw new Error(request.statusText)
    }
    result = true
  } catch (ex) {
    console.error(ex)
    alert("Ocurrio un error")
  }
  return result
}