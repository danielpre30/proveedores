import React from "react";
import "../styles/LandingPage.css";
import "../styles/HomePage.css";
import LandingSection from "../sections/LandingSection";
import ProfileSection from "../sections/ProfileSection";
import Scroll from "../resources/scroll.gif";
import { useAuth0 } from "../Auth/react-auth0-wrapper";

function ProfilePage() {
  const { isAuthenticated } = useAuth0();

  return (
    <>
      {isAuthenticated ? (
        <>
          <LandingSection />
          <img className="scrollImage" src={Scroll} alt="Scroll Gif" />
        </>
      ) : (
        <>
          <ProfileSection />
        </>
      )}
    </>
  );
}

export default ProfilePage;