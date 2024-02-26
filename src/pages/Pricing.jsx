// Uses the same styles as Product
import PropTypes from 'prop-types'
import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

const Pricing = ({title, subheading, content}) => {
  return (
    <main className={styles.product}>
    <PageNav />
      <section>
        <div>
          <h2>
           {title}
            <br />
           {subheading}
          </h2>
          <p>
           {content}
          </p>
        </div>
        <img src="img-2.jpg" alt="overview of a large city with skyscrapers" className='product-img'/>
      </section>
    </main>
  );
}

Pricing.proptypes = {
  title: PropTypes.string,
  subheading: PropTypes.string,
  content: PropTypes.string,
}

Pricing.defaultProps = {
  title:  'Simple pricing',
  subheading: ' Just $9/month.',
  content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae vel labore mollitia iusto. Recusandae quos provident, laboriosam fugit voluptatem iste.'
}


export default Pricing;
