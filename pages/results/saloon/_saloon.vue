<template>
  <div id="appointment-overlay" ref="overlay" @click="back">
    <form action="">
      <p>Введите имя</p>
      <input type="text" />
      <p>Введите номер телефона</p>
      <input type="tel" />
      <input type="button" value="Записаться" />
    </form>
  </div>
</template>

<style scoped>
#appointment-overlay {
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: rgba(30, 20, 20, 0.92);
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

form {
  background: rgb(226, 125, 88);
  border-radius: 40px;
  box-shadow: 5px 5px 10px;
  height: 200px;
  width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

p {
  margin: 15px;
  font-family: sans-serif;
  font-size: 0.9em;
  text-shadow: 2px 2px 5px #fff;
}

input:not([type='button']) {
  background: rgb(242, 160, 130);
  border-radius: 10px;
  padding: 2px 5px;
}

input[type='button'] {
  margin-top: 15px;
  height: 30px;
  width: 100px;
  background: rgb(229, 105, 39);
  border: 3px inset rgb(137, 68, 32);
  border-radius: 50px;
  transition-property: all;
  transition-duration: 1s;
  cursor: pointer;
  margin-bottom: 15px;
}

input[type='button']:hover {
  box-shadow: rgb(109, 50, 19) 0 0 0 40px inset;
}
</style>

<script src="./_saloon.js"></script>
