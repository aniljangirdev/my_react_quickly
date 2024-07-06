
function ShoppingCart({ items }) {
    const isCartEmpty = items.length === 0;
    return (
        <aside>
            <h1>Shopping Card</h1>
            {isCartEmpty ? (<p>card is empty! go for shopping!</p>) : (<p>card is not empty</p>)}
        </aside>
    );
}
export default ShoppingCart;    