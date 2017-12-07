import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './containers/Header';
import Footer from './containers/Footer';

import HomePageIntro from './pages/HomePageIntro';
import SearchResults from './pages/SearchResults';
import ContactPageText from './pages/ContactPageText';
import AboutPageText from './pages/AboutPageText';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import EditUser from './pages/EditUser';
import NewReviewPage from './pages/NewReviewPage';
import EditReviewPage from './pages/EditReviewPage';
import RestaurantPage from './pages/RestaurantPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={ HomePageIntro } />
            <Route exact path="/search/" component={ SearchResults } />
            <Route path="/contact/" component={ ContactPageText } />
            <Route path="/about/" component={ AboutPageText } />
            <Route path="/sign-up/" component={ SignUpPage } />
            <Route path="/sign-in/" component={ SignInPage } />
            <Route path="/forgot-password/" component={ ForgotPasswordPage } />
            <Route path="/edit-user/" component={ EditUser } />
            <Route path="/review/" component={ NewReviewPage } />
            <Route path="/edit-review/" component={ EditReviewPage } />
            <Route path="/:restaurant/" component={ RestaurantPage } />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
