import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import {Paper} from "@material-ui/core/Paper";
// import {Table} from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableContainer from "@material-ui/core/TableContainer";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
// import {Button} from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
  root: {
    width: "100%",
    // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',

  },
  container: {
    maxHeight: 440
  }
});

const getProperty = (obj, prop) => {
  var parts = prop.split(".");

  if (Array.isArray(parts)) {
    var last = parts.length > 1 ? parts.pop() : parts;
    var l = parts.length,
      i = 1,
      current = parts[0];

    while ((obj = obj[current]) && i < l) {
      current = parts[i];
      i++;
    }

    if (typeof obj === "object") {
      return obj[last];
    }
    return obj;
  } else {
    throw "parts is not valid array";
  }
};

const ButtonLink = prop => {
  return (
    <Button
      to={prop.link}
      variant="contained"
      type="button"
      size="small"
      className={"button-classes"}
      startIcon={prop.icon}
    />
  );
};

export default function StickyHeadTable({ data, tableHeaders, tableBodies }) {
  const classes = useStyles();

  return (
    <Paper className={classes.root} style={{margin:"50px 20px 30px 10px"}}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead >
            <TableRow>
              {tableHeaders.map((header, index) => (
                <TableCell key={index} style={{background:"gray"}} >{header}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(data => (
              <TableRow key={data.id}>
                {tableBodies.map(body =>
                  typeof body === "string" ? (
                    <TableCell key={body}>{getProperty(data, body)}</TableCell>
                  ) : (
                    <TableCell key={body}>
                      <ButtonLink link={body.base} icon={body.icon} />
                    </TableCell>
                  )
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
