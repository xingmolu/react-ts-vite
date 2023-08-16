import React from "react";
import ReactDOM from "react-dom/client";
import { ContainerContext, Container } from './di';

import { ILogger, Logger } from "./services/Logger";
import App from "./App";

const container = new Container({
  autoBindInjectable: true,
  defaultScope: "Singleton",
});

container.bind(ILogger).to(Logger).inSingletonScope();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ContainerContext.Provider value={container}>
      <App />
    </ContainerContext.Provider> 
    
  </React.StrictMode>
);