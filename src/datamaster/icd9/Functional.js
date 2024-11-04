import {sleep} from "k6";
import {getICD9} from "./GetICD9.js";


export const options = {
  vus: 10,
  duration: '30s',
};

export default function() {
  getICD9 ();
  sleep(1);
}