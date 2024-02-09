import './App.css';
import DriverCard from './components/DriverCard';
import LikeButton from './components/LikeButton';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="card-deck">
          <DriverCard className="driver"
            name="Travis Kalanick"
            rating={4.2}
            img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
            car={{
              model: "Toyota Corolla Altis",
              licensePlate: "CO42DE"
            }}
          />
          <DriverCard className="card"
            name="Dara Khosrowshahi"
            rating={4.9}
            img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
            car={{
              model: "Audi A3",
              licensePlate: "BE33ER"
            }}
          />
        </div>
        <div className="App">
      <h2 style={{ 
        border:'1px solid black',
        fontSize:'20px', 
        marginBottom:'0'
        }}>Like Button</h2>
      <LikeButton />
        </div>
      </header>
    </div>
  );
}

export default App;
