import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Colors } from '../../assets/Colors/Colors';

type Props = {
    name : string
}

const City = (props: Props) => {
  return (
    <View style={styles.city}>
        <Text style={styles.cityText}>{props.name}</Text>
    </View>
  )
}

export default City

const styles = StyleSheet.create({
    city : {
        marginTop : hp('7.5%'),
    },
    cityText : {
        fontSize : wp('10%'),
        fontWeight : '400',
        color : Colors.white
    },
})
