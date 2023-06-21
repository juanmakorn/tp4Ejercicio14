import React, { memo } from "react";

const Titulo = memo(() => {
  return (
    <section className="container">
      <h1 className="display-4"> LAS MEJORES RECETAS DE COCINA CASERA</h1>

      <t className="display-7">
        Más recetas de cocina lleva subidas, Cocina Casera y Fácil. Y aquí,
        quiero hacer una recopilación con recetas de cocina faciles y rápidas de
        más éxito del mismo. Aquellas recetas que no llevan mucho trabajo, se
        hacen en un tiempo inferior a una hora y que por supuesto, lo más
        importante…. ¡están deliciosas!¡Que viva la cocina!
      </t>
    </section>
  );
});

export default Titulo;
