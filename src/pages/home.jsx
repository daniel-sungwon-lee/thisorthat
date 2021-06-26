import React, { useEffect, useState } from 'react';
import { Button, Card, CardContent, Fab, IconButton,
         Slide, Zoom } from '@material-ui/core';
import { AddRounded, ClearRounded } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import Loading from '../components/loading';
import Add from '../components/add';
import Decision from '../components/decision';

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
    transform: "translate(-50%, -50%)",
    wordBreak: "break-word",
    wordWrap: "break-word"
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
  const [button, setButton] = useState(false)
  const [openD, setOpenD] = useState(false)
  const [what, setWhat] = useState(null)
  const [color, setColor] = useState('')

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

  const handleDecision = () => {
    const num = Math.round(Math.random())

    if(num === 0) {
      setWhat(l)
      setColor('#FF9478')

    } else {
      setWhat(r)
      setColor('#FFEB99')
    }

    setOpenD(true)
  }

  useEffect(() => {

    setLeft(l)
    setRight(r)

    setLoading(false)

    if(l === null || r === null) {
      setButton(true)
    } else {
      setButton(false)
    }

  }, [l, r])

  return (
    <div className="container" style={{ paddingBottom: "6rem" }}>

      <Zoom in>
        <h1>This or That</h1>
      </Zoom>

      <div>
        {
          loading ? <Loading />
                  : <div>

                      <Zoom in>

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

                      </Zoom>

                      <Slide in direction="up">

                        <Button className="mt-5" size="large" variant="contained"
                        classes={{root: classes.button}} onClick={handleDecision}
                        disabled={button}>
                          decide!
                        </Button>

                      </Slide>

                      <Decision open={openD} setOpen={setOpenD}
                       what={what} color={color} />

                    </div>
        }
      </div>

    </div>
  )
}
