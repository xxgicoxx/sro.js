# sro.js
Node.js package for track Correios objects.

<p align="center">
  <img src="assets/imgs/correios.png">
</p>

# Features
* Track Correios objects

# Prerequisites
* [Node.js](https://nodejs.org/en/)

# Installation
````
npm install sro.js
````

# Example
```javascript
const Correios = require('sro.js');

const correios = new Correios();

(async () => {
  try {
    const track = await correios.track('PX547037143BR');
    console.log(track);
  } catch (error) {
    console.error(error);
  }
})();
```

# Built With
* [Node.js](https://nodejs.org/en/)

# Authors
* [xxgicoxx](https://github.com/xxgicoxx)

# Acknowledgments
* [Correios](https://www.correios.com.br/)