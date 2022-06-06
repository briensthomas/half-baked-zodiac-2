import './App.css';
import zodiac from './data.js';

import Header from './Header/Header.js';
import Main from './Main/Main.js';
import Footer from './Footer/Footer.js';

function App() {
  return (
    <div className="App">
      {/* import and use the Header. Main, and Footer components here */}
      <Header name='Brien' />
      {/* the Header component needs a string passed in as the `name` prop */}
      <Footer dates='2022' />
      {/* the Footer component needs a year passed in as the `year` prop */}
      <Main zodiacs={zodiac} />
      {/* pass the zodiac array imported above to the Main component as a `zodiacs` prop */}
    </div>
  );
}

export default App;
