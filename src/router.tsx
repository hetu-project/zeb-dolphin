import { createHashRouter } from "react-router-dom";
import Layout from './components/Layout/index'
// import Root, { rootLoader } from "./routes/root";
// import Team, { teamLoader } from "./routes/team";

import Home from './pages/Home/Index'
import Ai from './pages/Ai/Index'

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/ai",
        element: <Ai />,
      },
    ],
  },
]);

export default router
