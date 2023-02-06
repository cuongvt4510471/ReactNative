import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const About = (props) => {
      const { route } = props;
      const aboutOfMe = route.params.aboutOfMe;
      return (
            <View>
                  <Text style={{ fontWeight: '500', fontSize: 20 }}>My name: {aboutOfMe.name}</Text>
                  <Text style={{ fontWeight: '300', fontSize: 18 }}>MSV: {aboutOfMe.msv}</Text>
            </View>
      );
};

export default About;

const styles = StyleSheet.create({});
