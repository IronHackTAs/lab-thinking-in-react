import React, { Component } from "react";
import _ from "lodash";

import { FilterCategory } from "./Components/FilterCategory";
import { FilterProduct } from "./Components/FilterProduct";
import data from "./data.json";


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data
    };
  }

  render() {
    console.log(data.data);
    // let category = {};
    // data.data.forEach(e => {
    //   if(category[e.category]){
    //     category[e.category].push(e)
    //   }else{
    //     category[e.category]=[e];
    //   }
    // });
    // console.log(category);
    /***************************************************/
    // const category = data.data.reduce((acc, e) => {
    //   if(acc[e.category]){
    //     acc[e.category].push(e);
    //   }else {
    //     acc[e.category]=[e];
    //   }
    //   return acc;
    // }, {});
    // console.log(category);

    const category = _.groupBy(data.data, (e) => e.category);
    
    const keys = Object.keys(category);
    const values = Object.values(category);
    const categories = keys.map(e => 
      category[e]
    )

    return (
      <div>
        <p>PEPE al poder!!!!!</p>
        {

          keys.map((e,i) => {
            return(
            <div key={i}>
              <FilterCategory category={e}/>
              <FilterProduct product={category[e]} />
            </div>
              )
          })
        }

      </div>
    );
  }
}














