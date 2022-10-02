import {createSlice} from '@reduxjs/toolkit'
const initialState = true
const variable = createSlice({
	name:"language" , 
	initialState, 
	reducers:{
		changeLanguage : (state,action)=>{
			state=!state
			console.log(state)
		},  
		
	}

}) 

export const langActions = variable.actions 
export default variable.reducer

