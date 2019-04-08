import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import { ExpansionPanel, ExpansionPanelSummary } from './Panels';
import { ExpansionPanelDetails, withStyles } from '@material-ui/core';

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

const HasChildrenItem = ({classes, label, items, expanded, routeKey, routePath, handleChange}) => (
  <ExpansionPanel
    square
    expanded={expanded === routeKey}
    onChange={handleChange(routeKey)}
  >
    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
      <Typography>{label}</Typography>
    </ExpansionPanelSummary>
    <ExpansionPanelDetails style={{padding: 0}} >
      <List>
        {items.map(item => (
          <ListItem key={`${routeKey}${item.key}`} divider button style={{paddingLeft: 40}}>
            <ListItemText primary={item.label} />
            <ArrowRightIcon />
          </ListItem>
        ))}
      </List>
    </ExpansionPanelDetails>
  </ExpansionPanel>
);

export default withStyles(styles)(HasChildrenItem);;
