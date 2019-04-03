import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import Divider from "@material-ui/core/Divider";
import HasChildrenItem from './HasChildrenItem';
import HasNoChildrenItem from './HasNoChildrenItem';
import isEmpty from 'lodash/isEmpty';

const drawerWidth = 240;

const sidebarItems = [
  {
    label: '交易概况',
    icon: 'shopping_cart',
    path: '/transations',
  },
  {
    label: '系统信息',
    icon: 'notifications',
    path: '/system/message',
  },{
    label: '自主渠道',
    icon: 'notifications',
    path: '/channel',
    items: [
      {label: '订单管理', path: '/order',},
      {label: '兼职人员', path: '/transations',},
      {label: '充值纪录', path: '/transations',},
      {label: '帐户信息', path: '/transations',},
      {label: '余额明细', path: '/transations',},
    ],
  },{
    label: '第三方渠道',
    icon: 'notifications',
    items: [
      {label: '订单管理', path: '/order',},
      {label: '结算纪录', path: '/transations',},
      {label: '款项提现', path: '/transations',},
    ],
  },{
    label: '系统设置',
    icon: 'notifications',
    path: '/channel',
    items: [
      {label: '商家信息', path: '/order',},
      {label: '用户信息', path: '/transations',},
      {label: '后台用户', path: '/transations',},
      {label: '角色权限', path: '/transations',},
      {label: '应用设置', path: '/transations',},
    ],
  },
];

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



const Sidebar = ({ classes, theme, expanded, handleChange, handleDrawerToggle, ...props }) => {
  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      {sidebarItems.map(route => {
        if(isEmpty(route.items)) {
          return <HasNoChildrenItem {...route} />;
        }
        return <HasChildrenItem handleChange={handleChange} expanded={expanded} {...route} />
      })}
    </div>
  );

  return (
    <nav className={classes.drawer}>
      <Hidden smUp implementation="css">
        <Drawer
          container={props.container}
          variant="temporary"
          anchor={theme.direction === "rtl" ? "right" : "left"}
          open={props.mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper
          }}
          color="primary"
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  );
};

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, {withTheme: true})(Sidebar);
