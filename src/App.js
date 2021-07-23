import AddButton from "./AddButton";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import TwoButtons from "./TwoButtons";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <TwoButtons></TwoButtons>
      <AddButton></AddButton>
      <Footer></Footer>
    </div>
  );
}

export default App;
