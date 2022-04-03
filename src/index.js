import React from "react";
import TodoContainer from "./components/TodoContainer";
import { createRoot } from 'react-dom/client';


const  rootEle = createRoot(document.getElementById('root'));

rootEle.render(
<React.StrictMode>
    <TodoContainer/>
</React.StrictMode>
)
