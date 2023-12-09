# Challenge Integrador Funkoshop

![funkoshop-g10-23568 onrender com_home (1)](https://github.com/grupo10-23568/challenge-integrador-funkoshop/assets/146775217/11260e43-8080-49e7-af43-bbd2e011d033)

## Proyecto Final Codo a Codo 2023

El objetivo de este proyecto es contar con un espacio autodidacta y autogestionado que le permita al estudiante consolidar el proceso de aprendizaje de los temas vistos a lo largo de la cursada a través de la práctica con un fin común y particular.
El proyecto reviste carácter obligatorio y se realizará de forma grupal.
Dentro del alcance de este proyecto se fomenta la interacción y ayuda entre pares como focos de consulta a fin de potenciarse como equipo durante todo su desarrollo

## Consigna

El sitio consta de 2 partes fundamentales. En primer lugar, la tienda en línea donde los clientes podrán ver todos los productos disponibles, conocer su precio, stock y características. Además, podrán registrarse para agregar sus productos favoritos al carrito y ver el subtotal que deben pagar. En segundo lugar, se necesita contar con las vistas necesarias para administrar la tienda (admin o backoffice), ver el listado de productos cargados y su stock, poder agregar, editar y eliminar items y sus propiedades, y que esos cambios se reflejen en tiempo real de cara al cliente.

Para lograr este objetivo, deberás utilizar las siguientes

## 🖥️🔨Tecnologías y Herramientas

- FIGMA
- HTML
- CSS (Bootstrap es opcional)
- GIT y GITHUB
- Node JS + Express JS
- NPM
- Arquitectura MVC
- Template Engines
- MySQL y Gestores de BBDD
- Sequelize

## 🧑‍💻Metodología de trabajo en equipo
### 1º etapa:
Reuniones para coordinación de estructura y parámetros comunes del sitio basados en cada Mission.

### 2º etapa:
Coordinación por sorteo de las secciones a realizar y aporte conjunto a modificaciones y sugerencias sobre todas las tareas en general.

### 3º etapa:
Desarrollo de las partes en código y subida al repositorio para testeo del grupo y finalmente, integración a la rama raiz.

Nuestro equipo siguió un proceso de desarrollo estructurado. En reuniones semanales, discutimos misiones del coordinador y avanzamos con lo aprendido en clase e investigando la documentación en conjunto e individualmente. Debatimos y acordamos código y parámetros comunes para mantener consistencia en nombres, clases, etiquetas, ids y estructura del código, ajustándolo a las especificaciones sugeridas y solicitadas en las Missions. Cada miembro escribió su parte de código y verificó el proyecto localmente, realizando pull requests y merges al repositorio principal después de confirmar que estaba funcionando correctamente. Este enfoque, creemos que nos llevó a un desarrollo efectivo, ordenado y funcional del proyecto.

## ✍️Grupo de trabajo

- Brenda Selene Argañaraz
- Paula Caviglia
- Andrea Vanina Luque
- Vicence Saa
- Federico Ariel Rosciano Engel
- Silvia Veronelli

## 👁️Estructura del sitio Full Stack:
```plaintext

/proyecto
├── index.js
├── /config
│   └── conn.js (conexión a base de datos)
├── /controllers
│   ├── /adminControllers.js
│   ├── /authControllers.js
│   ├── /cartControllers.js
│   ├── /mainControllers.js
│   └── /shopControllers.js
├── /middlewares
│   ├── /login.js
│   ├── /uploadFiles.js
│   └── /validator.js
├── /models
│   ├── /categoryModel.js
│   ├── /itemModel.js
│   └── /licenceModel.js
├── /routes
│   ├── /adminRoutes.js
│   ├── /authRoutes.js
│   ├── /mainRoutes.js
│   └── /shopRoutes.js
├── /services
│   ├── /cartServices.js
│   ├── /categoryServices.js
│   ├── /itemServices.js
│   └── /licenceServices.js
├── /utils
│   └── /session.js
├── /views
│   ├── /contact.ejs
│   ├── /home.ejs
│   ├── /admin
│   │   ├── /admin.ejs
│   │   ├── /create.ejs
│   │   └── /edit.ejs
│   ├── /auth
│   │   ├── /login.ejs
│   │   └── /register.ejs
│   ├── /partials
│   │   ├── /card.ejs
│   │   ├── /footer.ejs
│   │   ├── /header.ejs
│   │   └── /sliders.ejs
│   └── /shop
│       ├── /cart.ejs
│       ├── /item.ejs
│       └── /shop.ejs 
```
