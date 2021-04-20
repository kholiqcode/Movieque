import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { color } from '../../../theme';
import { TabItem } from '../../atoms';

const BottomTab: React.FC<{ state: any; descriptors: any; navigation: any }> = ({
  state,
  descriptors,
  navigation,
}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerInner}>
        {state.routes.map((route: any, index: any) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TabItem
              key={index}
              title={label}
              active={isFocused}
              onPress={onPress}
              onLongPress={onLongPress}
            />
          );
        })}
      </View>
    </View>
  );
};
export default BottomTab;

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  containerInner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingVertical: 20,
    backgroundColor: color.dark,
    borderRadius: 30,
    marginHorizontal: 10,
    marginTop: 5,
    // ...boxShadow(color.dim, { height: 1, width: 1 }, 0.8, 0.4),
  },
  container: {
    position: 'absolute',
    bottom: 10,
    width,
  },
});
