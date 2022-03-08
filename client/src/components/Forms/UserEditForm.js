import { useSelector } from "react-redux";
import { Wrapper, Form, Input, Submit, Label, Select } from "./formStyle";

function UserEditForm() {
  const cities = useSelector((state) => state.data.value.cities);
  
  return (
    <Wrapper>
        <Form>
          <Label htmlFor="current-password">Current password:</Label>
          <Input type="password" name="current-password" id="current-password"/>

          <Label htmlFor="password">New password:</Label>
          <Input type="password" name="password" id="password"/>

          <Label htmlFor="rePassword">Repeat password:</Label>
          <Input type="password" name="rePassword" id="rePassword" />

          <Label htmlFor="city">Choose City</Label>
          <Select>{cities.map((city) => 
            <option key={city} value={city}> {city} </option>
          )}
          </Select>
          <Submit value="Submit" />
        </Form>
    </Wrapper>
  )
}

export default UserEditForm
