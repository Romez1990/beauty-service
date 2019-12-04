<template>
  <div id="wrapper">
    <p>Beauty-фильтр</p>
    <header>
      <li>
        Услуга
        <select v-model="service" @change="updateQuery">
          <option disabled selected value></option>
          <optgroup v-for="group in serviceGroups" :label="group.name">
            <option v-for="service in group.services" :value="service.id">
              {{ service.name }}
            </option>
          </optgroup>
        </select>
      </li>
      <li>
        Дата
        <input v-model="date" @change="updateQuery" type="date" class="qwe" />
      </li>
      <li>
        Время
        <input v-model="time" @change="updateQuery" type="time" class="qwe" />
      </li>
    </header>
    <main>
      <div v-for="saloon in saloons">
        {{ saloon.address }}
      </div>
    </main>
  </div>
</template>

<style scoped>
p {
  background-color: rgba(240, 248, 255, 0.69);
  text-align: center;
  width: 100%;
  font-size: 4em;
  color: #1c1815;
  text-shadow: 5px 5px 5px rgba(113, 92, 77, 0.94);
  margin: 0;
  font-family: sans-serif;
  font-weight: 600;
}

#wrapper {
  background: url(~@/assets/background.jpg) center / cover;
  height: 100vh;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

header {
  background-color: rgba(137, 102, 75, 0.68);
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
  width: 100%;
}

li {
  list-style-type: none;
  padding-bottom: 10px;
  font-size: 1.4em;
  font-family: sans-serif;
  text-shadow: 2px 2px 3px rgba(237, 156, 93, 0.68);
}

input {
  background-color: rgba(230, 165, 113, 0.74);
  border: 3px inset rgba(252, 199, 159, 0.88);
  height: 30px;
  border-radius: 25px;
}

select {
  background-color: rgba(230, 165, 113, 0.74);
  border: 3px inset rgba(252, 199, 159, 0.88);
  height: 30px;
  border-radius: 25px;
}

main {
  width: 70%;
  background-color: rgba(80, 57, 40, 0.83);
  display: flex;
  flex-direction: column;
}

main div {
  background-color: rgba(255, 227, 206, 0.89);
  height: 150px;
  width: 97%;
  margin-bottom: 10px;
  margin-left: 10px;
  border-radius: 5px;
}

div:first-child {
  margin-top: 5px;
}
</style>

<script src="./results.js"></script>
