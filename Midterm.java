package midterm;

import java.util.Scanner;

import java.util.ArrayList;

public class Midterm {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        while (true) {
            System.out.println("""
                    *****************************************
                    *      Welcome to MotorCycle Dealer     *
                    *     Would you Like to deal with Us?   *
                    *               1 for Yes               *
                    *               2 for NO                *
                    *****************************************
                            """);
            System.out.print("Enter your choice: ");
            int response = s.nextInt();

            if (response == 1) {
                System.out.print("Please Enter you name: ");
                String name = s.next();

                System.out.print("Enter the name of your Shop: ");
                String shop = s.next();

                System.out.println("    Welcome");
                System.out.println("    Mr." + name);
                System.out.println("    Shop:" + shop);
                while (true) {
                    ArrayList<Motorcycle> order = new ArrayList<Motorcycle>();
                    System.out.print("How many Motor would like to order? ");
                    int orders = s.nextInt();
                    for (int i = 0; i < orders; i++) {
                        System.out.println("Brand Name: ");
                        String brand = s.next();
                        System.out.println("Color: ");
                        String color = s.next();
                        System.out.println("Model: ");
                        String model = s.next();
                        Motorcycle motor = new Motorcycle(brand, color, model);
                        order.add(motor);
                        System.out.println("Number of orders " + orders + "\n" + motor);
                    }

                    System.out.println("""
                            Would you like to add your orders?
                                        1 for Yes
                                        2 for No
                            """);
                    System.out.println("Enter you choice: ");
                    int choice = s.nextInt();
                    if (choice == 1) {
                        while (true) {
                            System.out.println("""
                            ======================================    
                            =        Optoins                     =
                            =        A. Add orders               =
                            =        B. Remove your order        =
                            =        C. Display all your orders  =
                            =        X. Exit                     =
                            ======================================        
                                    """);
                            System.out.println("Your Options: ");
                            String options = s.next();
                            switch (options) {
                                case "A":
                                    System.out.println("Brand Name: ");
                                    String brand = s.next();
                                    System.out.println("Color: ");
                                    String color = s.next();
                                    System.out.println("Model: ");
                                    String model = s.next();
                                    Motorcycle motor = new Motorcycle(brand, color, model);
                                    order.add(motor);
                                    System.out.println("Successfully Added to your orders ");
                                    break;
                                case "B":
                                System.out.println("Enter the index that you want to remove: ");
                                int index = s.nextInt();
                                order.remove(index);
                                System.out.println("Successfully Remove from your orders ");
                                for (Motorcycle element : order) {
                                    System.out.println(element);
                                }
                                    break;
                                case "C":
                                    for (Motorcycle element : order) {
                                        System.out.println(element);
                                    }

                                    break;
                                case "X":
                                    System.exit(0);
                            }
                        }
                    }

                }
            }
            if (response == 2) {
                System.exit(0);
            }

            s.close();
        }
    }
}