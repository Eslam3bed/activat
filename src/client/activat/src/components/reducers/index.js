import { combineReducers } from 'redux';

import activitiesType from '../activitiesType/reducers';
import category from '../category/reducers';
import content from '../content/reducers';
import steps from '../steps/reducers';



export default combineReducers({
  categories : activitiesType || {},
  Subcategory: category || {},
  content : content || {},
  steps:steps || {},
  navigation :  {}
});
