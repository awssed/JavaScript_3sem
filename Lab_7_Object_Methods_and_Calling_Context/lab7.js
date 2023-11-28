let products = {
    shoes: {
      boots: [
        {
          itemNumber: "001",
          size: 42,
          color: "black",
          price: 1999
        },
        {
          itemNumber: "002",
          size: 38,
          color: "brown",
          price: 1799
        }
      ],
      sneakers: [
        {
          itemNumber: "101",
          size: 40,
          color: "blue",
          price: 2499
        },
        {
          itemNumber: "102",
          size: 37,
          color: "red",
          price: 2299
        }
      ],
      sandals: [
        {
          itemNumber: "201",
          size: 39,
          color: "white",
          price: 1499
        },
        {
          itemNumber: "202",
          size: 36,
          color: "black",
          price: 1399
        }
      ]
    },
  };
  products.shoes[Symbol.iterator]=function*()
  {
    const categories = Object.keys(this);
  for (let category of categories) {
      yield this[category];
    }
  }
//   products.shoes[Symbol.iterator] = function() {
//     let categories=Object.keys(this);
//     let i = 0;
//     let last = Object.keys(this).length;
//     let context=this;

//     return {
//         current: context[categories[0]],
//         last,
//         next() {
//             if (i < last) {
//                 return { done: false, value: context[categories[i++]] }
//             } else {
//                 return { done: true }
//             }
//         }
//     };
// };
  function filterShoes(products,minPrice, maxPrice, size, color)
  {
    let filteredProducts=[];

    for(let category of products.shoes)
    {
        for(let product of category)
        {
            if(product.price>=minPrice &&
                product.price<=maxPrice&&
                product.size==size&&
                product.color==color)
                {
                    filteredProducts.push(product);
                }
        }
    }
    return filteredProducts;
  }
let filteredShoeItems = filterShoes(products, 1000, 2000, 39, 'white');
console.log(filteredShoeItems);