import React from "react";

// option 1
// import "./helloWorld.css";
// function HelloWorld(props) {
//   return (
//     <div className="container">
//       <h1 className="bg-yellow-900">Hello World again</h1>
//     </div>
//   );
// }

// option 2

import {stylesheet} from "astroturf";

const width = "800px";
const styles = stylesheet`
.container {
  @apply rounded-full;
  @apply bg-yellow-900;
  width: ${width};
  & > h1 {
    color: red;
    padding: 10px
  }
}
`;

function HelloWorld(props) {
  return (
    <div className={styles.container}>
      <h1>Hello World again</h1>
    </div>
  );
}

export default HelloWorld;
