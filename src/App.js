import React from "react";
import PropTypes from "prop-types";
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";
import CssBaseline from "@material-ui/core/CssBaseline";
import { withStyles } from "@material-ui/core/styles";
import { Switch, Route } from "react-router";
import Home from "containers/HomeContainer";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`
    }
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    backgroundColor: '#FFF',
    width: '100%',
    height: '100vh'
  }
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false,
      expanded: ""
    }; 
  }

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  handleChange = panel => (event, expanded) => {
    event.stopPropagation();
    this.setState(state => ({
      ...state,
      expanded:  panel
    }));
  };

  render() {
    const { classes, container } = this.props;
    const { expanded, mobileOpen } = this.state;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <Navbar handleDrawerToggle={this.handleDrawerToggle} />
        <Sidebar
          expanded={expanded}
          handleChange={this.handleChange}
          container={container}
          mobileOpen={mobileOpen}
          handleDrawerToggle={this.handleDrawerToggle}
        />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Switch>
            <Route path="/" component={Home} />
            <Route component={() => <div>404</div>} />
          </Switch>
        </main>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: PropTypes.object,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(App);
