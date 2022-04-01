import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../api/product";
import { PRODUCT_TYPE } from "./ProductList";

const ProductDetail = () => {
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState<PRODUCT_TYPE>();

  useEffect(() => {
    handleGetProductDetail();
  }, []);

  const handleGetProductDetail = async () => {
    const { data } = await getProduct(id);
    setProductDetail(data);
  };

  return (
    <div>
      ProductDetail
      <p>Id: {productDetail?.id}</p>
      <p>Name: {productDetail?.name}</p>
      <p>Price: {productDetail?.price}</p>
    </div>
  );
};

export default ProductDetail;
