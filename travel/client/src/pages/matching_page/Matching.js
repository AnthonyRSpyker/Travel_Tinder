import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar"
import ProfileCard from "../../components/ProfileCard/ProfileCard"
import API from "../../utils/API"
import "./matching_page.css"


function Matching (props) {
    
    const [person, setPerson] = useState({})
    
    const {id} = useParams()
      useEffect(() => {
        API.getPerson(id)
          .then(res => setPerson(res.data))
          .catch(err => console.log(err));
      }, [])

    return(
        <div>
            
        <Navbar />
            <ProfileCard 
                img = {person.img}
                username = {person.username}

            />
        </div>



    )
}

export default Matching;