import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Modal, Button, TouchableWithoutFeedback} from 'react-native';

const NavBarComponent = ({ navigation}) => {
  
  const navbarItems = [
    {label: 'Home', href: '#home'},
    {label: 'About Us', href: '#about_us'},
    {label: 'Contact Us', href: '#contact_us'}
  ];

  const [isMenuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  const HandleHomePress = () => {
    navigation.navigate('HomeScreen');
    setMenuVisible(false);
  };
  const HandleAboutPress = () => {
    navigation.navigate('HomeScreen');
    setMenuVisible(false);
  };


  return (
    <View style={styles.navbarCustom}>
      <View style={styles.container}>
        <View>
          
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
          <Image
            source={require('../../images/journeysync-high-resolution-logo-black-on-transparent-background.png')}
            style={styles.logoImage}
            
          />
        </TouchableOpacity>
        
        <View style={styles.menuContainer}>
          <TouchableOpacity onPress={toggleMenu} style={styles.menuIcon}>
            <Image style={styles.menuLogo} source={require('../../images/icons8-menu-50.png')} />
          </TouchableOpacity>
        </View>
      </View>
      
      <Modal
        style={styles.menu_modal}
        animationType="fade" // You can choose other animation types as well
        transparent={true}
        visible={isMenuVisible}
        onRequestClose={toggleMenu} // Handle close on overlay click

      >
        <TouchableWithoutFeedback onPress={toggleMenu}>
        <View style={styles.menuModal}>
          <Button
            title="Home"
            onPress={HandleHomePress}
          />
          <Button
            title="About Us"
            onPress={HandleAboutPress}
          />
          <Button
            title="Close"
            onPress={toggleMenu}
          />
        </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  navbarCustom: {
    paddingTop: 40,
    backgroundColor: 'rgba(217, 217, 217, 0.7)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    //alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoImage: {
    width: 100,
    height: 20,
  },
  menuButton: {
    fontWeight: 'bold',
    color: 'blue',
  },
  menuIcon: {
    alignSelf: 'flex-end', // Align the menu button to the right
  },
  menuLogo: {
    width: 20,
    height: 20,
  },
  menuContainer: {
    width: 50,
    //flex: 1, // This will make the container take up the available space
    //alignItems: 'flex-end', // Align its content to the right
    
  },
  menuModal: {
    marginTop:65,
    marginLeft:'70%',
    width:'30%',
    justifyContent: 'center',
    // alignItems: 'flex-end',
  },
  menuContent: {
    width:'100%',
    flex:1,
    Height: 500,
    backgroundColor: 'white',
  },
  menu_modal: {
    backgroundColor: 'green',
  },
  
});

export default NavBarComponent;
