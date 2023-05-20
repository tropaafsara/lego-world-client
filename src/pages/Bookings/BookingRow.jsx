
import UpdateModal from '../UpdateModal/UpdateModal'
const BookingRow = ({ booking, handleDelete }) => {
    const { _id, toyName, price, img,  availableQuantity, rating } = booking;
    

    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="avatar">
                    <div className="rounded w-24 h-24">
                        {img && <img src={img} alt="Avatar Tailwind CSS Component" />}
                    </div>
                </div>
            </td>
            <td>
                {toyName}
            </td>
            <td>${price}</td>
            <td>{availableQuantity}</td>
            <td>{rating}</td>
            <th>
                <label htmlFor="my-modal-3" className="btn">Update</label>
                
                <UpdateModal
                booking={booking}
                ></UpdateModal>
                
            </th>
        </tr>
    );
};

export default BookingRow;