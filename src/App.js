import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import Login from "./components/Login";

import styled from "styled-components";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <AppBody>
              <Sidebar />
              <Routes>
                <Route path="/" exact element={<Chat />}></Route>
              </Routes>
            </AppBody>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
