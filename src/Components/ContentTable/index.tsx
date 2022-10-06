import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Details from "../../Interfaces/Details";

const styles = {
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  bold: {
    color: "white",
    fontWeight: "bold",
  },
  background: {
    backgroundColor: "grey",
  },
} as const;

type Props = {
  setIsOpen: (open: boolean) => void;
  setDetailedInformation: (details: object) => void;
  personalDetails: Array<Details>;
};

const ContentTable: React.FC<Props> = ({
  setDetailedInformation,
  personalDetails,
  setIsOpen,
}) => {
  if (personalDetails.length === 0) {
    return null;
  }
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow style={styles.background}>
            <TableCell style={styles.bold}>Name</TableCell>
            <TableCell style={styles.bold}>Gender</TableCell>
            <TableCell style={styles.bold}>Home Planet</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {personalDetails.map((row) => {
            const {
              person: { name, gender },
              home: { name: homeName },
            } = row;
            return (
              <TableRow
                key={name}
                onClick={() => {
                  setDetailedInformation(row);
                  setIsOpen(true);
                }}
                style={{ cursor: "pointer" }}
              >
                <TableCell component="th" scope="row">
                  {name}
                </TableCell>
                <TableCell
                  style={{ textTransform: "capitalize" }}
                  component="th"
                  scope="row"
                >
                  {gender}
                </TableCell>
                <TableCell component="th" scope="row">
                  {homeName}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

ContentTable.defaultProps = {
  setIsOpen: () => {},
  setDetailedInformation: () => {},
  personalDetails: [],
};

export default ContentTable;
