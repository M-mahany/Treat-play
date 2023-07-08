var fixed_header;
var sticky;
var cart_products = [];
let newProductsData = [];
let shownProducts = [];
let sliceEnd = 3;
function showMore() {
  if (newProductsData.length >= sliceEnd) {
    sliceEnd += 3;
    showProducts();
    if (newProductsData.length <= sliceEnd) {
      var x = document.getElementById('HomeShowMoreBtn');
      x.style.display = 'none';
    }
  }
}

function showProducts() {
  shownProducts = newProductsData.slice(0, sliceEnd);
  document.getElementById('productsWrapper2').innerHTML =
    shownProducts
      .map(
        (product) =>
          `
          <div class="ProductBoxes2">
          <a href="/products/${product.slug}">
          <span style="display:flex;width:100%; justify-content: flex-start;font-size:12px; color:#787878;">
          Available QTY: ${product.quantity}
      </span>
          <div class="imgBoxProducts2">
    <span
        style="position: absolute; top:6px;width:100%;display:flex;justify-content:center;align-items:center;color:#787878;font-size:18px;">New!</span>
        <img src="${product.images[0]['image']['medium']}"
        alt="${product.name}" />
</div>
<p>
    ${product.name}
</p>
<div class="priceNewOld">
    <span class="old">
        SAR ${product.price}
    </span>
    <span class="new">
        SAR  ${product.sale_price}

    </span>
</div>
<div class="percentageDisc">
    Best Offer
</div>
</a>
<span class="productIdHome"> ${product.id}</span>
<button onclick="window.location.href='/products/${
            product.slug
          }'" class="buttonProduct ${
            product.quantity === 0 && 'disabled'
          }">
${product.quantity === 0 ? 'Out Of Stock' : 'Add To Cart'}
</button>
</div>
    `
      )
      .join('');
  //   let addtoCartHome =
  //     document.getElementsByClassName('buttonProduct');
  //   for (let i = 0; i < addtoCartHome.length; i++) {
  //     let addtoCartHomeButton = addtoCartHome[i];
  //     addtoCartHomeButton.addEventListener(
  //       'click',
  //       addToCartHomeClick
  //     );
  //   }
}
function addToCartButtonProduct(productID, quantity) {
  zid.store.cart
    .addProduct({
      productId: productID,
      quantity: quantity,
    })
    .then(function (response) {
      if (response.status === 'success') {
        setCartTotalAndBadge(response.data.cart);
      }
    });
}
function addToCartHomeClick(event) {
  let addButton = event.target;
  let product = addButton.parentElement;
  let productID =
    product.getElementsByClassName('productIdHome')[0]
      .innerText;
  addToCartButtonProduct(productID, 1);
}
async function fetchAllProducts() {
  if (window.location.pathname == '/') {
    const url =
      'https://api.zid.sa/v1/products/?page_size=50';
    const options = {
      method: 'GET',
      headers: {
        'Accept-Language': 'en',
        'Store-Id': '347752',
        Accept: 'application/json',
      },
    };
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      let productData = [];
      productData.push(data.results);
      newProductsData = productData[0].filter(
        (prod) => prod.sale_price > 0
      );
      showProducts();
    } catch (error) {
      console.log(error);
    }
  }
}
fetchAllProducts();
window.onscroll = () => fixed_header_to_top();

function menuFiixedHeader() {
  fixed_header = document.getElementById('fixed-header');
  sticky = fixed_header.offsetTop;
}

function fixed_header_to_top() {
  if (window.pageYOffset > sticky) {
    if (fixed_header) {
      fixed_header.classList.add('sticky');
      $('.app-content').addClass('app-content-padded');
    }
  } else {
    if (fixed_header) {
      fixed_header.classList.remove('sticky');
      $('.app-content').removeClass('app-content-padded');
    }
  }
}

function showDropItems() {
  let dropitems = document.getElementById(
    'women-dropitmes'
  );
  dropitems.classList.remove('dropitems');
  dropitems.classList.add('dropitems-shown');
}

function hideDropItems() {
  let dropitems = document.getElementById(
    'women-dropitmes'
  );
  dropitems.classList.remove('dropitems-shown');
  dropitems.classList.add('dropitems');
}

function hideDropDownMenu() {
  elem.classList.remove('dropitems-shown');
  elem.classList.add('dropitems');
}

function rowSlideRight(selector) {
  let container = document.querySelector(selector);
  let width = container.offsetWidth;
  container.scrollLeft = 0;
}

