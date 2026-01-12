
import "../index.css"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";



function Stories() {
  const [Stories, setStories] = useState([]);
  const navigate = useNavigate();
  let tot = 0;

  useEffect(() => {
    fetch("http://localhost:3000/story")
      .then(data => data.json())
      .then(data => setStories(data))
      .catch(err => console.log(err))
  }, []
  )
  return (
    <>
      <div className='story  d-flex my-1'>
        <div className="d-none">
          {tot = Stories.length}
        </div>
        {
          Stories.length > 0 ? (
            Stories.map((story) => (
              <div key={story.id} className="mx-3 " onClick={() => navigate(`/story/${story.id}/${tot}`)}>
                <div className="gratient-border">
                  <img src={story.user.profilePicture} alt="dp" className="story-dp rounded-circle" />

                </div>
                <p className="text-truncate" style={{ width: "50px" }}>{story.user.username}</p>
              </div>
            )

            )

          ) : (
            <p>Loading</p>
          )
        }
      </div>

    </>

  )
}

export default Stories;