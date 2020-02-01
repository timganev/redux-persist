import * as types from "./actionTypes";

export const list = list => ({
  type: types.LIST,
  list
});

export const album = album => ({
  type: types.ALBUM,
  album
});
