import { combineReducers } from 'redux';
import { SHOW_NEXT, SHOW_PREVIOUS } from '../constants/ActionTypes';
import { ARTISTS } from '../constants/ItemTypes';
import knxAlbum from '../assets/mock-albums/1988.jpg';
import celia from '../assets/mock-albums/celia.jpg';
import dr4 from '../assets/mock-albums/dr4.jpg';
import selfish from '../assets/mock-albums/selfish.jpg';
import { createSlice } from '@reduxjs/toolkit';

const topArtistsSlice = createSlice({
  name: 'artists',
  initialState: [
    {
      currentlyDisplaying: 0,
      topArtists: [
        { artPath: knxAlbum, name: 'Knxledge' },
        { artPath: celia, name: 'Tiwa Savage' },
        { artPath: dr4, name: 'Sango' },
        { artPath: selfish, name: 'Kacy Hill' }
      ]
    }
  ],
  reducers: {
    showNext(state, action) {
      const currentlyDisplaying = state.currentlyDisplaying;
      state.currentlyDisplaying = currentlyDisplaying + 1;
    },
    showPrevious(state, action) {
      const currentlyDisplaying = state.currentlyDisplaying;
      state.currentlyDisplaying = currentlyDisplaying - 1;
    }
  }
});

export const { showNext, showPrevious } = topArtistsSlice.actions;

export default topArtistsSlice.reducer;
