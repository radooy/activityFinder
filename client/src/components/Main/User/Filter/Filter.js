import { useState } from "react";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import ActivitiesPreview from "../Home/Activities/ActivitiesPreview";
import { NoActivitiesDiv } from "../Home/Activities/activitiesStyle";
import { FilterWrapper, FilterParagraph, Select } from "./filterStyle";
import { Button } from "../../mainStyle";

const Filter = (props) => {
    const [sportsButtonVisible, setSportsButtonVisible] = useState(true);
    const [citiesButtonVisible, setCitiesButtonVisible] = useState(true);
    const [currentCity, setCurrentCity] = useState("Sofia");
    const [currentSport, setCurrentSport] = useState("Football");
    const [publications, setPublications] = useState([]);
    const [showNoActivities, setShowNoActivities] = useState(false);

    const cities = useSelector((state) => state.data.value.cities);
    const sports = useSelector((state) => state.data.value.sports);

    const onCitiesButtonClickHandler = () => {
        setSportsButtonVisible(false);
    };

    const onSportsButtonClickHandler = () => {
        setCitiesButtonVisible(false);
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

    const onBackClickHandler = () => {
        props.history.goBack();
    };

    const onGoButtonClickHandler = () => {
        const primeUrl = "http://localhost:5000/api/publications/filter?";
        const finalUrl = primeUrl + (sportsButtonVisible ? `sport=${currentSport}` : `city=${currentCity}`);

        fetch(finalUrl, {
            credentials: "include"
        }).then(res => res.json())
            .then(data => {
                if (data.message) throw data.message
                data.publications.length === 0 ? setShowNoActivities(true) : setShowNoActivities(false);
                data.publications.length === 0 && toast.error("Sorry, no activities by this criteria", {
                    icon: "🥺",
                    duration: 2000
                })
                setPublications(data.publications);
            })
            .catch(err => console.log(err));
    };

    return (
        <>
            <FilterWrapper>
                <FilterParagraph>Filter by:</FilterParagraph>
                {citiesButtonVisible &&
                    <Button className="select-btn" onClick={onCitiesButtonClickHandler}>City</Button>
                }
                {!sportsButtonVisible &&
                    <Select onChange={onCitySelectHandler} >
                        {cities.map(city => <option key={city} value={city}>{city}</option>)}
                    </Select>}
                {sportsButtonVisible &&
                    <Button className="select-btn" onClick={onSportsButtonClickHandler}>Sports</Button>
                }
                {!citiesButtonVisible &&
                    <Select onChange={onSportSelectHandler}>
                        {sports.map(sport => <option key={sport} value={sport}>{sport}</option>)}
                    </Select>}
                {(!citiesButtonVisible || !sportsButtonVisible) && <>
                    <Button className="go-btn" onClick={onGoButtonClickHandler}>GO!</Button>
                    <Button className="reset-btn" onClick={onResetButtonClickHandler}>Reset</Button>
                </>
                }
                <Button className="back-btn" onClick={onBackClickHandler}>Back</Button>
            </FilterWrapper>

            {publications.length > 0 && <ActivitiesPreview state={publications} />}

            {showNoActivities && <NoActivitiesDiv>There are currently no activities found by the given criteria</NoActivitiesDiv>}
        </>
    );
};

export default Filter
