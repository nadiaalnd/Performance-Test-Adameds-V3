import {sleep} from "k6";
import {postLOINC} from "./PostLoinc.js";


export const options = {
  vus: 10,
  duration: '30s',
};

export default function() {
  postLOINC();
  sleep(1);
}