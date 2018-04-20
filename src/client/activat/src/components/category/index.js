import React, { Component } from 'react';
import { Card } from 'antd';
import './category.css'

const { Meta } = Card;

class CategoryElement extends Component{

  render(){
    const { alt , src , title , description } = this.props
    console.log(this.props);
    return(
      <div className="_catergory">
        <Card
           hoverable
           style={{ width: 400  }}
           cover={<img className="cat-element" src={src} alt={alt}  />} >
           <Meta title={title} description={description} />
         </Card>
       </div>
    )
  }
}

export default CategoryElement
