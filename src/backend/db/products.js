import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Camo Shorts",
    price: "1500",
    img_url: "assets/img/men1.png",
    rating:4.5,
    categoryName: "men",
  },
  {
    _id: uuid(),
    title: "Printed T-Shirt",
    price: "999",
    img_url: "assets/img/men2.png",
    rating:4.6,
    categoryName: "men",
  },
  {
    _id: uuid(),
    title: "Premium White T-Shirt",
    price: "1200",
    img_url: "assets/img/men3.png",
    rating:4.9,
    categoryName: "men",
  },
  {
    _id: uuid(),
    title: "White Printed Kurti",
    price: "999",
    img_url: "assets/img/women1.png",
    rating:4.1,
    categoryName: "women",
  },
  {
    _id: uuid(),
    title: "Loungewear - Tracks",
    price: "2000",
    img_url: "assets/img/women2.png",
    rating:3.5,
    categoryName: "women",
  },
  {
    _id: uuid(),
    title: "Cotton T-Shirt",
    price: "699",
    img_url: "assets/img/women3.png",
    rating:4.5,
    categoryName: "women",
  },
  {
    _id: uuid(),
    title: "Kids T-Shirt Printed",
    price: "499",
    img_url: "assets/img/children1.png",
    rating:3.0,
    categoryName: "children",
  },
  {
    _id: uuid(),
    title: "Kids T-shirt Cotton",
    price: "499",
    img_url: "assets/img/children2.png",
    rating:1.5,
    categoryName: "children",
  },
  {
    _id: uuid(),
    title: "Black Sports Shoes",
    price: "1500",
    img_url: "assets/img/footwear1.png",
    rating:4.0,
    categoryName: "children",
  },
  {
    _id: uuid(),
    title: "Tan Leather Shoes",
    price: "2000",
    img_url: "assets/img/footwear2.png",
    rating:4.9,
    categoryName: "children",
  },
];
