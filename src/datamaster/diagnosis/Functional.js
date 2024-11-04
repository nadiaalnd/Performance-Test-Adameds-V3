import {sleep} from "k6";
import {postLogin} from "./GetKabupaten";


export const options = {
  vus: 10,
  duration: '30s',
};

export default function() {
  postLogin();
  sleep(1);
}