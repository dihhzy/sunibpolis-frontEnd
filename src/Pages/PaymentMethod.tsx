import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import './PaymentMethod.css';
import axios from 'axios';

interface PaymentMethod {
    paymentMethodId: number;
    paymentMethodType: string;
    paymentMethodName: string;
}

export function PaymentMethod() {
    const [paymentMethodData, setPaymentMethodData] = useState<PaymentMethod[]>([]);
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>('');

    useEffect(() => {
        axios.get('https://localhost:7234/api/PaymentMethod')
            .then(response => {
                const responseData = response.data.data;
                console.log('Payment Methods Data : ', responseData);
                setPaymentMethodData(responseData);
            })
            .catch(error => {
                console.error('Error fetching payment method:', error);
            });
    }, []);


    const handleOptionChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSelectedPaymentMethod(e.target.value);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Add your form submission logic here
    };

    const ButtonDisabled = !selectedPaymentMethod;
    const buttonColor = ButtonDisabled ? "grey" : "rgb(243, 182, 100)";

    console.log('Payment Methods: ', paymentMethodData);
    
    paymentMethodData.forEach((paymentMethod) => {
        console.log('Payment Method Name: ', paymentMethod.paymentMethodName);
    });

    return (
        <div className="main">
            <div className="kotak">
                <h2 className="judul">Payment Method</h2>
            </div>
            <form className="payment-form" onSubmit={handleSubmit} id="form-payment">
                <h2>Please Choose</h2>

                            <div className="payment-options">
                                {paymentMethodData.map((paymentMethod) => (
                                    <div key={paymentMethod.paymentMethodId}>
                                        <div className="payment">
                                            <input
                                                type="radio"
                                                name="paymentOption"
                                                onChange={(e: ChangeEvent<HTMLInputElement>) => handleOptionChange(e)}
                                            />
                                            <label>{paymentMethod.paymentMethodName}</label>
                                            {paymentMethod.paymentMethodName === 'Gopay' && (
                                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Gopay_logo.svg/462px-Gopay_logo.svg.png?20210531070158" alt="gopay logo" style={{ height: '25px' }}/>
                                            )}
                                            {paymentMethod.paymentMethodName === 'OVO' && (
                                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Logo_ovo_purple.svg/768px-Logo_ovo_purple.svg.png" alt="ovo logo"  style={{ height: '20px' }}/>
                                            )}
                                            {paymentMethod.paymentMethodName === 'BCA' && (
                                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bank_Central_Asia.svg/1199px-Bank_Central_Asia.svg.png" alt="bca logo" style={{ height: '25px' }}/>
                                            )}

                                            {paymentMethod.paymentMethodName === 'Shopee-pay' && (
                                                <img src="https://ww2.freelogovectors.net/wp-content/uploads/2023/10/shoppeepay_logo-freelogovectors.net_-640x400.png?lossy=1&ssl=1&fit=640%2C400" alt="shopee logo" style={{ height: '45px' }}/>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                <button id="pay-button" type="submit" disabled={ButtonDisabled} style={{ backgroundColor: buttonColor }}>
                    Bayar
                </button>
            </form>
        </div>
    );
}
