# Qué son los componentes de clase


Un componente de clase es aquél que está definido con una clase de JavaScript. Esta clase debe tener dos particularidades:

Primero, debe ser una clase de ES6 de JavaScript que herede de React.Component
Debe poder implementar un método ```render()``` que retorne los elementos de React para la interfaz de dicho componente.
Históricamente, un componente de clase se diferencía de un componente funcional en dos principales cosas: La capacidad de administrar un estado propio del componente y la exposición de métodos que pueden ejecutar funcionalidad personalizada en distintas etapas del ciclo de vida de un componente.

Sin embargo, con la introducción de hooks en React 16, los componentes funcionales homologaron la funcionalidad de los componentes de clase en que ahora también pueden guardar un estado y ejecutar métodos del ciclo de vida de un componente.

En ese sentido, gran parte de la comunidad de desarrolladores que usan React, recomiendan usar componentes funcionales y hooks, en lugar de componentes de clase. Al mismo tiempo, el equipo que mantiene y desarrolla React, recomienda que no se re escriban componentes de clase en componentes funcionales a menos que sea necesario.

Esto quiere decir que en el futuro, React soportará ambas formas de declarar un método, con clases y con funciones. Esto significa que para un desarrollador nuevo de React es necesario conocer ambas formas de declarar componentes ya que es probable que en su trabajo día a día se encuentre con componentes de clase y componentes funcionales como parte de una misma aplicación.

Por último, cabe mencionar que algunos conceptos de React son más claros cuando se observan a través de la definición en un componente de clase, particularmente los métodos del ciclo de vida de un componente.