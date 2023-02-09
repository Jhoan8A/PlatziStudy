package com.fundamentosplatzi.springboot.fundamentos.component;
import org.springframework.stereotype.Component;

//componente que implementa la interface del metodo saludar y lo usa para implimir en consola el saludo
@Component
public class ComponentImplement implements ComponentDependency {

    @Override
    public void saludar() {
        // TODO Auto-generated method stub
        System.out.println("Hello world desde mi componente");
        
    }

    
    
}
