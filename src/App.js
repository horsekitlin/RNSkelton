import React, { PureComponent } from 'react';
import Login from './containers/LoginContainer';
import routes from './routes';
import Navbar from "components/Navbars/Navbar.jsx";
import Footer from "components/Footer/Footer.jsx";
import Sidebar from "components/Sidebar/Sidebar.jsx";

import image from "assets/img/sidebar-2.jpg";
import logo from "assets/img/reactlogo.png";
import { Switch, Route } from 'react-router';

import dashboardStyle from "assets/jss/material-dashboard-react/layouts/dashboardStyle.jsx";
import { withStyles } from '@material-ui/core';

const switchRoutes = (
  <Switch>
    {routes.map((prop, key) => {
      return (
        <Route
          path={prop.layout + prop.path}
          component={prop.component}
          key={key}
        />
      );
    })}
  </Switch>
);

class App extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      image: image,
      color: "blue",
      hasImage: true,
      fixedClasses: "dropdown show",
      mobileOpen: false
    };
  }
  componentDidMount() {

  }

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  render() {
    const { classes, ...rest } = this.props;
    const hasLogin = this.props.user.getIn(['login', 'ok']);
    if(!hasLogin) {
      return <Login />
    }

    return (
      <Switch>
      <div>
        <Navbar
          routes={routes}
          handleDrawerToggle={this.handleDrawerToggle}
          // color='primary'
          {...rest}
        />
        <Sidebar
          routes={routes}
          logoText={"Creative Tim"}
          logo={logo}
          image={image}
          handleDrawerToggle={this.handleDrawerToggle}
          open={this.state.mobileOpen}
          color='primary'
          {...rest}
        />
        
        <div className={classes.content}>
          <div className={classes.container}>{switchRoutes}</div>
        </div>
        <Footer />
      </div>
      </Switch>
    );
  }
}

export default withStyles(dashboardStyle)(App);