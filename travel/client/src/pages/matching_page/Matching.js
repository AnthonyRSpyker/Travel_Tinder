import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar"
import ProfileCard from "../../components/ProfileCard/ProfileCard"
import API from "../../utils/API"
import "./matching_page.css"


function Matching (props){
    
    const [users, setUsers] = useState([]);
    const [matchUsers, setMatchUsers]= useState(null);
    const {id}=useParams();
    
    useEffect(() => {

        function loadUsers(){
            const {data}= API.getPerson(),{
                headers: {
                    user: id
                }
            }

            setUsers(data)
        }
    })
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