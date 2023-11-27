import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./pages/auth/LoginForm";
import RegistrationForm from "./pages/auth/RegistrationForm";
import CreatePoll from "./pages/CreatePoll";
import Poll from "./pages/Poll";
import Main from "./pages/Main";

function App() {

  // const dispatch = useDispatch()
  // const cash = useSelector(state=>state)


  return (
      <BrowserRouter>
        <Routes>
            <Route path="main" element={<Main/>}/>
            <Route path="create" element={<CreatePoll/>}></Route>
            <Route index element={<LoginForm />} />
            <Route path="poll" element={<Poll/>}/>

            <Route path="registration" element={<RegistrationForm />} />
        </Routes>
      </BrowserRouter>
    // <div className="App">
    //   <header className="App-header">
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
