<template>
  <footer class="footer">
    <div class="footer-inner">
      <div class="columns">
        <div class="col">
          <h5 class="col-title">Popular destinations</h5>
          <ul class="list">
            <li class="list-item"><span class="fi fi-us" /> USA</li>
            <li class="list-item"><span class="fi fi-ca" /> Canada</li>
            <li class="list-item"><span class="fi fi-id" /> Indonesia</li>
            <li class="list-item"><span class="fi fi-ph" /> Philippines</li>
            <li class="list-item"><span class="fi fi-au" /> Australia</li>
            <li class="list-item"><span class="fi fi-pt" /> Portugal</li>
          </ul>
        </div>

        <div class="col">
          <h5 class="col-title">Product</h5>
          <ul class="list">
            <li class="list-link"><a href="#pricing">Pricing</a></li>
            <li class="list-link"><a href="#how-it-works">How it works</a></li>
            <li class="list-link"><a href="#faq">FAQ</a></li>
          </ul>
        </div>

        <div class="col">
          <h5 class="col-title">Company</h5>
          <ul class="list">
            <li class="list-link"><a href="#">Privacy Policy</a></li>
            <li class="list-link"><a href="#">Terms &amp; Conditions</a></li>
            <li class="list-link"><a href="#">Refund Policy</a></li>
          </ul>
        </div>

        <div class="col">
          <h5 class="col-title">Support</h5>
          <ul class="list">
            <li class="list-link"><a href="mailto:support@dl-translate.com">support@dl-translate.com</a></li>
            <li class="list-link"><a href="#">Contact form</a></li>
          </ul>
        </div>
      </div>

      <div class="bottom">
        <div class="reserved">© 2025 DL Translate. All rights reserved.</div>
        <div class="payments">
          <Icon class="payment-icon" icon="logos:visa" width="26" height="26" />
          <Icon class="payment-icon" icon="logos:mastercard" width="26" height="26" />
          <Icon class="payment-icon" icon="logos:paypal" width="26" height="26" />
          <Icon class="payment-icon" icon="logos:discover" width="26" height="26" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>

<style scoped>
.footer {
  border-top: 1px solid #e5e7eb;
  background: #f9fafb;
  padding: 24px 16px 20px;
}

.footer-inner {
  max-width: 1120px;
  margin: 0 auto;
}

.columns {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 24px;
  margin-bottom: 18px;
}

.col-title {
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 8px;
  color: #111827;
}

.list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.list-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: #4b5563;
  margin-bottom: 6px;
}

.list-link {
  font-size: 13px;
  margin-bottom: 6px;
}

.list-link a {
  color: #4b5563;
  text-decoration: none;
}

.list-link a:hover {
  color: #111827;
}

.bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  border-top: 1px solid #e5e7eb;
  padding-top: 12px;
}

.reserved {
  font-size: 12px;
  color: #6b7280;
}

.payments {
  display: flex;
  align-items: center;
  gap: 8px;
}

.payment-icon {
  display: inline-block;
}

@media (max-width: 800px) {
  .columns {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 600px) {
  .columns {
    grid-template-columns: minmax(0, 1fr);
  }
  .bottom {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
