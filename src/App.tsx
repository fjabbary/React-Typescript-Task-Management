import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import AuthGuard from "./components/AuthGuard";
import Dashboard from "./components/Dashboard";
import NavBar from "./components/NavBar";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Container className="my-5">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/dashboard"
              element={<AuthGuard component={Dashboard} />}
            />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
