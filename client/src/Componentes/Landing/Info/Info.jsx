import React from "react";
import s from "./Info.module.css";

export default function Informacion() {
  return (
    <div className={s.caja7}>
      <div className={s.cajaInterna}>
        <div className={s.info}>
          <div className={s.icono1}></div>
          <div className={s.data}>
            <h3>Elegí cómo pagar</h3>
            <p>
              Podés pagar libremente con tarjeta, débito, efectivo o hasta 12
              cuotas sin tarjeta.
            </p>
          </div>
        </div>
        <div className={s.separacion}></div>
        <div className={s.info}>
          <div className={s.icono2}></div>
          <div className={s.data}>
            <h3>Envío gratis desde $ 8.000</h3>
            <p>
              Solo por estar registrado en TechNexus tenés envíos gratis en
              miles de productos. Es un beneficio de TechNexus.
            </p>
          </div>
        </div>
        <div className={s.separacion}></div>
        <div className={s.info}>
          <div className={s.icono3}></div>
          <div className={s.data}>
            <h3>Seguridad, de principio a fin</h3>
            <p>
              ¿No te gusta? ¡Devolvelo! En TechNexus, no hay nada que no puedas
              hacer, porque estás siempre protegido.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
