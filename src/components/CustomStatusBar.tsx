import { Platform, StatusBar } from 'react-native'
import React from 'react'

type Props = {}

const CustomStatusBar = (props: Props) => {
    const backgroundColor = Platform.OS === 'ios' ? '#c5c8b3' : 'transparent';

  return (
    <StatusBar 
        backgroundColor={backgroundColor}
        translucent={true}/>
  )
}

export default CustomStatusBar

