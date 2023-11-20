import { FlatList, Image, ListRenderItemInfo, Platform, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Colors } from '../../assets/Colors/Colors';
import { BlurView, VibrancyView } from "@react-native-community/blur";
import ScrollTabs from './ScrollTabs';
import { Images } from '../common/Images';
import { data } from '../utils/dummyData';

type ItemProps = {
  time : number
  degree : number
  status : string
}

const ScrollComponent = () => {

    const Item = ({item}: ListRenderItemInfo<ItemProps>) => {
      const currentStatus = {
        'clear sky': Images.clearSky,
        'few clouds': Images.fewClouds,
        'scattered clouds': Images.scatteredClouds,
        'broken clouds': Images.brokenClouds,
        'shower rain': Images.showerRain,
        'rain': Images.rain,
        'thunderstorm': Images.thunderStorm,
        'snow': Images.snow,
        'mist': Images.mist,
      }[item.status]
      return(
        <View style={styles.itemContainer}>
          <Text style={styles.itemText}>{item.time >11 ? item.time + 'PM' : item.time + 'AM'}</Text>
          <Image 
            source={currentStatus}
            resizeMode='contain'
            style={styles.icon}/>
          <Text style={styles.itemText}>{item.degree}°</Text>
        </View>
      )
    }
    return (
      <View 
        style={styles.scroll}>
        <BlurView blurType='light' blurAmount={2.5} style={styles.blur}/> 
        <View style={styles.topBar}/>
        <ScrollTabs />
        <FlatList
          data={data}
          renderItem={Item}
          horizontal
          keyExtractor={(item, index) => item.id.toString()}
          style={styles.list}
        />
      </View>
    )
}

export default ScrollComponent

const styles = StyleSheet.create({
  scroll : {
      borderWidth : wp('1%'),
      borderTopRightRadius : 50,
      borderTopLeftRadius : 50,
      borderColor : Colors.borderColor,
      backgroundColor : 'rgba(0, 0, 0, 0.5)',
      alignItems : 'center',
      overflow : 'hidden',
    },
    blur: {
      position : 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
    topBar : {
      width : wp('25%'),
      height : hp('1%'),
      backgroundColor : '#3A3B3C',
      borderRadius : 30,
      marginTop : hp('1.5%')
    },
    itemContainer : {
      borderWidth : wp('0.5%'),
      alignItems : 'center',
      marginVertical : hp('1.5%'),
      borderRadius : 35,
      borderColor : Colors.borderColor,
      marginLeft : wp('7.5%'),
      maxHeight: hp('16.5%'), // Set your desired maximum width here

    },
    itemText : {
      fontSize : 16,
      fontWeight : '400',
      color : Colors.white,
      marginVertical : hp('2%'),
      marginHorizontal : wp('1.5%')
    },
    icon : {
      height : wp('7.5%'),
      width : wp('7.5%')
    },
    list : {

    }
})
