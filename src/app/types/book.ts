const obj = {
  kind: 'books#volume',
  id: '8Pr_kLFxciYC',
  etag: 'NV9ZEv7XSwI',
  selfLink: 'https://www.googleapis.com/books/v1/volumes/8Pr_kLFxciYC',
  volumeInfo: {
    title: 'Flowers For Algernon',
    subtitle: 'The must-read literary science fiction masterpiece',
    authors: ['Daniel Keyes'],
    publisher: 'Hachette UK',
    publishedDate: '2012-11-15',
    description:
      "The classic novel about a daring experiment in human intelligence 'A masterpiece of poignant brilliance . . . heartbreaking, and utterly, completely brilliant' Guardian 'A timeless tearjerker' Independent Charlie Gordon, IQ 68, is a floor sweeper and the gentle butt of everyone's jokes - until an experiment in the enhancement of human intelligence turns him into a genius. But then Algernon, the mouse whose triumphal experimental transformation preceded his, fades and dies, and Charlie has to face the possibility that his salvation was only temporary. Readers can't stop reading Flowers For Algernon: 'I am finding it hard to put into words the vast range of emotions I experienced while reading this tale of hope, perseverance, truth and humanity . . . I'm a huge fan of science fiction that doesn't seem too far away; something that I could imagine being just around the corner - and that's how I felt about Flowers for Algernon' Goodreads reviewer, ⭐ ⭐ ⭐ ⭐ ⭐ 'You're watching Charlie, the main character, go through an experimental procedure that increases his IQ. The whole book, written in diary entries, let us see how it affects his life and how he struggles through it. I rarely cry while reading a book but I couldn't help myself here. It's a classic for a reason. Read it. You won't be able to put it down' Goodreads reviewer, ⭐ ⭐ ⭐ ⭐ ⭐ 'Heartbreaking and beautiful. Required reading, as far as I am concerned' Wil Wheaton 'This book is extraordinary, one of my favorites. It is a fast read but is is very powerful and heartbreaking. I read it in the plane and I felt a little embarrassed when I started to weep at the end of the book' Goodreads reviewer, ⭐ ⭐ ⭐ ⭐ ⭐ 'One of those stories I wish I would have read years earlier. It's simply marvellous. It's about the nature of intelligence and how intelligence can be divisive. It's a very emotional book' Goodreads reviewer, ⭐ ⭐ ⭐ ⭐ ⭐",
    industryIdentifiers: [
      {
        type: 'ISBN_13',
        identifier: '9780575088498',
      },
      {
        type: 'ISBN_10',
        identifier: '0575088494',
      },
    ],
    readingModes: {
      text: true,
      image: false,
    },
    pageCount: 266,
    printType: 'BOOK',
    categories: ['Fiction'],
    averageRating: 5,
    ratingsCount: 4,
    maturityRating: 'NOT_MATURE',
    allowAnonLogging: true,
    contentVersion: '0.16.19.0.preview.2',
    panelizationSummary: {
      containsEpubBubbles: false,
      containsImageBubbles: false,
    },
    imageLinks: {
      smallThumbnail:
        'http://books.google.com/books/content?id=8Pr_kLFxciYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
      thumbnail:
        'http://books.google.com/books/content?id=8Pr_kLFxciYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
    },
    language: 'en',
    previewLink:
      'http://books.google.ru/books?id=8Pr_kLFxciYC&pg=PT236&dq=flowers+inauthor:keyes&hl=&cd=1&source=gbs_api',
    infoLink: 'https://play.google.com/store/books/details?id=8Pr_kLFxciYC&source=gbs_api',
    canonicalVolumeLink: 'https://play.google.com/store/books/details?id=8Pr_kLFxciYC',
  },
  saleInfo: {
    country: 'RU',
    saleability: 'FOR_SALE',
    isEbook: true,
    listPrice: {
      amount: 948.85,
      currencyCode: 'RUB',
    },
    retailPrice: {
      amount: 948.85,
      currencyCode: 'RUB',
    },
    buyLink: 'https://play.google.com/store/books/details?id=8Pr_kLFxciYC&rdid=book-8Pr_kLFxciYC&rdot=1&source=gbs_api',
    offers: [
      {
        finskyOfferType: 1,
        listPrice: {
          amountInMicros: 948850000,
          currencyCode: 'RUB',
        },
        retailPrice: {
          amountInMicros: 948850000,
          currencyCode: 'RUB',
        },
      },
    ],
  },
  accessInfo: {
    country: 'RU',
    viewability: 'PARTIAL',
    embeddable: true,
    publicDomain: false,
    textToSpeechPermission: 'ALLOWED',
    epub: {
      isAvailable: true,
      acsTokenLink:
        'http://books.google.ru/books/download/Flowers_For_Algernon-sample-epub.acsm?id=8Pr_kLFxciYC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
    },
    pdf: {
      isAvailable: false,
    },
    webReaderLink: 'http://play.google.com/books/reader?id=8Pr_kLFxciYC&hl=&source=gbs_api',
    accessViewStatus: 'SAMPLE',
    quoteSharingAllowed: false,
  },
  searchInfo: {
    textSnippet:
      'I stare inward in the center of my unseeing eye at the red spot that transforms itself into a multipetaled <b>flower</b> – the shimmering, swirling, luminescent <b>flower</b> that lies deep in the core of my unconscious. I am shrinking.',
  },
};

type IBook = typeof obj;

interface IBookOptions {
  totalBooks: number;
  searchQuery: string;
  category: string;
  sortQuery: string;
  currentPosition: number;
}

class Book {
  title: string;
  author: string;
  description: string;
  year: string;
  image: string;
  id?: string;
  constructor(title: string, author: string, description: string, year: string, image: string, id?: string) {
    this.title = title;
    this.author = author;
    this.description = description;
    this.year = year;
    this.image = image;
    this.id = id;
  }
}

export type { IBook, IBookOptions, Book };
