import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";  // Import NavBar component
import { Provider } from "react-redux";
import Store from '../store/store';

const RootLayout = () => {
  return (
    <>
      <Provider store={Store}>
      <NavBar />  {/* Renders the NavBar */}
      <main>
        <Outlet />  {/* This will render the current route's component */}
      </main>
      </Provider>
    </>
  );
};

export default RootLayout;
