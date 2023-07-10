import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "pages/RootLayout";
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
import { tokenLoader } from "util/auth";
import { checkAuthLoader } from "util/auth";
import { AuthContextProvider } from "contexts/AuthContext";
import "./scss/main.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    id: "root",
    loader: tokenLoader,
    children: [
      { index: true, element: <Main /> },
      { path: "/signin", element: <SignIn /> },
      { path: "/signup", element: <SignUp /> },
      { path: "/ranking", element: <Ranking /> },
      { path: "/lookinfo", element: <LookInfo /> },
      { path: "/board", element: <Board /> },
      { path: "/board/:postId", element: <BoardPost /> },
      { path: "/feed", element: <Feed /> },
      { path: "/mypage", element: <MyPage />, loader: checkAuthLoader },
      { path: "/newpost", element: <NewPost /> },
      { path: "/editpost", element: <NewPost /> },
    ],
  },
]);

function App() {
  return (
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  );
}

export default App;
