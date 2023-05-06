import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import Main from "./pages/Main";
import Ranking from "./pages/Ranking";
import LookInfo from "./pages/LookInfo";
import Board from "./pages/Board";
import Feed from "./pages/Feed";
import MyPage from "./pages/MyPage";
import NewPost from "./pages/NewPost";
import SignIn from "./pages/SignIn";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Main /> },
      { path: "/ranking", element: <Ranking /> },
      { path: "/lookinfo", element: <LookInfo /> },
      { path: "/board", element: <Board /> },
      { path: "/feed", element: <Feed /> },
      { path: "/profile/:profileId", element: <MyPage /> },
    ],
  },

  { path: "/signin", element: <SignIn /> },
  { path: "/newpost", element: <NewPost /> },
  { path: "/editpost", element: <NewPost /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
