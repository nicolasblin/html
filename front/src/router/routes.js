import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";

// Admin pages
import Dashboard from "@/pages/Dashboard.vue";
import UserProfile from "@/pages/UserProfile.vue";
import UaecJuniorConseil from "@/pages/UaecJuniorConseil.vue";
import Bde from "@/pages/Bde.vue";
import MakerCenter from "@/pages/MakerCenter.vue";
import Mtpa from "@/pages/Mtpa.vue";
import Polytek from "@/pages/Polytek.vue";
import Notifications from "@/pages/Notifications.vue";
import Icons from "@/pages/Icons.vue";
import Maps from "@/pages/Maps.vue";
import Typography from "@/pages/Typography.vue";
import TableList from "@/pages/TableList.vue";

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: Dashboard
      },
      {
        path: "stats",
        name: "stats",
        component: UserProfile
      },
      {
        path: "uaecjuniorconseil",
        name: "uaecjuniorconseil",
        component: UaecJuniorConseil
      },
      {
        path: "bde",
        name: "bde",
        component: Bde
      },
      {
        path: "mtpa",
        name: "mtpa",
        component: Mtpa
      },
      {
        path: "polytek",
        name: "polytek",
        component: Polytek
      },
      {
        path: "makercenter",
        name: "makercenter",
        component: MakerCenter
      },
      {
        path: "icons",
        name: "icons",
        component: Icons
      },
      {
        path: "maps",
        name: "maps",
        component: Maps
      },
      {
        path: "typography",
        name: "typography",
        component: Typography
      },
      {
        path: "table-list",
        name: "table-list",
        component: TableList
      }
    ]
  },
  { path: "*", component: NotFound }
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
