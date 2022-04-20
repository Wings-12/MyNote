//1. Create a new React app.
import React from "react";
// React 17用
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { OnBlurredFlagProvider } from "./components/providers/OnBlurredFlagProvider";
import { IsTextFlagProvider } from "./components/providers/IsTextFlagProvider";
import { TextBoxValueProvider } from "./components/providers/TextBoxValueProvider";

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <TextBoxValueProvider>
    <IsTextFlagProvider>
      <OnBlurredFlagProvider>
        <App tab="home" />
      </OnBlurredFlagProvider>
    </IsTextFlagProvider>
  </TextBoxValueProvider>
);

// React 17用
// ReactDOM.render(
//   <TextBoxValueProvider>
//     <IsTextFlagProvider>
//       <OnBlurredFlagProvider>
//         <App />
//       </OnBlurredFlagProvider>
//     </IsTextFlagProvider>
//   </TextBoxValueProvider>,
//   document.getElementById("root")
// );


//5. Create a Note.jsx component to show a <div> element with a
//<h1> for a title and a <p> for the content.

//6. Make sure that the final website is styled like the example shown here:
//https://l1pp6.csb.app/

//HINT: You will need to study the classes in teh styles.css file to appy styling.
