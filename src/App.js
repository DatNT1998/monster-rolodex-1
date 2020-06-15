import React , {Component} from 'react';
import './components/card-list/card-list.component';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: '',
    }
  }

  handleChange = e => this.setState({ searchField: e.target.value})


  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users}))
  }

  render(){
    const {searchField, monsters} = this.state;
    const filterMonster = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return(
      <div className="App">
        <h1> Monster Rolodex</h1>
        <SearchBox 
          placeholder='search monster'
          handleChange = {this.handleChange}
        />
        <CardList monsters={filterMonster}>
        
        </CardList>
        
      </div>
    );
  }
}

export default App;
