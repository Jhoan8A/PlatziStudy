package com.fundamentosplatzi.springboot.fundamentos.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import com.fundamentosplatzi.springboot.fundamentos.bean.MyBean;
import com.fundamentosplatzi.springboot.fundamentos.bean.MyBean2Implement;
import com.fundamentosplatzi.springboot.fundamentos.bean.MyBeanImplement;
import com.fundamentosplatzi.springboot.fundamentos.bean.MyBeanWithDependency;
import com.fundamentosplatzi.springboot.fundamentos.bean.MyBeanWithDependencyImplement;
import com.fundamentosplatzi.springboot.fundamentos.bean.MyOperation;
import com.fundamentosplatzi.springboot.fundamentos.bean.MyOperationImplement;

//esta anotacion determina que aqui vamos a tener conf de nuestros beans
@Configuration
public class MyConfigurationBean {
    //inicializo el bean con la interface y retorno su implementación
    @Bean
    public MyBean beanOperation(){

        return new MyBean2Implement();

    }

    @Bean
    public MyOperation beanMyOpetarion(){
        return new MyOperationImplement();
    }

    @Bean
    public MyBeanWithDependency beanMyOpetarionLlamado(MyOperation myOperation){
        return new MyBeanWithDependencyImplement(myOperation);
    }
    
}
