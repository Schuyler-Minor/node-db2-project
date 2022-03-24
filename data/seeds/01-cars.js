// STRETCH
const cars = [
  {
    vin: "JYAVP24E39A007465",
    make: "toyota",
    model: "prius",
    mileage: 215000,
    title: "clean",
    transmission: "manual",
  },
  {
    vin: "JH4KA3250HC004235",
    make: "toyota",
    model: "corolla",
    mileage: 115000,
    title: "salvage",
  },
  {
    vin: "JH4KA3240LC800239",
    make: "ford",
    model: "focus",
    mileage: 15000,
  },
];

// exports.seed = function (knex) {
//   return knex("cars")
//     .truncate()
//     .then(() => {
//       return knex("cars").insert(cars);
//     });
// };

exports.seed = async function (knex) {
  await knex("cars").truncate();
  await knex("cars").insert(cars);
};
