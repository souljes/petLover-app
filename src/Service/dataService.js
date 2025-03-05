// import http from "./httpService";

// export async function getData() {
//   try {
//     // Fetch data from both endpoints
//     const [dataResponse, notificationResponse, filterRes, usersRes] =
//       await Promise.all([
//         http.get("http://192.168.171.103:3000/data"),
//         // http.get("http://192.168.171.103:3000/Notification"),
//         http.get("http://192.168.171.103:3000/Filters"),
//         // http.get("http://192.168.171.103:3000/Users"),
//       ]);
//     return {
//       data: dataResponse.data,
//       // notifications: notificationResponse.data,
//       filters: filterRes.data,
//       // users: usersRes.data,
//     };
//   } catch (error) {
//     console.error("Error fetching data", error);
//     throw error;
//   }
// }
import axios from "axios";

// Service/dataService.js
export const getData = async (url) => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
