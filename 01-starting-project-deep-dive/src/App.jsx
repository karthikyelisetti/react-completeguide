import Header from "./components/Header/Header.jsx"; // Importing the Header component from the components directory.
import CoreConcepts from "./components/CoreConcept/CoreConcepts.jsx";
import Examples from "./components/Examples/Examples.jsx";

function App() {
  return (
    <div>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </div>
  );
}

export default App;
