package com.fundamentosplatzi.springboot.fundamentos;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Component;
import com.fundamentosplatzi.springboot.fundamentos.bean.MyBean;
import com.fundamentosplatzi.springboot.fundamentos.bean.MyBeanWithDependency;
import com.fundamentosplatzi.springboot.fundamentos.component.ComponentDependency;

//bean o frijol o aplicacion o main que usa el componentDepenmdency que es una interface, pero que su metodo 
// obtiene funcionalidad al implementarce en el componenete y darle uso
@SpringBootApplication
public class FundamentosApplication implements CommandLineRunner {
    
	//inyectando dependencia del la interface ComponentDependency
	private ComponentDependency componentDependency;
	//inyeccion de dependencia de la interface MyBean que fue la creada por nposotros 
	private MyBean myBean;

	//inyeccion de dependencia de la interface MyBeanWithDependency que fue la creada por nposotros para usar la dependencia MyOperation 
	private MyBeanWithDependency myBeanWithDependency;

	//ESTA ES LA FORMA DE IMPLEMENTAR SI SOLO UN COMPONENETE ESTUVIERA IMPLEMENTANDO LA INMTERFACE Y EL METODO
	//public FundamentosApplication(ComponentDependency componentDependency){

	//aqui con el @Qualifier("componentTwoImplement") LE PASAMOS LA CLASE O COMPONENTE QUE DESEAMOS USAR CON LA PRIMERA LETRA EN MINUSCULA
	//este es el metodo constructor al que toca pasarle todas las inyecciones de dependencia que vamos a usar
	public FundamentosApplication(@Qualifier("componentTwoImplement")  ComponentDependency componentDependency, MyBean myBean, MyBeanWithDependency myBeanWithDependency){
		this.componentDependency = componentDependency;
		this.myBean = myBean;
		this.myBeanWithDependency = myBeanWithDependency;
	}

	public static void main(String[] args) {
		SpringApplication.run(FundamentosApplication.class, args);
	}
    
	//con este metodo run podemos corre  el codigo de la implementaciones que le pasemos usando su metodo en este caso componentDependency.saludar();
	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub

		componentDependency.saludar();
		myBean.print();
		myBeanWithDependency.printWithDependency();
		
	}

}
