import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import UserCard from '@/components/userCard'
import {useState} from 'react'

import AddUserForm from '@/components/addUserForm'
import EditUserForm from '@/components/editUserForm'
import Box from '@mui/material/Box';
import {v4 as uuidv4} from 'uuid';
import { AnySrvRecord } from 'dns'
const inter = Inter({ subsets: ['latin'] })



export default function  Home() {
//ESTATE
const[users,setUsers]=useState([
{id: uuidv4(), nome:'el nombre nuevo', 
img: "https://bootdey.com/img/Content/avatar/avatar4.png" 
}])

//AddUser
const AddUser=(user:any)=>{
  user.id = uuidv4()
  setUsers([
    ...users,user
  ])
}
//eliminar usuario
//leer datos , en este caso se hace desde el array pero 

const deleteUser=(id:any)=> {
const arrayFiltrado = users.filter(user=>user.id !== id)
  setUsers(arrayFiltrado);
}

const[editing,setEditing]=useState(false)
const[currentUser,setCurrentUser]=useState({ 
  id: null , name:'', img:''
})

const  editRow=(user:any)=>{
  setEditing(true);
  setCurrentUser({
    id: user.id , name:user.name, img:user.img
  })
}

const updateUser=(id:any,updateUser:any)=>{
  setEditing(false);
  setUsers(users.map(user =>(user.id ===id ? 
updateUser:user)))
}



  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by 
create next app" />
        <meta name="viewport" content="width=device-
width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>

      

<UserCard users={users} 
deleteUser={deleteUser}
editRow={editRow}
></UserCard>
<h1>Crud with form </h1>


{
  editing ?(
    <Box>
<h1>Edit</h1>
<EditUserForm 
currentUser={currentUser}
updateUser={updateUser}
></EditUserForm>
</Box>) : (
<Box>
  <h1>add</h1>
  <AddUserForm AddUser={AddUser} />
  </Box>
  )
}

      </main>
    </>
  )
}



































































































































































