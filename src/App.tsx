import React, { useState, useEffect } from "react";
import { getPeopleWithHomePlanet } from "./Api/Calls";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import ModalContent from "./Components/ModalContent";
import Header from "./Components/Header";
import ContentTable from "./Components/ContentTable";
import Loader from "./Components/VaderLoader";
import Details from "./Interfaces/Details";

const styles = {
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
} as const;

const BasicTable: React.FC<{}> = () => {
  const [personalDetails, setPersonalDetails] = useState<Details[] | []>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [detailedInformation, setDetailedInformation] = useState<any>({});
  React.useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await getPeopleWithHomePlanet(page);
        setPersonalDetails(response);
        setLoading(false);
      } catch (e) {
        console.error(e);
      }
    })();
  }, [page]);

  return (
    <>
      <div style={styles.root}>
        <Header page={page} setPage={setPage} />
      </div>
      {loading ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <Modal
            open={modalIsOpen}
            center
            onClose={() => {
              setDetailedInformation({});
              setIsOpen(false);
            }}
          >
            <ModalContent
              modalIsOpen={modalIsOpen}
              detailedInformation={detailedInformation}
            />
          </Modal>
          <ContentTable
            personalDetails={personalDetails}
            setDetailedInformation={setDetailedInformation}
            setIsOpen={setIsOpen}
          />
        </>
      )}
    </>
  );
};

export default BasicTable;
