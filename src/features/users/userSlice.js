import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAddress } from '../../services/apiGeocoding';

function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

// createAyncThunk produce 3 different action types
// one for pending status
// one for fulfilled status
// one for rejected status
export const fetchAddress = createAsyncThunk(
  // Action to dispatch
  'user/fetchAddress',
  // Thunk function to be executed as soon as the action is dispatched
  async function () {
    // Get the users geolocation position
    const positionObj = await getPosition();
    const position = {
      latitude: positionObj.coords.latitude,
      longitude: positionObj.coords.longitude,
    };

    // 2) Then we use a reverse geocoding API to get a description of the user's address, so we can display it the order form, so that the user can correct it if wrong
    const addressObj = await getAddress(position);
    const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

    // 3) Then we return an object with the data that we are interested in
    // Payload of the FULFILLED STATE
    return { position, address };
  },
);

const initialState = {
  username: '',
  status: 'idle',
  position: {},
  address: '',
  error: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateName(state, action) {
      state.username = action.payload;
    },
  },
  // Handle 3 different action types in createAsyncThunk
  extraReducers: (builder) =>
    // pending status
    builder
      .addCase(fetchAddress.pending, (state, action) => {
        state.status = 'loading';
      })
      // fulfilled status
      .addCase(fetchAddress.fulfilled, (state, action) => {
        // action.payload is the return in fetchAddress function
        state.position = action.payload.position;
        state.address = action.payload.address;
        state.status = 'idle';
      })
      // rejected status
      .addCase(fetchAddress.rejected, (state, action) => {
        state.status = 'error';
        state.error = 'There was a problem getting your address.';
      }),
});

export const { updateName } = userSlice.actions;
export default userSlice.reducer;

export const getUser = (store) => store.user;
