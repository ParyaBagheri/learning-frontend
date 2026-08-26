'use client' 
import style from '@/app/contact.module.css';
import { useState } from 'react';

export default function Contact() {
    const [values, setValues] = useState({name: "", email:"", phone:"", birthday:""});
    const [errors, setErrors] = useState({});

    function handleChange(e){
        const {name, value} = e.target;
        setValues( (prev) => ({...prev, [name] : value}));
    }

    function validate(values){
        const errs = {};
        if(!values.name.trim()) errs.name = "Please enter your name.";
        const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ ;
        if (!validEmail.test(values.email)) errs.email = "Enter a valid Email.";
        if (values.phone.length != 10) errs.phone = "Enter a valid cell number.";
        if (!values.birthday) {
            errs.birthday = "Please enter your date of birth";
        } else {
            const userBirthday = new Date(values.birthday);
            const today = new Date();

            let age = today.getFullYear() - userBirthday.getFullYear();
            if (age < 10) errs.birthday = "You are too young little one ";
        }
        return errs;

    }
    function handleSubmit(e){
        e.preventDefault();
        const errs = validate(values);
        setErrors(errs);
    }

    return (
        <section className={style.contact} id="contact">
            <h4>Contact</h4>
            <p>
                Share your contact info with us
            </p>
            <form className={style.contactForm} onSubmit={ handleSubmit }>
                <label htmlFor="name"> Your Name : </label>
                <input id="name" name="name" type="text" onInput={ handleChange }/>
                <br></br>
                {errors && <span>{errors.name}</span>}
                 
                <label htmlFor="email"> Your Email : </label>
                <input id="email" name="email" type="email" onInput={ handleChange }/>
                <br></br>
                {errors && <span>{errors.email}</span>}

                <label htmlFor="phone"> Your Phone Number : </label>
                <input id="phone" name="phone" type="tel" onInput={handleChange}/>
                <br></br>
                {errors && <span>{errors.phone}</span>}

                <label htmlFor="birthday"> Your date of birth : </label>
                <input id="birthday" name="birthday" type="date" onChange={handleChange}/>
                <br></br>
                {errors && <span>{errors.birthday} </span>}
                <br></br>

                <button type="submit"> Submit </button>

            </form>
        </section>
    );
}