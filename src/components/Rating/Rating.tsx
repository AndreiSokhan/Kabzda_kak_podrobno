import React from "react";

type RatingsPropsType = {
   value: 0 | 1 | 2 | 3 | 4 | 5
}

export const Rating = (props: RatingsPropsType) => {

   return (
      <div>
         <Star selected={props.value > 0}/>
         <Star selected={props.value > 1}/>
         <Star selected={props.value > 2}/>
         <Star selected={props.value > 3}/>
         <Star selected={props.value > 4}/>
      </div>
   )
};


type StarPropsType = {
   selected: boolean
}

const Star = (props: StarPropsType) => {
   console.log("Star rendering")

   if (props.selected === true) {
      return <span><b>star </b></span>
   } else {
      return <span>star </span>
   }
   return (
      <>
         <span><b>star </b></span>
      </>
   );
};