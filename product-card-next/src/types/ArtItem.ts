export default class ArtItem {
  img : string;
  title : string;
  author : string;
  department : string;
  publish_year : string;

  constructor(_img: string, _title : string, _author: string, _department: string, _publish_year : string) { 
    this.img = _img;
    this.title = _title;
    this.author = _author;
    this.publish_year = _publish_year;
    this.department = _department;
  }
}
