import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface CounterState {
    count: number;
    initialized: boolean;
}

// Estado inicial de count
const initialState: CounterState = {
    count: 0,
    initialized: false
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    //Acciones que se mandan a llamar para mutar el state
    initApp(state, action: PayloadAction<number>){
      if(state.initialized) return;

      state.count = action.payload;
      state.initialized = true;
    },
    addOne(state) {
        state.count++;
    },
    substractOne(state) {
        if(state.count === 0) return;
        state.count--;
    },
    resetCount(state, action: PayloadAction<number>){
      if(action.payload < 0){
        action.payload = 0;
      }
      state.count = action.payload;
    }
  }
});

export const {addOne, substractOne, resetCount, initApp} = counterSlice.actions;

export default counterSlice.reducer;
