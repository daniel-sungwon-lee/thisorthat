import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Zoom }
        from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  dialog: {
    width: "75%",
    borderRadius: "1rem"
  },
  button: {
    textTransform: "lowercase",
    fontSize: "18px",
    borderRadius: "0.5rem"
  }
})

export default function Info(props) {
  const { open, setOpen } = props
  const classes = useStyles();

  return (
    <Dialog open={open} onClose={() => setOpen(false)} scroll="body"
      TransitionComponent={Zoom} classes={{ paper: classes.dialog }}>
      <div className="m-3">

        <DialogTitle>
          Question Mark
        </DialogTitle>

        <DialogContent>

          <p>
            This or That helps you choose when you
            are in a dilemma between two decisions;
            use it when you are in a state of decision
            paralysis and need to be decisive!
          </p>

        </DialogContent>

        <DialogActions>

          <Button color="secondary" classes={{ text: classes.button }}
            onClick={() => setOpen(false)}>
            close
          </Button>

        </DialogActions>

      </div>
    </Dialog>
  )
}
