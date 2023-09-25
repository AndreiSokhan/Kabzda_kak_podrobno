import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function hello() {
   alert('Hello IT-kamasutra')
}

// hello();

function App() {

   return (
      <>
         <PageTitle title={"This is App component"}/>
         <PageTitle title={"Hello world"}/>
         Article 1
         <Rating value={3}/>
         <Accordion titleValue={"Menu"} collapsed={true}/>
         <Accordion titleValue={"Users"} collapsed={false}/>
         Article 2
         <Rating value={0}/>
         <Rating value={1}/>
         <Rating value={2}/>
         <Rating value={3}/>
         <Rating value={4}/>
         <Rating value={5}/>
      </>
   );
};

type PageTitlePropsType={
   title:string
}

const PageTitle = (props:PageTitlePropsType) => {
   return (
      <>
         <h1>{props.title}</h1>
      </>
   );
};

export default App;