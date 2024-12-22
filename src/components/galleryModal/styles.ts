import { StyleSheet } from "react-native";
import { colors } from "../../themes";
import { vw } from "../../utils/dimension";

export const styles = StyleSheet.create({
    modalBackground: {
      flex: 1,
      justifyContent: 'flex-end',
      backgroundColor:colors.rgbaBackgroundColor,
    },
    optionContainer: {
      padding: 15,
      backgroundColor:colors.gray,
      borderRadius: 10,
      marginBottom: 10,
      width: '100%',
      alignItems: 'center',
      flexDirection: 'row',
    },
    modalContainer: {
      width: '100%',
      padding: 15,
      backgroundColor: colors.white,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      alignItems: 'center',
    },
    title: {
      fontSize: vw(22),
      fontWeight: 'bold',
      color: colors.black,
      marginBottom: 10,
      alignSelf: 'flex-start',
      left:vw(18)
    },
    modalView: {
      width: '100%',
      padding: 20,
    },
    modalOptionText: {
      fontSize: 16,
      color: colors.black,
      paddingVertical: 10,
      textAlign: 'center',
      marginLeft: 20,
    },
    rightIcon: {
      width: vw(6),
      height: vw(8),
      marginLeft: 'auto',
    },
    optionIcon: {
      width: vw(24),
      height: vw(24),
      marginRight: vw(10),
    },
    lineIcon:{
      width:'90%'
    }
  });