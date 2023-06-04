import { useEffect } from "react";
import { Outlet, useLoaderData, useSubmit } from "react-router-dom";

import Header from "components/layout/Header";
import Footer from "components/layout/Footer";

function RootLayout() {
  const token = useLoaderData();
  const submit = useSubmit();

  useEffect(() => {
    if (!token) {
      return;
    }

    setTimeout(() => {
      submit(null, { action: "/logout", method: "post" });
    }, 0.5 * 60 * 60 * 1000);
  }, [token, submit]);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default RootLayout;
