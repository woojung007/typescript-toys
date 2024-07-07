export default class MaxCounter {
  private count = 0;
  private max: number;

  public constructor(max: number) {
    this.max = max;
  }

  public increment(): void {
    // 검증 로직
    if (this.count >= this.max) {
      console.log("최대값을 초과할 수 없습니다.");
      return;
    }

    // 실행 로직
    this.count++;
  }

  public getCount(): number {
    return this.count;
  }
}
