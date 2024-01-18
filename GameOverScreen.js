import { View, Text, StyleSheet } from 'react-native';
import Title from '../components/ui/Title';
import Colors from '../constants/Colors';
import PrimaryButton from '../components/ui/PrimaryButton';

function GameOverScreen ({roundsNumber, userNumber, onStartNewGame}){
    return <View>
        <Title style={styles.gameOver}>
            Game Over !
        </Title>
        <Text style={styles.summaryText}>
            You took <Text style={styles.highlight}> {roundsNumber} </Text> rounds to guess the number <Text style={styles.highlight}> {userNumber}</Text>
        </Text>
        <PrimaryButton 
        onPress={onStartNewGame} 
        style={styles.buttonStyle}> Start new game </PrimaryButton>
    </View>
}

export default GameOverScreen;

const styles = StyleSheet.create({
    gameOver:{
        marginTop: 150,
        marginLeft: 50,
        marginRight: 50,
        padding:13
    },

    summaryText: {
        fontWeight: 'bold',
        fontSize: 14,
        margin: 45,
        padding:8,
        textAlign:'center'
    },

    highlight: {
        fontWeight:'bold',
        color: Colors.accent500
       
    },
    buttonStyle:{
        marginLeft:80,
        marginRight:80,
    }
});