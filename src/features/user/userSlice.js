import { createSlice } from '@reduxjs/toolkit'
import faker from 'faker'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
      id: 0,
      fullName: faker.name.findName()
  },
  reducers: {
  },
});

export const userSelector = state => state.user


export default userSlice.reducer;