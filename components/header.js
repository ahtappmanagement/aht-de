import Image from "next/image";
import LOGO from "images/LOGO.png";
import Link from "next/link";
function Header() {
    return ( 

        
        <header id="header" class="d-flex align-items-center">
          <div class="container d-flex align-items-center">
      
            <div class="logo mr-auto">
              <h1 class="text-light"><Link href="/">AHTFoods </Link></h1>
            </div>
      
            <nav class="nav-menu d-none d-lg-block">
              <ul>
                <li class="active"><Link href="/">Home</Link></li>
                <li><Link href="/products">Products</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </nav>
      
          </div>
        </header>
     );
}

export default Header;