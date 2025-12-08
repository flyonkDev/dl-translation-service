<template>
  <footer>
    <div class="upper-footer">
      <div class="upper-footer__item">
        <h5 class="upper-footer__item__title">Popular Destinations</h5>
        <ul class="destination-list">
          <li class="destination-item"><span class="fi fi-us"></span> USA</li>
          <li class="destination-item"><span class="fi fi-ca"></span> Canada</li>
          <li class="destination-item"><span class="fi fi-id"></span> Indonesia</li>
          <li class="destination-item"><span class="fi fi-ph"></span> Philippines</li>
          <li class="destination-item"><span class="fi fi-np"></span> Nepal</li>
          <li class="destination-item"><span class="fi fi-au"></span> Australia</li>
          <li class="destination-item"><span class="fi fi-pt"></span> Portugal</li>
          <li class="destination-item"><span class="fi fi-my"></span> Malaysia</li>
          <li class="destination-item"><span class="fi fi-jm"></span> Jamaica</li>
        </ul>
      </div>
      <div class="upper-footer__item">
        <h5 class="upper-footer__item__title">Product</h5>
        <ul class="product-list">
          <li class="product-list__item"><a>Pricing</a></li>
          <li class="product-list__item"><a>What is an IDL?</a></li>
          <li class="product-list__item"><a>Countries</a></li>
        </ul>
      </div>
      <div class="upper-footer__item">
        <h5 class="upper-footer__item__title">Customer Care</h5>
        <ul class="product-list">
          <li class="product-list__item"><a>Guides</a></li>
          <li class="product-list__item"><a>FAQs</a></li>
          <li class="product-list__item"><a>Contact Us</a></li>
        </ul>
      </div>
      <div class="upper-footer__item">
        <h5 class="upper-footer__item__title">Company</h5>
        <ul class="product-list">
          <li class="product-list__item"><a>Privacy Policy</a></li>
          <li class="product-list__item"><a>Terms and Conditions</a></li>
          <li class="product-list__item"><a>Refund Policy</a></li>
          <li class="product-list__item"><a>GDPR Cookie Policy</a></li>
          <li class="product-list__item"><a>GDPR Privacy Policy</a></li>
          <li class="product-list__item"><a>Shipping Policy</a></li>
        </ul>
      </div>
    </div>
    <div class="logo-line">logo tut</div>
    <div class="bottom-footer">
      <div class="reserved-info">© 2025 EITA LLC All right reserved.</div>
      <ul class="payments-methods-list">
        <Icon class="paymets-methods-list__icon" icon="logos:visa" width="24" height="24"/>
        <Icon class="paymets-methods-list__icon" icon="logos:mastercard" width="24" height="24"/>
        <Icon class="paymets-methods-list__icon" icon="logos:paypal" width="24" height="24"/>
        <Icon class="paymets-methods-list__icon" icon="logos:discover" width="24" height="24"/>
      </ul>
    </div>
  </footer>
</template>

<script setup lang="js">
import { Icon } from '@iconify/vue'

</script>

<style lang="scss" scoped>
footer {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.upper-footer {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  min-width: 800px;
  max-width: 1200px;


  &__item__title {
    text-align: left;
  }
}

.bottom-footer {
  display: flex;
  justify-content: space-between;
  min-width: 800px;
  max-width: 1200px;
}

.destination-item {
  width: 140px;
  display: flex;

  span {
    margin-right: 10px;
  }
}

.product-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0;

  &__item {
    text-decoration: none;
    text-align: left;
    color: black;
  }
}

.paymets-methods-list {
  &__icon {
    margin-right: 10px;

   &:last-child {
     margin-right: 0;
   }
  }
}

.reserved-info {
  padding-top: 10px;
}
</style>