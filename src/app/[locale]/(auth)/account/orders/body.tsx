"use client"

import { AuthContext } from '@/providers/AuthProvider';
import { CURRENCY } from '@/utils/constants';
import { formatCurrency } from '@/utils/Helpers';
import { Edit } from '@helpdice/icons';
import { Account, Accounting, Payment } from '@helpdice/sdk';
import { Badge, Button, FormWrapper, Input, Text } from '@helpdice/ui';
import { format } from 'date-fns';
import { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export default function OrderBody() {
    const currentUser = useContext(AuthContext);
    const [address, setAddress] = useState<{
        permanent_house?: string;
        permanent_city?: string;
        permanent_state?: string;
        permanent_pincode?: string;
    }>();
    
    const [orders, setOrders] = useState([]);
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleCancelClick = () => {
        setIsEditing(false);
    };

    useEffect(() => {
        try {
            if (currentUser?.info?._id) {
                Account.profile(currentUser?.info?._id).then((data) => {
                    // console.log(data);
                    const profile = data.data.profile;
                    setAddress(profile.permanent_address);
                })
            }
            Accounting.invoices().then((data) => {
                setOrders(data.data.invoices);
            });
        } catch (err) {
            console.log(err);
        }
    }, [])

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-3xl font-semibold text-gray-900 dark:text-gray-300 mb-10">Order History</h1>
            {/* Address Section */}
            <div className="rounded-lg mb-8">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-500 mb-4">Delivery Address</h2>
                {!isEditing ? (
                    <div>
                        {address ? (
                            <p className="text-gray-600">{address.permanent_house}, {address.permanent_city}, {address.permanent_state} {address.permanent_pincode}</p>
                        ) : (
                            <p className="text-gray-600">Add your address for delivery, if applicable</p>
                        )}
                        <Button
                            scale={2 / 3}
                            auto
                            px={0.6}
                            icon={<Edit />}
                            onClick={handleEditClick}
                            // className="mt-4 text-blue-600 dark:text-gray-400 hover:text-blue-800 font-semibold"
                        />
                    </div>
                ) : (
                    <div>
                        <FormWrapper
                            initialValues={{
                                address: '',
                                city: '',
                                state: '',
                                zip: ''
                            }}
                            onSubmit={async (values) => {
                                console.log(values);
                                return Account.updateProfile({
                                    id: currentUser?.info._id,
                                    permanent_address: {
                                        permanent_house: values.address,
                                        permanent_city: values.city,
                                        permanent_state: values.state,
                                        permanent_pincode: values.zip
                                    }
                                }, {
                                    onFetching() {
                                        toast.info('Updating Address...');
                                    },
                                    onError(_error) {

                                    },
                                    onSuccess(data) {
                                        // const user = data.data.user;
                                        toast.success('Address Updated!!');
                                        // console.log(Auth.getUserFromStrorage());
                                    },
                                })
                            }}
                        >
                            {({ handleSubmit, handleChange, values, isSubmitting }) => (
                                <form onSubmit={handleSubmit}>
                                    <div style={{ gap: 5, display: 'flex', flexDirection: 'column' }}>
                                        <Input
                                            type="text"
                                            name="address"
                                            label="Address"
                                            width="100%"
                                            className="dark:text-white"
                                            value={values.address}
                                            onChange={handleChange}
                                            placeholder="Address"
                                        />
                                        <Input
                                            type="text"
                                            name="city"
                                            label="City"
                                            width="100%"
                                            value={values.city}
                                            onChange={handleChange}
                                            placeholder="City"
                                        />
                                        <Input
                                            type="text"
                                            name="state"
                                            label="State"
                                            width="100%"
                                            value={values.state}
                                            onChange={handleChange}
                                            placeholder="State"
                                        />
                                        <Input
                                            type="text"
                                            name="zip"
                                            label="Pincode"
                                            width="100%"
                                            value={values.zip}
                                            onChange={handleChange}
                                            placeholder="ZIP Code"
                                        />
                                    </div>
                                    <div className="flex gap-3 mt-6">
                                        <Button
                                            scale={2 / 3}
                                            auto
                                            px={1.2}
                                            type="submit"
                                            color="secondary"
                                            className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700"
                                        >
                                            Save
                                        </Button>
                                        <Button
                                            scale={2 / 3}
                                            auto
                                            px={1.2}
                                            onClick={handleCancelClick}
                                            className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700"
                                        >
                                            Cancel
                                        </Button>
                                    </div>
                                </form>
                            )}
                        </FormWrapper>
                    </div>
                )}
            </div>

            {/* Recent Orders Section */}
            <div className="rounded-lg">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-500 mb-4">Orders</h2>
                <ul className="space-y-4">
                    {orders?.map((order: any) => (
                        <li key={order._id} className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                            <Text font={0.9} span mr={1.2}>{order.items?.length} Items</Text> <Badge px={1.5}>{order.paid ? 'Paid' : order.status}</Badge>
                            <div className="flex justify-between">
                                <div>
                                    <Text mb={0.2} className="text-sm text-gray-600">Ordered On : {format(new Date(order.date), 'MMM dd, yyyy')}</Text>
                                    <ul>
                                        {/* {console.log(order.items)} */}
                                        {order.items.map((itm: any) => (
                                            <li>{itm.name}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="flex flex-col w-40 items-center gap-2">
                                    <Text mt={0} mb={0.2} className="text-lg font-semibold">{formatCurrency(order.grandTotal, CURRENCY)}</Text>
                                    {!order.paid && (
                                        <Button onClick={() => Payment.start({
                                            entity: {},
                                            entityId: '',
                                            orderId: '',
                                            paymentType: 'Online',
                                            paymentService: 'Razor Pay',
                                            currency: 'INR',
                                            amount: Number(order.grandTotal)
                                        }, {
                                            config: null,
                                            onLoading: () => {},
                                            onError: (error: any) => {
                                                console.log(error);
                                            },
                                            onSuccess(data: any) {
                                                Accounting.submitInvoice({
                                                    ids: [order._id], type: 'SalesInvoice', isPOS: true, paymentMethod: 'Online', paymentInfo: {
                                                        gateway: 'Razor Pay',
                                                        orderId: data.razorpay_order_id,
                                                        paymentId: data.razorpay_payment_id
                                                    }
                                                }, {
                                                    onFetching() {
                                                        toast.info('Verifying Payment...');
                                                    },
                                                    onError() {
                                                        toast.error('Error While Verifying...');
                                                    },
                                                    onSuccess() {
                                                        toast.success('Verification Complete!');
                                                    },
                                                });
                                                console.log(data);
                                            },
                                            onSettled() {
                                                
                                            },
                                        })} color="secondary" scale={2 / 3} auto>Pay</Button>
                                    )}
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
