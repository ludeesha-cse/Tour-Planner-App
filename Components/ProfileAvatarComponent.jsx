import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // You may need to install a library for icons, e.g., 'react-native-vector-icons'

export default function AvatarMenu() {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const navigate = (route) => {
    // Add your navigation logic here
    console.log(`Navigating to ${route}`);
    setMenuVisible(false); // Close the menu after navigation
  };

  const handleLogout = () => {
    // Add your sign out logic here
    console.log('Logout');
    setMenuVisible(false); // Close the menu after logout
  };

  return (
    <View>
      <TouchableOpacity onPress={() => setMenuVisible(true)}>
        <Text>User</Text>
      </TouchableOpacity>

      <Modal
        transparent={true}
        visible={isMenuVisible}
        animationType="slide"
      >
        <View style={styles.menuContainer}>
          <View style={styles.menu}>
            <TouchableOpacity onPress={() => navigate('/user/profile')} style={styles.menuItem}>
              <Icon name="person-circle" size={30} color="#000" />
              <Text>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigate('/user/account')} style={styles.menuItem}>
              <Icon name="person" size={30} color="#000" />
              <Text>Account</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigate('user/settings')} style={styles.menuItem}>
              <Icon name="settings" size={30} color="#000" />
              <Text>Settings</Text>
            </TouchableOpacity>
            <View style={styles.divider} />
            <TouchableOpacity onPress={handleLogout} style={styles.menuItem}>
              <Icon name="log-out" size={30} color="#000" />
              <Text>Logout</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => setMenuVisible(false)} style={styles.closeButton}>
            <Icon name="close-circle" size={30} color="#000" />
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  menuContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  menu: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  divider: {
    height: 1,
    backgroundColor: '#000',
    marginVertical: 10,
  },
  closeButton: {
    alignSelf: 'center',
    marginTop: 10,
  },
});
