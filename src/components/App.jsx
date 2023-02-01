import Banner from "./Banner";
import Footer from '../components/Footer';
import QuestionForum from "./QuestionForm";
// import Cart from "./Cart";
import Shopping from "./ShoppingList";
import logo from '../assets/logo.png';

function App() {
  return (
    <div>
      <Banner>
        <img src={logo} alt='La maison jungle' className='lmj-logo' />
				<h1 className='lmj-title'>La maison jungle</h1>
      </Banner>
      {/* <Cart /> */}
      <Shopping />
      <QuestionForum />
      <Footer />
    </div>
  );
}

export default App;
