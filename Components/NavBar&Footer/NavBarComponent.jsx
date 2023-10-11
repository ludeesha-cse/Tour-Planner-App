import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Modal, Button } from 'react-native';

const NavBarComponent = ({ items }) => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  return (
    <View style={styles.navbarCustom}>
      <View style={styles.container}>
        <Image
          source={require('../../images/journeysync-high-resolution-logo-black-on-transparent-background.png')}
          style={styles.logoImage}
        />
        <View style={styles.menuContainer}>
          <TouchableOpacity onPress={toggleMenu} style={styles.menuIcon}>
            <Text style={styles.menuButton}>Menu</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modal
        animationType="slide" // You can choose other animation types as well
        transparent={true}
        visible={isMenuVisible}
      >
        <View style={styles.menuModal}>
          {items.map((item) => (
            <Button
              key={item.label}
              title={item.label}
              onPress={() => {
                // Handle navigation or other actions here
              }}
            />
          ))}
          <Button
            title="Close"
            onPress={toggleMenu}
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  navbarCustom: {
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
    alignContent: 'right',
    alignItems: 'right',
  },
  menuIcon: {
    alignSelf: 'flex-end', // Align the menu button to the right
  },
  menuContainer: {
    //flex: 1, // This will make the container take up the available space
    //alignItems: 'flex-end', // Align its content to the right
    
  },
  menuModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', // Background color of the modal
  },
});

export default NavBarComponent;
