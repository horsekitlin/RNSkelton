import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import headerStyle from "assets/jss/material-dashboard-react/components/headerStyle.jsx";

const drawerWidth = 240;

const styles = theme => ({
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
});

function Header({ ...props }) {
  function makeBrand() {
    var name;
    props.routes.map((prop, key) => {
      if (prop.layout + prop.path === props.location.pathname) {
        name = props.rtlActive ? prop.rtlName : prop.name;
      }
      return null;
    });
    return name;
  }
  const { classes, color } = props;
  const appBarClasses = classNames({
    [" " + classes[color]]: color
  });
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="Open drawer"
          onClick={props.handleDrawerToggle}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" noWrap>
          Responsive drawer
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"])
};

export default withStyles({...headerStyle, ...styles})(Header);
