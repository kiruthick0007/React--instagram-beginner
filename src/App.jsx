import React from 'react'
import Sidebar from './Components/Sidebar.jsx'
import Feed from './Components/Feed.jsx'
import Suggestion from './Components/Suggestion.jsx'

function App() {
  return (
    <div className='d-flex vh-100'>
      <div className='w-20'><Sidebar /></div>
      <div className='w-50 '><Feed/></div>
      <div className='w-30'><Suggestion /></div>
    </div>
  )
}

export default App;