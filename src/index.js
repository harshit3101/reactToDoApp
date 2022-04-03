import React from "react";
import TodoContainer from "./components/TodoContainer";
import { createRoot } from 'react-dom/client';
import { HashRouter, Route, Routes } from "react-router-dom";
import Error from "./components/Error";
import About from "./components/About";
import Navbar from "./components/Navbar";


const  rootEle = createRoot(document.getElementById('root'));

rootEle.render(
<React.StrictMode>
    <HashRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={ <TodoContainer/> } />
            <Route path="about" element={ <About/> } />
            <Route path="*" element={ <Error/> } />
        </Routes>
    </HashRouter>
</React.StrictMode>
)
