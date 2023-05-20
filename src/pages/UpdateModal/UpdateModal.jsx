import React, { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

const UpdateModal = ({booking}) => {

    
    const { user } = useContext(AuthContext);
    const [selects, setSelects] = useState();


    const { toyName, price, img, availableQuantity, rating, description, customerName, category } = booking;
    // console.log(booking);

    const handleUpdate = event => {
        event.preventDefault();
        
        // const form = event.target;
        // const namee = form.namee.value;
        // const seller = form.sellerName.value;
        // const img = form.img.value;
        // const price = form.price.value;
        // const quantity = form.quantity.value;
        // const description = form.description.value;
        // const rating = form.rating.value;
        // const email = user?.email;
        // const update = {
        //     customerName: seller,
        //     email,
        //     img: img,
        //     toyName: namee,
        //     price: price,
        //     availableQuantity: quantity,
        //     description: description,
        //     rating: rating,
        //     category: selects
        // }

        // console.log(update);

        // fetch('http://localhost:9000/bookings', {
        //     method: 'PUT',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(update) 
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
                // if (data.modifiedCount > 0) {
                //     Swal.fire({
                //         title: 'Success!',
                //         text: 'Coffee Updated Successfully',
                //         icon: 'success',
                //         confirmButtonText: 'Cool'
                //     })
        //     })
    }
    return (

        <div>

            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div>
                <h2 className='text-center text-3xl'>Update Toy </h2>
                <form onSubmit={handleUpdate}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Picture Url</span>
                            </label>
                            <input type="text" name="img" defaultValue={img} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Toy Name</span>
                            </label>
                            <input type="text" name="namee" defaultValue={toyName}  className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller Name</span>
                            </label>
                            <input type="text"  name="sellerName" defaultValue={customerName} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <select defaultValue={category} value={selects} onChange={event=>setSelects(event.target.value)} id="">
                                <option>Choose a Category</option>
                                <option value="lego-city">Lego-City</option>
                                <option value="lego-architecture">Lego-Architecture</option>
                                <option value="lego-cars">Lego-Cars</option>
                            </select>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller Email</span>
                            </label>
                            <input type="text" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" />
                        </div>



                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="number" name="price" defaultValue={price}  className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <input type="number" name="quantity" defaultValue={availableQuantity} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="text" name="rating" defaultValue={rating} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Detail Description</span>
                            </label>
                            <input type="text" name="description" defaultValue={description} className="input input-bordered" />
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-primary btn-block" type="submit" value="Update" />
                    </div>
                </form>
                <div className="card-body">

                </div>
            </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateModal;