import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
   root: {
      minWidth: 275,
      margin: "20px"
   },
   bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)"
   },
   title: {
      fontSize: 14
   },
   pos: {
      marginBottom: 12
   }
});

const Item = ({ item, toggleItem }) => {
   const classes = useStyles();
   const tags = item.tags.map(tag => <Chip label={tag} color="secondary" />);

   return (
      <Card className={classes.root}>
         <CardContent>
            <Typography variant="h5" component="h2">
               {item.name}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
               {item.completed ? "Complete" : "Not Complete"}
            </Typography>
            {tags}
         </CardContent>
         <CardActions>
            <Button color="primary" onClick={() => toggleItem(item.id)}>
               {item.completed ? "undo" : "Mark As Complete"}
            </Button>
         </CardActions>
      </Card>
   );
};

export default Item;
