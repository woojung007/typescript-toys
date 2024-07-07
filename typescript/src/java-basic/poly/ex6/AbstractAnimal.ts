export default abstract class AbstractAnimal {
  public abstract sound(): void;
  public move() {
    console.log("동물이 이동합니다.");
  }
}
