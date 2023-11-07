import React from 'react';

type OnOffPropsType={
   valueOnOff:boolean
}

export const OnOff = (props:OnOffPropsType) => {

   const onStyle={
      width: "30px",
      height: "20px",
      border: "1px solid black",
      backgroundColor: props.valueOnOff ? "green" : "white",
      display:"inline-block",
      padding:"2px"
   }
   const offStyle={
      width: "30px",
      height: "20px",
      border: "1px solid black",
      backgroundColor: props.valueOnOff ? "white" : "red",
      display:"inline-block",
      padding:"2px",
      marginLeft:"3px"
   }
   const indicatorStyle={
      width: "20px",
      height: "20px",
      borderRadius: "15px",
      border: "1px solid black",
      display:"inline-block",
      marginLeft:"10px",
      backgroundColor: props.valueOnOff ? "green" : "red",
   }

   return (
      <div>
         <div style={onStyle}>ON</div>
         <div style={offStyle}>OFF</div>
         <div style={indicatorStyle}></div>
      </div>
   );
};
