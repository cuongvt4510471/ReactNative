import { FlatList, StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const Manager = (props) => {
      const { route } = props;
      const list = route.params.list;
      return (
            <View>
                  <FlatList
                        data={list}
                        renderItem={({ item }) => (
                              <View style={styles.container}>
                                    <Image style={styles.image} source={{ uri: item.imageUrl }} />
                                    <View style={{ marginTop: 5, marginLeft: 16 }}>
                                          <Text>Tên: {item.name}</Text>
                                          <Text>Mô tả: {item.desc}</Text>
                                    </View>
                              </View>
                        )}
                        keyExtractor={(item) => item.id}
                  />
            </View>
      );
};

export default Manager;

const styles = StyleSheet.create({
      container: {
            flex: 1,
            padding: 16,
            flexDirection: 'row',
            borderBottomWidth: 1,
      },
      image: {
            width: 50,
            height: 50,
            borderWidth: 1,
            borderRadius: 25,
            borderColor: 'black',
      },
      list: {
            borderWidth: 1,
            borderColor: 'black',
            marginTop: 16,
      },
});
