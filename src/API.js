import axios from "axios";

async function postSignIn(url, id, isMocked) {
  const response = await axios.get(url + id).catch(function (error) {
    if (error.response) {
      console.log("error.response.data", error.response.data);
    }
  });
  if (isMocked) {
    return axios.get("/mocked-data/getMainData.json").then((res) => res.data);
  } else {
    return response.data.data;
  }
}

/**
 * @param {string} url - a string that contains the URL of data service (backend).
 * @param {string} id - is a string number corresponding to the identity of the user.
 * @param {boolean} isMocked - When true, data comes from the local json files in /public/mocked-data/
 *
 * @return {(response.data.data:Object)}
 * returns an object containing the main information relative to the user.
 * For instance, firstName and todayScore are included keys.
 * Protein, carbohydrate, counts are also other keys used in the side cards.
 * The format of this array is perfectly matched to the needed data of Recharts library.
 */

async function getMainData(url, id, isMocked) {
  const response = await axios.get(url + id).catch(function (error) {
    if (error.response) {
      console.log("error.response.data", error.response.data);
    }
  });
  if (isMocked) {
    return axios.get("/mocked-data/getMainData.json").then((res) => res.data);
  } else {
    return response.data.data;
  }
}

/**
 * @param {string} url - a string that contains the URL of data service (backend).
 * @param {string} id - is a string number corresponding to the identity of the user.
 * @param {boolean} isMocked - When true, data comes from the local json files in /public/mocked-data/
 *
 * @return {(response.data.data.session:Array)}
 * returns an array of objects containing weight and calories consumed each day.
 */
async function getActivity(url, id, isMocked) {
  const response = await axios.get(url + id + "/activity");

  if (isMocked) {
    return axios.get("/mocked-data/getActivity.json").then((res) => res.data);
  } else {
    return response.data.data.sessions;
  }
}

/**
 * @param {string} url - a string that contains the URL of data service (backend).
 * @param {string} id - is a string number corresponding to the identity of the user.
 * @param {boolean} isMocked - When true, data comes from the local json files in /public/mocked-data/
 *
 * @return {(response.data.data.sessions:Array)}
 * returns an array of objects containing the mean duration of the session in minutes for each day.
 */
async function getSessions(url, id, isMocked) {
  const response = await axios.get(url + id + "/average-sessions");
  if (isMocked) {
    return axios.get("/mocked-data/getSessions.json").then((res) => res.data);
  } else {
    return response.data.data.sessions;
  }
}

/**
 * @param {string} url - a string that contains the URL of data service (backend).
 * @param {string} id - is a string number corresponding to the identity of the user.
 * @param {boolean} isMocked - When true, data comes from the local json files in /public/mocked-data/
 *
 * @return {(response.data.data:Array)}
 * returns an object containing multiple informations.
 * One key named data is an array of objects compatible with Recharts input data.
 * This array contains the values of Force and speed for instance, which will be
 * displayed as a radar chart.
 */
async function getPerformance(url, id, isMocked) {
  const response = await axios.get(url + id + "/performance");
  if (isMocked) {
    return axios
      .get("/mocked-data/getPerformance.json")
      .then((res) => res.data);
  } else {
    return response.data.data;
  }
}

export { postSignIn, getMainData, getActivity, getSessions, getPerformance };
