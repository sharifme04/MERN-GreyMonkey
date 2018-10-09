const initialState = {
  posts:[
    {id:'1', title:'Mango' , body:'body of the mango '},
    {id:'2', title:'Organge' , body:'body of the Organge '},
    {id:'3', title:'apple' , body:'body of the Apple '}
  ]
}

const rootReducer = ( state = initialState, action )=>{
  return state;
}

export default rootReducer;
