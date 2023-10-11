import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'; // Please make sure you have the corresponding icons available in your React Native project.

const Footer = () => {
  return (
    <View style={styles.footerSettings}>
      <View style={styles.footer}>
        <View style={styles.logo}>
          <Image
            source={require('../images/journeysync-high-resolution-logo-white-on-transparent-background.png')}
            style={styles.logoImage}
          />
        </View>
        <View style={styles.contact}>
          <Text style={styles.footerTitle}>Contact us</Text>
          <Text>JourneySync Inc.</Text>
          <Text>123 Main Street, Suite 456</Text>
          <Text>City, State, ZIP</Text>
          <Text>Email: info@journeysync.com</Text>
          <Text>Phone: +1 (123) 456-7890</Text>
        </View>
        <View style={styles.quickLinks}>
          <Text style={styles.footerTitle}>Quick Links</Text>
          <Text>Home</Text>
          <Text>Tours</Text>
          <Text>About Us</Text>
          <Text>Contact Us</Text>
        </View>
        <View style={styles.connect}>
          <Text style={styles.footerTitle}>Connect With Us</Text>
        </View>
      </View>
      <View style={styles.followUs}>
        <Text style={styles.followUsText}>Follow us on :</Text>
        <TouchableOpacity style={styles.socialIcon}>
          <FaFacebook />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialIcon}>
          <FaInstagram />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialIcon}>
          <FaLinkedin />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialIcon}>
          <FaTwitter />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footerSettings: {
    paddingTop: 5,
    backgroundColor: '#0C356A',
    color: '#D9D9D9',
    borderBottomLeftRadius: 50,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
  },
  logo: {
    flex: 1,
    alignItems: 'center',
  },
  logoImage: {
    width: 200,
    height: 100,
  },
  contact: {
    flex: 1,
  },
  quickLinks: {
    flex: 1,
  },
  connect: {
    flex: 1,
  },
  footerTitle: {
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  followUs: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  followUsText: {
    fontWeight: 'normal',
    marginRight: 10,
  },
  socialIcon: {
    marginLeft: 10,
    fontSize: 24,
  },
});

export default Footer;