function rowSlideLeft(selector) {
  var container = document.querySelector(selector);
  var width = container.offsetWidth;
  container.scrollLeft = -width;
}

function hideAnnouncementBar() {
  $('.announcement-bar').addClass('d-none');
}

function hideAvailabilityBar() {
  $('.availability-bar').addClass('d-none');
}

/* 
    Cart
*/

function hideElmById(id) {
  document.getElementById(id).style.display = 'none';
}

function showShoppingCart() {
  document.getElementById(
    'header-shopping-cart'
  ).style.width = '40%';
  document.body.classList.add('disable-scroll');
  addCartItem();
}

function hideShoppingCart() {
  document.getElementById(
    'header-shopping-cart'
  ).style.width = '0%';
  document.body.classList.remove('disable-scroll');
  removeCartItems();
  hideElmById('empty-cart');
}

function getCartTotal() {
  return cart_products.reduce(
    (acc, product) =>
      acc + product.price * product.quantity,
    0
  );
}

function getCartItemHTML(product) {
  return `
        <div id="cart-item-${
          product.id
        }" class="cart-item d-flex flex-row">
            <div class="cart-item-img"></div>
            <div class="cart-item-name">${
              product.name
            }</div>
            <div class="cart-item-price">${
              product.price_string
            }</div>
            <div class="cart-item-quantity">${
              product.quantity
            }</div>
            <div class="cart-item-total">${
              product.price * product.quantity
            } ${localStorage.getItem('currency')}</div>
        </div>
    `;
}

function addCartItem() {
  let cart = document.getElementById('cart-items');
  cart.innerHTML = '';
  cart.style.display = 'flex';

  let empty_cart = document.getElementById('empty-cart');

  if (cart_products.length === 0) {
    empty_cart.style.display = 'flex';
    return;
  }

  cart_products.forEach((product) =>
    cart.insertAdjacentHTML(
      'beforeend',
      getCartItemHTML(product)
    )
  );
}

function removeCartItems() {
  let cart = document.getElementById('cart-items');
  cart.innerHTML = '';
}

function updateCartProducts(res) {
  console.log(res);

  let added_product = res.data.cart.product;
  let i = cart_products.findIndex(
    (item) => item.product_id == added_product.product_id
  );
  i > -1
    ? (cart_products[i] = added_product)
    : cart_products.push(added_product);

  let quantity = cart_products.reduce(
    (acc, product) => acc + product.quantity,
    0
  );
  setCartCount(quantity);
}

function removeFromCartProducts(res, product_id) {
  let i = cart_products.findIndex(
    (item) => item.product_id === product_id
  );

  if (i > -1) {
    cart_products.splice(i, 1);
  }

  let quantity = cart_products.reduce(
    (acc, product) => acc + product.quantity,
    0
  );
  setCartCount(quantity);
}

// function productCartAddToCart(elm, product_id) {
//   console.log(elm, product_id);
//   if (!$('.add-to-cart-progress', elm).hasClass('d-none'))
//     return;

//   $('.add-to-cart-progress', elm).removeClass('d-none');

//   addToCart(product_id, 1, function () {
//     $('.add-to-cart-progress', elm).addClass('d-none');

//     if (elm) {
//       var getParentDiv = $(elm).parent().parent();

//       var image = $(
//         '#product-card-img-' + product_id,
//         getParentDiv
//       );
//       var cart = $('.a-shopping-cart');

//       addToCartAnimation(cart, image);
//     }
//   });
// }

// function addToCart(product_id, quantity, onCompleted) {
//   zid.store.cart
//     .addProduct({
//       productId: product_id,
//       quantity: quantity,
//     })
//     .then(function (response) {
//       console.log(response.status);
//       if (response.status === 'success') {
//         setCartTotalAndBadge(response.data.cart);

//         if (onCompleted) {
//           onCompleted();
//         }
//       } else {
//         window.loadToasterScriptIfNotLoaded(function () {
//           toastr.error(response.data.message);
//         });
//       }
//     });
// }

function removeFromCart(product_id) {
  product_id_str = product_id.replaceAll('-', '');
  let i = cart_products.findIndex(
    (item) => item.product_id == product_id_str
  );

  zid.store.cart
    .removeProduct(cart_products[i].id)
    .then((res) =>
      removeFromCartProducts(res, product_id_str)
    )
    .catch((err) => setCartCount(0, true));
}

/*
    Initialize Cart
*/

