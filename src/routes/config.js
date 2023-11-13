import MainLayout from "../component/layouts/mainLayout";
import HomePage from "../pages/home";



const config = [
  // General Route

  {
    element: <HomePage />,
    path: "/",
    Layout: MainLayout
  },

  /**Another Routes */
  // {
  //   element: <AnyPage />,
  //   path: "/AnyPage",
  //   Layout: DefaultLayout,
  // },
];
export default config;