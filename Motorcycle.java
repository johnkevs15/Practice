package midterm;

class Motorcycle{
    String brand;
    String model;
    String color;

    public Motorcycle(String brand, String color, String model){
        this.brand = brand;
        this.color = color;
        this.model =  model;
       
    }
    public String getBrand() {
        return brand;
    }
    public String getColor() {
        return color;
    }
    public String getModel() {
        return model;
    }
    public void setBrand(String brand) {
        this.brand = brand;
    }
    public void setColor(String color) {
        this.color = color;
    }
    public void setModel(String model) {
        this.model = model;
    }
    @Override
    public String toString(){
        String orders = "You order are "+ "\n" +
                         "BrandName: " + this.getBrand() +"\n" +
                         "Color: " + this.getColor() + "\n" +
                         "Model: " + this.getModel();
        return orders;
    }
}