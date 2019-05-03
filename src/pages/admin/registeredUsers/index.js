import React, { Component } from "react";
import Nav from "../../../components/Nav";
import Container from "../../../components/admin/container";
import API from "../../../utils/API"
import * as firebase from "firebase"


var config = {
  apiKey: "AIzaSyDBJH8z5eJDf7cgAWMiRGXE2U1vBnQVa2g",
    authDomain: "truck-firebase.firebaseapp.com",
    databaseURL: "https://truck-firebase.firebaseio.com",
    projectId: "truck-firebase",
    storageBucket: "truck-firebase.appspot.com",
    messagingSenderId: "810502901238"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
const db = firebase.database()

class Admin extends Component {

  state = {
    userData: []
  }

  componentDidMount() {
    db.ref().on("value", snap => {
      let allUsers= []
      let users = snap.val();
      for(let key in users){
        let user = {
          name: users[key].name,
        }
        allUsers.push(user)
      }
      this.setState({
        userData: allUsers
      })
      console.log(this.state)
      
    })
  }

    render() {
      return (
        <div className="brickBackground">
          <Nav 
          home="/admin/dashboard"
          currentPage="Registered Users"
          />
        <Container>
          <h1>{this.state.userData.length}</h1>
        
          {/* //this.state.userData.length */}
 
          </Container>
        </div>)
    }
  
  };
  
  export default Admin;



  