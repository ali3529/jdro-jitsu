var addToCartEvent = function (analytics, props) {
    analytics.track("ProductAdded", {
        testEvent: "Test Script",
        //   product_id:props?.product_id,
        //   url:props?.url,
        //   name:props?.item_name,
        //   price:props?.total_price,
        //   quantity:props?.quantity,
        //   image_url:props?.image_url,
        //   category_id:props?.category_id,
        // ...props,
    });
};
export var Events = {
    addToCartEvent: addToCartEvent,
};
