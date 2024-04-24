import { createBrowserRouter } from "react-router-dom";
import Layout from './components/Layout/index'

import Home from './pages/Home/Index'
import Ai from './pages/Ai/Index'
import Node from './pages/Node/Index'
import Msg from './pages/Msg/Index'

const router = createBrowserRouter([
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
      {
        path: "/node",
        element: <Node />,
      },
      {
        path: "/msg",
        element: <Msg />,
      },
    ],
  },
]);

export default router
