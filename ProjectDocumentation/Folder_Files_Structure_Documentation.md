```

customer-frontend/
│
├── public/                          // 📁 PURPOSE: Static files served directly to browser
│   ├── index.html                   // 📄 PURPOSE: Main HTML file where React app mounts
│   ├── favicon.ico                  // 🖼️ PURPOSE: Browser tab icon
│   ├── manifest.json                // 📋 PURPOSE: PWA configuration
│   └── assets/                      // 📁 PURPOSE: Static images, logos, icons
│       ├── logo.png                 // 🖼️ PURPOSE: E-commerce logo
│       ├── hero-banner.jpg          // 🖼️ PURPOSE: Homepage hero image
│       └── icons/                   // 📁 PURPOSE: SVG icons for UI
│
├── src/                             // 📁 PURPOSE: Main source code
│   ├── index.js                     // 📄 PURPOSE: App entry point
│   ├── App.js                       // 📄 PURPOSE: Root component with Router, Redux, Auth
│   ├── App.css                      // 📄 PURPOSE: Global styles
│   │
│   ├── core/                        // 📁 PURPOSE: Shared/reusable code
│   │   ├── layout/                  // 📁 PURPOSE: Layout structure components
│   │   │   ├── MainLayout.jsx       // 📄 PURPOSE: Main wrapper with Header + Footer + content
│   │   │   ├── AuthLayout.jsx       // 📄 PURPOSE: Layout for auth pages (login, signup)
│   │   │   ├── Header.jsx           // 📄 PURPOSE: Top navigation with logo, search, cart, user menu
│   │   │   ├── Footer.jsx           // 📄 PURPOSE: Footer with links, newsletter signup
│   │   │   ├── Navigation.jsx       // 📄 PURPOSE: Main navigation menu
│   │   │   └── MobileMenu.jsx       // 📄 PURPOSE: Mobile hamburger menu
│   │   │
│   │   ├── components/              // 📁 PURPOSE: Reusable UI components
│   │   │   ├── ProductCard.jsx      // 📄 PURPOSE: Product display card with image, price, rating
│   │   │   ├── ProductGrid.jsx      // 📄 PURPOSE: Grid layout for product listings
│   │   │   ├── SearchBar.jsx        // 📄 PURPOSE: Search input with autocomplete
│   │   │   ├── FilterSidebar.jsx    // 📄 PURPOSE: Filters for categories, price, brands
│   │   │   ├── SortOptions.jsx      // 📄 PURPOSE: Sort dropdown (price, popularity, newest)
│   │   │   ├── Pagination.jsx       // 📄 PURPOSE: Page navigation
│   │   │   ├── LoadingSpinner.jsx   // 📄 PURPOSE: Loading indicator
│   │   │   ├── Modal.jsx            // 📄 PURPOSE: Reusable modal dialog
│   │   │   ├── Toast.jsx            // 📄 PURPOSE: Notification messages
│   │   │   ├── Breadcrumb.jsx       // 📄 PURPOSE: Navigation breadcrumb
│   │   │   ├── RatingStars.jsx      // 📄 PURPOSE: Star rating display
│   │   │   ├── QuantitySelector.jsx // 📄 PURPOSE: Product quantity controls
│   │   │   ├── AddToCartButton.jsx  // 📄 PURPOSE: Add to cart with variants
│   │   │   ├── WishlistButton.jsx   // 📄 PURPOSE: Add/remove from wishlist
│   │   │   ├── ImageGallery.jsx     // 📄 PURPOSE: Product image gallery with zoom
│   │   │   ├── PriceDisplay.jsx     // 📄 PURPOSE: Price with discount formatting
│   │   │   └── Badge.jsx            // 📄 PURPOSE: Sale, New, Out-of-stock badges
│   │   │
│   │   ├── api/                     // 📁 PURPOSE: API configuration
│   │   │   ├── apiService.js        // 📄 PURPOSE: Axios setup with base URL
│   │   │   ├── authInterceptor.js   // 📄 PURPOSE: JWT token handling
│   │   │   └── errorHandler.js      // 📄 PURPOSE: Global error handling
│   │   │
│   │   ├── auth/                    // 📁 PURPOSE: Authentication logic
│   │   │   ├── AuthProvider.jsx     // 📄 PURPOSE: Auth context provider
│   │   │   ├── LoginPage.jsx        // 📄 PURPOSE: Login form
│   │   │   ├── SignupPage.jsx       // 📄 PURPOSE: Registration form
│   │   │   ├── ForgotPasswordPage.jsx // 📄 PURPOSE: Password reset
│   │   │   ├── ProtectedRoute.jsx   // 📄 PURPOSE: Route protection
│   │   │   └── authSlice.js         // 📄 PURPOSE: Redux slice for auth
│   │   │
│   │   ├── utils/                   // 📁 PURPOSE: Utility functions
│   │   │   ├── formatters.js        // 📄 PURPOSE: Format price, date, etc.
│   │   │   ├── validators.js        // 📄 PURPOSE: Form validation
│   │   │   ├── constants.js         // 📄 PURPOSE: App constants
│   │   │   └── helpers.js           // 📄 PURPOSE: Helper functions
│   │   │
│   │   └── hooks/                   // 📁 PURPOSE: Custom hooks
│   │       ├── useAuth.js           // 📄 PURPOSE: Auth state hook
│   │       ├── useApi.js            // 📄 PURPOSE: API call hook
│   │       ├── useDebounce.js       // 📄 PURPOSE: Debounce hook for search
│   │       ├── useCart.js           // 📄 PURPOSE: Cart operations hook
│   │       ├── useWishlist.js       // 📄 PURPOSE: Wishlist operations hook
│   │       └── useLocalStorage.js   // 📄 PURPOSE: Local storage hook
│   │
│   ├── features/                    // 📁 PURPOSE: Feature modules
│   │   │
│   │   ├── Home/                    // 🏠 FEATURE: Homepage
│   │   │   ├── pages/
│   │   │   │   └── HomePage.jsx     // 📄 PURPOSE: Main homepage with hero, featured products
│   │   │   ├── components/
│   │   │   │   ├── HeroBanner.jsx   // 📄 PURPOSE: Main hero banner
│   │   │   │   ├── FeaturedProducts.jsx // 📄 PURPOSE: Featured products section
│   │   │   │   ├── CategoryGrid.jsx // 📄 PURPOSE: Category showcase
│   │   │   │   ├── PromoBanner.jsx  // 📄 PURPOSE: Promotional banners
│   │   │   │   └── NewsletterSignup.jsx // 📄 PURPOSE: Newsletter subscription
│   │   │   ├── api/
│   │   │   │   └── homeApi.js       // 📄 PURPOSE: Fetch homepage data
│   │   │   └── index.js
│   │   │
│   │   ├── ProductCatalog/          // 📦 FEATURE: Product Browsing
│   │   │   ├── pages/
│   │   │   │   ├── ProductListPage.jsx    // 📄 PURPOSE: Product listing with filters
│   │   │   │   ├── ProductDetailsPage.jsx // 📄 PURPOSE: Single product page
│   │   │   │   ├── CategoryPage.jsx       // 📄 PURPOSE: Category-specific products
│   │   │   │   └── SearchResultsPage.jsx  // 📄 PURPOSE: Search results
│   │   │   ├── components/
│   │   │   │   ├── ProductFilters.jsx     // 📄 PURPOSE: Filter sidebar
│   │   │   │   ├── ProductSort.jsx        // 📄 PURPOSE: Sort options
│   │   │   │   ├── ProductQuickView.jsx   // 📄 PURPOSE: Quick view modal
│   │   │   │   ├── ProductTabs.jsx        // 📄 PURPOSE: Description/reviews/specs tabs
│   │   │   │   ├── ProductRecommendations.jsx // 📄 PURPOSE: Related products
│   │   │   │   ├── ProductReviews.jsx     // 📄 PURPOSE: Reviews section
│   │   │   │   └── ProductVariantSelector.jsx // 📄 PURPOSE: Size/color selection
│   │   │   ├── api/
│   │   │   │   ├── productApi.js    // 📄 PURPOSE: Product data API calls
│   │   │   │   └── categoryApi.js   // 📄 PURPOSE: Category data
│   │   │   └── index.js
│   │   │
│   │   ├── ShoppingCart/            // 🛒 FEATURE: Cart Management
│   │   │   ├── pages/
│   │   │   │   └── CartPage.jsx     // 📄 PURPOSE: Shopping cart page
│   │   │   ├── components/
│   │   │   │   ├── CartItem.jsx     // 📄 PURPOSE: Individual cart item
│   │   │   │   ├── CartSummary.jsx  // 📄 PURPOSE: Order summary
│   │   │   │   ├── CartSidebar.jsx  // 📄 PURPOSE: Slide-out cart
│   │   │   │   ├── EmptyCart.jsx    // 📄 PURPOSE: Empty state
│   │   │   │   └── CrossSellProducts.jsx // 📄 PURPOSE: Frequently bought together
│   │   │   ├── api/
│   │   │   │   └── cartApi.js       // 📄 PURPOSE: Cart API calls
│   │   │   └── index.js
│   │   │
│   │   ├── Checkout/                // 💳 FEATURE: Checkout Process
│   │   │   ├── pages/
│   │   │   │   ├── CheckoutPage.jsx       // 📄 PURPOSE: Main checkout
│   │   │   │   ├── PaymentPage.jsx        // 📄 PURPOSE: Payment step
│   │   │   │   └── OrderConfirmationPage.jsx // 📄 PURPOSE: Order success
│   │   │   ├── components/
│   │   │   │   ├── CheckoutSteps.jsx      // 📄 PURPOSE: Progress indicator
│   │   │   │   ├── ShippingForm.jsx       // 📄 PURPOSE: Address form
│   │   │   │   ├── PaymentMethod.jsx      // 📄 PURPOSE: Payment options
│   │   │   │   ├── OrderReview.jsx        // 📄 PURPOSE: Order summary
│   │   │   │   ├── GuestCheckout.jsx      // 📄 PURPOSE: Guest checkout option
│   │   │   │   └── CouponCode.jsx         // 📄 PURPOSE: Discount code input
│   │   │   ├── api/
│   │   │   │   └── checkoutApi.js   // 📄 PURPOSE: Checkout API calls
│   │   │   └── index.js
│   │   │
│   │   ├── UserProfile/             // 👤 FEATURE: User Account
│   │   │   ├── pages/
│   │   │   │   ├── ProfilePage.jsx        // 📄 PURPOSE: User profile
│   │   │   │   ├── OrderHistoryPage.jsx   // 📄 PURPOSE: Order history
│   │   │   │   ├── OrderDetailsPage.jsx   // 📄 PURPOSE: Order details
│   │   │   │   ├── AddressBookPage.jsx    // 📄 PURPOSE: Saved addresses
│   │   │   │   ├── WishlistPage.jsx       // 📄 PURPOSE: Wishlist
│   │   │   │   └── SettingsPage.jsx       // 📄 PURPOSE: Account settings
│   │   │   ├── components/
│   │   │   │   ├── ProfileForm.jsx        // 📄 PURPOSE: Profile edit form
│   │   │   │   ├── OrderCard.jsx          // 📄 PURPOSE: Order history card
│   │   │   │   ├── AddressCard.jsx        // 📄 PURPOSE: Address card
│   │   │   │   ├── AddressForm.jsx        // 📄 PURPOSE: Address form
│   │   │   │   ├── WishlistItem.jsx       // 📄 PURPOSE: Wishlist product
│   │   │   │   └── PasswordChangeForm.jsx // 📄 PURPOSE: Password change
│   │   │   ├── api/
│   │   │   │   └── profileApi.js    // 📄 PURPOSE: User profile API calls
│   │   │   └── index.js
│   │   │
│   │   ├── Wishlist/                // ❤️ FEATURE: Wishlist
│   │   │   ├── pages/
│   │   │   │   └── WishlistPage.jsx // 📄 PURPOSE: Wishlist page
│   │   │   ├── components/
│   │   │   │   ├── WishlistGrid.jsx // 📄 PURPOSE: Wishlist items grid
│   │   │   │   └── WishlistActions.jsx // 📄 PURPOSE: Move to cart, share
│   │   │   ├── api/
│   │   │   │   └── wishlistApi.js   // 📄 PURPOSE: Wishlist API calls
│   │   │   └── index.js
│   │   │
│   │   ├── Reviews/                 // ⭐ FEATURE: Product Reviews
│   │   │   ├── pages/
│   │   │   │   └── ReviewPage.jsx   // 📄 PURPOSE: Write/edit reviews
│   │   │   ├── components/
│   │   │   │   ├── ReviewForm.jsx   // 📄 PURPOSE: Review submission form
│   │   │   │   ├── ReviewList.jsx   // 📄 PURPOSE: Reviews list
│   │   │   │   └── ReviewSummary.jsx // 📄 PURPOSE: Rating summary
│   │   │   ├── api/
│   │   │   │   └── reviewApi.js     // 📄 PURPOSE: Review API calls
│   │   │   └── index.js
│   │   │
│   │   └── TrackOrder/              // 📦 FEATURE: Order Tracking
│   │       ├── pages/
│   │       │   └── TrackOrderPage.jsx // 📄 PURPOSE: Order tracking
│   │       ├── components/
│   │       │   ├── OrderStatus.jsx  // 📄 PURPOSE: Order status timeline
│   │       │   ├── TrackingInfo.jsx // 📄 PURPOSE: Tracking details
│   │       │   └── DeliveryEstimate.jsx // 📄 PURPOSE: Delivery estimate
│   │       ├── api/
│   │       │   └── trackingApi.js   // 📄 PURPOSE: Tracking API calls
│   │       └── index.js
│   │
│   ├── store/                       // 📁 PURPOSE: Redux store
│   │   ├── index.js                 // 📄 PURPOSE: Store creation
│   │   ├── slices/                  // 📁 PURPOSE: Redux slices
│   │   │   ├── authSlice.js         // 📄 PURPOSE: Authentication state
│   │   │   ├── cartSlice.js         // 📄 PURPOSE: Shopping cart state
│   │   │   ├── wishlistSlice.js     // 📄 PURPOSE: Wishlist state
│   │   │   ├── productSlice.js      // 📄 PURPOSE: Product catalog state
│   │   │   ├── uiSlice.js           // 📄 PURPOSE: UI state (modals, loading)
│   │   │   └── filterSlice.js       // 📄 PURPOSE: Product filters state
│   │   └── reducers/
│   │       └── rootReducer.js       // 📄 PURPOSE: Combine reducers
│   │
│   ├── routes/                      // 📁 PURPOSE: React Router
│   │   ├── AppRoutes.jsx            // 📄 PURPOSE: Main routes configuration
│   │   ├── PublicRoutes.jsx         // 📄 PURPOSE: Public routes
│   │   ├── ProtectedRoutes.jsx      // 📄 PURPOSE: Protected routes
│   │   └── index.js                 // 📄 PURPOSE: Routes export
│   │
│   └── styles/                      // 📁 PURPOSE: Global styles
│       ├── global.css               // 📄 PURPOSE: Base styles
│       ├── variables.css            // 📄 PURPOSE: CSS variables
│       ├── theme.js                 // 📄 PURPOSE: Theme configuration
│       └── components/              // 📁 PURPOSE: Component styles
│
├── .env                             // 📄 PURPOSE: Environment variables
├── .env.example                     // 📄 PURPOSE: Example env file
├── package.json                     // 📄 PURPOSE: Dependencies
├── tailwind.config.js               // 📄 PURPOSE: Tailwind CSS config
├── vite.config.js                   // 📄 PURPOSE: Vite build tool config
└── README.md                        // 📄 PURPOSE: Documentation

```