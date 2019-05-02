import React, { Component } from "react";
import Nav from "../../../components/admin/navToHome";
import Container from "../../../components/admin/container";
import API from "../../../utils/API"

class Admin extends Component {
  state = {
    truckData: []
  }
  componentDidMount(){
    API.getAllTrucks()
      .then(res => {
        console.log(res)
        this.setState({truckData: res.dataValues})
      })
      .catch(err => console.log(err));

      // API.getTruck(1)
      //   .then(res => console.log(res));
  }

  approveApplication = id =>

  closeApplication = id =>


    render() {
      return (
        <div class="brickBackground">
          <Nav 
          currentPage="Approved Applications"
          />
          <h1>Whats UP</h1>
          {this.state.truckData.map (truck => {
            return (
              <h1>{truck.businessName}</h1>
              
            )
          })}

        </div>)
    }
  
  };
  
  export default Admin;



  // <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
  Launch demo modal
</button>

// <!-- Modal -->
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalCenterTitle">{truck.businessName}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        {this.truck.businessName}
        {this.truck.website}
        {this.truck.cuisine}
        {this.truck.menu}
        {this.truck.firstName}
        {this.truck.middleInitial}
        {this.truck.lastName}
        {this.truck.email}
        {this.truck.phone}
        {this.truck.address}
        {this.truck.address2}
        {this.truck.city}
        {this.truck.state}
        {this.truck.zip}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary approve">Approve</button>
        <button type="button" class="btn btn-primary close">Close</button>
      </div>
    </div>
  </div>
</div>