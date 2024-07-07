import MovieReview from "./MovieReview";

class MovieReviewMain1 {
  constructor() {
    this.main();
  }

  public main() {
    const inception = new MovieReview();
    inception.title = "인셉션";
    inception.review = "인생은 무한 루프";

    const aboutTime = new MovieReview();
    aboutTime.title = "어바웃 타임";
    aboutTime.review = "인생 시간 영화";

    console.log("영화 제목 : ", inception.title, ", 리뷰 : ", inception.review);
    console.log("영화 제목 : ", aboutTime.title, ", 리뷰 : ", aboutTime.review);
  }
}

new MovieReviewMain1();
