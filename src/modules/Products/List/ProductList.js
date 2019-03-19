import { withList } from '../../../common/components/hoc/withList';
import { ProductCard } from '../ProductCard/ProductCard';
import { DummyProductCard } from '../ProductCard/DummyProductCard';



export default withList(ProductCard, DummyProductCard)