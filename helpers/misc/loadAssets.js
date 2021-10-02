import * as Font from "expo-font";

export default async function () {
  try {
    return Font.loadAsync({
      "open-sans-regular": require("../../assets/OpenSans/OpenSans-Regular.ttf"),
      "open-sans-semibold": require("../../assets/OpenSans/OpenSans-SemiBold.ttf"),
    });
  } catch (error) {
    console.log("Error loading fonts:", error);
  }
}
