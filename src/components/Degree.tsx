import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Colors } from '../../assets/Colors/Colors';

type Props = {
    current : number
}

const Degree = (props: Props) => {
  return (
    <View style={styles.degree}>
        <Text style={styles.degreeText}>{props.current}</Text>
        <Text style={styles.degreeSign}>{'°'}</Text>
    </View>
  )
}

export default Degree

const styles = StyleSheet.create({
    degree : {
        marginTop : hp('-2.5%'),
        flexDirection : 'row',
    },
    degreeText : {
        fontSize : wp('30%'),
        fontWeight : '200',
        color : Colors.white
    },
    degreeSign : {
        fontSize : wp('15%'),
        color : Colors.white,
        marginTop : hp('1.5%')
    },
})
