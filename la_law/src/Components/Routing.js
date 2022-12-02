import React from "react";
import Layout from "./Layout";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FilePostField from "./ChildComponents/FilePostField";
import AccountProfile from "./ChildComponents/ProfileComponent/AccountProfileView.js/AccountProfile";
import ProfileEdit from "./ChildComponents/ProfileComponent/ProfileEdit";
import AddCase from "./ChildComponents/StoreComponents/AddCase";
import CaseFileUpload from "./ChildComponents/StoreComponents/CaseFileUpload";
import CaseDetails from "./ChildComponents/StoreComponents/CaseTableComponents/CaseDetails";
import CaseEdit from "./ChildComponents/StoreComponents/CaseTableComponents/CaseEdit";
import CaseStoreDone from "./ChildComponents/StoreComponents/CaseTableComponents/CaseStoreDone";
import CaseStudy from "./Pages/CaseStudy";
import GlobalNews from "./Pages/GlobalNews";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import MyNetwork from "./Pages/MyNetwork";
import Profile from "./Pages/Profile";
import Store from "./Pages/Store";

export default function Routing() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route
            exact
            path="/home"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            exact
            path="/upload-post"
            element={
              <Layout>
                <FilePostField />
              </Layout>
            }
          />
          <Route
            exact
            path="/store"
            element={
              <Layout>
                <Store />
              </Layout>
            }
          />
          <Route
            exact
            path="/store/addcase"
            element={
              <Layout>
                <AddCase />
              </Layout>
            }
          />
          <Route
            exact
            path="/store/addcase/save"
            element={
              <Layout>
                <CaseStoreDone />
              </Layout>
            }
          />
          <Route
            exact
            path="/store/addcase/upload-casefile/:id"
            element={
              <Layout>
                <CaseFileUpload />
              </Layout>
            }
          />
          <Route
            exact
            path="/store/case/:id"
            element={
              <Layout>
                <CaseDetails />
              </Layout>
            }
          />
          <Route
            exact
            path="/store/case/:id/edit"
            element={
              <Layout>
                <CaseEdit />
              </Layout>
            }
          />
          <Route
            exact
            path="/case_study"
            element={
              <Layout>
                <CaseStudy />
              </Layout>
            }
          />
          <Route
            exact
            path="/my_network"
            element={
              <Layout>
                <MyNetwork />
              </Layout>
            }
          />
          <Route
            exact
            path="/global_news"
            element={
              <Layout>
                <GlobalNews />
              </Layout>
            }
          />
          <Route
            exact
            path="/myprofile"
            element={
              <Layout>
                <Profile />
              </Layout>
            }
          />
          <Route
            exact
            path="/profile/:username/"
            element={
              <Layout>
                <AccountProfile />
              </Layout>
            }
          />
          <Route
            exact
            path="/myprofile/edit/"
            element={
              <Layout>
                <ProfileEdit />
              </Layout>
            }
          />
        </Routes>
      </Router>
    </>
  );
}
