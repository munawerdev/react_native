import { Image, Text, View ,TextInput} from "react-native";

export default function TestScreen() {
  return (
    <View style={{flex: 1,justifyContent:'center',alignItems:'center',backgroundColor:'white'}}>
      <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{width: 200, height: 200}}
          />
          <TextInput
          style={{height:40,borderWidth:2}}
          defaultValue="testing add"
          />
          <Text>Test</Text>
    </View>
  );
}
