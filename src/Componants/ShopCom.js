import React, { useState, useMemo, useCallback, useEffect } from "react";
import { StyleSheet, View, FlatList, RefreshControl } from "react-native";
import Card from "./Card";
import FilterButton from "./FilterButton";
import { getData } from "../Service/dataService";

const ShopCom = ({ navigation }) => {
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState([]);
  const [notification, setnotification] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  // Fetch data from the backend
  const fetchData = async () => {
    try {
      // Fetch data from /data
      const dataResponse = await getData(
        "http://192.168.171.103:3000/approved"
      );
      // Fetch filters from /Filters
      const filtersResponse = await getData(
        "http://192.168.171.103:3000/categories"
      );
      const notificationResponse = await getData(
        "http://192.168.171.103:3000/notification"
      );

      setData(dataResponse || []);
      setFilters(filtersResponse || []);
      setnotification(notificationResponse || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Initial data fetch
  useEffect(() => {
    fetchData();
  }, []);

  // Refresh handler
  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await fetchData();
    setRefreshing(false);
  }, []);

  // Memoized function to insert ads into data
  const dataWithAds = useMemo(() => {
    const numberOfItemsPerAd = 10;
    const ad = {
      id: "ad",
      name: "AD",
      shortDescription: "مساحة إعلانية",
      price: "25",
      image:
        "https://media.istockphoto.com/id/1496378856/photo/showing-smartphone-during-conference.jpg?s=2048x2048&w=is&k=20&c=B0o9LRYbzaR5KrkbSFylYJIjwbtg2rLV8biOWSjDqcc=",
      isAd: true,
    };

    let filteredData = selectedFilter
      ? data.filter((item) => item.category?.name === selectedFilter) // Filter items based on selectedFilter
      : data;

    let dataWithAds = [];
    filteredData.forEach((item, index) => {
      dataWithAds.push(item);
      if ((index + 1) % numberOfItemsPerAd === 0) {
        dataWithAds.push({ ...ad, id: `ad-${index}` });
      }
    });
    return dataWithAds;
  }, [data, selectedFilter]); // Add selectedFilter to dependency array

  const handlePress = (item) => {
    if (item.isAd) {
      console.log("Ad clicked", item);
      return;
    }
    navigation.navigate("PetDetails", { pet: item });
  };

  const handleFilterPress = (filter) => {
    setSelectedFilter((prevFilter) => (prevFilter === filter ? null : filter));
  };

  const renderFilterButton = ({ item }) => (
    <FilterButton
      label={item.name}
      onPress={() => handleFilterPress(item.name)}
      selected={item.name === selectedFilter}
      key={item._id}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={filters}
        renderItem={renderFilterButton}
        keyExtractor={(item) => item._id}
        horizontal
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={styles.filterList}
      />

      <FlatList
        data={dataWithAds}
        renderItem={({ item }) => (
          <Card item={item} onPress={() => handlePress(item)} key={item._id} />
        )}
        keyExtractor={(item) => item._id}
        contentContainerStyle={styles.flatListContainer}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'white',
  },
  filterList: {
    maxHeight: 70,
    marginTop: 5,
    marginBottom: 5,
    paddingHorizontal: 10,
  },
  flatListContainer: {
    paddingBottom: 0,
  },
});

export default ShopCom;
