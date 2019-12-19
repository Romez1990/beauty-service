<template>
  <div id="wrapper">
    <p id="title">Beauty-фильтр</p>
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
      <div v-for="price in prices">
        <p class="saloon-name">
          {{ price.saloon.name }}
        </p>
        <p class="span1">
          <span class="e">
            Адрес: {{ price.saloon.address }}
            <br />
            Телефон: {{ price.saloon.phone }}
          </span>
          <span class="span2">
            <b>Цена: {{ price.price }}</b>
            <nuxt-link
              :to="{
                name: 'results-saloon-saloon',
                params: { saloon: price.saloon.id },
                query: $route.query,
              }"
            >
              <input type="button" value="Записаться" />
            </nuxt-link>
          </span>
        </p>
      </div>
    </main>
    <nuxt-child />
  </div>
</template>

<style scoped>
#title {
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
  background: url(~@/assets/background.jpg) center / cover fixed;
  min-height: 100vh;
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
  padding: 0 10px;
}

main div {
  background-color: rgba(255, 227, 206, 0.89);
  margin-bottom: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

main div:first-child {
  margin-top: 10px;
}

.saloon-name {
  font-family: monospace;
  font-size: 3em;
  margin-left: 50px;
  margin-bottom: 15px;
}

.span1 {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  font-size: 1.5em;
  margin-left: 35px;
  margin-right: 35px;
}

.span2 {
  display: flex;
  flex-direction: column;
  font-size: 0.7em;
}

b {
  font-family: monospace;
  font-size: 2em;
  color: rgba(160, 36, 31, 0.88);
}

input[type='button'] {
  background-color: rgba(167, 74, 46, 0.83);
  height: 30px;
  width: 120px;
  border-radius: 15px;
  border-color: rgba(157, 44, 23, 0.88);
  cursor: pointer;
}

.e {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100px;
  width: 600px;
  padding-left: 15px;
}
</style>

<script src="./results.js"></script>
