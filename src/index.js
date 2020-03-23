import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';



function UserGreeting(props) {
  return <h1>Welcome back!</h1>
}


function GuestGreeting(props) {
  return <h1>Please sign up.</h1>
}


function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />
  }
    return <GuestGreeting />
}



function LogoutButton(props) {
  return (
    <button onClick={props.onbuttonClick}>LogOut</button>
  )
}

function LoginButton(props) {
  return (
    <button onClick={props.onbuttonClick}>LogIn</button>
  )
}

 

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {isLoggedIn: false};
  }
  handleLoginClick = _ => {
    this.setState({isLoggedIn: true});
  }
  handleLogoutClick = _ => {
    this.setState({isLoggedIn: false});
  }
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onbuttonClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onbuttonClick={this.handleLoginClick} />;
    }
    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
    <p>The user is {isLoggedIn ? ' log In' : ' log out'}</p>
        {button}
      </div>
    );
  }
}

// Renderizado de listas


function NumberList () {

  const arr = ["Hello", "World", "Ich", "bin", "da"];

  const groupList = arr.map( elemento => {
    return <li key={elemento}>{elemento}</li>
  });

  return (
    <ul>
      {groupList}
    </ul>
  )
}


const arr = [2, 4, 6, 8, 10];

function Numbees (props) {

  const numbers = props.array;

  return(
    <ul>
    {numbers.map(element => {
        return <li key={element}>{element}</li>    
    }) 
    }
    </ul>
  )
}

// Componentes Controlados

class ControlForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      flavor: '',
      text: ''
    };
  }

  handleiInputChange = (event) => {
    this.setState({[event.target.name]: event.target.value })
  }

  handleSubmit = (event) => {
    alert(`Oye a ti : ${this.state.username} te gusta ${this.state.flavor} `);
    event.preventDefault();
  }

  render() {


    return (
      <form onSubmit={this.handleSubmit} >
        <label>
          Name:
          <input value={this.state.username}  onChange={this.handleiInputChange} type="text" name="username" />
        </label>
        <label>
          Essay:
          <textarea value={this.state.value} onChange={this.handleiInputChange} name='text' />
        </label>
        <label>
          Pick your favorite flavor:
          <select value={this.state.flavor} onChange={this.handleiInputChange} name='flavor'>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>

        <input  type="submit" value="Submit" />

      </form>
    )
  }

}





ReactDOM.render(
  <React.StrictMode>
    <ControlForm />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
