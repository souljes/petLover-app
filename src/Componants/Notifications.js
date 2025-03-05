import React, { useState, useCallback, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  RefreshControl,
} from "react-native";
import { getData } from "../Service/dataService";

const Notifications = ({ navigation }) => {
  const [notifications, setNotifications] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const fetchData = async () => {
    try {
      const response = await getData(
        "http://192.168.171.103:3000/notification"
      );

      // Ensure response is in the expected format
      if (Array.isArray(response)) {
        setNotifications(response);
      } else {
        console.error("Unexpected response format:", response);
      }
    } catch (error) {
      console.error("Error fetching notifications:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    try {
      const response = await getData(
        "http://192.168.171.103:3000/notification"
      );

      if (Array.isArray(response)) {
        setNotifications(response);
      } else {
        console.error("Unexpected response format on refresh:", response);
      }
    } catch (error) {
      console.error("Error refreshing notifications:", error);
    } finally {
      setRefreshing(false);
    }
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("NotificationContent", {
                notificationId: item._id,
                notificationLabel: item.label,
              })
            }
          >
            <View style={styles.cardContainer}>
              <View style={styles.detailsContainer}>
                <Text style={styles.message}>{item.label || "No message"}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20,
  },
  cardContainer: {
    minHeight: 100,
    backgroundColor: "whitesmoke",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
    elevation: 5,
    borderRadius: 10,
    shadowColor: "gray",
    shadowOpacity: 0.5,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  detailsContainer: {
    flex: 1,
    justifyContent: "center",
  },
  message: {
    fontSize: 16,
    color: "black",
  },
});

export default Notifications;

// import React, { useState, useCallback, useEffect } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   FlatList,
//   TouchableOpacity,
//   RefreshControl,
// } from "react-native";
// import { getData } from "../Service/dataService";

// const Notifications = ({ navigation }) => {
//   const [notifications, setNotifications] = useState([]);
//   const [refreshing, setRefreshing] = useState(false);
//   // const [notification, setnotification] = useState([]);
//   const fetchData = async () => {
//     try {
//       const notificationResponse = await getData(
//         "http://192.168.171.103:3000/notification"
//       );
//       if (Array.isArray(notificationResponse)) {
//         setNotifications(notificationResponse);
//       }
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   // Initial data fetch
//   useEffect(() => {
//     fetchData();
//   }, []);

//   // // Fetch notifications when the component mounts
//   // useEffect(() => {
//   //   const fetchNotifications = async () => {
//   //     try {
//   //       const { notifications } = await getData();
//   //       setNotifications(notifications);
//   //     } catch (error) {
//   //       console.error("Error fetching notifications", error);
//   //     }
//   //   };

//   //   fetchNotifications();
//   // }, []);

//   // Refresh handler
//   const onRefresh = useCallback(async () => {
//     setRefreshing(true);
//     try {
//       const { notifications } = await getData(
//         "http://192.168.171.103:3000/notification"
//       );
//       setNotifications(notifications);
//     } catch (error) {
//       console.error("Error refreshing notifications", error);
//     } finally {
//       setRefreshing(false);
//     }
//   }, []);

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={notifications}
//         keyExtractor={(item) => item._id}
//         renderItem={({ item }) => (
//           <TouchableOpacity
//             onPress={() =>
//               navigation.navigate("NotificationContent", {
//                 notificationId: item._id,
//                 notificationMessage: item.message,
//               })
//             }
//           >
//             <View style={styles.cardContainer}>
//               <View style={styles.detailsContainer}>
//                 <Text style={styles.message}>{item.message}</Text>
//               </View>
//             </View>
//           </TouchableOpacity>
//         )}
//         refreshControl={
//           <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
//         }
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginLeft: 10,
//     marginRight: 10,
//     marginBottom: 20,
//   },
//   cardContainer: {
//     minHeight: 100,
//     textAlign: "right",
//     backgroundColor: "whitesmoke",
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginVertical: 10,
//     elevation: 5,
//     borderRadius: 10,
//     shadowColor: "gray",
//     shadowOpacity: 0.5,
//     shadowRadius: 6,
//     shadowOffset: { width: 0, height: 3 },
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//   },
//   detailsContainer: {
//     flex: 1,
//     justifyContent: "center",
//     textAlign: "right",
//   },
//   message: {
//     fontSize: 16,
//     color: "black",
//     textAlign: "left",
//   },
// });

// export default Notifications;
