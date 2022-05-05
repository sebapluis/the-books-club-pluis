Este proyecto busca simular un ecommerce de libros, donde el usuario pueda tener una vista general del catalogo, como asi poder filtrar los libros por categorias (novelas, tecnologia, historia), entrar en el libro que desee y poder leer una descripcion detalla y finalmente realizar la compra.
Este proyecto se ecuentra en desarrollo, pero hasta el momento cuenta con dos paginas a mostrar (ItemListContainer, ItemDetailContainer) a las cuales a traves de import y export se fueron creando con distintos componentes (ej: contador, navbar).
IitemListContainer cuenta con una funcion getLibro a la que se le pasa un parametro id, dentro de esta funcion tenemos una promesa que devuelve una const con el array que contiene los libros y otra const que a traves del metodo filter los filtra segun su categoria haciendo que en la url al colocar la categoria del libro solo muestre los que coincidan con dicha busqueda (ya que en app.js antes hicimos el route), ademas a traves de un ternario hicimos que si la categoria no coincidia o no se detallaba se muestre el catalogo entero (todo con un setTimeOut que simula el llamado a un servidor).
Luego la const ItemListContainer empieza con un array vacio (useState) otra const la cual igualamos con useParams() para acceder a los parametros de la ruta, luego cambiamos el estado con useEffect ejecutando la funcion getLibros pasandole el paramtro de categoryId, y finalmente el array final lo llenamos con categoryId para que cada vez que cambie de categoria se ejecute.
ItemDetailContainer cuenta con una forma similar con la diferencia que se tiene como parametro el id y luego en la const Item DetailContainer se imprime ItemDetail la cual cuenta con una card de modelo.
La navbar esta linkeada con NavLink y el detalle de las cards con Link para acceder a las rutas correspondientes.
En este proyecto uso bootstrap el cual instale con el metodo npm y font awesome el cual utilice para agregar el carrito en la navbar.
Si bien este proyecto cuenta con estilos no son los definitivos ya que no son responsive ni se ven como tengo en mente que se vean una vez finalizado el proyecto, los cuales ire modificando y arreglando.





# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
