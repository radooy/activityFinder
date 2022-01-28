import { Switch, Route} from "react-router-dom"
import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import Footer from "./components/Footer/Footer"
import About from "./components/About/About"
import { Toaster } from 'react-hot-toast';
import { useEffect } from "react";
import { auth } from "./features/userAuthSlice"
import { useDispatch } from "react-redux"

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(auth());
  },[]);
  
  return (
    <div className="site-wrapper">
      <Header/>
      <Switch>
        <Route path="/about" component={About}/>
        <Route path="/" component={Main}/>
      </Switch>
      <Toaster/>
      <Footer/>
    </div>
  );
}

export default App;