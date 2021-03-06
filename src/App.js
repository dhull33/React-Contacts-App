import React, { Component } from 'react';
import Contacts from './components/Contacts';
import AddContacts from './components/AddContacts';
import './App.css';

class App extends Component {

    constructor(){
        super();

        //Initialize state
        this.state = {
            contacts: []
        }
    }

    componentWillMount(){

        this.setState(
            {
                contacts: [
                    {
                        name: 'John Doe',
                        email: 'john@gmail.com',
                        phone: '770-564-9087',
                        address: '',
                        city: 'Houston',
                        state: 'Texas',
                        zip: '77006'

                    }
                ]
            }
        )
    }

    handleAddContacts(contact){
        console.log("WHat is this shit?");
        console.log(contact);

        let contacts = this.state.contacts;

        contacts.push(contact);

        this.setState({contact: contacts});
    }

  render() {


    return (
      <div>
          <AddContacts addContacts={this.handleAddContacts.bind(this)}/>
          <Contacts contacts={this.state.contacts} />

      </div>
    );
  }
}

export default App;
