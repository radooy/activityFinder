import { Switch, Route} from "react-router-dom"
import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import Footer from "./components/Footer/Footer"
import About from "./components/About/About"
import { Toaster } from 'react-hot-toast';

const App = () => {
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