

const initialState = {
  startUpdating : false,
  categories : [],
  subCategories : [],
  subCategoryMode : false,
  currentSubCategories : [],
  userSelections : {},
  formScreen: false,
  formScreenNumber: 0,
  errors : {},
  stage : 0
}
const getStage = ( state) => state.subCategoryMode ? ++state.stage : state.stage;

export default ( state = initialState , { type , payload } ) => {
  switch (type) {
    case 'START_UPDATING':
    return { ...state, startUpdating:true }
    case 'UPDATING_CONTENT':
      return { ...state, categories:payload.categories , subCategories : payload.subCategories }
    case 'UPDATING_CONTENT_FAILS':
      return { ...state, errors:payload }
    case 'COMPLETE_THE_FORM':
      return { ...state, userSelections: payload ,formScreen:true , stage:  ++state.stage }
    case 'NAVIGATING_TO_SUB_CATEGORY':
      return { ...state, subCategoryMode: true ,stage:  ++state.stage , currentSubCategories:state.subCategories.filter(cat=> cat.id === payload.categoryId) }
    case 'NAVIGATE_TO_NEXT_SECTION':
      return { ...state, stage:++state.stage,formScreenNumber:++state.formScreenNumber }
    default:
      return state
  }
}
