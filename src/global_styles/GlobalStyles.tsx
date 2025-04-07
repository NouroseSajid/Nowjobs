import { StyleSheet } from "react-native";
import { useTheme } from "../theme/theme";

export default function useGlobalStyles() {
  const { colors } = useTheme();
  
  return StyleSheet.create({
    main_Screen_container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.background,
      padding: 16,
    },
    main_Screen_text: {
      fontSize: 25,
      fontWeight: "bold",
      color: colors.textPrimary,
    },
    skeletonText: {
      width: 120,
      height: 20,
    },
    skeletonBox: {
      width: 150,
      height: 150,
    },
    // Add common layout styles
    fullWidth: {
      width: '100%',
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    spaceBetween: {
      justifyContent: 'space-between',
    },
    inputContainer: {
      width: '100%',
      marginBottom: 16,
    },
  });
}