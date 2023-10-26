document.write(`
<div id="spacer"></div>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item"><a class="nav-link" href="./">Kodu</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Telefonid</a></li>
                    <li class="nav-item dropdown">
                        <a class="nav-link" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Arvutid</a> 
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink"> 
                            <a class="dropdown-item" href="laptops.html">Sülearvutid</a>
                            <a class="dropdown-item">Lauaarvutid</a>
                        </div> 
                    </li> 
                    <li class="nav-item"><a class="nav-link" href="#">Telerid</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Kellad</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Lisatarvikud</a></li>
                </ul>
                <!-- search -->
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Otsi" aria-label="Search">
                    <button class="btn btn-outline-white my-2 my-sm-0" type="submit"><svg class="lnr lnr-magnifier"><use xlink:href="#lnr-magnifier"></use></svg></button>
                </form>
            </div>
            <!-- cart -->
            <!--
            <svg class="lnr mt-auto mr-3 my-3 lnr-cart"><use xlink:href="#lnr-cart"></use></svg>
            -->
            <a href="cart.html"><button class="btn btn-light my-2 my-sm-0" type="submit" href="cart.html"><svg class="lnr lnr-cart"><use xlink:href="#lnr-cart"></use></svg></button></a>
            <a href="#"><button class="btn btn-light my-2 my-sm-0" type="submit" href="#"><svg class="lnr lnr-user"><use xlink:href="#lnr-user"></use></svg></button></a>
        </nav>
`);