import { BrowserRouter } from "react-router-dom";
import { RoutesWeb } from "./routes";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <RoutesWeb />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
