import './App.css';
import DriverCard from './components/DriverCard';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';
import Dice from './components/Dice';
import { maxence, maxenceGlasses } from './img/index.js';
import Carousel from './components/Carousel';
import NumbersTable from './components/NumbersTable.js';

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
        
        fontSize:'20px', 
        marginBottom:'0'
        }}>Like Button</h2>
      <LikeButton />
        </div>
        <div className="App">
      <h2 style={{ 
         
        fontSize:'20px', 
        marginBottom:'0'
        }}>Clickable Picture</h2>
        <ClickablePicture img={maxence} imgClicked={maxenceGlasses} />
          </div>
    <div className="App">
      <h2 style={{
        display: 'flex',
        justifyContent: 'center',
        fontSize:'20px',        
        marginTop:'50px'
      }}>Dice</h2>
      <div style={{
        display: 'flex',
        backgroundColor: 'lightgrey',
        borderRadius: '30px',
        width: '200px',
        height: '200px',
      }}>
      <Dice />
      </div>
      <br></br>
      <div>
        <Carousel images={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg'
          ]} />
      </div>
    </div>
    <br></br>
    <div className="App">
      <h2 style={{
        display: 'flex',
        justifyContent: 'center',
        fontSize:'20px',        
        marginTop:'50px'
      }}>Numbers Table</h2>
      <div style={{
        display: 'flex',
      }}>
      <NumbersTable limit={12} />
      </div>
      <br></br>
    </div>
      </header>
    </div>
  );
}

export default App;
