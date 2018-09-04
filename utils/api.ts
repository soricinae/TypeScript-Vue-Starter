import axios from "axios";
import { getAccessToken } from "./auth";

const BASE_URL = 'https://localhost:44309';

export {getPublicData, getPrivateData};

function getPublicData() {
  const url = `${BASE_URL}/api/values/public`;
  return axios.get(url).then(response => response.data);
}

function getPrivateData() {
  const url = `${BASE_URL}/api/values/private`;
  return axios.get(
      url,
      { headers: {"Authorization": `Bearer ${getAccessToken()}`}}
  ).then(response => response.data);
}