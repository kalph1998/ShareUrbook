import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

import BooksCard from "../../Components/BooksCard";

import Books from "../../data/boooks.json";

const HomeScreen = (props) => {
  const renderItem = (itemdata) => {
    return (
      <View>
        <View style={styles.booksContainer}>
          <BooksCard Image={itemdata.item.imageUrlL} />
          <View>
            <Text
              style={styles.title}
              onPress={() => {
                props.navigation.navigate("BookD",{Bookid:itemdata.item.ISBN});
              }}  
            >
              {itemdata.item.bookTitle}
            </Text>
            <Text
              style={{ flexDirection: "column", marginTop: 30 }}
            >{`by:${itemdata.item.bookAuthor}`}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.Container}>
      <FlatList data={Books} renderItem={renderItem} keyExtractor={(key)=>key.ISBN.toString()} />
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "#fff",
  },
  booksContainer: {
    flexDirection: "row",
    marginVertical: "5%",
  },
  title: {
    maxWidth: "80%",
    marginVertical: 10,
  },
});

export default HomeScreen;
