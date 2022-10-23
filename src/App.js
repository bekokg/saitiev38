import logo from "./logo.svg";
import Container from "@material-ui/core/Container";
import Header from "./components/Header/Header";
import "./App.css";
import Hero from './components/Hero/Hero'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
    </div>
  );
}

export default App;
