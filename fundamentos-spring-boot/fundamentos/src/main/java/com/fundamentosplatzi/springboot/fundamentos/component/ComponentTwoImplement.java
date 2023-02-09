package com.fundamentosplatzi.springboot.fundamentos.component;

import org.springframework.stereotype.Component;
//segundo componente que implementa la interface y usa su metodo ahora toca cambiar algo en el main
@Component
public class ComponentTwoImplement implements ComponentDependency {

    @Override
    public void saludar() {
        // TODO Auto-generated method stub
        System.out.println("Hello World To the two component implement");
    }
    
}
