import { categories , subCategories} from './sampleData.js'
export const getActivatData = (categories) =>({
  type:'UPDATING_CONTENT',
  payload:categories
});

export const startUpdating = () =>({
  type:'START_UPDATING'
});
export const updatingFailes = (error) =>({
  type:'UPDATING_CONTENT_FAILS',
  payload:error
});

export const goToSubCategory = (subCategory) =>({
  type:'NAVIGATING_TO_SUB_CATEGORY',
  payload:subCategory
});

export const goToSubCategoryOf =  category => dispatch => {
  dispatch(goToSubCategory(category))
}

export const completeTheForm = (categoryAndSubSelection) =>({
  type:'COMPLETE_THE_FORM',
  payload:categoryAndSubSelection
});

export const goCompleteTheForm =  categoryAndSubSelection => dispatch => {
  console.log(categoryAndSubSelection);
  dispatch(completeTheForm(categoryAndSubSelection))
}

export const updateAppContent = () => dispatch => {

    dispatch(startUpdating())

    const requestUrl = "/api/v1/get_activat";
    const requestOptions = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
      method: "GET",
      credentials: 'same-origin'
    }

    dispatch(getActivatData({categories, subCategories}))

}

export default {goToSubCategoryOf,updateAppContent,goCompleteTheForm}
