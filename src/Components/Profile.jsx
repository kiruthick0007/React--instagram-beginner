import React from 'react'
import axios from "axios"
import { useState, useEffect } from "react"




function Profile() {
  const [profile, setProfile] = useState(null);
  const [followers, setFollowers] = useState([]);
  const [ unfollowed , setUnFollowed ] = useState(0);


  useEffect(() => {
    axios.get("http://localhost:3000/profile")
      .then(data => setProfile(data.data))
      .catch(err => console.log(err))

    axios.get("http://localhost:3000/followers")
      .then(data => setFollowers(data.data))
      .catch(err => console.log(err))

  }, [unfollowed])

  function HandleOnChange(e) {
    setProfile(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))

  }


  const handleUpdate = async () => {
    axios.put("http://localhost:3000/profile", profile)
      .then(() => console.log("updated"))
      .catch(err => console.log(err))
  }

  const handleUnfollow = (id) =>{
    axios.delete(`http://localhost:3000/followers/${id}`)
    .then( alert("Unfollowed"))
    .then(setUnFollowed(!unfollowed))
    .catch(err => console.log(err))
  }

  return ( 

      <div className='m-5'> 

        {profile ? (
          <div  >
            <div>
            <img src={profile.profilePicture} alt="profile" className='profile rounded-circle' />
            <h5>{profile.username}</h5>
            </div>
            <input type="text"
              value={profile.username}
              name="username" className='form-control my-4' onChange={HandleOnChange}
            />

            <input type="text" name="profilePicture" onChange={HandleOnChange}
              value={profile.profilePicture} className='form-control my-4'
            />
            <button className='btn btn-primary my-4' onClick={() => handleUpdate()}>
              Update
            </button>


          </div>
           


        ) : (

          <div>Loading ...</div>
        )}

        {
          followers.length > 0 ? (
            followers.map(follower => (
              <div key={follower.id} className='d-flex my-2'>{follower.username} 
                <button onClick={() => handleUnfollow(follower.id)} className='btn btn-secondary ms-auto'>Unfollow</button>
              </div>
            ))

          ) : (
            <div>Loading Followers...</div>
          )
        }



      </div>
  
  )
}

export default Profile