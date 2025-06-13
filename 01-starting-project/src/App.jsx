
import Header from './components/Header/Header.jsx'; // Importing the Header component from the components directory.
import CoreConcept from './components/CoreConcept/CoreConcept.jsx'; // Importing the CoreConcept component from the components directory.
import { CORE_CONCEPTS } from './data.js'; // Importing an array of core concepts from a separate data file.


function CoreConceptOD({image, title, description}) { // This is an alternative way to define the CoreConcept component using object destructuring.
  // This allows us to directly access the properties of the props object.
  // It is a more concise way to write the component, especially when you want to use the properties directly.
  // However, it is less flexible than using the props object directly, as you cannot pass additional properties that are not defined in the destructured object.
  // This is useful when you want to ensure that the component only receives specific properties.
  // It is a common pattern in React to use destructuring to make the code cleaner and more readable.
  // It is especially useful when you have a lot of properties to pass to the component.
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}


function App() {
  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} /> {/* Using spread operator to pass all properties of the first concept when all the key names are similar */}
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept title={CORE_CONCEPTS[3].title} description={CORE_CONCEPTS[3].description} image={CORE_CONCEPTS[3].image}/>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
