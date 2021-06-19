import "./App.css";
import Home from "./pages";
import Users from "./pages/users";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/users" component={Users} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
