import { useEffect } from "react";
import { Switch, Route} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Toaster } from 'react-hot-toast';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Loader from "./components/Loader/Loader";
import { auth } from "./features/userAuthSlice";
import { getCities, getSports } from "./features/dataSlice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(auth());
    dispatch(getCities());
    dispatch(getSports());
  },[]);

  const isLoading = useSelector((state)=>{
    return state.user.value.isLoading;
  });
  
  return (
    <div className="site-wrapper">
      {isLoading ? <Loader/> :
      <>
        <Header/>
        <Switch>
          <Route path="/about" component={About}/>
          <Route path="/" component={Main}/>
        </Switch>
        <Toaster/>
        <Footer/>
      </>
      }
    </div>
  );
}

export default App;