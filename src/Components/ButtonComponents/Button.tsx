import { 
  TouchableOpacity,
  StyleSheet, 
  Text, 
  ActivityIndicator, 
  View,
  TouchableOpacityProps
} from "react-native";
import { variants } from "./VariantesButton";
import Icon from "react-native-vector-icons/AntDesign"

interface ButtonProps{
  title: string;
  onPress: () => void;
  isLoading?: boolean;
  variant?: "Primary";
  disabled?: boolean;
  iconName?: string;
  style?: TouchableOpacityProps['style'];
}

export function Button({title, 
  onPress, 
  isLoading = false,
  disabled,
  variant = 'Primary',
  iconName,
  style,
} : ButtonProps) {
  const buttonVariants = variants[variant];
  const buttonStyle = disabled? buttonVariants.disabled : buttonVariants.enabled;

  return (
    <TouchableOpacity
      disabled={isLoading || disabled}
      onPress={onPress}
      style={[styles.Container, {...buttonStyle.button}]}
    >
      {isLoading ? (
        <ActivityIndicator size={30} color={buttonStyle.icon.color}/>
      ):
        <View style={styles.Content}> 
          {iconName && <Icon 
            name={iconName}
            size={32}
            color={buttonStyle.icon.color}
            style={{marginEnd: 8}}
          />}
          <Text style={[styles.title, {color: buttonStyle.title.color}]}>
            {title}
          </Text>
        </View>
      }
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  Container:{
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "90%",
    borderRadius: 20,
    padding: 16,
  },
  Content:{
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title:{
    fontSize: 22,
    letterSpacing: 2,
    fontWeight: "bold",
  },
})