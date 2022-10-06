import React from "react";
import ModalContent from "../";
import renderer from "react-test-renderer";

jest.mock("../../../Api/Calls");

const dummyData = [
  {
    person: {
      birth_year: "11/11/1988",
      created: "11/11/1988",
      edited: "11/11/1988",
      eye_color: "red",
      films: [],
      gender: "male",
      hair_color: "red",
      height: "2ft",
      homeworld: "unknown",
      mass: "24",
      name: "max",
      skin_color: "red",
      species: [],
      starships: [],
      url: "",
      vehicles: [],
    },
    home: {
      climate: "hot",
      created: "11/11/1988",
      diameter: "1",
      edited: "111",
      gravity: "none",
      films: [],
      name: "earth",
      orbital_period: "n/a",
      population: "dense",
      residents: [],
      rotation_period: "",
      surface_water: "",
      terrain: "",
      url: "",
    },
  },
];

describe("Modal Content Component", () => {
  it("Expect nothing to be rendered if prop `modalIsOpen` is `false`", () => {
    //TODO
  });
});
