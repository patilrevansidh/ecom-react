import { withList } from '../../../common/components/HOC/withList';
import { ProductCard } from '../ProductCard/ProductCard';
import { DummyProductCard } from '../ProductCard/DummyProductCard';



export default withList(ProductCard, DummyProductCard)