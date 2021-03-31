import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom"
import { Wrapper, Form, Label, Input, Select, Submit} from "../../../Forms/formStyle"
import { Heading } from "./editStyle"

const Edit = (props)=>{
    const id = props.match.params.id;
    const [publication, setPublication] = useState({});
    const [cities, setCities] = useState([]);
    const [sports, setSports] = useState([]);
    const [redirect, setRedirect] = useState("");

    const [nameOfUser, setNameOfUser] = useState("");
    const [sport, setSport]=useState("Football")
    const [date, setDate]=useState("")
    const [description, setDescription]=useState("")
    const [peopleNeeded, setPeopleNeeded]=useState(0)
    const [phoneNumber, setPhoneNumber]=useState("")
    const [city, setCity]=useState("Sofia")
    const [imgUrl, setImgUrl]=useState("")

    useEffect(()=>{
        fetch(`http://localhost:5000/api/publications/${id}`)
            .then(res=>res.json())
            .then(data=>{
                setPublication(data.publication);
                setNameOfUser(data.publication.nameOfUser);
                setDate(data.publication.date);
                setDescription(data.publication.description);
                setPeopleNeeded(data.publication.peopleNeeded);
                setPhoneNumber(data.publication.phoneNumber);
                setImgUrl(data.publication.imgUrl);

            });

        fetch("http://localhost:5000/api/utils/cities")
            .then(res => res.json())
            .then((data) => {
                setCities(data.cities);
            })
            .catch(err => console.log(err));

        fetch("http://localhost:5000/api/utils/sports")
            .then(res => res.json())
            .then((data) => {
                setSports(data.sports);
            })
            .catch(err => console.log(err));
    },[]);

    const onEditHandler = (e) => {
        e.preventDefault();
        
        fetch(`http://localhost:5000/api/publications/${id}`, {
            credentials: "include",
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                nameOfUser,
                sport,
                date,
                description,
                peopleNeeded: Number(peopleNeeded),
                phoneNumber,
                city,
                imgUrl
            })
        })
            .then(response => response.json())
            .then(data => {
                if (data.message) throw data.message;
                console.log('Success:', data);
                setRedirect(`/details/${id}`);
            })
            .catch(err => {
                console.log(err);
            });
    };

    if (redirect.length>0) {
        return <Redirect to= {redirect}/>
    }

    return (
        <>
        <Heading>Edit your publication</Heading>
        <Wrapper>
                <Form onSubmit={onEditHandler}>
                    <Label htmlFor="nameOfUser">Name of creator:</Label>
                    <Input type="text" name="nameOfUser" id="nameOfUser" defaultValue={publication.nameOfUser} onChange={(e)=>setNameOfUser(e.target.value)}  />

                    <Label htmlFor="description">Short description:</Label>
                    <Input type="text" name="description" id="description" defaultValue={publication.description}  onChange={(e)=>setDescription(e.target.value)}/>

                    <Label htmlFor="date">Date:</Label>
                    <Input type="datetime-local" name="date" id="date" onChange={(e)=>setDate(e.target.value)} />

                    <Label htmlFor="peopleNeeded">People needed:</Label>
                    <Input type="number" min="1" max="20" name="peopleNeeded" id="peopleNeeded" defaultValue={publication.peopleNeeded} onChange={(e)=>setPeopleNeeded(e.target.value)} />

                    <Label htmlFor="sport">Choose sport:</Label>
                    <Select name="sport" id="sport" onChange={(e)=>setSport(e.target.value)}>
                        {sports.map((sport) => <option key={sport} value={sport}> {sport} </option>)}
                    </Select>

                    <Label htmlFor="city">Choose your city:</Label>
                    <Select name="city" id="city" onChange={(e)=>setCity(e.target.value)}>
                        {cities.map((city) => <option key={city} value={city}> {city} </option>)}
                    </Select>

                    <Label htmlFor="phoneNumber">Phone number:</Label>
                    <Input type="text" name="phoneNumber" id="phoneNumber" defaultValue={publication.phoneNumber}  onChange={(e)=>setPhoneNumber(e.target.value)}/>

                    <Label htmlFor="imgUrl">Image Url:</Label>
                    <Input type="text" name="imgUrl" id="imgUrl" defaultValue={publication.imgUrl}  onChange={(e)=>setImgUrl(e.target.value)}/>

                    <Submit className="activity-submit" value="Create" />
                </Form>
            </Wrapper>
        </>
    );
}

export default Edit