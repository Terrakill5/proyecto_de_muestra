<template>
  <section class="pantalla_inicial d-flex">
    <div
      id="carouselExampleInterval"
      class="carousel slide imagen_inicial"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="10000">
          <img src="../../img/p5.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img src="../../img/eldelring.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="../../img/TWETY.jpg" class="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </section>
</template>

<style scoped>
.pantalla_inicial {
  width: 100%;
}

.imagen_inicial {
    margin: 10px auto;
    width: 60%;
}
</style>
