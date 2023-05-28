import React from 'react';

const text = 'text-black/70';

function EnviosSection() {
  return (
    <div className='flex flex-row mx-4 sm:mx-20 mt-5'>
      <div className='inline-block'>
        <p className={text}>
          <strong>Envíos</strong>
          <br />
          <br />
          Los envíos se realizan de lunes a viernes de 18:00 a 20:00 y Sabados
          de 10:00 a 20:00 horas.
        </p>
        <p className={text}>
          Solo los pedidos hechos con 4 dias de anticipación.
        </p>
        <br />
        <strong className={text}>Retiro por Domicilio</strong>
        <br />
        <br />
        <p className={text}>
          Si se opta por el retiro a domicilio , se puede pasar por el mismo
          ubicado en la calle Mateotti 920 de lunes a sabados de 10:00 a 20:00
          horas.
        </p>
        <p className={text}>
          Para esta opción es necesario comunicarse al 2235632600 para coordinar
          previamente el retiro.
        </p>
        <p className={text}>
          De haber stock disponible, se puede retirar en el día. Caso contrario
          el plazo de los pedidos deben ser con 4 dias de ancitipación.
        </p>
      </div>
    </div>
  );
}

export default EnviosSection;
