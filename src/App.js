import logo from './logo.svg';
import './App.css';

// const number = 5555;
// const singer = { name: 'Mahafuz', job: 'singer' };
// const singer2 = { name: 'Eva Rahman', job: 'singer2' };

// const singerStyle = {
//   color: 'purple',
//   backgroundColor: 'yellow'
// }

const singers = [
  { name: 'Mahafuz', job: 'singer' },
  { name: 'Eva Rahman', job: 'singer2' },
  { name: 'Agon', job: 'sopon' },
  { name: 'shuvro', job: 'pathor' }

]

function App() {
  const nayoaks = ['Ruble', 'BappaRaz', 'Kuber', 'Jashim', 'Salman Shah', 'Riyaz']
  return (
    <div className="App">
      {
        nayoaks.map(nayoak => <li>{nayoak}</li>)
      }
      {/* {
        nayoaks.map(nayoak => <Person name={nayoak}></Person>)
      } */}

      {
        singers.map(singer => <Person name={singer.name}></Person>)

      }
      {
        singers.map(singer => <Friend job={singer.job}></Friend>)
      }
      {/* <Person name="Rubel" nayika="moushumi"></Person>
      <Person name="BappaRaz" nayika="chekha"></Person>
      <Person name="Kuber" nayika="kopila"></Person> */}
      <h5>New component.</h5>
      {/* <Friend movie="Singam" phone="017772"></Friend>
      <Friend phone="01999"></Friend> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>JSX</h1>
        <div className="container">
          <h3>Hello, How are you</h3>
        </div>
        <div className="music">
          <p>Name: {222 + number}</p>
          <p style={singerStyle}>Name: {singer.name} {singer.job}</p>
          <p style={{ color: 'blue', backgroundColor: 'white' }}>Name: {singer2.name} {singer2.job}</p>
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

function Person(props) {

  return (
    <div className="person">
      <h1>{props.name}</h1>
      <p>Nayika: {props.nayika}</p>
    </div>
  )
}

function Friend(props) {
  console.log(props);
  return (
    <div className="container">
      <h3>Name: Ajay Devgon</h3>
      <p>Movie: {props.name}</p>
      <p>Phone: {props.job}</p>
    </div>
  )
}
export default App;
