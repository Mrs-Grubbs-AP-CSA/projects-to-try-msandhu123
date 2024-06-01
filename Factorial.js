import java.util.*;

public class Factorial {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    System.out.print("Enter which number you want to take the factorial of: ");
    int n = scanner.nextInt();
    String factorialNumber = factorial(n);
    System.out.println("The factorial of " + n + " is: " + factorialNumber);
  }

  public static String factorial(int num){
    if (num < 0){
      return "undefined";
    } else if (num == 0){
      return "1";
    }
    int result = 1;
    for (int i = 1; i <= num; i++){
      result *= i;
    }
    return Integer.toString(result);
  }
}
