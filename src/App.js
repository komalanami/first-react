import react from './assets/react.png';

const reactdescriptors = ['Fundamental', 'Cruical', 'Core'];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const descriptors = reactdescriptors[getRandomInt(2)];

  return (
      <header>
        <img src={react} className="React-logo" alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {descriptors} React concepts you will need for almost any app you are
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
