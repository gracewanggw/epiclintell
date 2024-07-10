import './App.css';
import Navbar from "./components/Navbar";
import About from "./components/About";
import Footer from './components/Footer';
import Services from './components/Services';
import ContactForm from './components/ContactForm';

function App() {

	return (
		<main>
			<Navbar />
			<About />
			<Services />
			<ContactForm />
			<Footer />
		</main>
	);
}

export default App;
