import coreImage from './assets/react-core-concepts.png'; // Importing the main image for the header.

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

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