/*
    mega-menu
*/
jQuery(document).on(
  'click',
  '.mega-dropdown',
  function (e) {
    e.stopPropagation();
  }
);

/*
 slider-filter
 */
$(function () {
  $('#slider-range').slider({
    range: true,
    min: 0,
    max: 500,
    values: [75, 300],
    slide: function (event, ui) {
      $('#amount').val(
        '$' + ui.values[0] + ' - $' + ui.values[1]
      );
    },
  });
  $('#amount').val(
    '$' +
      $('#slider-range').slider('values', 0) +
      ' - $' +
      $('#slider-range').slider('values', 1)
  );
});

// if (attribute_name === 'Size') {
//    $('div.sizeBoxes > div#product-variants-options > div.form-group > div > ul[name=' + !arrt_Size + ']').addClass('disabled')
// } else {
//   $('div.VariantDiv > div#product-variants-options > div.form-group > div > ul[name=' + arrt_Size + ']').addClass('disabled')
//}
/*
 product-comment-twig show more show less
 */
$('#show-more-content').hide();

$('#show-more').click(function () {
  $('#show-more-content').show(500);
  $('#show-less').show();
  $('#show-more').hide();
});

$('#show-less').click(function () {
  $('#show-more-content').hide(500);
  $('#show-more').show();
  $(this).hide();
});

function displayActivePaymentSessionBar(cart) {
  if (cart.is_reserved) {
    $('.payment-session-bar').removeClass('d-none');
  }
}

function fetchCart() {
  zid.store.cart.fetch().then(function (response) {
    if (response.status === 'success') {
      if (response.data) {
        setCartTotalAndBadge(response.data.cart);
        displayActivePaymentSessionBar(response.data.cart);
      }
    }
  });
}

function getCartTotal(cart) {
  if (cart && cart.totals && cart.totals.length > 0) {
    var cartTotalItem = cart.totals.filter(function (
      total
    ) {
      return total.code === 'total';
    });

    if (cartTotalItem.length > 0) {
      return cartTotalItem[0].value_string;
    }
  }

  return null;
}

function setCartTotalAndBadge(cart) {
  setCartBadge(cart.products_count);
  var cartTotal = getCartTotal(cart);
  if (cartTotal) {
    setCartIconTotal(cartTotal);
  }
}

function setCartIconTotal(total) {
  $('.cart-header-total').html(total);
}

function setCartBadge(badge) {
  if (badge > 0) {
    $('.cart-badgeNew').removeClass('d-none');
    $('.cart-badgeNew').html(badge);
  } else {
    $('.cart-badgeNew').addClass('d-none');
  }
}

function closeSlidingMenu() {
  window.slidingMenu.close();
}

function clearFilters() {
  $('.form-products-filter input').val('');
}

$('.sm-search-icon').click(function () {
  $('.sm-search-div').toggleClass('show');
});

$('#filters-form-collapse-sm').on(
  'hidden.bs.collapse',
  function () {
    $('.filters_expanded').removeClass('d-none');
    $('.filters_not_expanded').addClass('d-none');
  }
);

$('#filters-form-collapse-sm').on(
  'shown.bs.collapse',
  function () {
    $('.filters_expanded').addClass('d-none');
    $('.filters_not_expanded').removeClass('d-none');
  }
);

function getMenuPrev(elm) {
  if (!elm) return null;

  var EPrev = $(elm).prev();
  if (EPrev) {
    if (EPrev.hasClass('d-none')) {
      return getMenuPrev(EPrev);
    } else {
      return EPrev;
    }
  }

  return null;
}

function fixMenu(prevLiElm) {
  var listItems = $('.main-nav > li');

  listItems.each(function (idx, li) {
    if (idx > 3) {
      if (
        !$(li).hasClass('all-categories') &&
        !$(li).hasClass('d-none')
      ) {
        if (
          $(li).offset().top - $(li).parent().offset().top >
          4
        ) {
          $(li).addClass('d-none');
        } else {
          $(li).removeClass('d-none');
        }
      }
    }
  });

  var elmAllCat = $('.main-nav > li.all-categories');
  if ($(elmAllCat).length) {
    if (
      $(elmAllCat).offset().top -
        $(elmAllCat).parent().offset().top >
      4
    ) {
      var pElm = null;
      if (prevLiElm) {
        pElm = getMenuPrev(prevLiElm);
      } else {
        pElm = getMenuPrev(elmAllCat);
      }
      $(pElm).addClass('d-none');
      fixMenu(pElm);
    }
  }

  if (
    $('.main-nav').parent().outerWidth() -
      $('.main-nav').outerWidth() <
    100
  ) {
    $('.main-nav').addClass('justify-content-between');
  } else {
    $('.main-nav').removeClass('justify-content-between');
  }

  if ($('.main-nav-wrapper').length) {
    $('.main-nav-wrapper').removeClass('main-nav-wrapper');
  }
}

