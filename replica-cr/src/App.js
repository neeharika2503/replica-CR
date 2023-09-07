import './App.css';
import Header from './homepage/header';
import LoginApp from './login/login';
import navbar from './navbar/navbar';
import affiliates from './support/affiliates';
import commonfaq from './support/common-faq';
import support from './support/games-support';

function App() {
  return (
    <div className="App">
      <Header/>
      <LoginApp/>
      <navbar/>
    </div>
  );
}

export default App;
