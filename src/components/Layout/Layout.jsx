import React from "react";
import { Outlet } from "react-router-dom";

import { useInitialiceData } from "./hooks/useInitializeData";
import Header from "../Header/Header"
import Loading from "../Loading/Loading";
import Welcome from "../views/Welcome/Welcome";

const Layout = () => {
  const { status, statusUser } = useInitialiceData()

  return (
    <>
      {statusUser === 'succeeded' && status === 'succeeded' ?
        <>
          <Header />
          <Outlet />
        </> :
        statusUser === 'succeeded' && status !== 'succeeded' || statusUser === 'loading' ?
          <Loading />
          : statusUser === 'failed' ?
            <span>Ha ocurrido un error, vuelva a intentarlo</span>
            :
            <Welcome />
      }
    </>
  )
}

export default Layout