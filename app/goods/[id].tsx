import { useRouter } from 'next/router';
import { useEffect, useState } from "react";
import productData from '../../api/product.json';

type Product = {
  id: string;
  name: string;
  poster: string;
  before: string;
  sales: string;
  price: string;
  review: string;
  category: string;
};

const GoodsDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        const selectedProduct = productData.find(item => item.id === id);
        setProduct(selectedProduct || null);
        setLoading(false);
      };
      fetchProduct();
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      asasas
    </div>
  );
};

export default GoodsDetail;
