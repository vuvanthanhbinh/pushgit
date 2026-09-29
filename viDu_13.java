package viDu_13;

import java.util.Scanner;

public class viDu_13 {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("nhập số a là : ");
		int a = sc.nextInt();
		
		String ketQua = (a%2==0)?"số chẵn":"số lẻ ";
		System.out.println(a+ " là "+ ketQua);
	}
}
