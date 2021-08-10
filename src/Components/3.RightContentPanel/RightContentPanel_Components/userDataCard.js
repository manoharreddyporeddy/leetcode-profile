import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";

const useStyles = makeStyles((theme) => ({
  eachOfThreeCardsContainer: {
    flex: "1",
    minWidth: "238px",
    margin: "0px 0px 15px 12px",
    borderRadius: "8px",
    transition: "all ease 0.3s"
  },

  eachCard: {
    padding: "12px",
    borderRadius: "8px",
    boxShadow:
      "rgba(0, 0, 0, 0.1) 0px 1px 2px 0px, rgba(0, 0, 0, 0.08) 0px 2px 8px 0px"
  }
}));

export default function UserDataCard(props) {
  const classes = useStyles();

  return (
    <div className={classes.eachOfThreeCardsContainer}>
      <Card className={classes.eachCard}>{props.children}</Card>
    </div>
  );
}
