import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import Colors from "../../Constants/Colors";
import BooksCard from "../../Components/BooksCard";
import axios from "axios";


const HomeScreen = (props) => {
  const [books, setBooks] = useState([]);
 
  // useEffect( () => {
  //    axios
  //     .get("https://shareurbook-1d485.firebaseio.com/books.json")
  //     .then(response => setBooks(response.data));
  // }, []);

  // const renderItem = (itemdata) => {
  //   return (
  //     <View>
  //     <View style={styles.booksContainer} >
  //       <BooksCard Image={itemdata.item.imageUrlL} />
  //       <View>
  //       <Text style={styles.title}>{itemdata.item.bookTitle}</Text>
  //   <Text style={{flexDirection:'column',marginTop:30}}>{`Rating:${itemdata.item.bookRating} stars`}</Text>
  //       </View>
  //     </View>

  //     </View>
  //   );
  // };

  return (
    <View style={styles.Container}>
    
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
