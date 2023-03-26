import React from 'react'
 
function Card({ user }) {
    return (
        <div>
            <div className="card my-2 mx-2" style={{ width: '18em',height:"230px"}}>
                <div className="card-body">
                    <p className="card-text">Name : {user.name.firstname} {user.name.lastname}</p>
                    <p className="card-text">User Name : {user.username}</p>
                    <p className="card-text">Email : {user.email}</p>
                    <p className="card-text">Phone : {user.phone}</p>
                    <p className="card-text">Adress : {user.address.city} {user.address.street} {user.address.number} </p>
                </div>
            </div>
        </div>
    )
}

export default Card