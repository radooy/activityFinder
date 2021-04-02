import { useState } from "react"
import { FilterWrapper, FilterParagraph, Select } from "./filterStyle"
import { Button } from "../../mainStyle"
import ActivitiesPresentation from "../Home/AcctivitiesSection/ActivitiesPresentation"

const Filter = (props) => {
    let [sportsButton, setSportsButton] = useState(true);
    let [citiesButton, setCitiesButton] = useState(true);
    let [cities, setCities] = useState([]);
    let [sports, setSports] = useState([]);
    let [currentCity, setCurrentCity] = useState("Sofia");
    let [currentSport, setCurrentSport] = useState("Football");
    let [publications, setPublications] = useState([]);

    const onCitiesButtonClick = () => {
        setSportsButton(false);

        fetch("http://localhost:5000/api/utils/cities")
            .then(res => res.json())
            .then((data) => {
                setCities(data.cities);
            })
            .catch(err => console.log(err));
    }

    const onSportsButtonClick = () => {
        setCitiesButton(false);

        fetch("http://localhost:5000/api/utils/sports")
            .then(res => res.json())
            .then((data) => {
                setSports(data.sports);
            })
            .catch(err => console.log(err));
    }

    const onResetButtonClick = () => {
        setSportsButton(true);
        setCitiesButton(true);
        setPublications([]);
    }

    const onCitySelectHandler = (e) => {
        setCurrentCity(e.target.value)
    }

    const onSportSelectHandler = (e) => {
        setCurrentSport(e.target.value)
    }

    const onBackClickHandler = ()=>{
        props.history.goBack();
    }

    const onGoButtonClick = () =>{
        if(sportsButton){
            fetch(`http://localhost:5000/api/publications/filter?sport=${currentSport}`,{
                credentials:"include"
            }).then(res=>res.json())
            .then(data=>{
                if (data.message) throw data.message
                setPublications(data.publications);
            })
            .catch(err=>console.log(err))
        }else{
            fetch(`http://localhost:5000/api/publications/filter?city=${currentCity}`,{
                credentials:"include"
            }).then(res=>res.json())
                .then(data=>{
                    if (data.message) throw data.message
                   setPublications(data.publications)
                })
                .catch(err=>console.log(err))
        }
    }
    
    return (
        <>
        <FilterWrapper>

            <FilterParagraph>Filter by:</FilterParagraph>

            {citiesButton && 
            <Button className="select-btn" onClick={onCitiesButtonClick}>City</Button>
            }

            {!sportsButton && 
            <Select onChange={(e) => onCitySelectHandler(e)} >
                    {cities.map(city=> <option key={city} value={city}>{city}</option>)}
            </Select>}

            {sportsButton && 
            <Button className="select-btn" onClick={onSportsButtonClick}>Sports</Button> 
            }

            {!citiesButton && 
            <Select onChange={(e) => onSportSelectHandler(e)}>
                    {sports.map(sport=> <option key={sport} value={sport}>{sport}</option>)}
            </Select>}

            
            
            {(!citiesButton || !sportsButton) && <>
            <Button className="go-btn" onClick={onGoButtonClick}>GO!</Button>
            <Button className="reset-btn" onClick={onResetButtonClick}>Reset</Button>
            </>
            }
            

            <Button className="back-btn" onClick={onBackClickHandler}>Back</Button>

        </FilterWrapper>
        {publications.length>0 && <ActivitiesPresentation state={publications}/>}
        </>
    )
}
export default Filter