import { Carousel } from "../models/carousel";
import { Product } from "../models/product";
import { Image } from "../models/image";

export function renderProduct(item): Product {
  const product = item.payload.doc.data() as Product;
  product.id = item.payload.doc.id;
  return product;
}

export function renderImage(item): Image {
  const image = item.payload.doc.data() as Image;
  image.id = item.payload.doc.id;
  return image;
}

export function renderCarousel(item: any): Carousel {
  const carousel = item.payload.doc.data() as Carousel;
  carousel.id = item.payload.doc.id;
  return carousel;
}

export function shuffle(array: Array<any>): Array<any> {
  if (array) {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  } else {
    return null;
  }
}
