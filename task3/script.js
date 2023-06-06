'use strict';

const carApp = {
    ferrari: {
      model: '488 GTB',
      year: 2023,
      color: 'Black'
    },
    bugatti: {
      model: 'Chiron',
      year: 2022,
      color: 'Blue'
    },
    mclaren: {
      model: '720S',
      year: 2021,
      color: 'Orange'
    },
    showCarInfo: function () {
      let carInfo = document.getElementById('carInfo');
      carInfo.innerHTML = `Model: ${this.model}<br>Year: ${this.year}<br>Color: ${this.color}`;
    },
    chooseCar: function () {
      let select = document.getElementById('select');
      let carInfo = document.getElementById('carInfo');
      let selectedCar = select.value;
      if (selectedCar === 'Ferrari') {
        this.showCarInfo.call(this.ferrari);
      } else if (selectedCar === 'Bugatti') {
        this.showCarInfo.call(this.bugatti);
      } else if (selectedCar === 'McLaren') {
        this.showCarInfo.call(this.mclaren);
      } else if (selectedCar === '0') {
        carInfo.innerHTML = '';
      }
    }
  };
  