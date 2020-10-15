/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid, Paper, Typography, ButtonBase,
  ButtonGroup, Button, TextField, Dialog, DialogActions, DialogContentText, DialogContent, DialogTitle,
} from '@material-ui/core';
import { Accordion, Card } from 'react-bootstrap';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: '100%',
    display: 'flex',
  },
  dialog: {
    width: '500px',
    maxWidth: 500,
  },
  item: {
    padding: '10px',
    textAlign: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  dialogimg: {
    width: 300,
    height: 500,
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));


const InfoCardEntry = ({ book }) => {
  const classes = useStyles();
  const [isClicked, setClicked] = useState(false);
  const [buttonView, setButtonView] = useState();
  const [open, setOpen] = useState(false);
  const [zoomOpen, setZoomOpen] = useState(false);


  const zoomPicOpen = () => {
    setZoomOpen(true);
  };

  const zoomPicClose = () => {
    setZoomOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    isClicked ? setClicked(false) : setClicked(true);
  };

  // const renderButtonView = () => {
  //   if (buttonView === 'submitted') {
  //     return (
  //       <Button
  //         variant="outlined"
  //         color="primary"
  //         onClick={handleClickOpen}
  //       >
  //       See Review
  //       </Button>
  //     );
  //   }
  // };

  // const string = { summary };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={3}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image} onClick={() => zoomPicOpen()}>
              <img className={classes.img} alt="complex" src={book.coverURL} />
            </ButtonBase>
            <Dialog
              open={zoomOpen}
              onClose={zoomPicClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogContent>
                <img className={classes.dialogimg} alt="complex" src={book.coverURL} />
              </DialogContent>
              <DialogActions>
                <Button
                  onClick={zoomPicClose}
                  variant="outlined"
                  color="primary"
                >
                        Close
                </Button>
              </DialogActions>
            </Dialog>
          </Grid>
          <Grid item xs sm container>
            <Grid item container direction="column">
              <Grid item>
                <Grid
                  item
                  container
                  direction="row"
                >
                  <Grid
                    item
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                  >
                    <Typography variant="subtitle1">
                      {book.title}
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                  >
                    <Typography variant="subtitle2" style={{ marginBottom: '10px' }}>
                      {book.author}
                    </Typography>
                  </Grid>
                </Grid>
                <Typography gutterBottom variant="caption">
                  <div onClick={handleClick} style={{ wordSpacing: '.1em', margin: 'auto' }}>
                    {isClicked ? `${book.description}` : `${`${book.description}`.substring(0, 200)}(...)`}
                  </div>
                </Typography>
              </Grid>
              {/* <Grid item container direction="row">
                <ButtonGroup>
                  <div>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={handleClickOpen}
                    >
                    Add a Review
                    </Button>
                  </div>
                  <div>
                    {renderButtonView()}
                  </div>
                </ButtonGroup>
                <div>
                  <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogTitle id="alert-dialog-title">Leave your Review Here!</DialogTitle>
                    <DialogContent>
                      <DialogContentText id="alert-dialog-description">
                        <TextField
                          className={classes.dialog}
                          id="outlined-multiline-static"
                          label="Review"
                          multiline
                          rows={4}
                          variant="outlined"
                        />
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button
                        onClick={handleClose}
                        color="primary"
                      >
                        Close
                      </Button>
                      <Button
                        type="submit"
                        onClick={() => {
                          handleClose();
                          setButtonView('submitted');
                        }}
                        color="primary"
                        autoFocus
                      >
                      Add Review
                      </Button>
                    </DialogActions>
                  </Dialog>
                </div>
              </Grid> */}
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>

  );
};

export default InfoCardEntry;
