import CartPage from "../pages/cartPage";
import DetailPage from "../pages/detailPage";
import "../support/loginBeforeEach";

const cartPage = new CartPage();
const detailPage = new DetailPage();

describe("Make a purchase", () => {
  it("Validate add some products to cart", () => {
    cartPage.validateAddingRandomProductToCart();
  });

  it("Validate add some products to cart", () => {
    cartPage.validateAddingRandomProductToCart();
  });

  it("Validate add some products to cart", () => {
    cartPage.validateAddingRandomProductToCart();
  });

  it("Validate total prices are equal", () => {
    cy.visit("cart.html");
    detailPage.validateTotalPrices();
  });

  it("Validate purchase is successful", () => {
    cy.visit("cart.html");
    cartPage.validatePlaceOrder();
  });
});
