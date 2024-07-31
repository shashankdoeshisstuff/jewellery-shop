import React, { useState } from 'react'
import './SingleProduct.scss'
import { BiRupee } from "react-icons/bi";
import { IoCartOutline } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";

/* addition information icons */
import { TbWeight } from "react-icons/tb";
import { MdCleanHands } from "react-icons/md";
import { IoDiamondOutline } from "react-icons/io5";

const SingleProduct = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [zoom, setZoom] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const productImages = [
    'https://jewelbox.co.in/wp-content/uploads/2023/12/WBR0139-2.jpg',
    'https://jewelbox.co.in/wp-content/uploads/2023/12/WBR0139-1.jpg',
    'https://jewelbox.co.in/wp-content/uploads/2023/12/WBR0139-3.jpg',
  ]

  // For Product image
  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setPosition({ x, y });
  };

  const ProductImages = () => {
    return (
      <div className='product-images'>
        <div
          className='main-image-container'
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setZoom(true)}
          onMouseLeave={() => setZoom(false)}
        >
          <img
            className={`main-image ${zoom ? 'zoom' : ''}`}
            src={productImages[currentImage]}
            alt={`Product ${currentImage}`}
            style={{
              transformOrigin: `${position.x}% ${position.y}%`,
            }}
          />
        </div>
        <div className='images-box'>
          {productImages.map((image, index) => (
            <div className='img-container'>
              <img
                key={index}
                className={`image ${index === currentImage ? 'active' : ''}`}
                src={image}
                alt={`Thumbnail ${index}`}
                onClick={() => setCurrentImage(index)}
              />
            </div>
          ))}
        </div>
      </div>
    )
  }

  const ImageSlider = () => {
    <div className='slider-container'>

    </div>
  }

  return (
    <section className='product-page'>
      <div className='product'>
        <ProductImages />

        <div className='summary'>
          <p><span>SKU: </span>WBR013918YG00</p>
          <h2 className='title'>
            5 Cent Dot and Dash Tennis Bracelet
          </h2>
          <h1 className='price'><BiRupee />92,973</h1>
          <p>Price inclusive of taxes. See the full price breakup</p>
          <div className='color-option'>
            <span>color</span>
            <input type="radio" id="color-rose" name="color" value="rose"/>
            <input type="radio" id="color-white" name="color" value="white"/>
            <input type="radio" id="color-yellow" name="color" value="yellow"/>
          </div>
          <div className='purity'>
            <div className='purity-option'>
            <span>purity</span>
            <input type='radio' id='purity-option' name='purity' value='14kt'/>
            <input type='radio' id='purity-option' name='purity' value='18kt'/>
            </div>
            <div className='type'>
              <span>1</span>
              <span>2</span>
            </div>
          </div>
          <p>Size 6.5 inches (customisable)</p>
          <div className='call-to-action'>
            <button><IoCartOutline /> Add to cart</button>
            <button><TbTruckDelivery /> Buy now</button>
          </div>
        </div>
      </div>

      {/* Additional Information */}
      {/* Product Details */}
      <div className='products-details'>
        <h2>Product Details</h2>
        <div className='grid-box'>
            {/* Weight & Purity */}
          <div className='container'>
            <span className='type'><TbWeight className='icon'/> Weight</span>
            <div className='info'>
              <div className='weight'>
                <span className='sub-info'>Gross(Product) - {'8.800'}</span>
                <span className='sub-info'>NET(Gold) - {'8.400'}</span>
              </div>
            </div>
          </div>
          <div className='purity container'>
            <span className='type'><MdCleanHands className='icon'/> Purity</span>
            <div className='info'>
              <span className='sub-info'>{'18kt'} {'White'} Gold</span>
            </div>
          </div>
          {/* Diamond & Gemstones*/}
          <div className='gemstones container'>
            <div className='type'><IoDiamondOutline className='icon'/> Diamonds & Gemstones</div>
            <div className='info'>
              <div className='hd'>
                <span>Weight {'2.000ct'}</span>
                <span>Diamonds {'40'}</span>
              </div>
              <table className='info'>
                <tr>
                  <th>Size</th>
                  <th>Color</th>
                  <th>Clarity</th>
                  <th>Shape</th>
                  <th>No. of Diamonds</th>
                  <th>Total Weight</th>
                </tr>
                <tr>
                  <td>{'0.01 to 0.07'}</td>
                  <td>{'GH'}</td>
                  <td>{'VS'}</td>
                  <td>{'Round'}</td>
                  <td>{'40'}</td>
                  <td>{'2.000'}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SingleProduct;