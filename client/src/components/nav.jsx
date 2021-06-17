import React from 'react';
import { AppBar, Fade, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  nav: {
    backgroundColor: "#FF9478"
  },
  popover: {
    width: "14rem",
    marginTop: "1.1rem"
  }
})

export default function Nav(props) {
  const classes = useStyles()

  return (
    <Fade in>
      <div className="mb-5 sticky-top">
        <AppBar position="sticky" classes={{ root: classes.nav }}>
          <Toolbar className="justify-content-between">

            <a href="/" className="text-decoration-none mx-2">
              <div>
                <img src="images/choice.svg" alt="Choice logo" width="60" />
              </div>
            </a>

            <div className="d-flex mx-2">


            </div>

          </Toolbar>
        </AppBar>
      </div>
    </Fade>
  )
}
