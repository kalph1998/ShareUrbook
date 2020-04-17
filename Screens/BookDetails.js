import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Books from "./../data/boooks.json";
import Bookss from './../data/boooks - Copy.json'
import Colors from "./../Constants/Colors";
import { Divider } from "react-native-elements";
import BooksCard from "../Components/BooksCard";
import Rent from "../Components/signin";

const BookDetails = (props) => {
  const BookId = props.route.params?.Bookid;
  const selectedBook = Books.find((cat) => cat.ISBN === BookId);

  props.navigation.setOptions({
    title: selectedBook.bookTitle,
  });
  const renderItem = (itemdata) => {
    return (
      <View>
        <View style={styles.booksContainer}>
          <BooksCard Image={itemdata.item.imageUrlL} />
          <View>
            <Text
              style={styles.title}
              onPress={() => {
                props.navigation.navigate("BookD", {
                  Bookid: itemdata.item.ISBN,
                });
              }}
            >
              {itemdata.item.bookTitle}
            </Text>
            <Text style={{ flexDirection: "column", marginTop: 30 }}>
              {`Rating:${itemdata.item.bookRating}`}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.BOX}>
          <ImageBackground
            source={{ uri: selectedBook.imageUrlL }}
            style={styles.bookImage}
          />
        </View>
        <Text style={styles.author}>{selectedBook.bookAuthor}</Text>
        <Text style={styles.Booktitle}>{selectedBook.bookTitle}</Text>

        <Text
          style={styles.Rating}
        >{`Rating:${selectedBook.bookRating} Stars`}</Text>
        <View style={{ marginHorizontal: "5%", marginTop: "5%" }}>
          <Text style={{ fontSize: 18, color: Colors.Grey }}>Description</Text>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
        </View>
        <View style={styles.RentContainer}> 
          <Rent style={styles.rent} text='Rent Now' />
        </View>

        <Divider style={styles.divider} />
        <FlatList data={Bookss} renderItem={renderItem} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  BOX: {
    alignSelf: "center",
    marginTop: 20,
  },
  bookImage: {
    width: 121,
    height: 181,
    borderRadius: 10,
    overflow: "hidden",
    elevation: 15,
  },
  author: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 18,
    color: Colors.Grey,
    fontStyle: "italic",
    fontFamily: "sans-serif-light",
  },
  Booktitle: {
    marginTop: 30,
    textAlign: "center",
    fontSize: 20,
    fontFamily: "sans-serif",
  },
  divider: {
    backgroundColor: Colors.primary,
    width: "90%",
    alignSelf: "center",
    marginTop: 20,
  },
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
    fontFamily: "sans-serif",
  },
  Rating: {
    marginTop: 30,
    textAlign: "center",
  },
  description: {
    textAlign: "left",
    marginTop: 20,
    fontFamily: "Roboto",
    fontSize: 16,
    lineHeight: 25,
  },
  rent: {
    backgroundColor: Colors.primary,
    padding: 7,
    borderWidth: 0,
  },
  RentContainer:{
    alignItems:'center',
    marginTop:20
  }
});

export default BookDetails;
