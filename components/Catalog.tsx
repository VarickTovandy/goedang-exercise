import React from "react";

interface Product {
  id: number;
  name: string;
}

interface Category {
  name: string;
  products: Product[];
}

const Catalog: React.FC = () => {
  const categories: Category[] = [
    {
      name: "Category 1",
      products: [
        // { id: 1, name: "Product 1" },
        // { id: 2, name: "Product 2" },
        // { id: 3, name: "Product 3" },
      ],
    },
    {
      name: "Category 2",
      products: [
        // { id: 4, name: "Product 4" },
        // { id: 5, name: "Product 5" },
      ],
    },
    // Add more categories and products as needed
  ];

  return (
    <div className="flex flex-row gap-x-6 mt-6">
      {categories.map((category, index) => (
        <div key={index}>
          {/* Category Box */}
          <div className="px-4 py-2 items-center rounded-md mb-4 border-gray-200 border-solid border-4 text-black">
            <h2 className="text-xl font-bold">{category.name}</h2>
            <ul>
              {category.products.map((product) => (
                <li key={product.id} className="py-2">
                  {/* Product Box */}
                  <div className="bg-gray-300 p-2 rounded-md">
                    {product.name}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Catalog;
