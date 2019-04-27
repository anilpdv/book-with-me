class any {
  static int a;

  static void m1(int a) {
    a = a;
    System.out.println(a);
  }

  static int m2() {
    System.out.println("varaible b");
    return 20;
  }

  public static void main(String[] args) {
    System.out.println(a);
    m1(50);
    System.out.println(a);
  }

  static int b = m2();
  System.out.println(b);
}
