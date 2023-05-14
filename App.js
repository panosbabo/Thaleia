// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, StatusBar, TouchableOpacity, Button } from 'react-native';


export default function App() {
  const handlePress = () => console.log("Text pressed"); 
  return (
    <>
    <SafeAreaView style={barstyle.container}>
      <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Thaleia</Text>
    </SafeAreaView>
    <SafeAreaView style={styles.container}>
      <Text style={{paddingBottom:10, fontSize: 18}} onPress={handlePress}>Hey pal, I'm Panosbabo</Text>
      {/* <Image source={require("./assets/favicon.png")}/> */}
      <TouchableOpacity onPress={console.log("Image Tapped")}>
        <Image
          fadeDuration={1000}
          source={{
            width: 200,
            height: 300,
            
            uri: "https://picsum.photos/200/300"
          }} />
      </TouchableOpacity>
      <View style={{paddingTop:10}}>
      <Button color="turquoise"
        title="Shoot me!" onPress={() => alert("You Killed me! :(")} />
        </View>
    </SafeAreaView></>
  );
}

let x = 2;
x.toString();

  const barstyle = StyleSheet.create({
    container: {
    backgroundColor: "turquoise",
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
