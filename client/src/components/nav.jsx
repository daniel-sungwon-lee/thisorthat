import React, { useState } from 'react';
import { AppBar, Toolbar, Slide, IconButton } from '@material-ui/core';
import { InfoRounded } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import Info from './info';

const useStyles = makeStyles({
  nav: {
    backgroundColor: "#FF9478"
  },
  popover: {
    width: "14rem",
    marginTop: "1.1rem"
  },
  info: {
    color: "#FFEB99"
  }
})

export default function Nav(props) {
  const classes = useStyles()

  const [open ,setOpen] = useState(false)

  return (
    <Slide in direction="down">
      <div className="mb-5 sticky-top">
        <AppBar position="sticky" classes={{ root: classes.nav }}>
          <Toolbar className="justify-content-between">

            <a href="/" className="text-decoration-none mx-2">
              <div>
                <img src="images/choice.svg" alt="Choice logo" width="60" />
              </div>
            </a>

            <div className="d-flex mx-2">

              <IconButton onClick={() => setOpen(true)} className="p-0">
                <InfoRounded fontSize="large" className={classes.info} />
              </IconButton>

              <Info open={open} setOpen={setOpen} />

            </div>

          </Toolbar>
        </AppBar>
      </div>
    </Slide>
  )
}
