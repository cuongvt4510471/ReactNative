import { StyleSheet, View, Button } from 'react-native';
import React, { useState } from 'react';

const HomeScreen = (props) => {
      const [name, setName] = useState('Vương Tất Cường');
      const [age, setAge] = useState(10);
      const [address, setAddress] = useState('Hà Nội');
      const [phone, setPhone] = useState('091234');
      const [email, setEmail] = useState('abc@gmail.com');

      const Update = (name, age, address, phone, email) => {
            setName(name);
            setAge(age);
            setAddress(address);
            setPhone(phone);
            setEmail(email);
      };
      return (
            <View style={styles.container}>
                  <Button
                        title="Thông tin cá nhân"
                        onPress={() =>
                              props.navigation.navigate('Profile', {
                                    name: name,
                                    age: age,
                                    address: address,
                                    phone: phone,
                                    email: email,
                                    Update: Update,
                              })
                        }
                  />
            </View>
      );
};

export default HomeScreen;

const styles = StyleSheet.create({
      container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
      },
});
