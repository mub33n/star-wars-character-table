export default interface Details {
  person: {
    birth_year: string;
    created: string;
    edited: string;
    eye_color: string;
    films: Array<string>;
    gender: string;
    hair_color: string;
    height: string;
    homeworld: string;
    mass: string;
    name: string;
    skin_color: string;
    species: Array<string>;
    starships: Array<string>;
    url: string;
    vehicles: Array<string>;
  };
  home: {
    climate: string;
    created: string;
    diameter: string;
    edited: string;
    gravity: string;
    films: Array<string>;
    name: string;
    orbital_period: string;
    population: string;
    residents: Array<string>;
    rotation_period: string;
    surface_water: string;
    terrain: string;
    url: string;
  };
}