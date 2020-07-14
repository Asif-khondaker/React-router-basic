import React,{ useState, useEffect} from 'react'
import axios from 'axios'

function CustomerDetails({ match }) {
    useEffect(() => {
        fetchUser()
        // console.log(match)
    },[])

    const [user, setUser] = useState({
        address: {}
    })



    const fetchUser = () => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${match.params.id}`)
        .then(response => {
            const user = response.data
            setUser(user)
            console.log(user)
        })

    }
    return (
        <div>
            <h1>{user.name}</h1>
    <h1>Address:<br/> Street-{user.address.street} <br/> Suit-{user.address.suite}<br/> Zip code-{user.address.zipcode} </h1>
        </div>
    )
}

export default CustomerDetails
