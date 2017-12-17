//Import libarys for making a registerComponent
import React from 'react';
import { Text, View } from 'react-native';

//Make a registerComponent
const Header = () => {
  const { textStyle, viewStyle } = styles;

   return (
     <View style={viewStyle}>
        <Text style={textStyle}>Albums!</Text>
     </View>
   );
};

const styles = {
  viewStyle: {
    backgroundColor: '#ecf2f9',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};

//Make the component available to other part of the App
export default Header;
