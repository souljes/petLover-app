import React, { useState, useMemo, useCallback, useEffect } from "react";
import { StyleSheet, View, FlatList, RefreshControl } from "react-native";
import Card from "./Componants/Card";
import { useRoute } from "@react-navigation/native";

const BuyFinal = ({ navigation }) => {
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState([]);
  const [notification, setnotification] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const route = useRoute();
  const { subCategoryName } = route.params || {};
  console.log("Navigating to BuyFinal with:", subCategoryName);

  // Fetch data from the backend
  const fetchSubCategories = useCallback(async () => {
    if (!subCategoryName) {
      console.error("subCategoryName is undefined or null");
      return;
    }

    setRefreshing(true);
    try {
      const response = await fetch(
        `http://192.168.171.103:3000/subcategories/${subCategoryName}` // Use subCategoryName here
      );
      const data = await response.json();
      console.log("Raw Data:", data);

      if (Array.isArray(data)) {
        const normalizedData = data
          .filter((item) => item._id)
          .map((item) => ({
            _id: item._id.toString(),
            name: item.name || "Unnamed",
          }));
        console.log("Normalized Data:", normalizedData);
        setData(normalizedData);
      } else {
        console.error("Invalid data format:", data);
      }
    } catch (error) {
      console.error("Error fetching subcategories:", error);
    } finally {
      setRefreshing(false);
    }
  }, [subCategoryName]);

  useEffect(() => {
    if (subCategoryName) {
      fetchSubCategories();
    } else {
      console.error("subCategoryName is not defined");
    }
  }, [fetchSubCategories, subCategoryName]);

  // Refresh handler
  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await fetchSubCategories();
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

    let filteredData = data.filter((item) => item.name === subCategoryName);

    let dataWithAds = [];
    filteredData.forEach((item, index) => {
      dataWithAds.push(item);
      if ((index + 1) % numberOfItemsPerAd === 0) {
        dataWithAds.push({ ...ad, id: `ad-${index}` });
      }
    });
    return dataWithAds;
  }, [data, subCategoryName]);

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

  return (
    <View style={styles.container}>
      <FlatList
        data={dataWithAds}
        renderItem={({ item }) => (
          <Card item={item} onPress={() => handlePress(item)} />
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

export default BuyFinal;
