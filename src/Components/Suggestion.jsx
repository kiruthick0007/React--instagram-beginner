import { useState, useEffect } from "react";
import axios from "axios"

function Suggestion() {
  const [profile, setProfile] = useState(null);
  const [suggestions, setSuggestions] = useState([]);


  useEffect(() => {
    fetch("http://localhost:3000/profile")
      .then(res => res.json())
      .then(data => setProfile(data))
      .catch(err => console.log(err));

    fetch("http://localhost:3000/suggestions")
      .then(res => res.json())
      .then(data => setSuggestions(data))
      .catch(err => console.log(err));
  }, []);

  const handleFollow = async (id, username) => {
    axios.post("http://localhost:3000/followers", { "id": id, "username": username })
      .then(alert("followed"))
      .catch(err => console.log(err))
  }



  return (
    <>
      <div>
        <div className="suggestions w-75 m-4">

          {profile ? (
            <div className="d-flex align-items-center">
              <img
                className="dp rounded-circle"
                src={profile.profilePicture}
                alt="Profile"
              />
              <h5 className="ms-2">{profile.username}</h5>
              <small className="ms-auto text-primary">Switch</small>
            </div>
          ) : (
            <div>Loading Profile...</div>
          )}

          <div className="d-flex mt-3">
            <b>Suggested for you</b>
            <b className="ms-auto">See All</b>
          </div>


          {suggestions.length > 0 ? (
            suggestions.map(suggestion => (
              <div className="my-3" key={suggestion.id}>
                <div className="d-flex align-items-center">
                  <img
                    className="dp rounded-circle"
                    src={suggestion.profilePicture}
                    alt="Profile pic"
                  />
                  <h6 className="ms-2">{suggestion.username}</h6>
                  <a onClick={() => handleFollow(suggestion.id, suggestion.username)} className="ms-auto text-primary " >Follow</a>

                </div>
              </div>
            ))
          ) : (
            <div>Loading suggestions...</div>
          )}
        </div>
      </div>
    </>
  );
}

export default Suggestion;
