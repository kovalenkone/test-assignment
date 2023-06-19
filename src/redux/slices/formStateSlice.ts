import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IAdvantage {
  id: number
  value: string
}

export interface ICheckbox {
  value: string
  checked: boolean
}

export interface IRadio {
  label: string
  value: string
  checked: boolean
}

interface IState {
  phoneNumber: string
  email: string
  nickname: string
  name: string
  surname: string
  sex: Sex
  advantages: IAdvantage[]
  checkboxes: ICheckbox[]
  radios: IRadio[]
  about: string
}

export enum Sex {
  Empty = 'Не выбрано',
  Man = 'man',
  Woman = 'women',
}

const initialState: IState = {
  phoneNumber: '',
  email: '',
  nickname: '',
  name: '',
  surname: '',
  sex: Sex.Empty,
  advantages: [{ id: 1, value: '' }, { id: 2, value: '' }, { id: 3, value: '' }],
  checkboxes: [{value: '1', checked: false}, {value: '2', checked: false}, {value: '3', checked: false}],
  radios: [{label: '1', value: 'one', checked: false}, {label: '2', value: 'two', checked: false}, {label: '3', value: 'three', checked: false}],
  about: '',
}

export const formStateSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setPhoneNumber: (state, actions: PayloadAction<string>) => {
      state.phoneNumber = actions.payload.trim()
    },
    setEmail: (state, actions: PayloadAction<string>) => {
      state.email = actions.payload
    },
    setNickname: (state, actions: PayloadAction<string>) => {
      state.nickname = actions.payload
    },
    setName: (state, actions: PayloadAction<string>) => {
      state.name = actions.payload
    },
    setSurname: (state, actions: PayloadAction<string>) => {
      state.surname = actions.payload
    },
    addAdvantage: (state, action: PayloadAction<IAdvantage>) => {
      state.advantages.push(action.payload)
    },
    deleteAdvantage: (state, action: PayloadAction<number>) => {
      const index = state.advantages.findIndex(item => item.id === action.payload)
      state.advantages.splice(index, 1) 
    },
    setCheckedCheckbox: (state, action: PayloadAction<ICheckbox>) => {
      const index = state.checkboxes.findIndex(item => item.value === action.payload.value)
      console.log(state.checkboxes[index])
      state.checkboxes[index].checked = !action.payload.checked
    },
    setCheckedRadio: (state, action: PayloadAction<string>) => {
      state.radios.map((item) => item.value === action.payload ? item.checked = true : item.checked = false)
    },
    setAbout: (state, action: PayloadAction<string>) => {
      state.about = action.payload
    },
    setSex: (state, action: PayloadAction<Sex>) => {
      state.sex = action.payload
    },
    resetForm: (state) => initialState
  }
})

export const { resetForm, setPhoneNumber, setEmail, setNickname, setName, setSurname, addAdvantage, deleteAdvantage, setCheckedCheckbox, setCheckedRadio, setAbout, setSex } = formStateSlice.actions

export default formStateSlice.reducer