import { useMemo, useState } from 'react'
import './App.css'

const products = [
  { id: 1, name: 'Sunrise Sourdough', detail: 'Naturally leavened · 650g', price: 8.5, category: 'Bakery', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=700&q=85' },
  { id: 2, name: 'Heirloom Tomatoes', detail: 'Vine-ripened · 500g', price: 5.25, category: 'Produce', image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=700&q=85' },
  { id: 3, name: 'Garden Greens', detail: 'Baby kale & chard · 150g', price: 6.75, category: 'Produce', image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=700&q=85' },
  { id: 4, name: 'Wildflower Honey', detail: 'Local apiary · 340g', price: 12, category: 'Pantry', image: 'https://images.unsplash.com/photo-1471943311424-646960669fbc?auto=format&fit=crop&w=700&q=85' },
  { id: 5, name: 'Farmhouse Eggs', detail: 'Free-range · half dozen', price: 6.5, category: 'Dairy & eggs', image: 'https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&w=700&q=85' },
  { id: 6, name: 'Citrus Grove Box', detail: 'Lemons, oranges & limes', price: 15, category: 'Produce', image: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&w=700&q=85' },
]
const categories = [['All goods', '✦'], ['Produce', '◒'], ['Bakery', '◌'], ['Pantry', '⌁'], ['Dairy & eggs', '◍']]

function App() {
  const [activeCategory, setActiveCategory] = useState('All goods')
  const [cart, setCart] = useState([])
  const [cartOpen, setCartOpen] = useState(false)
  const [notice, setNotice] = useState('')
  const visibleProducts = useMemo(() => activeCategory === 'All goods' ? products : products.filter((product) => product.category === activeCategory), [activeCategory])
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0)
  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0)

  function addToCart(product) {
    setCart((current) => { const found = current.find((item) => item.id === product.id); return found ? current.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item) : [...current, { ...product, quantity: 1 }] })
    setNotice(`${product.name} added to your basket`)
    setTimeout(() => setNotice(''), 2400)
  }
  function updateQuantity(id, change) { setCart((current) => current.map((item) => item.id === id ? { ...item, quantity: item.quantity + change } : item).filter((item) => item.quantity > 0)) }

  return <div className="storefront">
    <div className="announcement">Free delivery on orders over $45 <span>·</span> Delivery across the city, Tue–Sat</div>
    <header className="site-header"><a className="brand" href="#top"><span className="brand-mark">o</span><span>organic<span className="brand-dot">.</span>store</span></a><nav className="main-nav"><a href="#shop">Shop</a><a href="#story">Our story</a><a href="#journal">Journal</a></nav><div className="header-actions"><button className="icon-button" aria-label="Search">⌕</button><button className="basket-button" onClick={() => setCartOpen(true)}>Basket <b>{cartCount}</b></button></div></header>
    <main id="top">
      <section className="hero-section"><div className="hero-copy"><p className="eyebrow">Good food, grown close</p><h1>Small choices.<br /><em>Beautifully</em> grown.</h1><p className="hero-description">Thoughtfully sourced organic goods for everyday rituals, from the people who grow and make them.</p><a className="primary-link" href="#shop">Explore the harvest <span>↘</span></a></div><div className="hero-image"><img src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1400&q=90" alt="A colorful basket of fresh organic produce" /><div className="hero-stamp">GOOD<br /><span>for you</span><br />good for<br />the earth</div><span className="image-credit">THIS WEEK'S HARVEST / 01</span></div></section>
      <section className="shop-section" id="shop"><div className="section-heading"><div><p className="eyebrow">The market</p><h2>Picked for your table</h2></div><p className="section-note">From our growers to your kitchen,<br />with nothing in between.</p></div><div className="category-row">{categories.map(([name, icon]) => <button key={name} className={activeCategory === name ? 'category active' : 'category'} onClick={() => setActiveCategory(name)}><span>{icon}</span>{name}</button>)}</div><div className="product-grid">{visibleProducts.map((product, index) => <article className="product-card" key={product.id}><div className="product-image"><img src={product.image} alt={product.name} /><span className="product-index">0{index + 1}</span><button className="add-button" onClick={() => addToCart(product)} aria-label={`Add ${product.name} to basket`}>+</button></div><div className="product-info"><div><h3>{product.name}</h3><p>{product.detail}</p></div><strong>${product.price.toFixed(2)}</strong></div></article>)}</div></section>
      <section className="manifesto" id="story"><p className="eyebrow">Why organic<span className="brand-dot">.</span>store</p><h2>Good things take<br /><em>time</em> to grow.</h2><div className="manifesto-details"><p>We work with a small circle of farmers, makers, and neighbors who believe better food begins with better relationships.</p><a className="text-link" href="#story">Meet our growers <span>↗</span></a></div></section><footer id="journal"><span>Organic goods, honestly delivered.</span><span>© 2024 Organic Store</span><span>Follow along ↗</span></footer>
    </main>
    {notice && <div className="toast">✓ {notice}</div>}
    {cartOpen && <div className="overlay" onClick={() => setCartOpen(false)}><aside className="cart-drawer" onClick={(event) => event.stopPropagation()}><div className="cart-header"><div><p className="eyebrow">Your order</p><h2>Your basket <span>({cartCount})</span></h2></div><button className="close-button" onClick={() => setCartOpen(false)} aria-label="Close basket">×</button></div>{cart.length === 0 ? <div className="empty-cart"><span>✦</span><p>Your basket is waiting<br />for something good.</p><button onClick={() => setCartOpen(false)}>Keep browsing</button></div> : <><div className="cart-items">{cart.map((item) => <div className="cart-item" key={item.id}><img src={item.image} alt="" /><div><h3>{item.name}</h3><p>${item.price.toFixed(2)}</p><div className="quantity"><button onClick={() => updateQuantity(item.id, -1)} aria-label="Decrease quantity">−</button><span>{item.quantity}</span><button onClick={() => updateQuantity(item.id, 1)} aria-label="Increase quantity">+</button></div></div><strong>${(item.price * item.quantity).toFixed(2)}</strong></div>)}</div><div className="cart-summary"><div><span>Subtotal</span><strong>${cartTotal.toFixed(2)}</strong></div><p>Delivery calculated at checkout</p><button className="checkout-button">Continue to checkout <span>↗</span></button></div></>}</aside></div>}
  </div>
}

export default App