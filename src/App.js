import './App.css';
import Navbar from "./components/Navbar";
import About from "./components/About";
import Services from './components/Services';
import ContactForm from './components/ContactForm';

function App() {

	return (
		<main>
			<Navbar />
			<About />
			<Services />
			<ContactForm />
		</main>
	);
}

export default App;
