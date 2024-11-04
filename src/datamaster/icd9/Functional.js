import {sleep} from "k6";
import {postICD9} from "./PostICD9.js";


export const options = {
  vus: 10,
  duration: '30s',
};

export default function() {
  postICD9 ();
  sleep(1);
}