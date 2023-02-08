import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';

const EditScreen = (props) => {
      const { route, navigation } = props;
      const { Update } = route.params;

      const [name, setName] = useState(route.params.name);
      const [age, setAge] = useState(route.params.age);
      const [address, setAddress] = useState(route.params.address);
      const [phone, setPhone] = useState(route.params.phone);
      const [email, setEmail] = useState(route.params.email);

      return (
            <View>
                  <TextInput placeholder="Họ tên" value={name} onChangeText={(text) => setName(text)} />
                  <TextInput placeholder="Tuổi" value={'' + age} onChangeText={(text) => setAge(text)} />
                  <TextInput placeholder="Địa chỉ" value={address} onChangeText={(text) => setAddress(text)} />
                  <TextInput placeholder="Số điện thoại" value={phone} onChangeText={(text) => setPhone(text)} />
                  <TextInput placeholder="Địa chỉ email" value={email} onChangeText={(text) => setEmail(text)} />
                  <Button title="Cancel" onPress={() => navigation.navigate('Home')} />
                  <Button
                        title="Save"
                        onPress={() => {
                              Update(name, age, address, phone, email);
                              navigation.navigate('Profile', {
                                    name: name,
                                    age: age,
                                    address: address,
                                    phone: phone,
                                    email: email,
                                    Update: Update,
                              });
                        }}
                  />
            </View>
      );
};

export default EditScreen;

const styles = StyleSheet.create({});
