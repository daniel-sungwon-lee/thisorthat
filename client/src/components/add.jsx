import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField,
         Zoom } from '@material-ui/core';
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

export default function Add(props) {
  const { open, setOpen, type, text } = props
  const classes = useStyles();

  const [add, setAdd] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <Dialog open={open} onClose={() => setOpen(false)} scroll="body"
      TransitionComponent={Zoom} classes={{ paper: classes.dialog }}>
      <div className="m-3">

        <DialogTitle>
          Add {type}
        </DialogTitle>

        <form onSubmit={handleSubmit}>
          <DialogContent>

            <TextField multiline label="Something" helperText={text}
            color="secondary" value={add} onChange={(e) => setAdd(e.target.value)}
            required InputLabelProps={{ required: false }} fullWidth />

          </DialogContent>

          <DialogActions>

            <Button color="secondary" classes={{ text: classes.button }}
              onClick={() => setOpen(false)}>
              close
            </Button>

            <Button style={{color: "#FF9478"}} classes={{ text: classes.button }}
              type="submit">
              add
            </Button>

          </DialogActions>
        </form>

      </div>
    </Dialog>
  )
}
