import React from "react";
import "./App.css"
import LeitorFisico from "./componentes/LeitorFisico";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>ConsulteJá</h1>
      <p>Digite ou passe o código de barras para consultar o produto</p>
      <LeitorFisico />
    </div>
  );
}

export default App;
