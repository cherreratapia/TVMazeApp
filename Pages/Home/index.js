import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import { DataProvider, LayoutProvider } from "recyclerlistview";

const { width, height } = Dimensions.get("window");
export default function Home() {
  // const color = useColor();
  const color = "#000";
  const [shows, setShows] = useState([]);
  const [dataProvider, setDataProvider] = useState(
    new DataProvider((r1, r2) => {
      return r1 !== r2;
    }).cloneWithRows(shows)
  );
  const [layoutProvider] = useState(
    new LayoutProvider(
      () => 0,
      (type, dim, index) => {
        dim.width = width;
        dim.height = 100;
      }
    )
  );
  const [isLoading, setLoading] = useState(true);

  // const fetchShows = async () => {
  //   const response = await request("/shows");
  //   setShows([...response]);
  //   setDataProvider(
  //     new DataProvider((r1, r2) => {
  //       return r1 !== r2;
  //     }).cloneWithRows(response)
  //   );
  //   setLoading(false);
  // };

  const renderItem = (type, item, index) => (
    <View style={{ width, height: 100, paddingHorizontal: 16 }}>
      <Text style={[color, { fontFamily: "open-sans-semibold", fontSize: 26 }]}>
        Nombre: {item.name}
      </Text>
    </View>
  );

  // useEffect(() => {
  //   fetchShows();
  // }, []);

  if (isLoading) {
    return (
      <SafeAreaView
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      >
        <ActivityIndicator />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <Recycler
        dataProvider={dataProvider}
        layoutProvider={layoutProvider}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}
