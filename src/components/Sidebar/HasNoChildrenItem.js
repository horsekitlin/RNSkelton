import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import { ExpansionPanel, ExpansionPanelSummary } from './Panels';
import { Icon } from '@material-ui/core';

const drawerWidth = 240;

const styles = theme => ({
  listContainer: {
    width: '100%',
    padding: 0,
  },
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
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  },
});

const HasNoChildrenItem = ({classes, label, icon}) => (
  <ExpansionPanel
    className={classes.listContainer}
    square={false}
    expanded={false}
  >
    <ExpansionPanelSummary>
      <Icon style={{color: '#FFF'}}>
        {icon}
      </Icon>
      <Typography>{label}</Typography>
    </ExpansionPanelSummary>
  </ExpansionPanel>
);

export default withStyles(styles)(HasNoChildrenItem);
