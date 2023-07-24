// enum direction{
//     up ,
//     down,
//     right,
//     left,
// }
// console.log(direction);
// enum VehiculeType {
//     Velo,
//     Moto,
//     Voiture,
//     Camion
// }
// console.log(VehiculeType);
// function HandleVehiculeType(type:VehiculeType){
//     switch (type) {
//         case VehiculeType.Velo:
//             console.log("c'est un velo");
//             break;
//         case VehiculeType.Moto:
//             console.log("c'est une moto");
//              break;
//         case VehiculeType.Voiture:
//             console.log("c'est une Voiture");
//             break;
//         case VehiculeType.Camion:
//             console.log("c'est un camion");
//             break;
//         default: 
//            console.log("type de Vehicule inconnu")
//             break;
//     }
// }
// HandleVehiculeType(VehiculeType.Camion);
var direction;
(function (direction) {
    direction["up"] = "up";
    direction["down"] = "down";
    direction["right"] = "right";
    direction["left"] = "left";
})(direction || (direction = {}));
console.log(direction);
