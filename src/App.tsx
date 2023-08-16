// import { useState } from "react";

import { useService } from "@/di";
import { ILogger, Logger } from "./services/Logger";
function App() {
  // const [count, setCount] = useState(0);
  const logger = useService<Logger>(ILogger);
  
  logger.log("hello world");
  return (
    <div className="App">
      react APP
    </div>
  );
}

export default App;