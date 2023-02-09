package com.fundamentosplatzi.springboot.fundamentos.bean;

public class MyBeanWithDependencyImplement implements MyBeanWithDependency{
    //inyecto dependencia del Bean My Operation
    private MyOperation myOperation;

    //constructor para instanciar la depdendencia inyectada
    public MyBeanWithDependencyImplement(MyOperation myOperation){
        this.myOperation = myOperation;
    } 

    @Override
    public void printWithDependency() {
        // TODO Auto-generated method stub
        int number = 3;
        System.out.println("Resultado de la suma de 1 al numero: "+ number);
        System.out.println(myOperation.sum(number) );
        
        
    }
    
}
