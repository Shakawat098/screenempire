import { CssBaseline } from "@mui/material"
import { Route, Routes } from "react-router-dom";
import Movies from "./components/Movies/Movies";
import MoviesInformation from "./components/MovieInformation/MoviesInformation";
import useStyles from "./styles";
import Actors from "./components/Actors/Actors";
import Profile from "./components/Profile/Profile";
import NavBar from "./components/NavBar/NavBar";
import React from 'react';
function App() {
  const classes=useStyles();
  return (
    <div className={classes.root}>
    <CssBaseline />
    <NavBar />
    <main className={classes.content}>
    <div className={classes.toolBar} />
      <Routes>
        <Route exact path="/movie/:id" element={<MoviesInformation />} />
        <Route exact path="/" element={<Movies />} />
        <Route exact path="/actors/:id" element={<Actors />} />
        <Route exact path="/profile/:id" element={<Profile />} />
      </Routes>
    </main>
    </div>
  )
}

export default App;
