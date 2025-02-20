import React from "react";
import "bulma/css/bulma.min.css";

const products = [
  { id: 1, name: "Baby Lovely Dogs - Personalized Custom 3D Inflated Effect Phone Case", price: "$38,347", percent: "9.96%", quantity: 1668 },
  { id: 2, name: "Dog Mom Lovely Chibi - Personalized Custom 3D Inflated Effect Tumbler", price: "$47,704", percent: "8.64%", quantity: 1446 },
  { id: 3, name: "I Punch A Bitch For You My Friend - Personalized Custom Pink Marble Mug", price: "$29,689", percent: "6.57%", quantity: 1100 },
  { id: 4, name: "You're Doing a Great Job - Personalized Custom Baby Onesie", price: "$28,289", percent: "6.33%", quantity: 1060 },
  { id: 5, name: "Whiskey Glass Gift Box - Well box it for you", price: "$2,480", percent: "2.97%", quantity: 497 },
  { id: 6, name: "Sisters Are Different Flowers - Personalized Custom Mug", price: "$6,199", percent: "1.52%", quantity: 254 },
  { id: 7, name: "Custom Photo Wings - Personalized Solar Light", price: "$8,328", percent: "1.42%", quantity: 238 },
];

const ProductTable = () => {
  return (
    <div className="button is-flex is-align-items-center" style={{ padding: "0", borderRadius: "6px", overflow: "hidden", }}>
                    <span className="button is-info" style={{ borderRadius: "6px 0 0 6px", backgroundColor: "#f25091", color: "white" }}>
                        Net Revenue
                    </span>
                    <span className="button is-dark" style={{ borderRadius: "0 6px 6px 0", fontWeight: "bold" }}>
                        $410.911
                    </span>
                </div>
  );
};

export default ProductTable;
