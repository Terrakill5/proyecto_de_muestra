<template>
    <footer>
        <div class="footer-detalles">
            <img
        src="../../img/imagen-fondo-negro-GC.png"
        alt="Imagen principal de la pagina"
        width="400"
        height="120"
      /> <br>
      <p>Horarios de Atención: Lunes a Sábado de 10am a 9pm / Domingos y Feriados: 11am a 8pm.</p> <br>
      <p>Tienda Especializada en Videojuegos Digitales, Tarjetas y Recargas.</p> <br>
      <p>WhatsApp:</p> <a href="">960 245 402</a> <p>/</p> <a href="">993 103 185</a>
        </div>
        <div class="footer-tarjetas">
            <p>2022 © GAMES CENTER, Todos los Derechos Reservados.</p>
        </div>
    </footer>
</template>

<style scoped>

footer {
    position: absolute;
    bottom: 0;
    width: 100%;
}

.footer-detalles {
    margin: auto 0;
    text-align: center;
    background-color: black; 
}

.footer-tarjetas {
    background-color: rgb(24, 24, 24);
    text-align: center;
}

p {
    color: aliceblue;
}

a {
    color: darkorange;
    text-decoration: none;
}

p, a {
    display: inline-block;
}

img {
    padding: 10px 0;
}
</style>