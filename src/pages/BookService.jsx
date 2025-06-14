import 'react-datepicker/dist/react-datepicker.css';
import { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AuthContext from '../Authontication/Authcontext';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import DatePicker from 'react-datepicker';
import axios from 'axios';
import PageTitle from '../componenets/PageTitle';


const BookService = () => {

    const [startDate, setStartDate] = useState(new Date());


    const { _id, img, price, service, serviceProviderEmail, serviceProviderImg, serviceProviderName } = useLoaderData()

    const { user } = useContext(AuthContext)

    const queryClient = useQueryClient()

    const { mutateAsync } = useMutation({
        mutationFn: async serviceData => {
            await axios.post('https://serv-ease-server-rupongomez-rupongomezs-projects.vercel.app/', serviceData)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['services'] })
        }
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        const serviceProviderImg = user.photoURL
        const serviceProviderName = user.displayName


        const serviceId = _id
        const form = e.target
        const img = form.imageUrl.value
        const service = form.name.value
        const price = form.price.value
        const userEmail = user.email;
        const startingDate = startDate
        const serviceStatus = "Pending"

        // if (serviceProviderEmail === userEmail) return toast.error("You can't book your own service")


        // console.log(img, service, price, area);
        const serviceData = { img, service, price, serviceProviderEmail, serviceProviderImg, serviceProviderName, serviceStatus, serviceId, userEmail, startingDate };

        // axios.post('https://serv-ease-server-rupongomez-rupongomezs-projects.vercel.app/addService', serviceData)
        //     .then(res => console.log(res))

        try {
            await mutateAsync(serviceData)
            form.reset()
            toast.success('You have booked this service!')
        }
        catch (err) {
            toast.error(err.message)
        }

    }



    return (
        <div>
            <PageTitle title="Book Service"></PageTitle>
            <div className="card bg-base-100 mx-auto mt-14 w-full max-w-sm shrink-0 shadow-2xl ">
                <div className="card-body"></div>
                <h2 className='text-center font-bold text-2xl'>Book {service}</h2>
                <form onSubmit={handleSubmit} className="fieldset mx-auto w-9/12 p-6 ">
                    {/* Service Id*/}
                    <label className="label">Service ID</label>
                    <input value={_id} name='serviceId' type="text" className="input" />

                    {/* Service Name */}
                    <label className="label">Service Name</label>
                    <input value={service} name='name' type="text" className="input" placeholder="Service Name" />


                    {/* Image Url */}
                    <label className="label">Image Url</label>
                    <input value={img} name='imageUrl' type="url" className="input" placeholder="Image url here" />

                    {/* Service Provider Email */}
                    <label className="label">Service Provider Email</label>
                    <input value={serviceProviderEmail} name='providerEmail' type="text" className="input" placeholder="providerName" />


                    {/* Service Provider Name */}
                    <label className="label">Service Provider Name</label>
                    <input value={serviceProviderName} name='providerName' type="text" className="input" placeholder="providerName" />


                    {/* Current User Email */}
                    <label className="label">Your Email</label>
                    <input value={user?.email} name='providerEmail' type="text" className="input" placeholder="providerName" />

                    {/* Current User Name */}
                    <label className="label">Your Name</label>
                    <input value={user?.displayName} name='providerEmail' type="text" className="input" placeholder="providerName" />


                    {/* Service taking date */}
                    <div className='flex flex-col gap-2 '>
                        <label className='label'>Choose Your Preferred Starting Date</label>

                        {/* Date Picker Input Field */}
                        <DatePicker
                            className='border p-2 rounded-md'
                            selected={startDate}
                            onChange={date => setStartDate(date)}
                        />
                    </div>

                    {/* Special Instruction */}
                    <label className="label">Special Instruction  </label>
                    <input name='description' type="text" className="input" placeholder="Special Instruction ( address , area, customized service plan )" />


                    {/* Price */}
                    <label className="label">Price</label>
                    <input value={price} name='price' type="number" className="input" />

                    <button className="btn btn-neutral mt-4">Book service</button>
                </form>
            </div>
        </div>
    );
};

export default BookService;