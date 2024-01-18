import { View, Text, StyleSheet,Pressable } from 'react-native';
import Colors from '../../constants/Colors';

function PrimaryButton ({children, onPress, style }) {
    
    return (
        <View style={[styles.buttonOuterContainer,style]}>
       <Pressable 
       style={({pressed}) =>
        pressed 
       ? [styles.buttonInnerContainer, styles.pressed]
       : styles.buttonInnerContainer
        }
       onPress={onPress}
       android_ripple={{color: Colors.primary600}}>
            <Text style={styles.buttonText}>
                {children}
            </Text>
        </Pressable>
        </View>
    );
}
export default PrimaryButton;
const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 20,
        margin: 4,
        overflow: 'hidden'
    },
    buttonInnerContainer: {
        backgroundColor: '#4e0329',
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    },
    pressed: {
        opacity: 0.75
    },    

    });