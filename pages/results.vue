<template>
  <div id="wrapper">
    <p>Beauty-фильтр</p>
    <header>
      <li>
        Услуга
        <select name="1">
          <option disabled selected value></option>
          <optgroup label="Парикмахерские услуги">
            <option value="ws"> Женская стрижка</option>
            <option value="ms">Мужская стрижка</option>
            <option value="oh">Окрашивание волос</option>
            <option value="yv">Укладка волос</option>
            <option value="kvv">Кератиновое выпрямление волос</option>
            <option value="nv">Наращивание волос</option>
          </optgroup>
          <optgroup label="Услуги ногтевого сервиса">
            <option value="mn">Маникюр</option>
            <option value="pd">Педикюр</option>
            <option value="nn">Наращивание ногтей</option>
            <option value="pgl">Покрытие гель-лак</option>
          </optgroup>
          <optgroup label="Услуги lash-мейкера">
            <option value="nr">Наращивание ресниц</option>
            <option value="lr">Ламинирование ресниц</option>
          </optgroup>
          <optgroup label="Услуги бровиста">
            <option value="yb">Укладка бровей</option>
          </optgroup>
          <optgroup label="Услуги косметолога">
            <option value="chl">Чистка лица</option>
            <option value="" kk>Консультация косметолога</option>
          </optgroup>
          <optgroup label="Услуги визажиста">
            <option value="mk">Макияж</option>
          </optgroup>
        </select>
      </li>
      <li>
        Дата
        <input type="date" class="qwe" />
      </li>
      <li>Время <input type="time" class="qwe" /></li>
    </header>
    <main>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
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
  /*background-image: url(res/%D1%84%D0%BE%D0%BD7.jpg);*/
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
