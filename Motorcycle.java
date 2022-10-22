
public class Motorcycle{
   public  String brand;
    public String model;
    public String color;

    
    public String getBrand() {
        return brand;
    }
    public String getColor() {
        return color;
    }
    public String getModel() {
        return model;
    }
    public String setBrand(String brand) {
        return this.brand = brand;
    }
    public String setColor(String color) {
      this.color = color;
        return color;
        
    }
    public String setModel(String model) {
       return this.model = model;
    }
    @Override
    public String toString(){

        String orders = "  You order are "+ "\n" +
                         "* BrandName: " + this.getBrand() +"\n" +
                         "* Color: " + this.getColor() + "\n" +
                         "* Model: " + this.getModel();
        return orders;
    }
    public Motorcycle(String brand, String color, String model){
        this.brand = brand;
        this.color = color;
        this.model =  model;
     
    }
}