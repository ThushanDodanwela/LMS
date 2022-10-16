import "./App.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import Header from "./components/common/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/about/About";
import CourseHome from "./components/allcourses/CourseHome";
import Footer from "./components/common/footer/Footer";
import Home from "./components/home/Home";
import Signin from "./Signin/Signin";
function App() {
  return (
    <>
      <Signin />
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/courses" component={CourseHome} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
