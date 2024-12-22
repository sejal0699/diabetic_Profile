import { StyleSheet } from "react-native";
import { colors } from "../../themes";
import { vw } from "../../utils/dimension";

export const styles = StyleSheet.create({
    button: {
      backgroundColor: colors.buttonColor,
      paddingVertical: 14,
      paddingHorizontal: 20,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 3,
      shadowColor: colors.buttonBorderColor,
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.8,
      shadowRadius: 2,
    },
    buttonText: {
      color: colors.white,
      fontSize: vw(16),
      fontWeight: 'bold',
    },
  });
  