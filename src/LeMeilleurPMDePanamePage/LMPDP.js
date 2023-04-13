import React from "react";
import Horloge from "./Horloge";

const MaPage = () => {
  return (
    <div>
      <h1>Bienvenue Docteur toast</h1>
      <Horloge vitesse={20} />
    </div>
  );
};

export default MaPage;