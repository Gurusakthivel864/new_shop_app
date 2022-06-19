import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51LBiQnSIZQNdA8ovx2AjmCo6z49yOALPwLPnDDMcUEP4j6PRfpYxCF96ZT8vtr81uzX4qO8qu5h0eK6dmiBhtyS400nnxGMGgx';

    const onToken = token =>{
        console.log(token);
        alert('Payment Successfull.Happy Shopping!');
    }

    return(
        <StripeCheckout 
                label="Pay now"
                name="Myntra Clothing Ltd."
                billingAddress
                shippingAddress
                description={`Your total is $${price}`}
                amount = {priceForStripe}
                panelLabel='Pay now'
                image="https://svgshare.com/i/iP7.svg"
                token={onToken}
                stripeKey={publishableKey}
        />
    );
}

export default StripeCheckoutButton;
