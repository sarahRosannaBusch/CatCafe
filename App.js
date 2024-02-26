import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Cafe />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#444',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Header = () => {
  return (
    <View>
      {/* <Menu /> */}
      <Text>Ar0se's Cat Cafe</Text>
      {/* <Clock /> */}
    </View>
  )
}

const Cafe = () => {
  return (
    <View>
      <Cat name="Maru" />
      <Cat name="Jellylorum" />
      <Cat name="Munkustrap" />
      <Cat name="Spot" />
    </View>
  );
};

const Cat = props => {
  const [isHungry, setIsHungry] = useState(true);
  const [timesPetted, setTimesPetted] = useState(0)

  return (
    <View>
      <Text>Hello, I am {props.name}!</Text>
      <Text>I am {isHungry ? 'hungry' : 'full'}!</Text>
      <Text>I've been pet {timesPetted} times</Text>
      <Button
        onPress={() => {
          setIsHungry(false);
        }}
        disabled={!isHungry}
        title={isHungry ? 'Pour milk' : 'Thank you!'}
      />
      <Button
        onPress={() => {
          setTimesPetted(timesPetted + 1);
        }}
        title={'Pet cat'}
      />
    </View>
  );
};
