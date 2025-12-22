import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const initialState = {
  user: null,
  token: null,
  loading: false,
  error: null,
};

export const signupUser = createAsyncThunk(
  'auth/signupUser',
  async (userData, { rejectWithValue }) => {
    try {
      const res = await axios.post('https://fakestoreapi.com/users', {
        email: userData.email,
        username: userData.username,
        password: userData.password,
        name: { firstname: 'ajay', lastname: 'kumar' },
        address: {
          city: 'delhi',
          street: 'sector 47',
          number: 1,
          zipcode: '110001',
          geolocation: { lat: '10.2', long: '20.5' },
        },
        phone: '9978905499',
      });

      return res.data;
    } catch (err) {
      return rejectWithValue('Signup failed. Please try again.');
    }
  }
);


export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const res = await axios.post('https://fakestoreapi.com/auth/login', {
        username,
        password,
      });

      const token = res.data.token;
      if (!token) throw new Error('Invalid credentials');
      localStorage.setItem('authToken', token);

      return { username, token };
    
    } catch (err) {
      return rejectWithValue('Invalid username or password');
    }
  }
);
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem('authToken');
    },
    restoreUser: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = { username: action.payload.username };
        state.token = action.payload.token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout, restoreUser } = authSlice.actions;
export default authSlice.reducer;






