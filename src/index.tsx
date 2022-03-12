import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Blogs from "./Pages/Blogs";
import Contact from "./Pages/Contact";
import NoPage from "./Pages/NoPage";

const theme = createTheme();


ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
