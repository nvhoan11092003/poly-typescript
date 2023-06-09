
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import { updateForm, updateSchema } from '../models';
import { create_product } from '../api/product';



const ProductCreate = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm<updateForm>({
        resolver: yupResolver(updateSchema),
        // defaultValues: {
        //     name: "Iphonex",
        //     price: 1000,
        //     original_price: 100,
        //     description: "mo tar"
        // }
    })
    const onSubmit = async (data: updateForm) => {
        try {
            const response = await create_product(data)
            console.log(response);
            navigate('/admin')
        } catch (err) {
            console.log(err);
        }

    }

    // useEffect(() => {
    //     if (id) {
    //         fetchProductById(id)
    //     }
    // }, [])

    return <section className="bg-gray-100 w-full">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg border:px-8">
            <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg border:grid-cols-5">
                <div className="lg border:col-span-2 lg border:py-12">
                    tạo mới sản phẩm
                </div>

                <div className="rounded-lg border bg-white p-8 shadow-lg lg border:col-span-3 lg border:p-12">
                    <form action="" className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label>Name</label>
                            <input
                                className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                                {...register("name")}
                            />
                            <p className='text-red-600 text-[10px]'>
                                {errors.name && errors.name.message}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                                <label>Gía</label>
                                <input
                                    className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                                    {...register("price")}
                                    type="number"
                                />
                                <p className='text-red-600 text-[10px]'>
                                    {errors.price && errors.price.message}
                                </p>
                            </div>

                            {/* <div>
                                <label>Giảm giá</label>
                                <input
                                    className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                                    {...register("original_price")}
                                    type="number"
                                />
                                <p className='text-red-600 text-[10px]'>
                                    {errors.original_price && errors.original_price.message}
                                </p>
                            </div> */}
                        </div>


                        <div>
                            <label>Mô tả</label>

                            <textarea
                                className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                                {...register("description")}
                            ></textarea>
                            <p className='text-red-600 text-[10px]'>
                                {errors.description && errors.description.message}
                            </p>
                        </div>

                        <div className="mt-4">
                            <button
                                type="submit"
                                className="inline-block w-full rounded-lg border bg-black px-5 py-3 font-medium text-white sm:w-auto"
                            >
                                Tạo mới
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
}

export default ProductCreate