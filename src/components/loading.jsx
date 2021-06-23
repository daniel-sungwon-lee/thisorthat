import React from 'react';
import { Skeleton } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  skeleton: {
    borderRadius: "1rem",
    minHeight: "50vh"
  },
  divider: {
    padding: "0.5rem"
  }
})

export default function Loading(props) {
  const classes = useStyles();

  return (
    <div className="d-flex justify-content-between mt-5">

      <Skeleton variant="rect" className={classes.skeleton}>
        <img src="images/choice.svg" alt="placeholder" width="50%" />
      </Skeleton>

      <div className={classes.divider}></div>

      <Skeleton variant="rect" className={classes.skeleton}>
        <img src="images/choice.svg" alt="placeholder" width="50%" />
      </Skeleton>


    </div>
  )
}
