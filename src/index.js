import React from "react";
import ReactDOM from "react-dom";
import HomePage from "./pages/homePage";
import MoviePage from './pages/movieDetailsPage'
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import MovieReviewPage from "./pages/movieReviewPage";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom"    // CHANGED
import FavoriteMoviesPage from './pages/favoritesMoviesPage'       // NEW
import SiteHeader from './components/siteHeader'

const App = () => {
  return (
      <BrowserRouter>
        <div className="jumbotron">
          <SiteHeader />      {/* New Header  */}
          <div className="container-fluid">
            
        <Switch>
          <Route path="/reviews/:id" component={MovieReviewPage} />
          <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
          <Route path="/movies/:id" component={MoviePage} />
          <Route path="/" component={HomePage} />
          <Redirect from="*" to="/" />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

//testing push fromanothjer pc 
