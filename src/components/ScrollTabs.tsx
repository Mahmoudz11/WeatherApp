import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Colors } from '../../assets/Colors/Colors';
import { BlurView } from '@react-native-community/blur';

type TabProps = {
    tab : number
}

const ScrollTabs = () => {
    const [currentTab, setCurrentTab] = useState(0)
    const tabColor = currentTab === 0 ? styles.tabColor : styles.tabColor
    const changeTab = (props : TabProps) => {
        setCurrentTab(props.tab)
    }
  return (
    <View style={styles.tabs}>
        <TouchableOpacity
            onPress={() => changeTab({tab : 0})}>
            <Text style={[styles.tabText, currentTab === 0 ? {color : Colors.white} : {color : Colors.gray}]}>Hourly Forecast</Text>
            {currentTab === 0 ? 
            <View style={styles.tabColor}/>
            : null}
        </TouchableOpacity>
        <TouchableOpacity
            onPress={() => changeTab({tab : 1})}>
            <Text style={[styles.tabText, currentTab === 1 ? {color : Colors.white} :  {color : Colors.gray}]}>Weekly Forecast</Text>
            {currentTab === 1 ? 
            <View style={styles.tabColor}/>
            : null}
        </TouchableOpacity>
    </View>
)
}

export default ScrollTabs

const styles = StyleSheet.create({
    tabs : {
        flexDirection : 'row',
        justifyContent  :'space-evenly',
        width : wp('100%'),
        borderBottomWidth : wp('1%'),
        paddingVertical : hp('1.4%'),
        borderColor : Colors.borderColor,
    },
    tabText : {
        fontSize : 16,
        fontWeight : '600',
    },
    tabColor : {
        borderBottomWidth : wp('1.25'), 
        borderColor : Colors.borderColor,
        borderTopRightRadius : 15,
        borderTopLeftRadius : 15,
        paddingTop : hp('1%'),
        marginBottom : hp('-1.5%')
    },
    
})
