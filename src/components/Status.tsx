import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Colors } from '../../assets/Colors/Colors';

type Props = {
    currentStatus : string
    high : number
    low : number
}

const Status = (props: Props) => {
  return (
    <View>
        <View style={styles.status}>
            <Text style={styles.statusText}>{props.currentStatus}</Text>
        </View>
         <View style={styles.HighLow}>
            <Text style={styles.HighLowText}>H:{props.high}°</Text>
        <Text style={styles.HighLowText}>L:{props.low}°</Text>
    </View>
    </View>
    
  )
}

export default Status

const styles = StyleSheet.create({
    status : {
        marginTop : hp('-2%'),
        // width : wp('30%'),
    },
    statusText : {
        color : Colors.gray,
        fontSize : wp('5%'),
        fontWeight : '700',
    },
    HighLow : {
        flexDirection : 'row',
        minWidth : wp('20%'),
        justifyContent : 'space-between',
    },
    HighLowText : {
        color : Colors.white,
        fontSize : 20,
        fontWeight : '700'
    }
})
