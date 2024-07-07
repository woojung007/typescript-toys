export default class Book {
  title: string = "";
  author: string = "";
  page: number = 0;

  // 기본 생성자 (java)
  //   Book() {}

  constructor(title?: string, author?: string, page?: number) {
    this.title = title ?? "";
    this.author = author ?? "";
    this.page = page ?? 0;
  }

  displayInfo() {
    console.log(
      `제목 : ${this.title}, 저자 : ${this.author} 페이지 : ${this.page}`
    );
  }
}
