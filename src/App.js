import React, { useEffect, useState } from 'react'

import './App.css'
import api from './services/api'

function App() {
    const [profiles, setProfiles] = useState([])

    useEffect(() => {
        async function loadProfiles() {
            const response = await api.get('https://randomuser.me/api/?results=10', {

            })
            setProfiles(response.data.results)
        }
        loadProfiles()
    }, [])

    return (
        <div className="main-container">

                {profiles.length > 0 ? (
                    <ul>
                             
                {profiles.map(profile =>(
                     <li key={profile.phone} >
                     <img src={profile.picture.large} />
                     <footer>
                         <strong>{profile.name.first}</strong>
                         <p>{profile.gender}</p>
                     </footer>
                 </li>
  
                ))}
               
                    </ul>
                ) : (
                    <div className="empty">Você chegou ao fim :( </div>
                )}
    
        </div>
    )
}

export default App;