import React from "react";
import Theme from "./Theme";
import { NavigationContainer } from "@react-navigation/native";

export default function Root(props) {
  return (
    <Theme>
      <NavigationContainer>{props.children}</NavigationContainer>
    </Theme>
  );
}
