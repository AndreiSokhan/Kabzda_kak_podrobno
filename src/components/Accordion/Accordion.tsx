import React from 'react';

type AccordionPropsType={
   titleValue:string
   collapsed:boolean
}

export const Accordion = (props: AccordionPropsType) => {
      return <>
         <AccordionTitle title={props.titleValue}/>
         {!props.collapsed && <AccordionBody/>}
      </>
};


type AccordionTitlePropsType={
   title:string
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
   return (
      <>
         <h3>{props.title}</h3>

      </>
   );
};

const AccordionBody = () => {
   return (
      <>
         <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
         </ul>
      </>
   );
};
