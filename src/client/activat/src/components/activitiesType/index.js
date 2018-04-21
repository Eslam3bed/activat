import React, { Component } from 'react';
import './activitiesType.css'
import { Card ,Row ,Col } from 'antd';
import { connect } from 'react-redux';


import  categoriesActions  from './action'
class Category extends Component{

  componentWillMount(){
    this.props.updateAppContent()

  }

  render(){

const gridStyle =  (item , width) =>{
  width = width ? width : "50%";
  return {
    width,
    height:'30vh',
    textAlign: 'center',
    background:`url(${item.src})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize:'cover'
  }
    };

    const { categoryList , currentSubCategories, subCategoryMode } = this.props;


    return(
      <div className="category">
        <Row>
          <Col span={subCategoryMode ? 16 : 24} >
            <Card title="What Kind of Journy Do you like">
            {categoryList.map( (item , id) =>
               (
                 <Card.Grid onClick={()=>this.props.goToSubCategoryOf(item)} key={id} style={gridStyle(item)}>
                  <div className="category-card">
                    {item.title}
                    {item.description}
                  </div>
               </Card.Grid>

             )
             )}
             </Card>
           </Col>

           <Col span={subCategoryMode ? 8 : 0} >
             <Card title="What Kind of Journy Do you like">
             {currentSubCategories.map( (item , id) =>
                (<Card.Grid  onClick={()=>this.props.goCompleteTheForm({subcategory: item})} key={id} style={gridStyle(item , '100%')}>
                   <div  className="category-card">
                     {item.title}
                     {item.description}
                   </div>
                </Card.Grid>)
              )}
              </Card>
            </Col>

          </Row>
    </div>
    )
  }
}

const mapStateToProps = state =>({
  categoryList : state.categories.categories,
  currentSubCategories : state.categories.currentSubCategories || [],
  subCategoryMode:state.categories.subCategoryMode,
  stage:state.categories.stage
})

export default connect(mapStateToProps , categoriesActions )(Category);
