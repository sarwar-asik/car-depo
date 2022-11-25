import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddCategories = () => {
    
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();

      const addCategories = (event) => {
        // toast('add')
        const categories={
            name:event.name,
            img:event.img,
            options:event.options,
        }
        console.log(categories);
        fetch(`http://localhost:3008/category`,{
            method:'POST',
            headers:{
                'content-type':"application/json"
            },
            body:JSON.stringify(categories)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            toast.success('added microbus')
            reset()
        })
       
      };
    
    return (
        <div className='max-w-md mx-auto my-5 rounded'>
            <h1> Your Categories </h1>
            <form onSubmit={handleSubmit(addCategories)} className="">
        {/* <Header /> */}

       
        <div className="form-control w-full my-3 ">
          <label className="label">
            <span className="label-text-alt">Category Name</span>
          </label>
          <input
            {...register("name")}
            aria-invalid={errors.name ? "true" : "false"}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full "
          />
          {errors.name && (
            <p className="text-red-400 text-sm" role="alert">
              {errors.name?.message}
            </p>
          )}
        </div>
        <div className="form-control w-full my-3 ">
          <label className="label">
            <span className="label-text-alt">Category Photo</span>
          </label>
          <input
            {...register("img")}
            aria-invalid={errors.img ? "true" : "false"}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full "
          />
          {errors.img && (
            <p className="text-red-400 text-sm" role="alert">
              {errors.img?.message}
            </p>
          )}
        </div>

        <select
          {...register("options", { required: true })}
          className="w-full py-3 my-2"
        >
          <option value="buyer">Buyers</option>
          <option value="seller">Seller</option>
        </select>


        <input
          type="submit"
          value="Add Categories"
          className="btn btn-active btn-primary w-full my-5"
        />
      </form>

        </div>
    );
};

export default AddCategories;