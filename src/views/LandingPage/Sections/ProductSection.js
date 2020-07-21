import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";

// Own Icons
import {ReactComponent as PersonComputerIcon} from "assets/img/person_on_computer_icon.svg";
import {ReactComponent as PrayingIcon} from "assets/img/praying_icon.svg";
import {ReactComponent as ProcessIcon} from "assets/img/process_icon.svg"

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>What is Islam Now?</h2>
          <h5 className={classes.description}>
          We are a mobile application group dedicated to supporting prayer 
          timings for masjids which do not have the budget to create a mobile
           application of their own. That means we are completely free.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Registration"
              description="Sign up for an account and submit your masjid's details and timings to us."
              icon={PersonComputerIcon}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Processing"
              description="We handle all the processing to get your timetable onto our mobile application."
              icon={ProcessIcon}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Success!"
              description="In Sha'Allah, your patrons will now be able to view your masjid and it's timetable on the mobile application."
              icon={PrayingIcon}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
