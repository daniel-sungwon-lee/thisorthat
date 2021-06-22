import React from 'react';
import { IconButton, Dialog, DialogActions, DialogContent, Zoom }
        from '@material-ui/core';
import { ClearRounded } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  dialog: {
    width: "75%",
    borderRadius: "1rem",
    position: "relative"
  },
  clear: {
    position: "absolute",
    top: "0.5rem",
    right: "0.5rem"
  }
})

export default function Decision(props) {
  const { open, setOpen, what } = props
  const classes = useStyles();

  return (
    <Dialog open={open} onClose={() => setOpen(false)} scroll="body"
      TransitionComponent={Zoom} classes={{ paper: classes.dialog }}>
      <div className="m-3">

        <DialogContent>

          <div className="text-center">
            <h1 className="m-0 text-break mx-1">
              {what}
            </h1>
          </div>

        </DialogContent>

        <DialogActions>

          <IconButton color="secondary" className={classes.clear}
            onClick={() => setOpen(false)}>
             <ClearRounded style={{fontSize:"28px"}} />
          </IconButton>

        </DialogActions>

      </div>
    </Dialog>
  )
}
