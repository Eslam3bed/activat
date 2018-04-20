

const initialState = {
  startUpdating : false,
  categories : [],
  subCategories : [],
  subCategoryMode : false,
  currentSubCategories : [],
  userSelections : {},
  errors : {},
  stage : 0
}

export default ( state = initialState , { type , payload } ) => {
  switch (type) {
    case 'START_UPDATING':
    return { ...state, startUpdating:true }
    case 'UPDATING_CONTENT':
      return { ...state, categories:payload.categories , subCategories : payload.subCategories }
    case 'UPDATING_CONTENT_FAILS':
      return { ...state, errors:payload }
    case 'COMPLETE_THE_FORM':
      return { ...state, userSelections: payload }
    case 'NAVIGATING_TO_SUB_CATEGORY':
      return { ...state, subCategoryMode: true , stage: state.subCategoryMode !== true  ? ++state.stage : state.stage, currentSubCategories:state.subCategories.filter(cat=> cat.id === payload.categoryId) }
    default:
      return state
  }
}
