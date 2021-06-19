import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Loading from '../components/loading';

const useStyles = makeStyles({
  card: {
    borderRadius: "1rem",
    minHeight: "50vh",
    width: "100%"
  },
  divider: {
    padding: "0.5rem"
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

                      <Card raised className={classes.card}>
                        <CardContent>

                        </CardContent>
                      </Card>

                      <div className={classes.divider}></div>

                      <Card raised className={classes.card}>
                        <CardContent>

                        </CardContent>
                      </Card>

                    </div>
        }
      </div>

    </div>
  )
}
