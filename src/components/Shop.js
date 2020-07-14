import React,{ useState, useEffect} from 'react'
import '../App.css';
import axios from 'axios'
import {Link} from 'react-router-dom'



export const Shop = () => {
useEffect(() => {
    fetchUsers()
    // fetchItems()
},[])

    const [users, setUsers] = useState([])

    //server doesnt work

    // const fetchItems = async () => {
    //     const data = await fetch('https://fortnite-public-api.theapinetwork.com/prod09/store/get')
    //     const items = await data.json()
    //     console.log(items)
    // }

    const fetchUsers = () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            const users = response.data
            // console.log(users)
            setUsers(users)
        })
    }


    return (
        <div>
            <h1>Customers name</h1>
            <div>
                {users.map(user => (
                    <h3 key={user.id}>
                        <Link to={`/shop/${user.id}`}>{user.name}</Link>
                        
                        </h3>
                ))}
            </div>
        </div>
    )
}
