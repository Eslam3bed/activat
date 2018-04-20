export const getActivatData = (content) =>({
  type:'UPDATING_CONTENT',
  payload:content
});

export const startUpdating = () =>({
  type:'START_UPDATING'
});
export const updatingFailes = (error) =>({
  type:'UPDATING_CONTENT_FAILS',
  payload:error
});



export default const updateAppContent = () => dispatch => {

    dispatch(startUpdating())

    const requestUrl = "/api/v1/get_activat";
    const requestOptions = {}

    
}
