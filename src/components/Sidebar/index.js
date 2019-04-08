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
    key: 'transaction',
    label: '交易概况',
    icon: 'shopping_cart',
    path: '/transactions',
  },
  {
    key: 'systemMessage',
    label: '系统信息',
    icon: 'notifications',
    path: '/system/message',
  },{
    key: 'independentChannel',
    label: '自主渠道',
    icon: 'notifications',
    path: '/independent/channel',
    items: [
      {label: '订单管理', path: '/order',key: 'Order'},
      {label: '兼职人员', path: '/transactions',key: 'PartTime',},
      {label: '充值纪录', path: '/transactions',key: 'RechargeRecord',},
      {label: '帐户信息', path: '/transactions',key: 'AccountMessage'},
      {label: '余额明细', path: '/transactions',key: 'BalanceDetails'},
    ],
  },{
    key: 'thirdPartyChannel',
    label: '第三方渠道',
    icon: 'notifications',
    path: '/third/party/channel',
    items: [
      {label: '订单管理', path: '/order', key: 'Order'},
      {label: '结算纪录', path: '/transactions', key: 'SettlementRecord'},
      {label: '款项提现', path: '/transactions',  key: 'CashWithdrawal'},
    ],
  },{
    key: 'systemSetting',
    label: '系统设置',
    icon: 'notifications',
    path: '/system/setting',
    items: [
      {label: '商家信息', path: '/order', key: 'BusinessInformation'},
      {label: '用户信息', path: '/transactions', key: 'UserMessage'},
      {label: '后台用户', path: '/transactions', key: 'ConsoleUsers'},
      {label: '角色权限', path: '/transactions', key: 'UserPermission'},
      {label: '应用设置', path: '/transactions', key: 'AppSetting'},
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

class Sidebar extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };

  render() {
    const { classes, theme, expanded, mobileOpen, handleDrawerToggle, handleChange, ...props } = this.props;

    const drawer = (
      <div>
        <div className={classes.toolbar} />
        <Divider />
        {sidebarItems.map(route => {
          if(isEmpty(route.items)) {
            return <HasNoChildrenItem {...route} />;
          }
          const {key, path, label, items} = route;
          return (
            <HasChildrenItem
              key={key}
              routeKey={key}
              routePath={path}
              label={label}
              items={items}
              handleChange={handleChange}
              expanded={expanded} />
          );
        })}
      </div>
    );

    return (
      <nav className={classes.drawer}>
        <Hidden smUp implementation="css">
          <Drawer
            container={props.container}
            variant="temporary"
            onClick={handleDrawerToggle}
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
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
  }
}

export default withStyles(styles, {withTheme: true})(Sidebar);
