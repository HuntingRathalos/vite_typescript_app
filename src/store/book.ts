import { defineStore } from "pinia";
import axios from "axios";
import { Book, GoogleBookApiResponse } from "../models/book";

export const useBookStore = defineStore("book", {
  state: () => {
    return {
      books: [] as Book[],
      book: {} as Book,
    };
  },
  getters: {
    filteredBooks(state) {
      return state.books.slice(0, 10);
    },
  },
  actions: {
    async search(query: string) {
      if (!query) {
        return;
      }
      const path = `https://www.googleapis.com/books/v1/volumes?q=${query}`;
      await axios
        .get<GoogleBookApiResponse>(path)
        .then((res) => {
          if (res.data && res.data.items) {
            this.books = res.data.items.map((item) => {
              const vi = item.volumeInfo;
              return {
                id: item.id,
                title: vi.title,
                description: vi.description,
                link: vi.infoLink,
                image: vi.imageLinks ? vi.imageLinks.smallThumbnail : "",
              };
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    setBook(id: string) {
      const book = this.books.find((book) => book.id === id);
      if (book === undefined) {
        throw new Error("book not found");
      }
      this.book = book;
    },
  },
});
