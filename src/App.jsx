import "./App.css";
import Accordion from "./components/Accordion";
import Search from "./components/search";

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
      
      <Search />
    </div>
  );
}

export default App;

// <Accordion items={items} />
