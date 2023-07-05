import { useEffect } from "react";
import { Outlet, useLoaderData } from "react-router-dom";

import Header from "components/layout/Header";
import Sidebar from "components/layout/Sidebar";
import Footer from "components/layout/Footer";

import { getTokenDuration } from "util/auth";
import { signout } from "api/auth";

function RootLayout() {
  const token = useLoaderData();
  const expiration = localStorage.getItem("expiration");

  let logoutTimer;
  useEffect(() => {
    if (token && expiration) {
      const remainingTime = getTokenDuration();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      logoutTimer = setTimeout(signout, remainingTime);
    } else {
      clearTimeout(logoutTimer);
    }
  }, [token, signout, expiration]);

  return (
    <>
      <Header />
      <Sidebar />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
}

export default RootLayout;
