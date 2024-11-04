import {sleep} from "k6";
import {postItemGigi} from "./PostItemGigi.js";


export const options = {
  vus: 10,
  duration: '30s',
};

export default function() {
  postItemGigi();
  sleep(1);
}