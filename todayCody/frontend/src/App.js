import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "components/layout/Header";
import NotFound from "pages/NotFound";
import Main from "pages/Main";
import Ranking from "pages/Ranking";
import LookInfo from "pages/LookInfo";
import Board from "pages/Board";
import BoardPost from "components/board/BoardPost";
import Feed from "pages/Feed";
import MyPage from "pages/MyPage";
import NewPost from "pages/NewPost";
import SignIn from "pages/SignIn";
import SignUp from "pages/SignUp";
import Footer from "components/layout/Footer";

import "./scss/main.scss";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
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
      { path: "/board/:postId", element: <BoardPost /> },
      { path: "/feed", element: <Feed /> },
      { path: "/mypage", element: <MyPage /> },
    ],
  },
  
  { path: "/signIn", element: <SignIn /> },
  { path: "/signUp", element: <SignUp /> },
  { path: "/newpost", element: <NewPost /> },
  { path: "/editpost", element: <NewPost /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
