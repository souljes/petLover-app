import {StyleSheet} from "react-native"
import logo from "../assets/LOGO.png"

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "snow",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 100,
    height: 100,
    margin: 5,
  },
  button: {
    backgroundColor: "#1d3f40",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 10,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "white",
    shadowColor: "#333333",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#1d3f40",
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  //PROFILE
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  userName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  userBio: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },
  separator: {
    height: 1,
    width: "80%",
    backgroundColor: "#E0E0E0",
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  aboutText: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    paddingHorizontal: 20,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  switchLabel: {
    fontSize: 16,
    color: "#666",
  },
  saveButton: {
    backgroundColor: "#253898",
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 25,
  },
  saveButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  //shop
  productList: {
    paddingHorizontal: 5,
  },
  productCard: {
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 20,
    elevation: 4,
    borderStyle: "solid",
    borderColor: "#E03B8B",
    borderWidth: 1,
    shadowColor: "#333333",
    borderStyle: "solid",
    borderColor: "#E03B8B",
    borderWidth: 2,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  productImage: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    paddingHorizontal: 10,
    marginTop: 10,
  },
  productDescription: {
    fontSize: 16,
    color: "#666",
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  addToCartButton: {
    backgroundColor: "#253898",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  addToCartButtonText: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
  productVideo: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  //CART
  pageTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 20,
  },
  cartList: {
    paddingHorizontal: 16,
  },
  cartItem: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
    elevation: 2,
  },
  itemName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  itemPrice: {
    fontSize: 16,
    color: "#666",
  },
  itemQuantity: {
    fontSize: 16,
    color: "#666",
  },
  total: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    alignSelf: "flex-end",
    marginTop: 20,
  },
  checkoutButton: {
    backgroundColor: "#253898",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: "center",
    marginTop: 20,
  },
  checkoutButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  totalP: {
    fontSize: 20,
    fontWeight: "bold",
  },
  h1: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1d3f40",
  },
  h5: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#1d3f40",
  },
})
