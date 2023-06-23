import React from "react";
import ListProduct from "./ListProduct"

const productData = [
    {
        id: 1,
        name: "Fujifilm, Camera Body Only, Photography",
        image:"https://www.bhphotovideo.com/images/images2500x2500/fujifilm_16756924_x_h2s_mirrorless_camera_1708265.jpg",
        price: "Rp10.000.000"
    },
    {
        id: 2,
        name: "Canon EOS R6 Mirrorless Camera",
        image:"https://www.bhphotovideo.com/images/images2500x2500/canon_eos_r6_mirrorless_digital_1547010.jpg",
        price: "Rp14.000.000"
    },
    {
        id: 3,
        name: "Sony a7R V Mirrorless Camera",
        image:"https://www.bhphotovideo.com/images/images2500x2500/sony_alpha_camera_1731389.jpg",
        price: "Rp17.000.000"
    },
    {
        id: 4,
        name: "Nikon Z8 Mirrorless Camera",
        image:"https://www.bhphotovideo.com/images/images2500x2500/nikon_z8_mirrorless_camera_1765622.jpg",
        price: "Rp20.000.000"
    },
    {
        id: 5,
        name: "Canon ,G7 X Mark II Digital Camera",
        image:"https://www.bhphotovideo.com/images/images2500x2500/canon_1066c001_powershot_g7_x_mark_1223211.jpg",
        price: "Rp6.500.000"
    },
    {
        id: 6,
        name: "Leica Q3 Digital Camera",
        image:"https://www.bhphotovideo.com/images/images2500x2500/leica_19080_q3_digital_camera_1768277.jpg",
        price: "Rp24.000.000"
    }
]



function Product() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-8 px-32">
        {productData.map(productData => (
            <ListProduct 
                key={productData.id}
                name={productData.name}
                image={productData.image}
                price={productData.price}
            />
        ))}
    </div>
  );
}

export default Product;
