import React from 'react';
import { StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { color, FONT_BOLD } from '../../../theme';
import Gap from '../Gap';

const TabItem: React.FC<{ title?: string; active?: Boolean; onPress?: any; onLongPress?: any }> = ({
  title,
  active,
  onPress,
  onLongPress,
}) => {
  const TabIcon = () => {
    let icon = 'home';
    if (title === 'Account') {
      icon = 'user';
    } else if (title === 'Search') {
      icon = 'search';
    } else {
      icon = 'home';
    }

    return active ? (
      <View style={styles.tabIconWrapper}>
        <Icon name={icon} size={20} color={color.primary} solid backgroundColor="transparent" />
        <Gap width={5} />
        <Text style={styles.label}>{title}</Text>
      </View>
    ) : (
      <Icon name={icon} size={20} color={color.white} backgroundColor="transparent" />
    );
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} onLongPress={onLongPress}>
      <TabIcon />
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create<{
  label: TextStyle;
  container: ViewStyle;
  tabIconWrapper: ViewStyle;
}>({
  container: { alignItems: 'center', justifyContent: 'center' },
  label: { ...FONT_BOLD(14), color: color.primary },
  tabIconWrapper: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' },
});
