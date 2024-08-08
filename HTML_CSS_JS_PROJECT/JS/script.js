// This function will only execute when the document is Ready
$(document).ready(function () {

    // This is append the head, header and footer in the webpage
    // I have used the if-else as these pages are in different directories
    if (document.title == "Cards | Product" || document.title == "Carrom | Product" || document.title == "Chess | Product") {
        {
            $(function () {
                $("#head").load("./meta.html");
                $("#header").load("../CommonPages/header.html");
                $("#footer").load("../CommonPages/footer.html");
            });

        }
    }
    else {
        $(function () {

            $("#head").load("./PAGES/CommonPages/meta.html");
            $("#header").load("./PAGES/CommonPages/header.html");
            $("#footer").load("./PAGES/CommonPages/footer.html");

        });
    }

    // this function will run when we will scroll down from the window
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 70) {
            $("#header").addClass("header-scrolled");
            $("header nav menu li a").addClass("header-scrolled-anchor");
            $(".logo-container a img").addClass("header-scrolled-img");
            $(".menuItem").css("backgroundColor", "black");
            $(".menuItem nav menu li a").css("Color", "White");
            $(".menuToggle span").css("backgroundColor", "white");
        }
        else {
            $("#header").removeClass("header-scrolled");
            $("header nav menu li a").removeClass("header-scrolled-anchor");
            $(".logo-container a img").addClass("header-scrolled-img");
            $(".menuItem ").css("backgroundColor", "white");
            $(".menuItem nav menu li a").css("Color", "black");
            $(".menuToggle span").css("backgroundColor", "black");

        }
    });


    // This function will take care of the accordion
    $(".acc-header").click(function () {
        let $parent = $(this).parent();

        if ($parent.hasClass("active")) {
            return;
        }

        $(".accordion-item .accodion-para").not().slideUp();


        $(this).next().slideDown(function () {
            $parent.addClass("active").siblings().removeClass("active");
        })

    });

    $(".acc-header").click(function () {
        var $header = $(this);
        var $accordionItem = $header.closest('.accordion-item');
        var isActive = $accordionItem.hasClass('active');

        if (isActive) {
            return;
        }
        // Collapse all sections and reset icons
        $('.accordion-item').removeClass('active');
        $('.acc-header i').removeClass('fa-minus').addClass('fa-plus');

        // If the clicked item is not active, expand it

        if (!isActive) {
            $accordionItem.addClass('active');
            $header.find('i').removeClass('fa-plus').addClass('fa-minus');
            $accordionItem.find('.accodion-para').slideDown(); // Expand the content section
        }
    });


    // This is the code for adding the item to the cart
    var addToCart = document.querySelector(".add-to-card");
    var modal = document.querySelector(".modal");

    addToCart.addEventListener("click", () => {
        $(".modal").addClass("modal-active");
    })

    $(".button-2").click(function () {
        $(".modal").removeClass("modal-active");
    });

    $(".button-1").click(function () {
        alert("You have chosen to buy the Product");
    });

    window.onclick = function (event) {
        if (event.target != modal && event.target != addToCart && $(".modal").hasClass("modal-active")) {
            $(".modal").removeClass("modal-active");
        }
    }

    // this is the code for changing the text content of span when we click + or - in the single product page
    var add_sub = document.querySelectorAll(".quantity-btns a");

    if(add_sub){
        
        add_sub[0].addEventListener("click",(e)=>{
            e.preventDefault();
            let x = $(".quantity-btns span");

            if(x[0].innerText != 0)
            {
            x[0].innerText = +(x[0].innerText) - 1;
            }
        })

        add_sub[1].addEventListener("click",(e)=>{
            e.preventDefault();
            let x = $(".quantity-btns span");

            x[0].innerText = +(x[0].innerText) + 1;
        })

    }


});

