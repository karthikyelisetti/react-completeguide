import coreImage from './assets/react-core-concepts.png'; // Importing the main image for the header.
import componentImage from "./assets/components.png"; // Importing an image for the core concept component.
import { CORE_CONCEPTS } from './data.js'; // Importing an array of core concepts from a separate data file.

// Defining a array of strings to dynamically update the content.
const reactDescription = ['Fundamental', 'Crucial', 'Core'];
function  genRandomInt(max) {
  // This function generates a random integer between 0 and max (exclusive).
  return Math.floor(Math.random() * (max + 1));
}

const description = reactDescription[genRandomInt(2)];

// This is a React component that serves as the main entry point for the application.
function Header() {
  return (
    <header>
      <img src={coreImage} alt="Stylized atom" /> {/* Displaying the main image in the header */}
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function CoreConcept(props) {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

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
            <CoreConcept {...CORE_CONCEPTS[0]}/> {/* Using spread operator to pass all properties of the first concept when all the key names are similar */}
            <CoreConcept title={CORE_CONCEPTS[1].title} description={CORE_CONCEPTS[1].description} image={CORE_CONCEPTS[1].image}/>
            <CoreConcept title={CORE_CONCEPTS[2].title} description={CORE_CONCEPTS[2].description} image={CORE_CONCEPTS[2].image}/>
            <CoreConcept title={CORE_CONCEPTS[3].title} description={CORE_CONCEPTS[3].description} image={CORE_CONCEPTS[3].image}/>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
