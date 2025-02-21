import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";

const productsData = [
  {
    rank: 1,
    store: "Pawsionate",
    title: "Baby Lovely Dogs - Personalized Custom 3D Inflated Effect Phone Case",
    img: "https://png.pngtree.com/png-vector/20240728/ourlarge/pngtree-printed-colorful-hard-back-case-cover-for-apple-iphone-11-pro-png-image_13267487.png",
    netRevenue: "$38,347",
    percent: "9.96%",
    quantity: 1668,
    facebook: "85.13%",
    google: "3.06%",
    tiktok: "0.84%",
    klaviyo: "3.66%",
    others: "7.31%",
  },
  {
    rank: 2,
    store: "Wrappiness",
    title: "Dog Mom Lovely Chibi - Personalized Custom 3D Inflated Effect Tumbler",
    img: "https://png.pngtree.com/png-clipart/20221022/original/pngtree-smiling-mug-png-image_8711543.png",
    netRevenue: "$47,704",
    percent: "8.64%",
    quantity: 1446,
    facebook: "77.25%",
    google: "7.61%",
    tiktok: "4.56%",
    klaviyo: "2.9%",
    others: "7.68%",
  },
];

export default function ProductTable() {
  return (
    <div className="container mt-3">
      <table className="table is-striped is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th>#</th>
            <th>Store</th>
            <th>Product Title</th>
            <th>
              Net Revenue <FontAwesomeIcon icon={faSort} />
            </th>
            <th>Percent</th>
            <th>Quantity</th>
            <th>Facebook</th>
            <th>Google</th>
            <th>TikTok</th>
            <th>Klaviyo</th>
            <th>Others</th>
          </tr>
        </thead>
        <tbody>
          {productsData.map((product) => (
            <tr key={product.rank}>
              <td>{product.rank}</td>
              <td>{product.store}</td>
              <td>
                <div className="is-flex is-align-items-center">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="image is-32x32 mr-2"
                  />
                  <a href="#" className="has-text-link">
                    {product.title}
                  </a>
                </div>
              </td>
              <td>{product.netRevenue}</td>
              <td>{product.percent}</td>
              <td>{product.quantity}</td>
              <td className="has-text-success">{product.facebook}</td>
              <td className="has-text-info">{product.google}</td>
              <td className="has-text-danger">{product.tiktok}</td>
              <td className="has-text-warning">{product.klaviyo}</td>
              <td className="has-text-grey">{product.others}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
