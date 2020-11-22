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
