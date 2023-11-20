import { ImageBackground,  SafeAreaView,  StyleSheet, View } from 'react-native'
import React from 'react'
import City from '../../components/City';
import Degree from '../../components/Degree';
import Status from '../../components/Status';
import { Images } from '../../common/Images';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import CustomStatusBar from '../../components/CustomStatusBar';
import ScrollComponent from '../../components/ScrollComponent';
import SearchLocations from '../SearchLocations/SearchLocations';

type Props = {}


const Home = (props: Props) => {
  
  return (
    <SafeAreaView style={styles.main}>
        <CustomStatusBar />
        <ImageBackground
          source={Images.dawn}
          resizeMode='cover'
          style={styles.img}>
        <View style={{height : hp('55%'), alignItems : 'center'}}>
          <City 
            name='Cairo'/>
          <Degree 
            current={19}/>
          <Status 
            currentStatus='Mostly Cloud'
            high={30}
            low={16}/>
        </View>
        <ScrollComponent />   
        <SearchLocations />
      </ImageBackground>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
    main : {
        flex : 1,
    },
    img : {
      height : hp('100%'), 
      width : wp('100%'),
      alignItems : 'center',
    },
    
    
})
