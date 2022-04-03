import React from "react";
import TodoContainer from "./components/TodoContainer";
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from "./components/Error";
import About from "./components/About";
import Navbar from "./components/Navbar";


const  rootEle = createRoot(document.getElementById('root'));

rootEle.render(
<React.StrictMode>
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={ <TodoContainer/> } />
            <Route path="about" element={ <About/> } />
            <Route path="*" element={ <Error/> } />
        </Routes>
    </BrowserRouter>
</React.StrictMode>
)
