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
    displayCarInfo: function () {
      let displayInfo = document.getElementById('displayInfo');
      displayInfo.innerHTML = `Model: ${this.model}<br>Year: ${this.year}<br>Color: ${this.color}`;
    },
    chooseCar: function () {
      let select = document.getElementById('select');
      let displayInfo = document.getElementById('displayInfo');
      let selectedCar = select.value;
      if (selectedCar === 'Ferrari') {
        this.displayCarInfo.call(this.ferrari);
      } else if (selectedCar === 'Bugatti') {
        this.displayCarInfo.call(this.bugatti);
      } else if (selectedCar === 'McLaren') {
        this.displayCarInfo.call(this.mclaren);
      } else if (selectedCar === '0') {
        displayInfo.innerHTML = '';
      }
    }
  };
  