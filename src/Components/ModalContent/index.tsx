import React, { useState, useEffect } from "react";
import { fetchData } from "../../Api/Calls";
import Loader from "../../Components/VaderLoader";
import Details from "../../Interfaces/Details";

const styles = {
  root: {
    display: "flex",
    flexDirection: "row",
    padding: 32,
  },
  row: {
    textTransform: "capitalize",
  },
  bold: {
    textTransform: "capitalize",
    fontWeight: "bold",
  },
  spacing: {
    paddingRight: 64,
  },
} as const;

type Props = {
  modalIsOpen: boolean;
  detailedInformation: Details;
};

const ModalContent: React.FC<Props> = ({
  modalIsOpen,
  detailedInformation,
}) => {
  const [films, setFilms] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      if (modalIsOpen) {
        setLoading(true);
        try {
          const {
            home: { films: movies },
          } = detailedInformation;
          let promises = movies.map(async (filmURL) => {
            const data = await fetchData(filmURL);
            return data;
          });
          for await (let val of promises) {
            setFilms((prevState) => [...prevState, val]);
          }
          setLoading(false);
        } catch (e) {
          console.error(e);
        }
      }
    })();
  }, [modalIsOpen, detailedInformation]);

  if (!modalIsOpen) {
    return null;
  }
  if (isLoading) {
    return (
      <div className="loader">
        <Loader />
      </div>
    );
  }

  const {
    person: { name, eye_color, hair_color, gender },
    home: { name: homeName },
  } = detailedInformation;

  return (
    <div className="modal-content" style={styles.root}>
      <div>
        <h2 style={styles.spacing}>Profile Details</h2>
        <div style={styles.row}>
          <p style={styles.bold}>Name</p>
          <p>{name}</p>
        </div>
        <div style={styles.row}>
          <p style={styles.bold}>Eye Color</p>
          <p>{eye_color}</p>
        </div>
        <div style={styles.row}>
          <p style={styles.bold}>Hair Color</p>
          <p>{hair_color}</p>
        </div>
        <div style={styles.row}>
          <p style={styles.bold}>Gender</p>
          <p>{gender}</p>
        </div>
        <div style={styles.row}>
          <p style={styles.bold}>Home Plane </p>
          <p>{homeName}</p>
        </div>
      </div>
      <div>
        <h2>Films Starred In</h2>
        {films.length > 0 && films.map((film) => <p>{film.title}</p>)}
        {films.length === 0 && <p>No Films Found</p>}
      </div>
    </div>
  );
};

ModalContent.defaultProps = {
  modalIsOpen: false,
  detailedInformation: null,
};

export default ModalContent;
