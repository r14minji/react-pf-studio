import { Route, Switch } from 'react-router-dom';
import './css/style.css';

//import common component
import Header from './components/common/Header.js';
import Header_sub from './components/common/Header_sub.js';
import Footer from './components/common/Footer.js';

//import main component
import Visual from './components/main/Visual.js';
import News from './components/main/News.js';
import Offer from './components/main/Offer.js';
import Festival from './components/main/Festival.js';
import Partners from './components/main/Partners.js';

//import sub component
import About from './components/sub/About.js';
import Board from './components/sub/Board.js';
import Gallery from './components/sub/Gallery.js';
import Youtube from './components/sub/Youtube.js';
import Contact from './components/sub/Contact.js';
import Signin from './components/sub/Signin.js';
import Join from './components/sub/Join.js';


function App() {
  return (
    <div className="App">

      <Switch>
        <Route exact path="/">
          <Header type={'main'} />
          <Visual/>
          <News/>
          <Offer/>
          <Festival />
          <Partners />
        </Route>

        <Route path="/">
          <Header type={'sub'}/>
        </Route>
      </Switch>
      
      <Route  path="/about" component={About}></Route>
      <Route  path="/board" component={Board}></Route>
      <Route  path="/gallery" component={Gallery}></Route>
      <Route  path="/youtube" component={Youtube}></Route>
      <Route  path="/contact" component={Contact}></Route>
      <Route  path="/signin" component={Signin}></Route>
      <Route  path="/join" component={Join}></Route>
      <Footer />
    </div>
  );
}

export default App;
