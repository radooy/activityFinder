import { FilterWrapper, FilterParagraph, Select } from "./filterStyle"
import { Button } from "../../../mainStyle"
import { useState } from "react"

const Filter = () => {

    let [sportsButton, setSportsButton] = useState(true);
    let [citiesButton, setCitiesButton] = useState(true);

    const onCitiesButtonClick = () => {
        setSportsButton(false);
    }

    const onSportsButtonClick = () => {
        setCitiesButton(false);
    }

    const onResetButtonClick = () => {
        setSportsButton(true);
        setCitiesButton(true);
    }

    return (
        <FilterWrapper>

            <FilterParagraph>Filter by:</FilterParagraph>

            {citiesButton && <Button onClick={onCitiesButtonClick}>City</Button>}
            {!sportsButton && <Select><option>Something</option></Select>}

            {sportsButton && <Button onClick={onSportsButtonClick}>Sports</Button> }
            {!citiesButton && <Select><option>Something</option></Select>}

            {(!citiesButton || !sportsButton) && <Button>GO!</Button>}

            <Button onClick={onResetButtonClick}>Reset</Button>

        </FilterWrapper>
    )
}
export default Filter