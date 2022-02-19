import { React } from "react";
//import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { useRecoilValue } from "recoil";
import selectedLanguageState from "../../atoms/selectedLanguage";
import * as english from "../../assets/languages/EN.json";
import * as french from "../../assets/languages/FR.json";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: `${theme.palette.primary.light}`,
    padding: "1em",
  },
  subtitle: {
    margin: "0.75em",
    fontFamily: "Dancing Script",
    textAlign: "center",
  },
  map: {
    height: "100%",
    width: "100%",
  },
  leafletContainer: {
    border: "solid 1px black",
    margin: "auto",
    minHeight: "100%",
    [theme.breakpoints.up("xs")]: {
      width: "90%",
      height: "100px",
    },
    [theme.breakpoints.up("sm")]: {
      width: "90%",
      height: "200px",
    },
    [theme.breakpoints.up("md")]: {
      width: "90%",
      height: "300px",
    },
    [theme.breakpoints.up("lg")]: {
      width: "90%",
      height: "400px",
    },
    [theme.breakpoints.up("xl")]: {
      width: "90%",
      height: "500px",
    },
  },
  content: {
    margin: "0.5em",
    textAlign: "center",
  },
}));

const Location = (props) => {
  const classes = useStyles();
  const language = useRecoilValue(selectedLanguageState);
  const iceRink = [55.03594, -1.45498];

  return (
    <Paper className={classes.container}>
      <Grid
        container
        direction="column"
        justifyContent="space-evenly"
        alignItems="stretch"
      >
        <Grid item>
          <Typography variant="h4" className={classes.subtitle}>
            {language.code === "EN"
              ? english.LOCATION.title
              : french.LOCATION.title}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle2" className={classes.content}>
            {language.code === "EN"
              ? english.LOCATION.address
              : french.LOCATION.address}
          </Typography>
        </Grid>
        <Grid item className={classes.content}>
          <Button
            variant="contained"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.google.com/maps/dir/Central+Station,+Newcastle+upon+Tyne,+UK/Whitley+Bay+Ice+Rink,+Hillheads+Rd,+Whitley+Bay+NE25+8HP,+United+Kingdom/@55.0064147,-1.5702453,13z/data=!4m14!4m13!1m5!1m1!1s0x487e70b42718ffe9:0x5ebeb0f8a80300e4!2m2!1d-1.6145693!2d54.9692225!1m5!1m1!1s0x487e6e813afe5f3b:0xb8cf985d8fb732fc!2m2!1d-1.4552111!2d55.0360903!3e3?hl=en"
          >
            {language.code === "EN"
              ? english.LOCATION.directions
              : french.LOCATION.directions}
          </Button>
        </Grid>
        <Grid item ref={props.customRef}>
          <div className={classes.map}>
            <MapContainer
              center={iceRink}
              zoom={11}
              className={classes.leafletContainer}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker
                position={iceRink}
                icon={
                  new Icon({
                    iconUrl: markerIconPng,
                    iconSize: [25, 41],
                    iconAnchor: [12, 41],
                  })
                }
              >
                <Popup>
                  Whitley Bay ice rink <br />
                  Hillheads Rd <br />
                  Whitley Bay <br />
                  NE25 8HP <br />
                  <Button
                    href="https://www.google.com/maps/place/Whitley+Bay+Ice+Rink/@55.0357053,-1.4547985,17z/data=!4m5!3m4!1s0x0:0xb8cf985d8fb732fc!8m2!3d55.0360903!4d-1.4552111?hl=en"
                    target="_blank"
                    variant="contained"
                    color="secondary"
                    size="small"
                  >
                    {language.code === "EN"
                      ? english.LOCATION.button
                      : french.LOCATION.button}
                  </Button>
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Location;

//About.propTypes = {};
