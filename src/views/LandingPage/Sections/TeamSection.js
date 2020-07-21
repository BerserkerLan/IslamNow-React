import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import team1 from "assets/img/faces/team1.jpg";
import team2 from "assets/img/faces/team2.jpg";
import team3 from "assets/img/faces/team3.jpg";
import team4 from "assets/img/faces/team4.jpg";

import {ReactComponent as EmailIcon} from "assets/img/email_icon.svg";
import {ReactComponent as WebsiteIcon} from "assets/img/website_icon.svg";
import {ReactComponent as GithubIcon} from "assets/img/github_icon.svg";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Here is our team</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} md={3}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team1} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Mahbub Iftikhar
                <br />
                <small className={classes.smallTitle}>Engineer</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  The person who made all this possible. He created the idea and funds everything
                  for the sake of the Ummah.
                  <br></br>
                  <br></br>

                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <a target="_blank" href="https://www.linkedin.com/in/mahbub-iftekhar/">
                    <i className={classes.socials + " fab fa-linkedin"} />
                    </a>
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                <a target="_blank" href="https://www.facebook.com/mahbub.iftekhar">
                  <i className={classes.socials + " fab fa-facebook"} />
                  </a>
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
              <a target="_blank" href="mailto:Mahbub@islamnow.co.uk">
                <EmailIcon class="social_icon" />
                </a>
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <a target="_blank" href="https://www.mahbubiftekhar.co.uk/">
                <WebsiteIcon class="social_icon" />
                </a>
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                <a target="_blank" href="https://github.com/mahbubiftekhar">
                  <GithubIcon class="social_icon" />
                </a>
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team2} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Alex Shand
                <br />
                <small className={classes.smallTitle}>Engineer</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Our go to person for anything tech! A kind fellow who liked the
                  idea of helping out others and manages a big chunk of our technical implementation.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                <a target="_blank" href="https://github.com/Alex-Shand">
                  <GithubIcon class="social_icon" />
                </a>
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                <a target="_blank" href="https://www.linkedin.com/in/alex-shand-3a9993150/">
                  <i className={classes.socials + " fab fa-linkedin"} />
                </a>
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team3} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Rusab Asher
                <br />
                <small className={classes.smallTitle}>Engineer</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  He exists.
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
              <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                <a target="_blank" href="https://github.com/Alex-Shand">
                  <GithubIcon class="social_icon" />
                </a>
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                <a target="_blank" href="https://www.linkedin.com/in/alex-shand-3a9993150/">
                  <i className={classes.socials + " fab fa-linkedin"} />
                </a>
                </Button>
              </CardFooter>
            </Card>
          </GridItem>

          <GridItem xs={12} sm={12} md={3}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team4} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Stephen Waddell
                <br />
                <small className={classes.smallTitle}>Engineer</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Consultant and developer for many different things.
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>

                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
              <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                <a target="_blank" href="https://www.linkedin.com/in/stephen-waddell-311090166/">
                  <i className={classes.socials + " fab fa-linkedin"} />
                </a>
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                <a target="_blank" href="mailto:Stephen@IslamNow.co.uk">
                  <EmailIcon class="social_icon" />
                </a>
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                <a target="_blank" href="https://github.com/ZeroSum24">
                  <GithubIcon class="social_icon" />
                </a>
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
