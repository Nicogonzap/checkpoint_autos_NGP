const autos = require("./autos");

let concesionaria = {
    autos: autos,
    buscarPorPatente: function (patente) {
        let autoEncontrado = autos.find (auto => auto.patente == patente)
        switch (autoEncontrado) {
            case undefined:
                return null;
                break;
            default:
                return autoEncontrado
        }
    },
    venderAuto: function (patente) {
        return this.buscarPorPatente (patente).vendido = true
    },
    autosParaLaVenta: () => autos.filter (auto => auto.vendido == false), // Filtra los autos que están a la venta
    //autosNuevos: () => concesionaria.autosParaLaVenta().filter(auto => auto.km <= 100), // toma los autos a la venta y filtra los que tienen menos de 100 Km
    
    autosNuevos: function () {
        return this.autosParaLaVenta().filter (auto => auto.km <= 100)
    },
    listaDeVentas: function () {
        // Tengo que usar el array map de los autos vendidos
        let vendidos = autos.filter (auto => auto.vendido == true)
        return vendidos.map (auto => auto.precio * 1)
    },
    totalDeVentas: function () {
        let ventas = this.listaDeVentas()
        return ventas.reduce ((curr , next,) => curr + next,0)
    }
    
}
//console.log(concesionaria.autos)
console.log (concesionaria.listaDeVentas());
console.log (concesionaria.totalDeVentas());
module.exports = concesionaria