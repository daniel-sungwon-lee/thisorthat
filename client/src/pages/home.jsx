import React, { useEffect, useState } from 'react';
import { Button, Card, CardContent, Fab, IconButton } from '@material-ui/core';
import { AddRounded, ClearRounded } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import Loading from '../components/loading';
import Add from '../components/add';

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
  },
  word: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  },
  clear: {
    position: "absolute",
    top: "1rem",
    left: "1rem"
  }
})


export default function Home (props) {
  const classes = useStyles();
  const [loading, setLoading] = useState(true)
  const [openL, setOpenL] = useState(false)
  const [openR, setOpenR] = useState(false)
  const [left, setLeft] = useState(null)
  const [right, setRight] = useState(null)

  let l = window.localStorage.getItem('this')
  let r = window.localStorage.getItem('that')

  const handleClear = (type) => {
    if (type === 'this') {
      setLoading(true)
      window.localStorage.removeItem('this')

    } else if (type === 'that') {
      setLoading(true)
      window.localStorage.removeItem('that')

    }
  }

  useEffect(() => {

    setLeft(l)
    setRight(r)

    setLoading(false)
  }, [l, r])

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

                            {
                              left ? <div>

                                       <h2 className={classes.word}>{left}</h2>

                                       <IconButton onClick={() => handleClear('this')}
                                        className={classes.clear}>
                                         <ClearRounded fontSize="large" color="secondary" />
                                       </IconButton>

                                     </div>

                                   : <div>
                                       <Fab className={classes.fabLeft} onClick={() => setOpenL(true)}>
                                         <AddRounded fontSize="large" color="inherit" />
                                       </Fab>

                                       <Add open={openL} setOpen={setOpenL} type={'This'}
                                        text={'Ex: Avocado Toast'} setLoading={setLoading} />
                                     </div>
                            }

                          </CardContent>
                        </Card>

                        <div className={classes.divider}></div>

                        <Card raised className={classes.card} style={{background: "#FFEB99"}}>
                          <CardContent>

                            {
                              right ? <div>

                                        <h2 className={classes.word}>{right}</h2>

                                        <IconButton onClick={() => handleClear('that')}
                                         className={classes.clear}>
                                          <ClearRounded fontSize="large" color="secondary" />
                                        </IconButton>

                                      </div>

                                    : <div>
                                        <Fab className={classes.fabRight} onClick={() => setOpenR(true)}>
                                          <AddRounded fontSize="large" color="inherit" />
                                        </Fab>

                                        <Add open={openR} setOpen={setOpenR} type={'That'}
                                         text={'Ex: Bacon and Waffles'} setLoading={setLoading} />
                                     </div>
                            }

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
