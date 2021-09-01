import { Routes } from "./routes/Routes";
import { Container } from "./components/container/Container";
import { Navigation } from "./components/navigation/desktop/Navigation";

function App() {
  return (
    <div className="bg-green-300 min-h-screen">
      <Container>
        <Routes>
          <Navigation />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
