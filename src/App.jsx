// lets learn about 
// 1. use API in react.

import { Suspense, use } from 'react'
import './App.css'
import Friends from './friends.jsx'

let fetchUsers = fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())

// try with async await
let fetchFriends = async() => {
  let res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
} 
function App() {
  let friendPromise = fetchFriends();
  return (
    <>
    <Suspense fallback = {<h2>Loading</h2>}>
      <Users fetchUsers = {fetchUsers}>
      </Users>
    </Suspense>
    <Suspense fallback = {<h2>loading</h2>}>
      <Users2 fetchUsers2 = {fetchUsers2}></Users2>
    </Suspense>
    <Suspense fallback={<h2>Friends are comming for treat!</h2>}>
      <Friends friendPromise = {friendPromise}> </Friends>
    </Suspense>
    </>
  )
}
let Users = ( {fetchUsers} ) => {
  const users = use(fetchUsers);
  console.log(users);
  return (
    <>
    <h1>Hellow suspanse</h1>
    <h1>hellow useApi</h1>
    <h2>{users[0].name}</h2>
    </>
  )
}
let fetchUsers2 = fetch("https://jsonplaceholder.typicode.com/posts")
  .then(res=>res.json());

  let Users2 = ({fetchUsers2}) => {
    let users = use(fetchUsers2);
    console.log(users)
    return (
      <>
      <h1>hellow world</h1>
      </>
    )
  }
let friends = fetch("")
.then(res => res.json());

export default App
