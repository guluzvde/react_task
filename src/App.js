import './App.css'
import Card from './components/Card';
import Baku from './images/baku.jpeg'
import Istanbul from './images/istanbul.jpeg'
import Moscow from './images/moscow.jpeg'
import Roma from './images/roma.jpeg'
import Disneyland from './images/disneyland.jpeg'
import Dubai from './images/dubai.jpeg'
import Paris from './images/paris.jpeg'
import NewYork from './images/newyork.jpeg'
function App() {
  return (
    <div className="App">
      
      <Card title='Baku' desc="Azerbaijan" src={Baku}></Card>
      <Card title='Istanbul' desc="Turkey" src={Istanbul}></Card>
      <Card title='Moscow' desc="Russia" src={Moscow}></Card>
      <Card title='Roma' desc="Italy" src={Roma}></Card>
      <Card title='Disney Land' desc="California" src={Disneyland}></Card>
      <Card title='Dubai' desc="United Arab Emirates" src={Dubai}></Card>
      <Card title='Paris' desc="France" src={Paris}></Card>
      <Card title='New York' desc="USA" src={NewYork}></Card>
      
    </div>
  );
}

export default App;
