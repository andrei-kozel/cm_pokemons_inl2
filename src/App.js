import { Routes } from "./routes/Routes";
import { Container } from "./components/container/Container";
import { Navigation } from "./components/navigation/desktop/Navigation";
import { AuthenticationContextProvider } from "./shared/provider/auth";

function App() {
  return (
    <AuthenticationContextProvider>
      <div className="bg-green-300 min-h-screen">
        <Container>
          <Routes>
            <Navigation />
          </Routes>
        </Container>
      </div>
    </AuthenticationContextProvider>
  );
}

export default App;
