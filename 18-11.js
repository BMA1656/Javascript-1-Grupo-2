let vehiculos = [];
const nuevoVehiculo = {
  marca: '',
  modelo: '',
  edicion: 0,
  color: '',
  precio: 0,
  motor: '',
  transmision: '',
  puertas: 0,
  traccion: '',
  pasajeros: 0,
  tipo: '',
  unidades: 0,
  resumen: function () {
    return `Marca: ${this.marca}. Modelo: ${this.modelo}. Edicion: ${this.edicion}. Color: ${this.color}. Precio: ${this.precio}`
  },
  ingresarVehiculo: function (data) {
    for (let key in data) {
      this[key] = data[key]
    }
  },
  actualizarUnidades: function (unidades) {
    this.unidades = unidades
  },
  actualizarPrecio: function (precio) {
    this.precio = precio
  },
  actualizarEdicion: function (edicion) {
    this.edicion = edicion
  },
};

const carroToyota = Object.create(nuevoVehiculo);
carroToyota.ingresarVehiculo({
  marca: "Toyota",
  modelo: "Corolla",
  edicion: 2020,
  color: 'Rojo',
  precio: 2500,
  motor: '2.0',
  transmision: 'manual',
  puertas: 5,
  traccion: '4x2',
  pasajeros: 5,
  tipo: 'sedan',
  unidades: 10
});

vehiculos.push(carroToyota);

const carroNissan = Object.create(nuevoVehiculo);
carroNissan.ingresarVehiculo({
  marca: "Nissan",
  modelo: "Sentra",
  edicion: 2021,
  color: 'Negro',
  precio: 50000,
  motor: '2.0',
  transmision: 'Automático',
  puertas: 5,
  traccion: '4x2',
  pasajeros: 5,
  tipo: 'Sedan',
  unidades: 5
});

vehiculos.push(carroNissan);

carroToyota.actualizarUnidades(20);
carroToyota.actualizarPrecio(3000);
carroToyota.actualizarEdicion(2077);

console.log(vehiculos);