import React, { Component } from 'react';
import CategoryElement from '../category';
import categoriesList from '../sampleData.json'
import './activitiesType.css'
class Category extends Component{

  render(){


    return(
      <div className="category">
        {categoriesList.map( (item , id) =>  <CategoryElement key={id} {...item} /> )}
      </div>
    )
  }
}

export default Category
