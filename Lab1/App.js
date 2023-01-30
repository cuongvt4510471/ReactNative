import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import ProDuctList from './src/screens/ProductList';

export default function App() {
      const list = [
            { name: 'A', desc: 'A' },
            { name: 'B', desc: 'B' },
            { name: 'C', desc: 'C' },
      ];
      const [checkState, setCheckState] = useState(false);
      const [name, setName] = useState('');
      const [desc, setDesc] = useState('');
      const [linkImage, setLinkImage] = useState('');
      const [arr, setArr] = useState(list);
      return (
            <View style={styles.container}>
                  <StatusBar hidden={true} />
                  <Text style={{ fontWeight: '600' }}>Họ tên: Vương Tất Cường</Text>
                  <Text style={{ marginBottom: 16 }}>MSV: PH28111</Text>
                  <Button title="Thêm mới" onPress={() => setCheckState(true)} />
                  {checkState ? (
                        <View style={styles.border}>
                              <TextInput
                                    style={styles.input}
                                    placeholder="Họ tên"
                                    onChangeText={(text) => setName(text)}
                                    value={name}
                              />
                              <TextInput
                                    style={styles.input}
                                    placeholder="Mô tả"
                                    onChangeText={(text) => setDesc(text)}
                                    value={desc}
                              />
                              <TextInput
                                    style={styles.input}
                                    placeholder="Link ảnh"
                                    onChangeText={(text) => setLinkImage(text)}
                                    value={linkImage}
                              />
                              <View style={styles.fixToText}>
                                    <Button
                                          style={styles.buttonLeft}
                                          title="Hủy"
                                          onPress={() => setCheckState(false)}
                                    />
                                    <Button
                                          title="Thêm"
                                          onPress={() => setArr([...arr, { name: name, desc: desc, image: linkImage }])}
                                    />
                              </View>
                        </View>
                  ) : null}
                  <ProDuctList data={arr} />
            </View>
      );
}

const styles = StyleSheet.create({
      container: {
            flex: 1,
            backgroundColor: '#fff',
            padding: 16,
      },
      fixToText: {
            flexDirection: 'row',
            justifyContent: 'space-between',
      },
      input: {
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
      },
      border: {
            padding: 16,
            marginTop: 16,
            borderWidth: 1,
            borderColor: 'black',
      },
});
