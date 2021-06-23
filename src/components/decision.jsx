import React from 'react';
import { IconButton, Dialog, Zoom } from '@material-ui/core';
import { ClearRounded } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  dialog: {
    minWidth: "75%",
    minHeight: "60%",
    borderRadius: "1rem",
    position: "relative"
  },
  clear: {
    position: "absolute",
    top: "0.5rem",
    right: "0.5rem"
  },
  decision: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  }
})

export default function Decision(props) {
  const { open, setOpen, what, color } = props
  const classes = useStyles();

  return (
    <Dialog open={open} onClose={() => setOpen(false)} scroll="body"
      TransitionComponent={Zoom} classes={{ paper: classes.dialog }}
      style={{background: color}}>
      <div className="m-3">

        <div className={classes.decision}>
          <h1 className="m-0 text-break mx-1">
            {what}
          </h1>
        </div>

        <IconButton color="secondary" className={classes.clear}
          onClick={() => setOpen(false)}>
            <ClearRounded fontSize="large" />
        </IconButton>

      </div>
    </Dialog>
  )
}
