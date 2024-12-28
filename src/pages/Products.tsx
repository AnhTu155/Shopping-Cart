import { Button } from "antd";
import React, { useEffect, useState } from "react";

type ProductItem = {
  id: number;
  title: string;
  thumbnailUrl: string;
};

const Products = () => {
  const [products, setProducts] = useState<ProductItem[]>([]);

  const fetchProducts = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/photos");
      if (!res.ok) {
        throw new Error(`${res.status}`);
      }

      const data = await res.json();
      setProducts(data.slice(0, 4));
    } catch (error) {
      console.log("error :", error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="flex flex-nowrap gap-4 overflow-x-auto">
      <strong>Products</strong>
      {products.map((item) => {
        return (
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4 border border-gray-300">
            <div className="card">
              <img
                src={item.thumbnailUrl}
                className="w-[200px] h-[180px]"
                alt={item.title}
              />
              <div className="card-body">
                <h5 className="card-title">{item.id}</h5>
                <p className="card-text">$19.99</p>
                <Button type="primary" href="#" className="mt-[5px]">
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        );
      })}

      {/* <div className="row flex">
        <div className="col-lg-3 col-md-4 col-sm-6 mb-4 border border-gray-300">
          <div className="card">
            <img
              src="/images/product1.jpg"
              className="w-[200px] h-[180px]"
              alt="Product 1"
            />
            <div className="card-body">
              <h5 className="card-title">Product 1</h5>
              <p className="card-text">$19.99</p>
              <Button type="primary" href="#" className="mt-[5px]">
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 mb-4 border border-gray-300">
          <div className="card">
            <img
              src="images/product2.jpg"
              className="w-[200px] h-[180px]"
              alt="Product 2"
            />
            <div className="card-body">
              <h5 className="card-title">Product 2</h5>
              <p className="card-text">$24.99</p>
              <Button type="primary" href="#" className="mt-[5px]">
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 mb-4 border border-gray-300">
          <div className="card">
            <img
              src="images/product3.jpg"
              className="w-[200px] h-[180px]"
              alt="Product 3"
            />
            <div className="card-body">
              <h5 className="card-title">Product 3</h5>
              <p className="card-text">$15.99</p>
              <Button type="primary" href="#" className="mt-[5px]">
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 mb-4 border border-gray-300">
          <div className="card">
            <img
              src="images/product4.jpg"
              className="w-[200px] h-[180px]"
              alt="Product 3"
            />
            <div className="card-body">
              <h5 className="card-title">Product 4</h5>
              <p className="card-text">$24.99</p>
              <Button type="primary" href="#" className="mt-[5px]">
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};
export default Products;
