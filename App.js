import { StyleSheet, View, FlatList } from 'react-native';


import GasCalculator from './src/components/GasCalculator';


export default function App() {
  const data = [
    { id: '1', component: <GasCalculator /> },
  ];

  function renderItem({ item }) {
    return (
      <View>
        {item.component}
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.flatList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#292929',
  },
  flatList: {
    flex: 1,
    width: '100%',
  },
});
