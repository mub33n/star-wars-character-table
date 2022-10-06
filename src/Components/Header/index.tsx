import React from "react";
import Button from "@material-ui/core/Button";

const styles = {
  root: {
    backgroundColor: "gray",
    padding: 16,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  bold: {
    fontWeight: "bold",
  },
  textColor: {
    color: "white",
  },
} as const;

type Props = {
  setPage: (page: number) => void;
  page: number;
};

const Header = ({ page, setPage }: Props) => {
  return (
    <div style={styles.root}>
      <h1 style={styles.textColor}>STAR WARS CHARACTERS</h1>
      <div style={styles.container}>
        <h3 style={styles.textColor}>PAGE {page} OF 9</h3>
        <div>
          <Button
            style={{ marginRight: 8 }}
            disabled={page <= 1}
            onClick={() => setPage(page - 1)}
            variant="contained"
          >
            Previous
          </Button>
          <Button
            disabled={page >= 9}
            onClick={() => setPage(page + 1)}
            variant="contained"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

Header.defaultProps = {
  setPage: () => {},
  page: false,
};

export default Header;
