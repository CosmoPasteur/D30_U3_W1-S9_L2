import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import AllTheBooks from "./components/AllTheBooks";
import Welcome from "./components/Welcome";

function App() {
  return (
    <>
      <MyNav />
      <Welcome />
      <AllTheBooks />
      <MyFooter />
    </>
  );
}

export default App;
