/**
 * Dependency imports
 */

import React from 'react';
import { FlatList, StyleSheet, View, ViewProps } from 'react-native';

/**
 * Local imports
 */
import Card from '../components/Card';
import data from '../assets/data.json';
import animatedLogo from '../assets/images/dribbble-logo.gif';
import refreshIcon from '../assets/images/refresh-icon.png';

/**
 * Styles
 */
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#ffabe7',
  },
  refreshContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  refreshIcon: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 36,
    height: 36,
    marginTop: -18,
    marginLeft: -18,
    borderRadius: 18,
    objectFit: 'contain',
  },
});

/**
 * Component(s)
 */
export interface DribbbleShotsProps {}

const DribbbleShots: React.FC<DribbbleShotsProps & ViewProps> = () => {
  return (
    <View style={styles.root}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        overScrollMode="never"
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
        contentContainerStyle={{
          paddingHorizontal: 50,
          paddingVertical: 30,
        }}
        renderItem={({ item }) => (
          <Card image={item.image} title={item.title} likes={item.likes} />
        )}

        // Add new props after this line: 👇
        //-----------------------------------
      />
    </View>
  );
};

export default DribbbleShots;
