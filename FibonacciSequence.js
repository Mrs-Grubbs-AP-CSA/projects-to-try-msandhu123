import java.util.*;

public class FibonacciSequence {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter number of terms for fibonacci sequence: ");
        int n = scanner.nextInt();
        String numbers = sequence(n);
        System.out.println("Fibonnaci Sequence up to the " + n + "th term: " + numbers);
    }

    public static String sequence(int num){
        if (num == 1){
            return "1";
        } else if (num == 2){
            return "1, 1";
        }
        String output = "1, 1";
        int num1 = 1;
        int num2 = 1;
        for (int i = 0; i < num - 2; i++){
            int num3 = num1 + num2;
            num1 = num2;
            num2 = num3;
            output = output + ", " + num2;
        }
        return output;
    }
}
