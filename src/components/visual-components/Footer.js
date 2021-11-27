import React from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { makeStyles } from "@material-ui/core/styles";
import languageState from "../../atoms/language";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({}));

const Footer = (props) => {
  const classes = useStyles();
  const [languages, setLanguages] = useRecoilState(languageState);

  return <p>{languages !== undefined ? languages[0].code : "footer area"}</p>;
};

export default Footer;

Footer.propTypes = {};
