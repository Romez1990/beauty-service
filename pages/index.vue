<template>
  <div id="wrapper">
    <p id="h1">Добро пожаловать на сайт Beauty-фильтр!</p>
    <p id="h2">Выберите необходимые параметры:</p>
    <main>
      <div id="services">
        <p>Выберите необходимую услугу</p>
        <select v-model="service">
          <option disabled selected value></option>
          <optgroup v-for="group in serviceGroups" :label="group.name">
            <option v-for="service in group.services" :value="service.id">
              {{ service.name }}
            </option>
          </optgroup>
        </select>
      </div>
      <form action="1">
        <p>Выберите удобную дату</p>
        <input v-model="date" type="date" />
      </form>
      <form action="2">
        <p>Выберите время</p>
        <input v-model="time" type="time" />
      </form>
    </main>
    <input @click="find" type="button" value="Найти" />
  </div>
</template>

<style scoped>
#wrapper {
  background: url(~@/assets/background.jpg) center / cover;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  flex-direction: column;
}

main {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
}

form {
  display: flex;
  flex-direction: row;
}

#services {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

p {
  margin: 15px;
  font-family: sans-serif;
  font-size: 1.1em;
  text-shadow: 2px 2px 5px #fff;
}

#h1 {
  font-family: sans-serif;
  font-size: 3em;
  text-shadow: 2px 2px 5px #fff;
  font-weight: bold;
  margin-bottom: 20px;
}

#h2 {
  font-family: sans-serif;
  font-size: 2em;
  text-shadow: 2px 2px 5px #fff;
  font-weight: 100;
  margin-bottom: 10px;
}

select {
  background-color: rgba(237, 157, 114, 0.52);
  border-radius: 50px;
  border: 3px inset rgba(222, 92, 22, 0.52);
}

input {
  background-color: rgba(237, 157, 114, 0.52);
  border-radius: 50px;
  border: 3px inset rgba(222, 92, 22, 0.52);
}

input[type='button'] {
  height: 40px;
  width: 200px;
  background-color: rgba(229, 105, 39, 0.67);
  border: 3px inset rgba(137, 68, 32, 0.67);
  border-radius: 50px;
  transition-property: all;
  transition-duration: 1s;
  cursor: pointer;
}

button:hover {
  box-shadow: rgba(109, 50, 19, 0.67) 0 0px 0px 40px inset;
}

a {
  text-decoration: none;
  color: black;
  display: block;
  max-width: 180px;
  height: 20px;
  text-decoration: none;
  font-size: 1.4em;
  font-family: sans-serif;
}

a:hover {
  color: rgba(255, 255, 255, 0.85);
}
</style>

<script src="./index.js"></script>
