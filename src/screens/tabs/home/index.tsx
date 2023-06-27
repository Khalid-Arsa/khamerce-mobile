import React from "react"
import { SafeAreaView, ScrollView, Text, View } from "react-native";

const HomeScreen: React.FC<any> = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>Home</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen;