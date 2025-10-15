export default class ArtItem {
  id: number;
  img: string;
  title: string;
  author: string;
  department: string;
  publish_year: string;

  constructor(
    _id: number = 0,
    _img: string = "",
    _title: string = "",
    _author: string = "",
    _department: string = "",
    _publish_year: string = ""
  ) {
    this.id = _id;
    this.img = _img;
    this.title = _title;
    this.author = _author;
    this.publish_year = _publish_year;
    this.department = _department;
  }
}
