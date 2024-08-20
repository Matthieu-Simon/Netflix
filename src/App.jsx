import './App.css';
import Logo from "./assets/img/Wordmark.jpg"
import Section from "./components/Section";

function App() {
  // console.log(data);
  return (
    <>
      <img className="logo" src={Logo} alt="Logo Netflix" />
      <Section />
    </>
  )
}

export default App;
