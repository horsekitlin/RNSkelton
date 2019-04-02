// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
// core components/views for Admin layout
import Home from "./containers/HomeContainer";

const dashboardRoutes = [
  {
    path: "/",
    name: "Home",
    icon: Dashboard,
    component: Home,
    layout: "/"
  },
];

export default dashboardRoutes;
