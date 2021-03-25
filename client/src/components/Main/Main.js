import { MainContainer } from "./mainStyle";
import Guest from "./Guest/Guest";

const Main = () => {
    
    return (
        <MainContainer>

        {/* If not logged in */}
            <Guest/>
        {/* /If not logged in */}



        {/* If logged in */}

            {/* User view here */}

        {/* /If logged in */}


        </MainContainer>
    );
}

export default Main;