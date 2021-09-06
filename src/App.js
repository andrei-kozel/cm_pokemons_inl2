import { Routes } from "./routes/Routes";
import { Container } from "./components/container/Container";
import { Navigation } from "./components/navigation/desktop/Navigation";
import { AuthenticationContextProvider } from "./shared/provider/auth";
import { PokemonContextProvider } from "./shared/provider/pokemons/pokemons";

function App() {
  return (
    <AuthenticationContextProvider>
      <PokemonContextProvider>
        <div className="bg-green-300 min-h-screen">
          <Container>
            <Routes>
              <Navigation />
            </Routes>
          </Container>
        </div>
      </PokemonContextProvider>
    </AuthenticationContextProvider>
  );
}

export default App;
