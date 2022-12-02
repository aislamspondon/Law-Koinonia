import React from "react";
import { useParams } from "react-router-dom";
import AccountProfileAditional from "./AccountProfileAditional";
import AccountProfileBody from "./AccountProfileBody";

export default function AccountProfile() {
  const { username } = useParams();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <AccountProfileBody username={username} />
      <AccountProfileAditional />
    </div>
  );
}
