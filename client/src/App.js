import { Switch, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Loader from "./components/Loader/Loader";
import { Toaster } from 'react-hot-toast';
import { useEffect } from "react";
import { auth } from "./features/userAuthSlice";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(auth());
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