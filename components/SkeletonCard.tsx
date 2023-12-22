/**
 * Dependency imports
 */
import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';

/**
 * Local imports
 */

/**
 * Styles
 */
const styles = StyleSheet.create({
  root: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  cardImage: {
    width: '100%',
    aspectRatio: 1.33,
    borderRadius: 5,
    backgroundColor: '#f0f0f0',
  },
  cardInfo: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardTitle: {
    height: 20,
    borderRadius: 5,
    backgroundColor: '#f0f0f0',
  },
  cardLikes: {
    width: '20%',
    height: 20,
    borderRadius: 5,
    backgroundColor: '#f0f0f0',
  },
});

/**
 * Component(s)
 */
export interface SkeletonCardProps {}

const SkeletonCard: React.FC<SkeletonCardProps & ViewProps> = ({
  style,
  ...props
}) => {
  return (
    <View style={[styles.root, style]} {...props}>
      <View style={styles.cardImage} />
      <View style={styles.cardInfo}>
        <View
          style={[styles.cardTitle, { width: `${20 + Math.random() * 30}%` }]}
        />
        <View style={styles.cardLikes} />
      </View>
    </View>
  );
};

export default SkeletonCard;
