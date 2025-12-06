import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

export default function Stopchop() {
    const foodItems = [
        { id: 1, image: '/images/Rectangle 6.jpg',},
        // { id: 2, image: 'public/images/Rectangle 7.jpg', name: 'Pizza',},
        // { id: 3, image: 'public/images/Rectangle 8.jpg', name: 'Pasta',},
        // { id: 4, image: 'public/images/Rectangle 13.jpg', name: 'Salad',},
    ];
    
    return (
        <div className='header_cnt'>
            <div className='hero_wrapper'>
                
                <div className='promo'>
                    <span>🔥 Get 10% Off for first order</span>
                    <h1>Many <br /> Restaurants</h1>
                    <p>and offers in one place</p>
                    <p>
                        Indulge in a culinary journey with our exquisite catering <br /> services, to Elevate your event with our impeccable catering, <br />
                        where creating unforgettable moments.
                    </p>

                    <div className='controls'>
                        <Link to="">
                            <button className='span2'>Select food preferences <b>→</b></button>
                        </Link>
                        <input type="text" placeholder='Select Food Preferences' />
                    </div>
                            
                    <div className='app_cnt'>
                        <Link to="">
                            <button>Google play</button>
                        </Link>
                        <Link to="">
                            <button>App store</button>
                        </Link>
                        <p><b>+145 </b>Restaurants and bars <br /> <span>nearby you</span></p>
                    </div>
                </div>

                <div className='items_wrap'>
                    {foodItems.map(item => (
                        <div key={item.id} className='food_item_container'>
                            <img src={item.image} alt={item.name} className='food_item_image' />
                        </div>
                    ))}
                </div>
            </div>



            <section className="gallery_section">
                <h2>What would you like to eat?</h2>
                <div className="gallery_grid">
                    {[
                        { id: 'g1', src: '/images/pix1.jpg', name: 'Chowmein', price: 5.99 },
                        { id: 'g2', src: '/images/pix2.jpg', name: 'Mung bean thread noodles', price: 6.5 },
                        { id: 'g3', src: '/images/pix3.jpg', name: 'Cheesy paneer paprika', price: 7.25 },
                        { id: 'g4', src: '/images/pix4.jpg', name: 'Cajun Chicken Burger', price: 8.5 },
                    ].map(img => (
                        <div className="gallery_item" key={img.id}>
                            <img className="gallery_img" src={img.src} alt={img.name} />
                            <div className="gallery_caption">
                                <div className="caption_name">{img.name}</div>
                                <div className="caption_price">${img.price.toFixed(2)}</div>
                            </div>
                            <button className="cart_button" type="button">Add to cart</button>
                        </div>
                    ))}
                </div>
            </section>

            <section className="section2">
                {/* <div className="section2__overlay" /> */}
                <div className="section2__content">
                    <h2>Delivery</h2>
                    <h1>The catering With</h1>
                    <h2>the royal touch</h2>
                    <p>Experience a gastronomic adventure like no other with our bespoke catering, showcasing the perfect <br />
                       harmony of taste, presentation, and ambiance.Treat your guests to a sensory feast with our <br /> 
                       catering expertise, where each dish is crafted with precision and infused with culinary magic.</p>
                  

                    <div className="section2__left">
                            <div className="section2__thumb">
                                <img src="/images/pix4.jpg" alt="Dish 1" />
                                <div className="thumb_label">4 Items</div>
                                <div className="thumb_name">Burger</div>
                            </div>
                            <div className="section2__thumb">
                                <img src="/images/pix2.jpg" alt="Dish 2" />
                                <div className="thumb_label">5 Items</div>
                                <div className="thumb_name">Pizza</div>
                            </div>
                            <div className="section2__thumb">
                                <img src="/images/pix5.jpg" alt="Dish 3" />
                                <div className="thumb_label">4 Items</div>
                                <div className="thumb_name">Pasta</div>
                            </div>
                    </div>
                </div>
            </section>

            
            <section className="section3">
                <div className="section3__content">
                    <h3>We cooked it for you</h3>
                    <h1>Making food <br /> more than <b>just-food</b></h1>
                    <p>Catering is a service provided by professional food and beverage experts to meet the culinary needs <br />
                       of various events and gatherings.</p>
                    <span>find nearby Restaurants →</span>
                </div>
                 <div className="section3__thumb">
                                <img src="/images/location-img 1.jpg" alt="Dish 3" />
                 </div>
            </section>

             
            <section className="section__4">
                <div className='section4__content'>
                    <h2> <b>Catering With the</b> first class <br /><span>service</span></h2>
                    <p>catering services can be tailored to accommodate a wide range of occasions, like <br />
                        weddings, corporate events, parties, conferences, and social gatherings.
                    </p>
                    <div className='btn__cnt'>
                       <button className="cart_button1" type="button">Pasta</button>
                        <button className="cart_button2" type="button">Noodles</button>
                        <button className="cart_button2" type="button">Burgers</button>
                        <button className="cart_button2" type="button">Pizza</button>
                    </div>
                </div>
                <div className="gallery2_grid">
                    {[
                        { id: 'g1', src: '/images/pix7.jpg', name: 'pure by slurrp', desc:'Al dente noodles coated in a flavourful tomato sauce,<br/> garnished with fresh basil leaves and grated Parmesan cheese.'  },
                        { id: 'g2', src: '/images/pix5.jpg', name: 'Cafe De Meat Rich', desc:'Al dente noodles coated in a flavourful tomato sauce,<br/> garnished with fresh basil leaves and grated Parmesan cheese.' },
                        { id: 'g3', src: '/images/pix5.jpg', name: 'Sizzling Culture', desc:'Al dente noodles coated in a flavourful tomato sauce,<br/> garnished with fresh basil leaves and grated Parmesan cheese.' },
                    ].map(img => (
                        <div className="gallery2_item" key={img.id}>
                            <img className="gallery2_img" src={img.src} alt={img.name} />
                            <div className="gallery2_caption">
                                <div className="caption2_name">{img.name}</div>
                                <div className="caption_desc" dangerouslySetInnerHTML={{__html: img.desc}}></div>
                                  
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className='section5'>
                <div className='section5__content'>
                    <h3>Many Restaurants <br /> <span>and offers in one place</span></h3>
                    <p>
                        Caterers work closely with clients to create a customized menu <br />
                        based on their preferences, dietary restrictions, and event <br />
                        requirements. The menu may include appetizers, main courses,<br />
                        side dishes, desserts, and beverages.

                    </p>
                    <button>find nearby restaurants →</button>
                </div>
                <div className='image__cnt'>
                      <img src="/images/pix0.jpg" alt="Dish 2" />
                      <div className="rating">
                        <span className="stars">★★★★☆</span>
                        <span className="rating-text"><span>4.5</span>/5.0</span>
                      </div>
                      <h3><span>Our Stress-Free <br/> Catering Journey</span></h3>
                      <p>
                        They are responsible for setting up <br />
                        tables, managing the buffet, serving food <br />
                        and bevearages, and attending the......
                      </p>
                      <h4>John Doe,Client</h4>
                </div>

                <div className='image__cnt'>
                      <img src="/images/pix0.jpg" alt="Dish 2" />
                      <div className="rating">
                        <span className="stars">★★★★☆</span>
                        <span className="rating-text"><span>4.5</span>/5.0</span>
                      </div>
                      <h3>A Catering that<br />Experince.....</h3>
                      <p>
                        They are responsible for setting up <br />
                        tables, managing the buffet, serving food <br />
                        and bevearages, and attending the......
                      </p>
                      <h4>John Doe,Client</h4>
                </div>

                 <div className='image__cnt'>
                      <img src="/images/pix0.jpg" alt="Dish 2" />
                      <div className="rating">
                        <span className="stars">★★★★☆</span>
                        <span className="rating-text"><span>4.5</span>/5.0</span>
                      </div>
                      <h3>Catering that<br />Accomodate</h3>
                      <p>
                        They are responsible for setting up <br />
                        tables, managing the buffet, serving food <br />
                        and bevearages, and attending the......
                      </p>
                      <h4>John Doe,Client</h4>
                </div>
            </section>

            
            <section className="section6">
                <div className='section6__content'>
                    <h3><span>Let food celebrate life</span> <br />Making ocassions flavourable</h3>
                    <p>Collaborating with clients to design a customized menu based on their preferences, <br />
                       dietary requirements, and event theme.
                    </p>
                 
                </div>
                <div className="gallery6_grid">
                    {[
                        { id: 'g1', src: '/images/pix8.jpg', name: 'Most Popular Dishes This...', desc:'work do/8 december 2024 <br/> Take your corporate events to the next <br/> level with our professional catering <br/> solutions. Whether it’s conference, <br/> product launching, or team-building...'  },
                        { id: 'g2', src: '/images/pix9.jpg', name: 'How to Make  Modellling Taco', desc:'work do/8 december 2024 <br/> Take your corporate events to the next <br/> level with our professional catering <br/> solutions. Whether it’s conference, <br/> product launching, or team-building...' },
                        { id: 'g3', src: '/images/pix10.jpg', name: 'Chebe Bread Pizza Crust', desc:'work do/8 december 2024 <br/> Take your corporate events to the next <br/> level with our professional catering <br/> solutions. Whether it’s conference, <br/> product launching, or team-building...' },
                         { id: 'g3', src: '/images/pix11.jpg', name: 'Chebe Bread Pizza Crust', desc:'work do/8 december 2024 <br/> Take your corporate events to the next <br/> level with our professional catering <br/> solutions. Whether it’s conference, <br/> product launching, or team-building...' },
                    ].map(img => (
                        <div className="gallery6_item" key={img.id}>
                            <img className="gallery6_img" src={img.src} alt={img.name} />
                            <div className="thumb6_label">news</div>
                            <div className="gallery6_caption">
                                <div className="caption6_name">{img.name}</div>
                                <div className="caption_desc" dangerouslySetInnerHTML={{__html: img.desc}}></div>
                                  <button className="cart6_button" type="button">Read more →</button>

                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <footer className="footer">
                <div className="footer_content">
                    <div className="footer_section">
                        <h3>Shop:</h3>
                       <p>Search</p>
                       <p>All Collections</p>
                       <p>All products</p>
                       <p>My Cart</p>
                    </div>
                    <div className="footer_section">
                        <h3>Account:</h3>
                        <p>About Us</p>
                        <p>Contact With Us</p>
                        <p>Faq's</p>
                        <p>Shipping & Delivery</p>
                        <p>Terms & Conditions</p>
                    </div>
                    <div className="footer_section">
                        <h3>Subscribe Newsletter and get -20% off</h3>
                        <p>Skillfully preparing and cooking the selected dishes using high-quality <br />
                           ingredients and culinary expertise to ensure delicious flavours and <br />
                            appealing presentation. 
                        </p>
                        <div className="subscription_form">
                            <input type="email" placeholder="" className="subscription_input" />
                            <button type="button" className="subscription_button">Subscribe</button>
                        </div>
                    </div>
                </div>
                <div className="footer_bottom">
                  <p>&copy; 2024 Stopchop. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}