import React, { useEffect, useState } from 'react';
import { Button, Card, CardContent, Fab } from '@material-ui/core';
import { AddRounded } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import Loading from '../components/loading';

const useStyles = makeStyles({
  card: {
    borderRadius: "1rem",
    minHeight: "50vh",
    width: "100%",
    position: "relative"
  },
  divider: {
    padding: "0.5rem"
  },
  fabLeft: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: "#FFEB99",
    color: "#FF9478",
    "&:hover": {
      background: "#FF9478",
      color: "#FFEB99"
    }
  },
  fabRight: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: "#FF9478",
    color: "#FFEB99",
    "&:hover": {
      background: "#FFEB99",
      color: "#FF9478"
    }
  },
  button: {
    background: "#787680",
    color: "white",
    borderRadius: "0.5rem",
    "&:hover": {
      color: "grey"
    }
  }
})


export default function Home (props) {
  const classes = useStyles();
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  return (
    <div className="container" style={{ paddingBottom: "6rem" }}>
      <h1>This or That</h1>

      <div>
        {
          loading ? <Loading />
                  : <div>

                      <div className="d-flex justify-content-between mt-5">

                        <Card raised className={classes.card} style={{background: "#FF9478"}}>
                          <CardContent>

                            <Fab className={classes.fabLeft}>
                              <AddRounded fontSize="large" color="inherit" />
                            </Fab>

                          </CardContent>
                        </Card>

                        <div className={classes.divider}></div>

                        <Card raised className={classes.card} style={{background: "#FFEB99"}}>
                          <CardContent>

                            <Fab className={classes.fabRight}>
                              <AddRounded fontSize="large" color="inherit" />
                            </Fab>

                          </CardContent>
                        </Card>

                      </div>

                      <Button className="mt-5" size="large" variant="contained"
                       classes={{root: classes.button}}>
                        decide!
                      </Button>

                    </div>
        }
      </div>

    </div>
  )
}
