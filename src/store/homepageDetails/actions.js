import axios from "axios";
import { apiUrl } from "../../config/constants";

export const fetchHomepageById = id => {
  return async (dispatch, getState) => {
    const response = await axios.get(`${apiUrl}/homepages/${id}`);
    console.log(response);
  };
};
