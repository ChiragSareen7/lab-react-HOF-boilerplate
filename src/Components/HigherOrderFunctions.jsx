import React, { Component } from 'react'

export default class HigherOrderFunctions extends Component {

    constructor(){
        super();
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24, years: 2},
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}

            ]
        }
    }




    renderData = () => {
      const userData = this.state.userData.map((items) => (
        <React.Fragment key={items.id}>
          <li>
            <span>Id: {items.id}</span>
            <span>Name : {items.name}</span>
            <span>User Type: {items.user_type}</span>
          </li>
        </React.Fragment>
      ));
      return userData;
    }
  
    
    listEntreprenuer = () => {
      const filterData = this.state.userData.filter((data) => data.user_type === "Entreprenuer");
      // const filter = filterData.map((data) => (
      //   <React.Fragment key={data.id}>
      //     <li className="list-elements">
      //       <span>Id: {data.id}</span>
      //       <span>Name: {data.name}</span>
      //       <span>User Type: {data.user_type}</span>
      //     </li>
      //   </React.Fragment>
      // ));
      return this.renderData(filterData);
    };
  
    
    listStartsWithJ = () => {
      const filterData = this.state.userData.filter(data => data.name[0] === "J");
      // const filter = filterData.map((data) => (
      //   <React.Fragment key={data.id}>
      //     <li className="list-elements">
      //       <span>Id: {data.id}</span>
      //       <span>Name: {data.name}</span>
      //       <span>User Type: {data.user_type}</span>
      //     </li>
      //   </React.Fragment>
      // ));
      return this.renderData(filterData);
    };
  
    
    listAge = () => {
      const filterData = this.state.userData.filter(data => data.age > 28 && data.age <= 50);
      // const filter = filterData.map((data) => (
      //   <React.Fragment key={data.id}>
      //     <li className="list-elements">
      //       <span>Id: {data.id}</span>
      //       <span>Name: {data.name}</span>
      //       <span>User Type: {data.user_type}</span>
      //     </li>
      //   </React.Fragment>
      // ));
      return this.renderData(filterData);
    };
  
    totalExperienceDesigner = () => {
      const designersData = this.state.userData.filter(data => data.user_type === 'Designer');
      const totalExperience = designersData.reduce((sum, data) => sum + data.years, 0);
      return totalExperience;
    };
    

  render() {
    return (
      <div>
      
      <h1>Display all items</h1>
      <div className="display-box">
      <ul>{this.renderData()} </ul>
      </div>
      <div>
        <h1>Display Based on user type</h1>
        <ul>{this.listEntreprenuer()}</ul>
      </div>
      <div>
        <h1>Filter all data starting with letter J</h1>
        <ul>{this.listStartsWithJ()}</ul>
      </div>
      <div>
        <h1>Filter all data based on age</h1>
        <ul>{this.listAge()}</ul>
      </div>
      <div>
        <h1>Total Experience</h1>
        <ul>{this.totalExperienceDesigner()}</ul>
      </div>
      
    
      </div>
    )
  }
}

