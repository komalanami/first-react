import react from '../../assets/react.png';
import './Header.css';

const reactdescriptors = ['Fundamental', 'Cruical', 'Core'];

function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

export default function Header() {

    const descriptors = reactdescriptors[getRandomInt(2)];
    return (
        <header>
            <img src={react} alt="Stylized atom" />
            <h1>React Essentials</h1>
            <p>
                {descriptors} React concepts you will need for almost any app you are
                going to build!
            </p>
        </header>
    );
}