export default class Book {
  img : string;
  title : string;
  author : string;
  publish_year : number;

  constructor(_img: string, _title : string, _author: string, _publish_year : number) { 
    this.img = _img;
    this.title = _title;
    this.author = _author;
    this.publish_year = _publish_year;
  }
}
