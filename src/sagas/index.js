import {fork,all} from "redux-saga/effects";
import * as Watchers from "./watchers";
console.log('TCL: Watchers', Watchers)

export default function* startForman() {
  const sagas = [];
  for (let key in Watchers) {
    sagas.push(fork(Watchers[key]));
  }

  yield all(sagas);
}
