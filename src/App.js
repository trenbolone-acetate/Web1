import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import { smartphoneListData } from './data';
import SmartphoneListView from './Components/Main/SmartphoneListView';
import CardsView from './Components/Main/CardsView';
import Header from './Components/Main/Header';
import Footer from './Components/Main/Footer';
import LoginLogout from './Components/LoginLogout';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      index: 0,
      selectedCount: 0,
    };
  }

  handleLoginLogout = () => {
    this.setState((prevState) => {
      const newState = { isLoggedIn: !prevState.isLoggedIn };

      if (newState.isLoggedIn) {
        this.props.navigate('/cards'); 
      }

      return newState;
    });
  };

  handleNextClick = () => {
    this.setState((prevState) => ({
      index: prevState.index + 1,
    }));
  };

  handlePreviousClick = () => {
    this.setState((prevState) => ({
      index: prevState.index - 1,
    }));
  };

  handleCardSelectionChange = (nexIndex) => {
    this.setState({
      index: nexIndex,
    });
  };

  handleCheckBoxListSelectionChange = (count) => {
    this.setState({
      selectedCount: count,
    });
  };

  render() {
    const { isLoggedIn, index, selectedCount } = this.state;
    const location = this.props.location; 

    return (
      <div className="App">
        <Header />

        {location.pathname !== "/" && (
          <nav>
            <ul>
              <li><Link to="/">Logout</Link></li>
              <li><Link to="/cards">Card View</Link></li>
              <li><Link to="/checkbox">Checkbox List</Link></li>
            </ul>
          </nav>
        )}

        <Routes>
          <Route path="/" element={<LoginLogout isLoggedIn={isLoggedIn} onLoginLogout={this.handleLoginLogout} />} />
          <Route path="/cards" element={<CardsView smartphone={smartphoneListData[index]} index={index} onSelectionChange={this.handleCardSelectionChange} />} />
          <Route path="/checkbox" element={<><SmartphoneListView items={smartphoneListData} onSelectionChange={this.handleCheckBoxListSelectionChange} /> <div className="Counter">Selected Items: {selectedCount}</div></>}/>
        </Routes>

        <Footer />
      </div>
    );
  }
}

const AppWithNavigateAndLocation = () => {
  const navigate = useNavigate();  //nav hook
  const location = useLocation();  //location hook
  return <App navigate={navigate} location={location} />;
};

const Root = () => (
  <Router>
    <AppWithNavigateAndLocation />
  </Router>
);

export default Root;
