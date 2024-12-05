import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    price: 6,
    title: 'My first book',
    description: 'My first book description.'
  },
  {
    id: 'p2',
    price: 5,
    title: 'My second book',
    description: 'My second book description.'
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
