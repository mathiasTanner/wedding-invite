import React from "react";
//import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: `${theme.palette.primary.main}`,
    padding: "2em",
  },
}));

const Placeholder = (props) => {
  const classes = useStyles();
  return (
    <Paper className={classes.container}>
      <Grid
        container
        direction="column"
        justifyContent="space-evenly"
        alignItems="stretch"
      >
        <Grid item>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In est
            diam, congue vel egestas at, laoreet in velit. Maecenas ligula
            tortor, convallis ut molestie porttitor, malesuada ac mauris.
            Praesent facilisis vehicula sem, quis elementum arcu lacinia non.
            Etiam luctus sapien in urna congue, sit amet fermentum lorem congue.
            Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Quisque nec sagittis odio. In pretium
            malesuada lorem, vitae suscipit massa volutpat quis. Nulla a urna
            scelerisque, elementum tellus a, fringilla orci. Suspendisse ut
            vulputate turpis, eu vehicula ante. Suspendisse potenti.
            Pellentesque imperdiet vehicula justo vitae ultricies. Proin quis
            neque tellus. Morbi sed consectetur arcu. Sed nibh arcu, egestas non
            mi in, rutrum consequat nisi. Praesent a lectus erat.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In est
            diam, congue vel egestas at, laoreet in velit. Maecenas ligula
            tortor, convallis ut molestie porttitor, malesuada ac mauris.
            Praesent facilisis vehicula sem, quis elementum arcu lacinia non.
            Etiam luctus sapien in urna congue, sit amet fermentum lorem congue.
            Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Quisque nec sagittis odio. In pretium
            malesuada lorem, vitae suscipit massa volutpat quis. Nulla a urna
            scelerisque, elementum tellus a, fringilla orci. Suspendisse ut
            vulputate turpis, eu vehicula ante. Suspendisse potenti.
            Pellentesque imperdiet vehicula justo vitae ultricies. Proin quis
            neque tellus. Morbi sed consectetur arcu. Sed nibh arcu, egestas non
            mi in, rutrum consequat nisi. Praesent a lectus erat.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In est
            diam, congue vel egestas at, laoreet in velit. Maecenas ligula
            tortor, convallis ut molestie porttitor, malesuada ac mauris.
            Praesent facilisis vehicula sem, quis elementum arcu lacinia non.
            Etiam luctus sapien in urna congue, sit amet fermentum lorem congue.
            Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Quisque nec sagittis odio. In pretium
            malesuada lorem, vitae suscipit massa volutpat quis. Nulla a urna
            scelerisque, elementum tellus a, fringilla orci. Suspendisse ut
            vulputate turpis, eu vehicula ante. Suspendisse potenti.
            Pellentesque imperdiet vehicula justo vitae ultricies. Proin quis
            neque tellus. Morbi sed consectetur arcu. Sed nibh arcu, egestas non
            mi in, rutrum consequat nisi. Praesent a lectus erat.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In est
            diam, congue vel egestas at, laoreet in velit. Maecenas ligula
            tortor, convallis ut molestie porttitor, malesuada ac mauris.
            Praesent facilisis vehicula sem, quis elementum arcu lacinia non.
            Etiam luctus sapien in urna congue, sit amet fermentum lorem congue.
            Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Quisque nec sagittis odio. In pretium
            malesuada lorem, vitae suscipit massa volutpat quis. Nulla a urna
            scelerisque, elementum tellus a, fringilla orci. Suspendisse ut
            vulputate turpis, eu vehicula ante. Suspendisse potenti.
            Pellentesque imperdiet vehicula justo vitae ultricies. Proin quis
            neque tellus. Morbi sed consectetur arcu. Sed nibh arcu, egestas non
            mi in, rutrum consequat nisi. Praesent a lectus erat.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In est
            diam, congue vel egestas at, laoreet in velit. Maecenas ligula
            tortor, convallis ut molestie porttitor, malesuada ac mauris.
            Praesent facilisis vehicula sem, quis elementum arcu lacinia non.
            Etiam luctus sapien in urna congue, sit amet fermentum lorem congue.
            Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Quisque nec sagittis odio. In pretium
            malesuada lorem, vitae suscipit massa volutpat quis. Nulla a urna
            scelerisque, elementum tellus a, fringilla orci. Suspendisse ut
            vulputate turpis, eu vehicula ante. Suspendisse potenti.
            Pellentesque imperdiet vehicula justo vitae ultricies. Proin quis
            neque tellus. Morbi sed consectetur arcu. Sed nibh arcu, egestas non
            mi in, rutrum consequat nisi. Praesent a lectus erat.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In est
            diam, congue vel egestas at, laoreet in velit. Maecenas ligula
            tortor, convallis ut molestie porttitor, malesuada ac mauris.
            Praesent facilisis vehicula sem, quis elementum arcu lacinia non.
            Etiam luctus sapien in urna congue, sit amet fermentum lorem congue.
            Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Quisque nec sagittis odio. In pretium
            malesuada lorem, vitae suscipit massa volutpat quis. Nulla a urna
            scelerisque, elementum tellus a, fringilla orci. Suspendisse ut
            vulputate turpis, eu vehicula ante. Suspendisse potenti.
            Pellentesque imperdiet vehicula justo vitae ultricies. Proin quis
            neque tellus. Morbi sed consectetur arcu. Sed nibh arcu, egestas non
            mi in, rutrum consequat nisi. Praesent a lectus erat.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In est
            diam, congue vel egestas at, laoreet in velit. Maecenas ligula
            tortor, convallis ut molestie porttitor, malesuada ac mauris.
            Praesent facilisis vehicula sem, quis elementum arcu lacinia non.
            Etiam luctus sapien in urna congue, sit amet fermentum lorem congue.
            Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Quisque nec sagittis odio. In pretium
            malesuada lorem, vitae suscipit massa volutpat quis. Nulla a urna
            scelerisque, elementum tellus a, fringilla orci. Suspendisse ut
            vulputate turpis, eu vehicula ante. Suspendisse potenti.
            Pellentesque imperdiet vehicula justo vitae ultricies. Proin quis
            neque tellus. Morbi sed consectetur arcu. Sed nibh arcu, egestas non
            mi in, rutrum consequat nisi. Praesent a lectus erat.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In est
            diam, congue vel egestas at, laoreet in velit. Maecenas ligula
            tortor, convallis ut molestie porttitor, malesuada ac mauris.
            Praesent facilisis vehicula sem, quis elementum arcu lacinia non.
            Etiam luctus sapien in urna congue, sit amet fermentum lorem congue.
            Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Quisque nec sagittis odio. In pretium
            malesuada lorem, vitae suscipit massa volutpat quis. Nulla a urna
            scelerisque, elementum tellus a, fringilla orci. Suspendisse ut
            vulputate turpis, eu vehicula ante. Suspendisse potenti.
            Pellentesque imperdiet vehicula justo vitae ultricies. Proin quis
            neque tellus. Morbi sed consectetur arcu. Sed nibh arcu, egestas non
            mi in, rutrum consequat nisi. Praesent a lectus erat.
          </p>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Placeholder;

//About.propTypes = {};
