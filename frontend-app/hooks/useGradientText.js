import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import {LinearGradient} from 'expo-linear-gradient';

const GradientText = ({text}) => {
  return (
            <MaskedView
                maskElement={
                    <View>
                        <Text style={styles.text}>{text}</Text>
                    </View>
                }
            >
                <LinearGradient
                    colors={['#144EE3', '#EB568E', '#A353AA', '#144EE3']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.gradient}
                >
                    <Text style={[styles.text, { opacity: 0 }]}>{text}</Text>
                </LinearGradient>
            </MaskedView>

  )
}
const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign:'center'
    },
});


export default GradientText