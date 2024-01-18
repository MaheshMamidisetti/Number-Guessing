
import {Text,StyleSheet} from 'react-native';
import Colors from '../../constants/Colors'
function Title ({children,style}) {
return <Text style={[styles.title , style]}>{children}</Text>
}

export default Title;
const styles= StyleSheet.create ({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        borderWidth: 2,
        borderRadius: 8,
        borderColor: Colors.accent500,
        padding: 10,
        marginTop:10,
        maxWidth:'80%',
        width: 300
    }
});
