import '../CSS/HomePage.css';

function HomePage() {
  return (
    <>
    <div className = "top">
        <h1>Welcome to Berry-Hooked Shop</h1>
    </div>

    <div className = "Header">
        <div className = "fruit-image">
        <img src={process.env.PUBLIC_URL + "/fruit-logo.jpg"} />
        </div>
        <div className = "Search">
            <input type = "text" placeholder = "Search"/>
            <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className = "Login-signup">
            <p>Login</p>
            <p>Signup</p>
        </div>
    </div>

    <div className = "Items">
        <ol>
            <li><i class="fa-solid fa-house"></i></li>
            <select name = "Vegetables">
                <option>Onion</option>
                <option>cauliflower</option>            
            </select>
            <select name = "fruits">
                <option>Banana</option>
                <option>Mongo</option>            
            </select>
            <select name = "Grocery Store">
                <option>Soap</option>
                <option>Oil</option>            
            </select>
            <select name = "Personal Care">
                <option>Facewash</option>
                <option>fefe</option>            
            </select>
            <li>Track Order</li>
            <li>Store Location</li>
        </ol>
    </div>

    <div className= "Content">
        <div>
            <h1>Fruits and Vegetables <br/> Community</h1>
        </div>
            <img src={process.env.PUBLIC_URL + "/fruit-logo2.jpg"} />

    </div>
        
    </>
    
  );
}

export default HomePage;
