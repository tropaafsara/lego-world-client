import React, { useContext, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';


const A = () => {
    const { user } = useContext(AuthContext);

    const [selects, setSelects] = useState();

    const handleBookService = event => {
        event.preventDefault();
        const form = event.target;
        const namee = form.namee.value;
        const seller = form.sellerName.value;
        const img = form.img.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const email = user?.email;
        const booking = {
            customerName: seller,
            email,
            img: img,
            toyName: namee,
            price: price,
            availableQuantity : quantity,
            description : description,
            rating : rating,
            category: selects
        }

        console.log(booking);

        fetch('https://lego-world-server-tasnimafsara12-gmailcom.vercel.app/bookings', {
            method: 'POST', 
            headers: {
                'content-type': 'application/json'
            }, 
            body: JSON.stringify(booking) //from 34
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Toy Added',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
            form.reset()
        })
    }
    return (
        <div>
            <div >
                <h2 className='text-center text-3xl'>Add a Toy </h2>
                <form onSubmit={handleBookService}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Picture Url</span>
                            </label>
                            <input type="text" name="img" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Toy Name</span>
                            </label>
                            <input type="text" name="namee" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller Name</span>
                            </label>
                            <input type="text" defaultValue={user?.displayName} name="sellerName" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <select className='border border-black' value={selects} onChange={event=>setSelects(event.target.value)} id="">
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
                            <input type="number" name="price" className="input input-bordered" placeholder='$' />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <input type="number" name="quantity" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="number" name="rating" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Detail Description</span>
                            </label>
                            <input type="text" name="description" className="input input-bordered" />
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-ghost bg-sky-600 hover:bg-cyan-500 font-bold text-white btn-block" type="submit" value="Add a Toy" />
                    </div>
                </form>
                <div className="card-body">

                </div>
            </div>
        </div>

    );
};

export default A;