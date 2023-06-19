import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IStep {
  id: number
  label: string
}

interface IState {
  stepNumber: number
  steps: IStep[]
}

const initialState: IState = {
  stepNumber: 1,
  steps: [
    { id: 1, label: '1' }, 
    { id: 2, label: '2' }, 
    { id: 3, label: '3' } 
  ]
}

export const stepsSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setStep: (state, action: PayloadAction<number>) => {
      state.stepNumber = action.payload
    },
  }
})

export const { setStep } = stepsSlice.actions

export default stepsSlice.reducer