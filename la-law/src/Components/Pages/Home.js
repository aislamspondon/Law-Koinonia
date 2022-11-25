import React from "react";
import classes from "../../Styles/Pages/Home.module.css";
import AditionalSide from "../ChildComponents/AditionalSideComponent/AditionalSide";
import HomePostMain from "../ChildComponents/HomePageChildComponent/HomePostMain";
import ShortProfile from "../ChildComponents/HomePageChildComponent/ShortProfile";

function Home() {
  // const search = useLocation().search;
  // const redirect = search ? search.split("=")[1] : "/";
  return (
    <>
      <div className={classes.main_page}>
        <ShortProfile />
        <HomePostMain />
        <AditionalSide />
      </div>
    </>
  );
}

export default Home;
