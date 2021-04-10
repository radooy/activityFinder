import { useContext, useState } from "react";
import { FilterWrapper, FilterParagraph, Select } from "./filterStyle";
import { Button } from "../../mainStyle";
import ActivitiesPreview from "../Home/Activities/ActivitiesPreview";
import { NoActivitiesDiv } from "../Home/Activities/activitiesStyle";
import DataContext from "../../../Contexts/DataContext";
import toast from "react-hot-toast";

const Filter = (props) => {
    const [sportsButtonVisible, setSportsButtonVisible] = useState(true);
    const [citiesButtonVisible, setCitiesButtonVisible] = useState(true);
    const [cities, setCities] = useState([]);
    const [sports, setSports] = useState([]);
    const [currentCity, setCurrentCity] = useState("Sofia");
    const [currentSport, setCurrentSport] = useState("Football");
    const [publications, setPublications] = useState([]);
    const [showNoActivities, setShowNoActivities] = useState(false);

    const dataContext = useContext(DataContext);

    const onCitiesButtonClickHandler = () => {
        setSportsButtonVisible(false);
        setCities(dataContext.cities);
    };

    const onSportsButtonClickHandler = () => {
        setCitiesButtonVisible(false);
        setSports(dataContext.sports);
    };

    const onResetButtonClickHandler = () => {
        setSportsButtonVisible(true);
        setCitiesButtonVisible(true);
        setPublications([]);
        setShowNoActivities(false);
        setCurrentCity("Sofia");
        setCurrentSport("Football");
    };

    const onCitySelectHandler = (e) => {
        setCurrentCity(e.target.value);
    };

    const onSportSelectHandler = (e) => {
        setCurrentSport(e.target.value);
    };

    const onBackClickHandler = ()=>{
        props.history.goBack();
    };

    const onGoButtonClickHandler = () =>{
        if(sportsButtonVisible){
            fetch(`http://localhost:5000/api/publications/filter?sport=${currentSport}`,{
                credentials:"include"
            }).then(res=>res.json())
            .then(data=>{
                if (data.message) throw data.message
                data.publications.length===0 ? setShowNoActivities(true) : setShowNoActivities(false);
                data.publications.length===0 && toast.error("Sorry, no activities by this criteria",{
                    icon: "🥺",
                    duration:2000
                })
                setPublications(data.publications);
            })
            .catch(err=>console.log(err));
        }else{
            fetch(`http://localhost:5000/api/publications/filter?city=${currentCity}`,{
                credentials:"include"
            }).then(res=>res.json())
                .then(data=>{
                    if (data.message) throw data.message
                    data.publications.length===0 ? setShowNoActivities(true) : setShowNoActivities(false);
                    data.publications.length===0 && toast.error("Sorry, no activities by this criteria",{
                        icon: "🥺",
                        duration:2000
                    })
                   setPublications(data.publications)
                })
                .catch(err=>console.log(err));
        };
    };
    
    return (
        <>
        <FilterWrapper>

            <FilterParagraph>Filter by:</FilterParagraph>

            {citiesButtonVisible && 
            <Button className="select-btn" onClick={onCitiesButtonClickHandler}>City</Button>
            }

            {!sportsButtonVisible && 
            <Select onChange={(e) => onCitySelectHandler(e)} >
                    {cities.map(city=> <option key={city} value={city}>{city}</option>)}
            </Select>}

            {sportsButtonVisible && 
            <Button className="select-btn" onClick={onSportsButtonClickHandler}>Sports</Button> 
            }

            {!citiesButtonVisible && 
            <Select onChange={(e) => onSportSelectHandler(e)}>
                    {sports.map(sport=> <option key={sport} value={sport}>{sport}</option>)}
            </Select>}
            
            {(!citiesButtonVisible || !sportsButtonVisible) && <>
            <Button className="go-btn" onClick={onGoButtonClickHandler}>GO!</Button>
            <Button className="reset-btn" onClick={onResetButtonClickHandler}>Reset</Button>
            </>
            }

            <Button className="back-btn" onClick={onBackClickHandler}>Back</Button>

        </FilterWrapper>

        {publications.length>0 && <ActivitiesPreview state={publications}/>}

        {showNoActivities && <NoActivitiesDiv>There are currently no activities found by the given criteria</NoActivitiesDiv>}
        </>
    );
};

export default Filter