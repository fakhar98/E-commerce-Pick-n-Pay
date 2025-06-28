import React, { useState } from 'react';

const categories = [
  'All',
  'Electronics',
  'Fashion',
  'Home & Kitchen',
  'Books',
  'Toys',
  'Sports',
  'Beauty',
  'Grocery',
];

const products = [
  // Electronics
  { name: 'Logitech G G535', img: 'https://m.media-amazon.com/images/I/813Nn+eQrLL._AC_SX466_.jpg', link: 'https://www.amazon.com/dp/B0D4R2MDDY', category: 'Electronics' },
  { name: 'Smart Watch', img: 'https://m.media-amazon.com/images/I/61lrpyxMNQL._AC_SL1500_.jpg', link: 'https://www.amazon.com/dp/B0F5WXPND3', category: 'Electronics' },
  { name: 'Sony AirPods', img: 'https://m.media-amazon.com/images/I/41H-Lb8rA1L._AC_SX466_.jpg', link: 'https://www.amazon.com/dp/B07T81554H', category: 'Electronics' },
  { name: 'Canon EOS Rebel T7', img: 'https://m.media-amazon.com/images/I/61BKYlNqH6L.__AC_SX300_SY300_QL70_FMwebp_.jpg', link: 'https://www.amazon.com/dp/B07C2Z21X5', category: 'Electronics' },
  { name: 'Samsung Galaxy Tab', img: 'https://m.media-amazon.com/images/I/61krikJxTmL.__AC_SY300_SX300_QL70_FMwebp_.jpg', link: 'https://www.amazon.com/dp/B09N41RC6L', category: 'Electronics' },
  // Fashion
  { name: 'Men T-Shirt', img: 'https://m.media-amazon.com/images/I/71pWzhdJNwL._AC_UL1500_.jpg', link: 'https://www.amazon.com/dp/B07NQGJZTW', category: 'Fashion' },
  { name: 'Women Dress', img: 'https://m.media-amazon.com/images/I/6122m5Njf2L._AC_SY445_.jpg', link: 'https://www.amazon.com/miduo-Fashion-Sleeveless-Printed-Multicoloured/dp/B0DW88L4V7/ref=sr_1_7?crid=39JOQNYS0IJJ7&dib=eyJ2IjoiMSJ9.2NGy_SS20agLj6uBbLyo13kdzeFCzPTootfk6HIYjctJXM2ItAp3MW2CywYKrCe7ebmVKzzZ4iGTmlAeB7luQuZ5RY0EUnO0RicbNxmpV1x38De6wBrh6KyPKENqMWCwjFV0Tfv-Kt5V6VRYUpQZC2EcPj3_HazN3MD2fFCb6Omlxt4hT8R-shqCiPKAJ6De3OG_5hIc3YS9okD5iGMdkxUfArA25U18VskuRrc8yX1VpDLiaLnCYJX4TGKxH_xlfjDeqiEZ9gGROi1VmVDDqFRFczFhWoWmGvE1VpHImnY.cek7Sv1IAFWsR2OfxxWKVerbQPV6iaIofZyEDtcxL5Q&dib_tag=se&keywords=dress&qid=1751104579&sprefix=dre%2Caps%2C538&sr=8-7', category: 'Fashion' },
  { name: 'Sneakers', img: 'https://m.media-amazon.com/images/I/61vdsvW9jAL._AC_SY395_.jpg', link: 'https://www.amazon.com/Elevator-Camouflage-Footwear-Sneakers-Climbing/dp/B0DGDTDK61/ref=sr_1_1_sspa?dib=eyJ2IjoiMSJ9.9OxrB53sS5hyu_aZDS5iCo6wS2dL543R3qnV7RItwAFJpxi984EJHdfLYB6WYSbweBm2FRX5-xpsyBoEHew5TfrX1lmVeK9svbdDV5GU7Ixo5tY_UJFX2sT_M376nnf2iDLaiWe9jH1c2VAvePKZFi3ON54LXcsVfR6kgWSQjWneOBsMlaQ8WJBNZ8PEaXYTJ2N2uKVstLq5S1MsYsVBLsZc8jqNBqHl7qoAI1-hdJkr0QeF1wmw3juPjlwP4Y4mGDKDvV2Q5PjCTSrS9rfwVW_5jMB1UGb6cl8wcXt-4B0.yGbZzpDFZsjEgRcpkFL3FgsrBw-FWx7zpp72DyrrMcQ&dib_tag=se&keywords=Sneakers&qid=1751104676&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&psc=1', category: 'Fashion' },
  // Home & Kitchen
  { name: 'Nonstick Cookware Set', img: 'https://m.media-amazon.com/images/I/71Ypc1inZTL._AC_SX679_.jpg', link: 'https://www.amazon.com/dp/B0B2K47S1T', category: 'Home & Kitchen' },
  { name: 'Espresso Machine', img: 'https://m.media-amazon.com/images/I/81vpsIs58WL._AC_SL1500_.jpg', link: 'https://www.amazon.com/dp/B07V3GXZ4T', category: 'Home & Kitchen' },
  { name: 'Vacuum Cleaner', img: 'https://m.media-amazon.com/images/I/81NPNL-JFzL._AC_SX425_.jpg', link: 'https://www.amazon.com/Amazon-Basics-4-Gallon-Stainless-Vacuum/dp/B09T3W8VSY/ref=sr_1_1_ffob_sspa?dib=eyJ2IjoiMSJ9.g6PuRrO6CEu3NuSh5kTUjJgGluABV1ubiaApkkjQjzrcCNSBPDb6AHQXA4ao6TUd3sZs0uomAa69YVDRL5XVwf49gbPlG6FuTFaWBpF-xHsBFYH98aWKhpCC1kbQBDd-OMvYYVWN5jsbV7F5MFiFbMUwm5x_CgpGCuJR0fK4wYx6F2tLHlmv7kvqsFa4gmn5tZhz9jFv5c2r_ngSQm2_qYU1KHhP1myeyxZZvW1anhY.IgEidSX5iV6_Isd4ymF82GIZar3h4lq_iuwWUveoBAI&dib_tag=se&keywords=vacuum%2Bcleaner&qid=1751104779&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1', category: 'Home & Kitchen' },
  // Books
  { name: 'The Silent Patient', img: 'https://m.media-amazon.com/images/I/91lslnZ-btL._SL1500_.jpg', link: 'https://www.amazon.com/dp/1250301696', category: 'Books' },
  { name: 'Atomic Habits', img: 'https://m.media-amazon.com/images/I/91bYsX41DVL._AC_SL1500_.jpg', link: 'https://www.amazon.com/dp/0735211299', category: 'Books' },
  { name: 'The Alchemist', img: 'https://m.media-amazon.com/images/I/71aFt4+OTOL._AC_SL1500_.jpg', link: 'https://www.amazon.com/dp/0061122416', category: 'Books' },
  // Toys
  { name: 'Lego Classic Bricks', img: 'https://m.media-amazon.com/images/I/81sXyDjMOPL.__AC_SX300_SY300_QL70_FMwebp_.jpg', link: 'https://www.amazon.com/dp/B00NHQF6MG', category: 'Toys' },
  { name: 'Nerf Blaster', img: 'https://m.media-amazon.com/images/I/81ikyJypjOL._AC_SX425_.jpg', link: 'https://www.amazon.com/NERF-Commander-Official-Rotating-Attachment/dp/B083QZLSXS/ref=sr_1_1?crid=22Z3RO4N88MOG&dib=eyJ2IjoiMSJ9.Ka0h79y6IEZaL8B2jBKRT38xylth4uv8lAzlhdO57-j7b_xxqZUok3wtvaBIklUW-5AAtMLEfLlKZGlS7Y0GtWZz_FFXcCnFrkgGClPBva2O5pVDFPm14HaXjM6pJ-lKu9-DDWeCH4wQ_STeiyTt8QMNa9dfAtK2A1tL7W0GvYdcIuIMvJjBZnQqCqEI5iVETJv_3kWcbrIkMmqZarXpzS2roikZPti99tOc3zeQpJu2s8w1lsxzpl69E6xVymnkvCjOc0JvTSgXQREaDsnT60EuIb_amJ4u9uA1qQ5S7_8.TQY3vUnn3loQsXPyjfyMa_TCVgHxzhgLJyM4KqgKxFw&dib_tag=se&keywords=Nerf%2BBlaster&qid=1751104846&sprefix=nerf%2Bblaster%2Caps%2C330&sr=8-1&th=1', category: 'Toys' },
  { name: 'Barbie Doll', img: 'https://m.media-amazon.com/images/I/71g0e59q87L._AC_SL1500_.jpg', link: 'https://www.amazon.com/Barbie-Fashionistas-Wearing-Sequined-Necklace/dp/B0D7PTDQGK/ref=sr_1_1?dib=eyJ2IjoiMSJ9.8pTbJEh_bHAUF8tFsQzHJBo_rMRWhD4Foud7g24MQHn2xv3Yvsdcstiy_ir2xizGGAVnsbWNOP2lZ5zKIqnPXs1GjGFdP7E52H5PI2Fcb9qfCM8-C25tDXVLQXWiH7mD3DNsIRclxvA6JHqP1AI29PAZGITJqLBcJAza-TRmtUbOdp4sw563pGbuuRZgFesnEo0vERSbrn729wHQWX0NePgmROD13hn9eHxFge2aBEzLOyCR0an5NRKPVRyEZbj0rM1oE5vJ0b_-4u0fK5Muc7Y7CrzN-LdTfqN4KgmJjbI.hZuQk9aX2wxnb1tFn2GfoE9aiAjPJatSGJRPiHpmfAA&dib_tag=se&keywords=Barbie+Doll&qid=1751105094&sr=8-1', category: 'Toys' },
  // Sports
  { name: 'Football', img: 'https://m.media-amazon.com/images/I/51Zd5MYt-CL.__AC_SX300_SY300_QL70_FMwebp_.jpg', link: 'https://www.amazon.com/adidas-Tango-Glider-White-Black/dp/B01CL055B0/ref=sr_1_8?crid=2ELX0NPYCKGPT&dib=eyJ2IjoiMSJ9.fMvEXwDDobQKyHb8bN2vIZkzxd98uh3VhaGAp1ABA1ENNRLnEENramk__JuKYaD2AFs5WhS3LBHft55U6QnPNf-6s3i0hSTVEID8k4VefjEKdpRWairDsuSV5gaJKfyGybwhFnLsVJpxg5Dg_jB3_5Xt0y498ViEoQ25OJNl0CIBnDLPuloC5DYqLvhP1SUdwUi5cseNPUuw7pXL_CINEP5W4IyMcxTMq9gWw9gKFdkfqMFWIdgasprV5BCYdaqKgbSSMU81JP1Bdxp1ACf-RqZPrxcN0h4gftqKHSbeleE.kEJGpXvLxfJ__Z3Q5uwdfjiTWKy0EV_y2bxbb5zlH6I&dib_tag=se&keywords=Soccer%2Bball&qid=1751105287&sprefix=soccer%2Bbal%2Caps%2C324&sr=8-8&th=1', category: 'Sports' },
  { name: 'Yoga Mat', img: 'https://m.media-amazon.com/images/I/71U3oP3IqsL._AC_SX425_.jpg', link: 'https://www.amazon.com/AmazonBasics-Extra-Thick-Exercise-Carrying/dp/B01LP0UX9G/ref=sr_1_1_ffob_sspa?crid=2FLU55RQPAIJA&dib=eyJ2IjoiMSJ9.xaQn5LivaADn7cc6PxzQx60zyuSoUKtzZMdJMKHaxh5_Xhn6hMQRlo93TLWXVdhGWOvFHHM4cvmeSWYbA0VDBtaMHVRe-lci-d382abGUrNmg44_2frCuhrNS_CPk8wtfvtR-Nw4EBYFdYElsbj8WJvyvyzTXx-8dzxNSyCkzmwPYUBHT9wWDlFMlRfFKelziT2VpAXFywqNlLR2taIcgVx3xwZWmegNkXHWAPtGsOlT8XKWD8ab_36kaTb26B1_DRWUtJkqzYpPE9sA5aVWABzKha1kRdGpqdvlenvFAWE.Po6-JBtFqXUN-Ff3jBIvbRj2YkuDBOGHdcIOqNlIlaU&dib_tag=se&keywords=Yoga%2BMat&qid=1751105344&sprefix=yoga%2Bma%2Caps%2C312&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1', category: 'Sports' },
  // Beauty
  { name: 'Face Cream', img: 'https://m.media-amazon.com/images/I/71etIFqlwCL._SY355_.jpg', link: 'https://www.amazon.com/CeraVe-Moisturizing-Lotion-Hyaluronic-Fragrance/dp/B07RK4HST7/ref=sr_1_1_sspa?dib=eyJ2IjoiMSJ9.Lq7AGx6_PbhboGa4jPqnGvAvygBRya0PjlLWvygt94xzmQn1KVOJrmhkvpTNk4GQ4AYwAQSxtvUAcPPtTQ0P4Hk0iX4xVA2_ULe-itJv9CkDDiuBfWMQBLMRt70dhuEPeS-Bs7bg07c2IkYQ4yRc1EFR4eoxdAHQdYRxfxbDZpitIJqEb_bwHDVl-OJJl4bOZoccKNpFA6iN96JQ-Dn_2_I5YEY-PRtYOyXidMoOe7W-rxAgSqveeYctGSHd0fzYbHp1nwhUqLJf195k5NB8HQYxbt5owJk3C6maeLC-IcQ.sZVckFllGVoull9OD10LAhaBKCvMnvQ__KOuWesfNKk&dib_tag=se&keywords=face%2Bcream&qid=1751106567&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1', category: 'Beauty' },
  { name: 'Lipstick', img: 'https://m.media-amazon.com/images/I/310wtfSJVjL._SX300_SY300_QL70_FMwebp_.jpg', link: 'https://www.amazon.com/LOreal-Paris-Ingredients-Moisturized-Parisienne/dp/B085JD7RF6/ref=sr_1_1_sspa?dib=eyJ2IjoiMSJ9.E8-tYQGeYwgFI-Qx7jRjlYGVzTLPbrpoc_NCY4yu4hHFBm9g3GMkHbWRY7-0evxZQizGnzXpOsw5IIU1_OKkq_W5dUnkB_14ZS-dB4nCKdjsv_Gn5V0jvo_NR9t1VH3TBjFch6qVJlMgGw4lx9j2NCpYhwCLYhaKP9V81Z330M6KataIemdpPfU5uUgzzifKZehQcdVj8QOU1wbHTo4hXK9xBZHKI9Zu5DnRtcwkpPU6-ENbGl92x4AGodgDiCXIWq9-ElP5qN_jvfH2utxfeqzX8GpNJqpVQFar_2HRZcw.9f5_mx5vIUxuvtZXJiuLBTjO3h3hflC0vuSzzySNbsk&dib_tag=se&keywords=lipstick&qid=1751106675&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1', category: 'Beauty' },
  // Grocery
  { name: 'Organic Honey', img: 'https://m.media-amazon.com/images/I/61ciqR9lzhL._SY445_.jpg', link: 'https://www.amazon.com/dp/Bhttps://www.amazon.com/ONEROOT-Organic-Wildflower-Honey-Creamed/dp/B017GERWD0/ref=sr_1_1?dib=eyJ2IjoiMSJ9.La0KZnvZBF2SAlQYnvrBBAfFYGIgb6WyoXAk7gAa69w6XBASeZ2TYaGmft6dH18DzcyOONtxtxh_o8XJFqu6hYp0WDG1bjUi9QcwPRJNSDaXVO2Q7R09tA931vTPlrY1wZIaZv2PM2N3ASMbbEG3qCVG4MDxjJ78AGLb3henwPeyU-iuSlhTlYF2Dr6dEppy4qiDPqVeJA5aN9YPuPMJyfxy2BrWmh7vkwmTLgfVTP3HULdmddmPZW7GaU9AHf5xQjhCSGNxRhpNHNi6YOSNJeJzsGGpBtj_-PC3vAnm2E8.OSColuFWMyVJ5lV972kJzLJvS8l6kC73K2tEPqtJMic&dib_tag=se&keywords=Organic+Honey&qid=1751106768&sr=8-107QKQWQWQ', category: 'Grocery' },
  { name: 'Almonds', img: 'https://m.media-amazon.com/images/I/41n+eIKITqL._SY300_SX300_.jpg', link: 'https://www.amazon.com/yupik-blanched-whole-almonds-nuts/dp/B07QY93VXD/ref=sr_1_1?dib=eyJ2IjoiMSJ9.qOT15qlLfMPJ08LC4BwljZ5t4NS8aqDL3hbG1Aqoc32xGhHz_VwnQ3cHrJNxjyuE043NO-K5aw1pixWx6zMJE-y64GPRPOy57FwhrCIMs0amF2hfaTw8ON5S9UQDb8WY7J49AwQ6fvsKh-yz_Sj46eYhBEjMxtneec9ELZVM27HFseWbTyFecIiCFxpY6sUMRaRJ0P7TkBKUd1pIMkX40R0WJ50wmsj_YCoAP28mBpPwNR61fpYCjZoTHdDgPs9R8FlG1kBdcgd6D5hWsoWEn1yDi73Ix0nf_EFCZQktCiI.rYe7zT85mVGf9MudF1q-C4MN_bszUSKSFmSfmCq69os&dib_tag=se&keywords=Almond&qid=1751106833&sr=8-1&th=1', category: 'Grocery' },
];

const Products = ({ addToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Products</h2>
      <div className="d-flex flex-wrap gap-2 mb-4">
        {categories.map(cat => (
          <button
            key={cat}
            className={`btn btn${selectedCategory === cat ? '' : '-outline'}-primary`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="row">
        {filteredProducts.map(product => (
          <div className="col-12 col-md-4 col-lg-3 mb-4" key={product.name}>
            <div className="card h-100 shadow-sm">
              <img src={product.img} className="card-img-top" alt={product.name} style={{height: '180px', objectFit: 'contain'}} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.name}</h5>
                <div className="d-flex flex-column gap-2 mt-auto">
                  <a href={product.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">View on Amazon</a>
                  <button className="btn btn-success" onClick={() => addToCart(product)}>Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
