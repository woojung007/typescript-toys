export default class MathArrayUtils {
  static value: number = 0;

  // 인스턴스 생성을 막는다.
  private constructor(value: number) {
    MathArrayUtils.value = value;
  }

  public static sum(values: number[]) {
    let total: number = 0;
    for (const value of values) {
      total += value;
    }

    return total;
  }

  public static average(values: number[]) {
    let total: number = 0;
    for (const value of values) {
      total += value;
    }

    return total / values.length;
  }

  public static min(values: number[]) {
    let minValue: number = values[0];
    for (const value of values) {
      // i 를 1 부터 돌게하면 조금 더 효율적으로 비교할 수 있음
      if (value < minValue) {
        minValue = value;
      }
    }

    return minValue;
  }

  public static max(values: number[]) {
    let maxValue: number = values[0];
    for (const value of values) {
      if (maxValue < value) {
        maxValue = value;
      }
    }
    return maxValue;
  }
}
