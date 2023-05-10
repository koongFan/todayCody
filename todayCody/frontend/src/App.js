import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "components/Header";
import NotFound from "pages/NotFound";
import Main from "pages/Main";
import Ranking from "pages/Ranking";
import LookInfo from "pages/LookInfo";
import Board from "pages/Board";
import Feed from "pages/Feed";
import MyPage from "pages/MyPage";
import NewPost from "pages/NewPost";
import SignIn from "pages/SignIn";
import SignUp from "pages/SignUp";
import Footer from "components/Footer";

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
      { path: "/feed", element: <Feed /> },
      { path: "/profile/:profileId", element: <MyPage /> },
    ],
  },
  
  { path: "/member/signIn.do", element: <SignIn /> },
  { path: "/member/signUp.do", element: <SignUp /> },
  { path: "/newpost", element: <NewPost /> },
  { path: "/editpost", element: <NewPost /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
