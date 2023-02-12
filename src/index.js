import React from "react";
import ReactDOM from "react-dom";
import App from "./App";



ReactDOM.render(<App/>, document.getElementById("root"));

// ReactDOM.render(
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}>
//         <App />
//       </PersistGate>
//     </Provider>,
//     document.getElementById("root")
//   );