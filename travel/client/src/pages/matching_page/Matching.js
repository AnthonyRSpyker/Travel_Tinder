import React, { useState } from "react"
// import { Link, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar"
import ProfileCard from "../../components/ProfileCard/ProfileCard"
// import API from "../../utils/API"
import "./matching_page.css"
import peopleSeeds from "../../scripts/seeds"

function Matching (){
    const [persons, setPersons] = useState(peopleSeeds);
    const [likedPersons, setLikedPersons] = useState([]);
    const [dislikedPersons, setDislikedPersons] = useState([])
    const activeUser = 0

    const removedPersonsFromDataSrc = (personsSrc, userId) =>
        personsSrc.filter(user => user.__id !== userId)

    const likedOrDisliked = (userId, action) => {
        
        const newPersons = [...persons];
        const newLikedPersons = [...likedPersons];
        const newDislikedPersons = [...dislikedPersons];
        console.log(persons[activeUser])

        switch (action) {
            case "ADD_TO_LIKED":
                if(!persons[activeUser].favs.includes(userId)){
                    newPersons[activeUser].favs.push(userId);
                    newLikedPersons.push(peopleSeeds[userId]);

                    setLikedPersons(newLikedPersons);
                    setPersons(removedPersonsFromDataSrc(persons, userId));
                }
                break;
            case "ADD_TO_DISLIKED":
                if(!persons[activeUser].dislikes.includes(userId)){
                    newPersons[activeUser].dislikes.push(userId);
                    newDislikedPersons.push(peopleSeeds[userId]);

                    setDislikedPersons(newLikedPersons);
                    setPersons(removedPersonsFromDataSrc(persons, userId))
                }
                break;
                default:
                    return persons;

        }
    }

        // const [users, setUsers] = useState([]);
    // const [matchUsers, setMatchUsers]= useState(null);
    // const {id}=useParams();
    
    // useEffect(() => {

    //     function loadUsers(){
    //         const {data}= API.getPerson(),{
    //             headers: {
    //                 user: id
    //             }
    //         }

    //         setUsers(data)
    //     }
    // })
    
    // const {id} = useParams()
    //   useEffect(() => {
    //     API.getPerson(id)
    //       .then(res => setPerson(res.data))
    //       .catch(err => console.log(err));
    //   }, [])

   

    return(
        <div>
            
        <Navbar />
            {persons[0] ? (
            <ProfileCard 
                key={persons[0].id}
                username={persons.username}
                age={persons.age}
                img={persons.img}
                person={persons[0]}
                likedOrDisliked={likedOrDisliked}


            />
            ) : (
                "There ain't no one there!"
            )}
        </div>



    )
}

export default Matching;