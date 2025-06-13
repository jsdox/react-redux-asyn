import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 1,
    price: 6,
    title: 'My first prod page',
    description: 'My first prod page description.'
  },
  {
    id: 2,
    price: 5,
    title: 'My second prod page',
    description: 'My second prod page description.'
  }
];
const Products = (props) => {

  const renderProducts = () => {
    return (
      DUMMY_PRODUCTS.map((product) =>  (      
        <ProductItem
          key={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
          id={product.id}
        />
    ))
    );
  }
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>     
        {renderProducts()}         
      </ul>
    </section>
  );
};

export default Products;
