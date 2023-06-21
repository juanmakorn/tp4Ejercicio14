import React from "react";
import Menu from "../common/Menu";
import Footer from "../common/Footer";
import Titulo from "../Titulo";

const PaginaPrincipal = () => {
  return (
    <section>
      <Menu></Menu>
      <Titulo></Titulo>
      <CardReceta></CardReceta>
      <Footer></Footer>
    </section>
  );
};

export default PaginaPrincipal;
