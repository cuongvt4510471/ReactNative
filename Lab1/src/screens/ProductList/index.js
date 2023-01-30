import { FlatList, View, StyleSheet, Image, Text, Separator } from 'react-native';

const ProductItem = (props) => {
      const item = props.item;
      return (
            <View style={styles.container}>
                  <Image style={styles.image} source={{ uri: item.image }} />
                  <View style={{ marginTop: 5, marginLeft: 16 }}>
                        <Text>Tên: {item.name}</Text>
                        <Text>Mô tả: {item.desc}</Text>
                  </View>
            </View>
      );
};
const ProductList = (props) => {
      const list = props.data || [];
      return (
            <FlatList style={styles.list} data={list} renderItem={ProductItem} keyExtractor={(item, index) => index} />
      );
};

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

export default ProductList;
