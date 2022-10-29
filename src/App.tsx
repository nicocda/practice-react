
import { BrowserRouter } from "react-router-dom";
import { NotificationProvider } from "./context/NotificationProvider";
import { Router } from "./router/Router";
import "./styles/_main.scss";

function App() {

  return (
    <NotificationProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </NotificationProvider>
  )
}

export default App
