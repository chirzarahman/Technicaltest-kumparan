import "./App.css";
import Home from "./pages";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import usersPage from "./pages/users-data";
import userPost from "./pages/user/user-post";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/users" component={usersPage} />
        <Route path="/user-post/:id" component={userPost} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
