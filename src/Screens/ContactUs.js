import React, { useEffect, useState } from "react";
import { Grid, TextField } from "@mui/material";
import classes from "../assets/Styles/contactus.module.css";
import InfoCard from "../Components/ContactUs/InfoCard";
// import sgMail from "@sendgrid/mail";
const ContactUs = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [subject, setSubject] = useState(null);
  const [message, setMessage] = useState(null);
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    if (!email || !name || !phoneNumber) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [email, name, phoneNumber]);
  const sendEmail = () => {
    console.log(name, email, phoneNumber, subject, message);
    // const msg = {
    //   to: "recipient@example.com",
    //   from: "sender@example.com",
    //   subject: "Test Email",
    //   text: "Hello, this is a test email from Azure SendGrid!",
    // };

    // sgMail
    //   .send(msg)
    //   .then(() => console.log("Email sent successfully"))
    //   .catch((error) => console.error(error));
  };
  return (
    <Grid
      container
      paddingTop={12}
      paddingBottom={10}
      justifyContent={"center"}
    >
      <Grid
        item
        container
        bgcolor={"black"}
        height={"45vh"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid item className={classes["Title"]}>
          Contact Us
        </Grid>
      </Grid>
      <Grid item container xs={11} sm={9} justifyContent={"center"} marginTop={10}>
        <Grid item container direction={"row"} justifyContent={"center"}>
          <Grid item md={4.5}>
            <Grid
              item
              container
              xs={12}
              direction={"row"}
              className={classes["welcomet"]}
            >
              Contact&nbsp;
              <Grid item className={classes["garden"]}>
                Details
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid
                item
                width={100}
                border={"1px dashed #cccccc"}
                height={0}
                marginTop={2}
              ></Grid>
            </Grid>
            <Grid item marginTop={5} >
              <InfoCard type={"contact"} />
              <Grid
                marginTop={5}
                item
                container
                xs={12}
                direction={"row"}
                className={classes["welcomet"]}
              >
                Working&nbsp;
                <Grid item className={classes["garden"]}>
                  Hours
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid
                  item
                  width={100}
                  border={"1px dashed #cccccc"}
                  height={0}
                  marginTop={2}
                ></Grid>
              </Grid>
            </Grid>
            <Grid item marginTop={5} >
              <InfoCard type={"hours"} />
            </Grid>
          </Grid>
          <Grid item md={7.5} paddingLeft={2} paddingTop={{ xs: 5, md: 0 }}>
            <Grid
              item
              container
              xs={12}
              direction={"row"}
              className={classes["welcomet"]}
            >
              Contact&nbsp;
              <Grid item className={classes["garden"]}>
                Details
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid
                item
                width={100}
                border={"1px dashed #cccccc"}
                height={0}
                marginTop={2}
              ></Grid>
            </Grid>
            <Grid item className={classes["infoCOm2"]} marginTop={4}>
              We recently helped a from small to large scale of landscaping
              service so if you need and landscaping service or any suggession
              please ask our experts they will guide you as soon as possible.
            </Grid>
            <Grid item container direction={"row"} gap={4} marginTop={4}>
              <Grid item xs={5.5}>
                <TextField
                  value={name}
                  fullWidth
                  size="medium"
                  placeholder="Your Name*"
                  InputProps={{ className: classes["text"] }}
                  className={classes["text"]}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={5.5}>
                <TextField
                  value={email}
                  fullWidth
                  size="medium"
                  placeholder="Your Email*"
                  InputProps={{ className: classes["text"] }}
                  className={classes["text"]}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={5.5}>
                <TextField
                  value={phoneNumber}
                  fullWidth
                  size="medium"
                  placeholder="Your Phone Number*"
                  InputProps={{ className: classes["text"] }}
                  className={classes["text"]}
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={5.5}>
                <TextField
                  value={subject}
                  fullWidth
                  size="medium"
                  placeholder="Subject"
                  InputProps={{ className: classes["text"] }}
                  className={classes["text"]}
                  onChange={(e) => {
                    setSubject(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12} height={290}>
                <TextField
                  value={message}
                  fullWidth
                  multiline
                  rows={11}
                  size="medium"
                  placeholder="Your Message"
                  InputProps={{ className: classes["text2"] }}
                  className={classes["text"]}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                />
              </Grid>
              <button
                className={classes["submitButton"]}
                onClick={() => {
                  sendEmail();
                }}
                disabled={disabled}
              >
                Submit
              </button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ContactUs;
