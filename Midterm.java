

import java.util.Scanner;

import java.util.ArrayList;

public class Midterm {
    public static void main(String[] args) {
      
        Motorcycle motor = new Motorcycle(null, null, null);
        
        try (Scanner s = new Scanner(System.in)) {
            while (true) {
               
                int integer = Integer.MAX_VALUE;
                System.out.println("""
                        *****************************************
                        *      Welcome to MotorCycle Dealer     *
                        *     Would you Like to deal with Us?   *
                        *               1 for Yes               *
                        *               2 for NO                *
                        *****************************************
                                """);
                               
                System.out.print("Enter your choice: ");
               
                String response = s.nextLine();
                
                try {
                    integer = Integer.parseInt(response);
                        try {
                            if(integer < 0 ){
                                throw new MotorException("Please Enter Positive Number!"); 
                            }
                           
                            if(integer >2 ){
                                throw new MotorException("Two Options Only!!");
                            }
                        } catch (MotorException e) {
                           System.out.println(e.getMessage());
                        }
                if (integer == 1) {
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
                            System.out.println("Brand Name "+(i+1)+": ");
                            String b =s.next(); 
                            
                            System.out.println("Color "+(i+1)+": ");
                            String c =  s.next();
                          
                            System.out.println("Model "+(i+1)+": ");
                           String m = s.next() ;
                           Motorcycle motor1 = new Motorcycle(b,c,m);
                            order.add(motor1);
                            System.out.println("Number of orders " + orders + "\n" + motor1);
                        }

                        System.out.println("""
                                =========================================
                                =    Would you like to Edit your orders? =
                                =                1 for Yes              =
                                =                2 for No               =
                                =========================================
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
                                    case "A", "a":
                                    System.out.println("Brand Name: ");
                            String b =s.next(); 
                            
                            System.out.println("Color: ");
                            String c =  s.next();
                          
                            System.out.println("Model: ");
                           String m = s.next() ;
                           Motorcycle motor1 = new Motorcycle(b,c,m);
                            order.add(motor1);
                                        System.out.println("Successfully Added to your orders ");
                                        motor = new Motorcycle(b, c, m);
                                        break;
                                     case "B", "b":
                                        System.out.println("Enter the index that you want to remove: ");
                                        int index = s.nextInt();
                                        order.remove(index);
                                        System.out.println("Successfully Remove from your orders ");
                                        for (Motorcycle element : order) {
                                            System.out.println(element);
                                        }
                                        break;
                                    case "C","c":
                                    for (Motorcycle element : order) {
                                        System.out.println(element);
                                        
                                    }
                                    
                                    System.out.println("""
                                        ======================================================
                                        = Would you like to change the Color of your orders? =
                                        =                   1.Yes                            =
                                        =                   2.No                             =
                                        ======================================================
                                         """);
                                         System.out.println("Your Choice: ");
                                        int anscolor = s.nextInt();
                                        
                                        if(anscolor != 1){
                                               break;
                                        } else{
                                            
                                            System.out.println("Choose Another Color? ");
                                               System.out.println("Please an index and the Color you want ");
                                               System.out.println("The index: ");
                                                int i = s.nextInt();
                                                System.out.println("The Color: ");
                                                String change = s.next();
                                               motor = new Motorcycle(motor.getBrand(), change, motor.getModel());
     
                                                order.set(i, motor);
                                        }
                                        for (Motorcycle element : order) {
                                            System.out.println(element);
                                            
                                        }
                                        
                                    
                                        break;
                                    case "X","x":
                                        System.exit(0);
                                        break;
                                    default:
                                    System.out.println("Invalid Input");
                                }
                            }
                        }

                    }
                }
                if (integer == 2) {
                    System.exit(0);
                }

                // s.close();
            }
    catch (NumberFormatException e) {
            System.out.println("Error! Invalid integer. Try again.");
            continue;
   }

   }
        }
    }
}