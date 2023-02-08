import { StyleSheet, Text, View, Image, Button } from 'react-native';
import React from 'react';

const ProfileScreen = (props) => {
      const { route } = props;
      console.log(route.params);

      return (
            <View style={styles.container}>
                  <Image style={styles.logo} source={require('../Images/elden_ring.png')} />
                  <Text>Họ tên: {route.params.name}</Text>
                  <Text>Tuổi: {route.params.age}</Text>
                  <Text>Quê quán: {route.params.address}</Text>
                  <Text>Số điện thoại: {route.params.phone}</Text>
                  <Text>Email: {route.params.email}</Text>
                  <Button title="Edit" onPress={() => props.navigation.navigate('Edit', { ...route.params })} />
            </View>
      );
};

export default ProfileScreen;

const styles = StyleSheet.create({
      container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
      },
      logo: {
            width: 200,
            height: 200,
            borderWidth: 1,
            borderRadius: 100,
            borderColor: 'red',
      },
});
