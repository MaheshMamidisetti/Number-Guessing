import { View, StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

function Card ({children}) {
    return  <View style={ styles.card}>{children}</View>;

}
export default Card;

const styles = StyleSheet.create ({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
        marginTop: 60,
        marginHorizontal: 35,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width:1, height: 2 },
        shadowRadius : 6,
        shadowOpacity : 0.25
    }
});