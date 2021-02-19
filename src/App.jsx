import "./App.css";
import Accordion from "./components/Accordion";

const items = [{
    title: "Whats going on, whats React?",
    content: 'React is a front end library.'
},
{
    title: "Why React?",
    content: 'It is most popular JS library between developers.'
},
{
    title: "How to use React?",
    content: 'You use React by creating components.'
}]

function App() {
  return (
    <div className="App">
      <Accordion items={items} />
    </div>
  );
}

export default App;
