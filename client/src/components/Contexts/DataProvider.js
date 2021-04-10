import { useState, useEffect } from "react";
import DataContext from "./DataContext";

const DataProvider = (props) => {
    const [cities, setCities] = useState([]);
    const [sports, setSports] = useState([]);

    useEffect(() => {
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
    }, []);

    return(
        <DataContext.Provider value={{cities, sports}}>
            {props.children}
        </DataContext.Provider>
    )
};

export default DataProvider