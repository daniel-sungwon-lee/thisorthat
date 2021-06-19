import React, { useEffect, useState } from 'react';
import { Card, CardContent, Fab } from '@material-ui/core';
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
  fab: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  }
})


export default function Home (props) {
  const classes = useStyles();
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  return (
    <div className="container">
      <h1>This or That</h1>

      <div>
        {
          loading ? <Loading />
                  : <div className="d-flex justify-content-between mt-5">

                      <Card raised className={classes.card} style={{background: "#FF9478"}}>
                        <CardContent>

                          <Fab className={classes.fab} style={{background: "#FFEB99"}}>
                            <AddRounded fontSize="large" style={{color: "#FF9478"}} />
                          </Fab>

                        </CardContent>
                      </Card>

                      <div className={classes.divider}></div>

                      <Card raised className={classes.card} style={{background: "#FFEB99"}}>
                        <CardContent>

                          <Fab className={classes.fab} style={{background: "#FF9478"}}>
                            <AddRounded fontSize="large" style={{color: "#FFEB99"}} />
                          </Fab>

                        </CardContent>
                      </Card>

                    </div>
        }
      </div>

    </div>
  )
}