$(window).resize(function () {
  fixMenu();
});

$('.search-input-input').on('keyup', function (e) {
  if (e.key === 'Enter' || e.keyCode === 13) {
    window.location.href =
      '/products?search=' + encodeURI(this.value);
  }
});

//$( document ).ready(function() {
document.addEventListener('DOMContentLoaded', function () {
  fetchCart();

  /* mobile slide menu */
  window.slidingMenuElement =
    document.getElementById('sliding-menu');
  window.slidingMenu = new SlideMenu(
    window.slidingMenuElement,
    {
      position:
        window.appDirection === 'ltr' ? 'left' : 'right',
      showBackLink: true,
      backLinkBefore:
        window.appDirection === 'ltr'
          ? '<span class="icon-arrow_left slide-menu-arrow slide-menu-arrow-back"></span>'
          : '<span class="icon-arrow_right slide-menu-arrow slide-menu-arrow-back"></span>',
      submenuLinkAfter:
        window.appDirection === 'ltr'
          ? '<span class="icon-arrow_right slide-menu-arrow"></span>'
          : '<span class="icon-arrow_left slide-menu-arrow"></span>',
    }
  );

  window.slidingMenuElement.addEventListener(
    'sm.open',
    function () {
      $('body').addClass('sidenav-open');
    }
  );

  window.slidingMenuElement.addEventListener(
    'sm.close',
    function () {
      $('body').removeClass('sidenav-open');
    }
  );

  $('.search-input-input').on('input', function (event) {
    fetchProductsSearchDebounce(event.currentTarget);
  });

  /* mobile slide menu */
  fixMenu();

  menuFiixedHeader();
});

var fetchProductsSearchDebounce = debounce(function (
  target
) {
  fetchProductsSearch(
    $(target).attr('data-cat-id'),
    $(target).val()
  );
},
650);

function fetchProductsSearch(catId, query) {
  if (!query || query.trim().length <= 0) {
    $('.autocomplete-items').html('');
    return;
  }

  zid.store.product
    .fetchAll(catId, {
      per_page: 5,
      search: encodeURI(query),
    })
    .then(function (response) {
      if (response.status === 'success') {
        if (response.data) {
          $('.autocomplete-items').html('');
          for (
            var i = 0;
            i < response.data.products.data.length;
            i++
          ) {
            var product = response.data.products.data[i];

            $('.autocomplete-items').append(
              '<div><a href="' +
                product.html_url +
                '">' +
                product.name +
                '</a></div>'
            );
          }
          console.log(response.data, catId, query);
        }
      }
    });
}

function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function sessionLangCurrencyChange() {
  var currency = $('.select-country option:selected').attr(
    'data-currency'
  );
  var currencySymbol = $(
    '.select-country option:selected'
  ).attr('data-currency-symbol');

  $('#input-change-session-currency').val(currency);
  $('#input-change-session-currency-symbol').val(
    currencySymbol
  );
}

function addToCartAnimation(cart, imgtodrag) {
  if (imgtodrag && cart) {
    var imgclone = imgtodrag
      .clone()
      .offset({
        top: imgtodrag.offset().top,
        left: imgtodrag.offset().left,
      })
      .css({
        opacity: '0.5',
        position: 'absolute',
        height: '150px',
        width: '150px',
        'z-index': '100',
      })
      .appendTo($('body'))
      .animate(
        {
          top: cart.offset().top + 10,
          left: cart.offset().left + 10,
          width: 75,
          height: 75,
        },
        1000,
        'easeInOutExpo'
      );

    imgclone.animate(
      {
        width: 0,
        height: 0,
      },
      function () {
        $(this).detach();
      }
    );
  }
}

function goBack() {
  if (
    document.referrer &&
    document.referrer.split('/')[2] === window.location.host
  ) {
    history.go(-1);
    return false;
  } else {
    window.location.href = '/';
  }
}

function scrollToSubMenu(ele) {
  const subMenuElement = ele.querySelector('ul');
  if (subMenuElement) {
    const subMenu = document.getElementById('sliding-menu');
    subMenu.scrollTop = 0;
  }
}
