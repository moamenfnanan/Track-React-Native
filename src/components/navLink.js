import React from 'react'
import {Text,TouchableOpacity,StyleSheet} from 'react-native'
import Spacer from './Spacer'
import {withNavigation} from 'react-navigation'
const NavLink = ({navigation,text,routName})=>{
    return(
        <TouchableOpacity onPress={routName}>
            <Spacer />
            <Text style={styles.texts}>{text}</Text>
            <Spacer />
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    texts:{
        color:'blue'
    }
})
export default withNavigation(NavLink)