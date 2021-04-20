import React from 'react';
import { StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';
import { color, FONT_BOLD } from '../../../theme';

const Button: React.FC<{ text?: string }> = ({ text }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.txtButton}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

type Style = {
  container: ViewStyle;
  txtButton: TextStyle;
};

const styles = StyleSheet.create<Style>({
  container: {
    backgroundColor: color.primary,
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 8,
    maxWidth: '55%',
  },
  txtButton: {
    ...FONT_BOLD(16),
    color: color.white,
  },
});
