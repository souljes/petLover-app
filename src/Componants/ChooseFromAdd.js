import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import {
  SelectList,
  MultipleSelectList,
} from "react-native-dropdown-select-list";
import { getData } from "../Service/dataService"; // Import your getData function

export default function ChooseFromAdd({
  onCategoryChange,
  onSubcategoriesChange,
}) {
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategories, setSelectedSubcategories] = useState([]);

  // Fetch categories and subcategories from the server using getData function
  const fetchCategories = async () => {
    try {
      const data = await getData("http://192.168.171.103:3000/categories");

      if (!data) {
        console.error("No data found");
        return;
      }

      const transformedData = data.map((category) => {
        const subs = [
          category.sub0,
          category.sub1,
          category.sub2,
          category.sub3,
          category.sub4,
          category.sub5,
          category.sub6,
          category.sub7,
        ];

        const formattedSubs = subs
          .filter((sub) => sub && sub._id && sub.name)
          .map((sub) => ({
            key: sub._id, // Ensure key matches with what MultipleSelectList expects
            value: sub.name,
          }));

        return {
          id: category._id,
          name: category.name,
          subs: formattedSubs,
        };
      });

      setCategories(transformedData);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  // Handle category selection
  const handleCategorySelect = (val) => {
    console.log(val);

    setSelectedCategory(val);
    const selectedCategory = categories.find((cat) => cat.id === val);
    if (selectedCategory) {
      onCategoryChange({
        id: selectedCategory.id,
        name: selectedCategory.name,
      });
      setSubcategories(selectedCategory.subs);
    } else {
      setSubcategories([]);
    }
  };

  // Handle subcategory selection
  const handleSubcategoriesSelect = (val) => {
    // console.log("Received value from MultipleSelectList:", val);

    // console.log(val);

    setSelectedSubcategories(val);
    // selectedSubs = selectedSubcategories;
    // console.log("tet selectedSubs", selectedSubs);

    // onSubcategoriesChange(selectedSubs);

    // if (Array.isArray(val)) {
    //   // Filter the selected subcategories
    //   const selectedSubs = subcategories
    //     .filter((sub) => val.includes(sub.key)) // Use key to match selected values
    //     .map((sub) => ({ id: sub.key, name: sub.value })); // Return ID and name

    //   console.log("Selected subcategories:", selectedSubs);

    //   setSelectedSubcategories(selectedSubs);
    //   onSubcategoriesChange(selectedSubs);
    // } else {
    //   console.error(
    //     "Subcategory selection is not an array or is undefined:",
    //     val
    //   );
    // }
  };

  return (
    <View style={{ direction: "rtl" }}>
      {/* Category dropdown */}
      <SelectList
        setSelected={handleCategorySelect}
        data={categories.map((cat) => ({ key: cat.id, value: cat.name }))}
        save="key"
        style={{ textAlign: "center", marginVertical: 5 }}
        search={false}
        placeholder="اختر التصنيف"
        badgeStyles={{ backgroundColor: "darkgreen", borderRadius: 10 }}
      />
      {selectedCategory && subcategories.length > 0 && (
        <>
          <Text style={{ textAlign: "center", marginVertical: 5 }}>
            اختر التصنيف الفرعي
          </Text>
          <MultipleSelectList
            onSelect={() => {
              console.log(selectedSubcategories),
                onSubcategoriesChange(selectedSubcategories);
            }}
            setSelected={(val) => handleSubcategoriesSelect(val)}
            data={subcategories}
            save="key"
            label="Subcategories"
            search={false}
            placeholder="اختر التصنيف الفرعي"
            badgeStyles={{ backgroundColor: "darkgreen", borderRadius: 10 }}
            badgeTextStyles={{ color: "snow" }}
          />
        </>
      )}
    </View>
  );
}
