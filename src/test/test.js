
import React, { Component } from 'react'
// import ReactDOM from 'react-dom';
// import React from 'react';
import './test.css'
let ElNumber = 1




export default class Form extends Component {
  state = {
    fname: "first-name",
    lname: "last-name",
    telnum:"tel"
  }
  onChangehendlerfname = (e) => {
   this.setState({fname: e.target.value})
  }
  onChangehendlerlname = (e) => {
   this.setState({lname: e.target.value})
  }
  onChangehendlertelnum = (e) => {
   this.setState({telnum: e.target.value})
  }
  create = (e) => {
   e.preventDefault()

    //  shu joyidan yangi holat boshlanadi

    let ellist = document.querySelector("#list")
    let elFirstname = document.querySelector("#ElFirstNameinput")
    let elLastname = document.querySelector("#ElLastNameinput")
    let elTel = document.querySelector("#ElTelinput")
    let elcategory = document.querySelector(".category")


    let newarr = []
    let newlistarr = []
    newarr.push({
        fname: elFirstname.value,
        lname: elLastname.value,
        tel: elTel.value,
        categorilar: elcategory.value,
        
    })
    newlistarr = newarr.map((item) => {
        return `<li class="list-group-item d-flex"><span class="me-2 w-25">${item.fname}</span><span class="me-5 ms-5 w-25">${item.lname}</span> <span class="ms-2 w-25">${item.tel}</span></li>`
    })
    
    ellist.innerHTML = newlistarr.join("")
    elFirstname.value = ""
    elLastname.value = ""
    elTel.value = ""
    elcategory.value = ""


      let elbtngroup = document.querySelector(".btn-group")
 
      elbtngroup.addEventListener("click", (e) => {
        let newBaddiy = newarr.filter((item) => {
          return item.categorilar == e.target.textContent ;
      
        });
        if (e.target.textContent == "All") {
          newBaddiy = newarr
        }
        newlistarr = newBaddiy.map((item) => {
          return `<li class="list-group-item d-flex"><span class="me-2 w-25">${item.fname}</span><span class="me-5 ms-5 w-25">${item.lname}</span> <span class="ms-2 w-25">${item.tel}</span></li>`
        })
        ellist.innerHTML =  newlistarr.join("")
      })
      // holat = () =>{
      //   console.log("ok");
      // }

      
  }

  
  
  render() {
    return (
      <div className="father">
      <form id="form">
        <input className="input" id="ElFirstNameinput" type="text" placeholder="first-name"  neme="imput" onChange={this.onChangehendlerfname}/>
        <input className="input" id="ElLastNameinput" type="text" placeholder="last-name" onChange={this.onChangehendlerlname} />
        <input className="input" id="ElTelinput" type="number" placeholder="tel"  onChange={this.onChangehendlertelnum}/>
        <input className="category" type="text" list="date" />
        <datalist id="date">
          <option>Family</option>
          <option>Friends</option>
          <option>classmates</option>
        </datalist>
        <button className="btn btn-primary mb-3" type="submit" onClick={this.create}>submit</button>
      </form>
      <div className="info">
        <div className="btn-group">
          <button id="all-btn" className="btn btn-primary" type="button">All</button>
          <button id="family-btn" className="btn btn-primary" type="button">Family</button>
          <button id="friend-btn" className="btn btn-primary" type="button">Friends</button>
          <button id="classmate-btn" className="btn btn-primary" type="button">classmates</button>
        </div>
        <ul id="list" className="list-group list-group-numbered mt-3">
          
        
        </ul>
    </div>
</div>
    )
  }
}



  






