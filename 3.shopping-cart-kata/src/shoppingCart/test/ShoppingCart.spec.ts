import { ShoppingCart } from "../ShoppingCart";

describe("Cart tests!", () => {
    let cart: ShoppingCart = null;

    beforeEach(() => {
        cart = new ShoppingCart();
    });

    describe("when adding items to the cart", () => {
        test("it should add an apple", () => {
            cart.addItem("apple");
            expect(cart.getTotal()).toBe(0.20);
        });

        test("it should not add an unknown product", () => {
            expect(cart.addItem.bind(cart, "Pluto")).toThrow("Product does not exist!");
            expect(cart.getTotal()).toBe(0);
        });

        test("it should add two apples", () => {
            cart.addItem("apple");
            cart.addItem("apple");
            expect(cart.getTotal()).toBe(0.40);
        });

        test("it should add an orange", () => {
            cart.addItem("orange");
            expect(cart.getTotal()).toBe(0.40);
        });

        test("it should add an apple and an orange", () => {
            cart.addItem("apple");
            cart.addItem("orange");
            expect(cart.getTotal()).toBe(0.60);
        });

        test("it should add a banana", () => {
            cart.addItem("banana");
            expect(cart.getTotal()).toBe(0.70);
        });

        test("it should add a pineapple", () => {
            cart.addItem("pineapple");
            expect(cart.getTotal()).toBe(0.80);
        });

        test("it should add a cookie", () => {
            cart.addItem("cookie");
            expect(cart.getTotal()).toBe(1.23);
        });

        describe("and dealing with 'Buy One Get One Free'(BOGOF) offers on oranges", () => {
            test("it it should apply the BOGOF for 2 oranges", () => {
                cart.addItem("orange");
                cart.addItem("orange");
                expect(cart.getTotal()).toBe(0.40);
            });

            test("it should apply the BOGOF on 2 oranges and an apple", () => {
                cart.addItem("orange");
                cart.addItem("apple");
                cart.addItem("orange");
                expect(cart.getTotal()).toBe(0.60);
            });

            test("it should apply BOGOF for 3 oranges", () => {
                cart.addItem("orange");
                cart.addItem("orange");
                cart.addItem("orange");
                expect(cart.getTotal()).toBe(0.80);
            });

            test("it should apply BOGOF twice for 4 oranges", () => {
                cart.addItem("orange");
                cart.addItem("orange");
                cart.addItem("orange");
                cart.addItem("orange");
                expect(cart.getTotal()).toBe(0.80);
            });
        });

        describe("and dealing with 'Buy One Get One Half-Price' (BOGOHP) offers on cookies", () => {
            test("it should apply BOGOHP for 2 cookies", () => {
                cart.addItem("cookie");
                cart.addItem("apple");
                cart.addItem("cookie");
                expect(cart.getTotal()).toBe(2.05);
            });
        });

        describe("and dealing with 'Buy One Get One Free, Cheapest Free' (BOGOF-CF) offers on pineapples and bananas", () => {
            test("it should apply BOGOF-CF for a pineapple and banana", () => {
                cart.addItem("pineapple");
                cart.addItem("banana");
                expect(cart.getTotal()).toBe(0.80);
            });

            test("it should apply BOGOF-CF for a pineapple, banana and banana", () => {
                cart.addItem("pineapple");
                cart.addItem("banana");
                cart.addItem("banana");
                expect(cart.getTotal()).toBe(1.5);
            });

            test("it should apply BOGOF-CF and BOGOHP", () => {
                cart.addItem("pineapple");
                cart.addItem("banana");
                cart.addItem("cookie");
                cart.addItem("cookie");
                expect(cart.getTotal()).toBe(2.65);
            });
        });
    });

    describe("when removing items from the cart", () => {
        test("it should remove an apple", () => {
            cart.addItem("apple");
            cart.removeItem("apple");
            expect(cart.getTotal()).toBe(0);
        });

        test("it should remove an orange", () => {
            cart.addItem("orange");
            cart.removeItem("orange");
            expect(cart.getTotal()).toBe(0);
        });

        test("it should remove one apple", () => {
            cart.addItem("orange");
            cart.addItem("apple");
            cart.addItem("apple");
            cart.removeItem("apple");
            expect(cart.getTotal()).toBe(0.60);
        });
    });
});