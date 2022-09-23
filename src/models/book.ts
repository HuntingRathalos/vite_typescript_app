export interface Book {
  id: string;
  title: string;
  description: string;
  link: string;
  image: string;
}

export interface GoogleBookApiResponse {
  items: {
    id: string;
    volumeInfo: {
      title: string;
      description: string;
      infoLink: string;
      imageLinks: {
        smallThumbnail: string;
      };
    };
  }[];
}
