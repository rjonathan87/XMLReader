import { ReadXML } from "./components/ReadXML";
import { BrowserRouter } from "react-router-dom";
import { UserContextProvider } from "./context/UserContext";

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <ReadXML />
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
