import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishablekey = 'pk_test_51IZxnhKssoF4RC8P7DWDkjyAdNpIYiSSr1LrmkVi9iKJRKAfxGPMNDtu5gDUtdlGMGRFPlnVyGXWkdbcRiQe6o6y00F1lCs902'
    
    const onToken = token => {
        console.log(token);
        alert('Payment Succesfull')
    }

    return (
        <StripeCheckout 
          label='Pay Now'
          name='CRWN Clothing Ltd.'
          billingAddress
          shippingAddress
          image='https://svgshare.com/i/CUz.svg'
          description={`Your total is ${price} `}
          amount={priceForStripe}
          panelLabel='Pay Now'
          token={onToken}
          stripeKey={publishablekey}
        />
    );
};

export default StripeCheckoutButton;
