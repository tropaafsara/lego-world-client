import React, { useContext, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { useForm } from "react-hook-form";


const A = () => {
    const { user } = useContext(AuthContext);



    // const {
    //     register,
    //     handleSubmit,
    //     watch,
    //     formState: { errors },
    //   } = useForm();
    //   const onSubmit = (data) =>console.log(data);


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

        fetch('http://localhost:9000/bookings', {
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
                alert('service book successfully')
            }
        })
    }
    return (
        <div>
            <div>
                <h2 className='text-center text-3xl'>Add a Toy </h2>
                <form onSubmit={handleBookService}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                            <select value={selects} onChange={event=>setSelects(event.target.value)} id="">
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
                            <input type="number" name="price" className="input input-bordered" />
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
                            <input type="text" name="rating" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Detail Description</span>
                            </label>
                            <input type="text" name="description" className="input input-bordered" />
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-primary btn-block" type="submit" value="Add a Toy" />
                    </div>
                </form>
                <div className="card-body">

                </div>
            </div>
        </div>












    //          <div className="">
    //   <div>
    //     <div className="col-md-8">
            
    //       <form onSubmit={handleSubmit(onSubmit)}>
    //         {errors.exampleRequired && <span>This field is required</span>}
    //         <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
    //         <input
             
    //           className="text-input"
    //           {...register("image")}
    //           placeholder="photo url"
    //           type="url"
    //         //   defaultValue="https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=600"
    //         />
            
    //         <input
            
    //           className="text-input"
    //           {...register("salary", { required: true })}
    //           placeholder="Toy Name"
    //           type="name"
    //         />
    //         <input
            
    //           className="text-input"
    //           {...register("salary", { required: true })}
    //           placeholder="Seller Name"
    //           defaultValue={user?.displayName}
    //         />
    //         <input
            
    //           className="text-input"
    //           {...register("salary", { required: true })}
    //           value={user?.email}
    //           placeholder="Seller Email"
              
    //         //   defaultValue={user?.email}
    //         />
    //         <input
    //           className="text-input"
    //           {...register("quantity", { required: true })}
    //           placeholder="Quantity"
    //           type="number"
    //         />
    //         <input
    //           className="text-input"
    //           {...register("price", { required: true })}
    //           placeholder="Price"
    //           type="number"
    //         />
    //         <select className="text-input" {...register("category")}>
    //           <option value="Engineering">Sub Category</option>
    //           <option value="Editor">Lego City</option>
    //           <option value="writer">Lego Cars</option>
    //           <option value="Developer">Lego Star-Wars</option>
    //         </select>
            
    //         <input
    //           className="text-input"
    //           value={user?.email}
    //           {...register("postedBy")}
    //           placeholder="your email"
    //           type="email"
    //         />
    //                     <input
    //           className="text-input"
    //           {...register("description")}
    //           placeholder="description"
    //         />
    //         </div>
    //         <input className="submit-btn" value="Post Job" type="submit" />
    //       </form>
    //     </div>
    //     <div className="col-md-4">
    //       <img
    //         className="w-100"
    //         // src="https://i.ibb.co/rthZ75K/pngtree-job-vacancy-with-join-our-team-recruitment-vector-design-png-image-6419066-removebg-preview.png"
    //         alt=""
    //       />
    //     </div>
    //   </div>
    // </div>
    );
};

export default A;