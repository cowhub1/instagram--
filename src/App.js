import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Join from './Join'
import Login from './Login'
import Main from './Main'
import Profile from './profile';
import { Helmet } from 'react-helmet-async';



function App() {
  return (
    <>
      <BrowserRouter>
        <Helmet>
          <link rel="icon" href="img/favicon.png" />
          <title>Instargram</title>
        </Helmet>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/main" element={<Main />} />
          <Route path="/profile" element={<Profile />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
