import logo from './logo.svg';
import './App.css';
import contacts from './contacts';
import Card from './Card';

function App() {
  return (
    <div>
    <h1>Contacts List</h1>
    <Card
    name={contacts[0].name}
    img={contacts[0].img}
    phoneNo={contacts[0].phoneNo}
    />
    <Card
    name={contacts[1].name}
    img={contacts[1].img}
    phoneNo={contacts[1].phoneNo}
    />
    <Card
    name={contacts[2].name}
    img={contacts[2].img}
    phoneNo={contacts[2].phoneNo}
    />
    <Card
    name={contacts[3].name}
    img={contacts[3].img}
    phoneNo={contacts[3].phoneNo}
    />
    </div>
  );
}
export default App;
