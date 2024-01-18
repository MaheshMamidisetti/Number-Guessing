import { View,Text, StyleSheet, Dimensions} from 'react-native';
import Colors from "../../constants/Colors";

function NumberContainer ({children}) {
    return ( 
      <View style={styles.conatiner}>
        <Text style={styles.numberText}>
          {children}
        </Text>
     </View>
    );
}

export default NumberContainer;

const styles= StyleSheet.create ({
    conatiner: {
        borderColor: Colors.accent500,
        borderWidth: 2,
        padding: 30,
        borderRadius: 8,
        margin:45,
        alignItems: 'center',
        justifyContent: 'center' 
        
    },
    numberText: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold'
    },

});