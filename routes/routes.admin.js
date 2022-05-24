import { AdminLayout } from "../layouts";
import { HomeAdmin, UsersAdmin } from "../pages/Admin";

const routesAdmin = [
  {
    path: "/admin",
    layout: AdminLayout,
    component: HomeAdmin,
    //exact: true, solo es necesaria en la version 5 de react-dom
  },
  {
    path: "/admin/users",
    layout: AdminLayout,
    component: UsersAdmin,
  },
];

export default routesAdmin;
