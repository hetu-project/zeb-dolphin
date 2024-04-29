import { createBrowserRouter } from "react-router-dom";
import Layout from './components/Layout/index'

import Home from './pages/Home/Index'
import Ai from './pages/Ai/Index'
import Node from './pages/Node/Index'
import Msg from './pages/Msg/Index'
import { Chat } from "./pages/Chat";
import { Login } from "./pages/Login";

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
        path: "/node/:node_id",
        element: <Node />,
      },
      {
        path: "/message/:msg_id",
        element: <Msg />,
      },
      {
        path: 'chat',
        element: <Chat />,
      },
      {
        path: 'login',
        element: <Login />,
      },
    ],
  },
]);

export default router
