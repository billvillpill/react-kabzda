import React from 'react';
import './App.css';
import Accordion from "./components/Accordion";
import {Rating} from "./components/Rating/Rating"; // что бы переименовать Ratting, нужно в скобках указать as {Ratting as R}

function App() {
    return (
        <div>
            <PageTitle title={"This is APP component"}/>
            <Accordion titleValue={"Menu"} collapsedValue={true}/>
            <Accordion titleValue={"Users"} collapsedValue={false}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    );
}

type  PagePropsTitleType = {
    title: string
}

function PageTitle(props: PagePropsTitleType) {
    return <h1>{props.title}</h1>
}

// function App() {
//
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }*/
export default App;
