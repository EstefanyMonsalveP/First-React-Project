import imgHeader from '../assets/imgHeader.png'
import cartIcon from '../assets/shoppingCart.png'
import deliveryCar from '../assets/delivery-car.png'

export default function Header(){
     return (
          <>
          <header className="header">
          <img src={imgHeader} className='imgHeader'/>
               <div className='carts'>
                    <img src={deliveryCar} alt='Delivery car' className='delivery-button'/>
                    <img src={cartIcon} alt='Shopping cart' className='cart-button'/>
               </div>
          </header>    
          </>
     )
}
