import { useState } from "react";

const Contact = () => {
    // State
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const validate = () => {
        const newErrors: { name?: string; email?: string } = {};
        if (!form.name.trim()) newErrors.name = "Name is required.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
            newErrors.email = "Enter a valid email address.";
        return newErrors;
    };

    const handleSubmit = () => {
        const validationErrors = validate();

        if (Object.keys(validationErrors).length > 0)
        {
            setErrors(validationErrors);

            return;
        }

        setSubmitted(true);
    };

    // if Submitted
    if (submitted)
    {
        return <section className="text-4xl font-bold sm:text-5xl sm:tracking-tight text-white max-w-3xl mx-auto flex flex-col items-center">
                <span className="text-lime-500">✓</span>
                <h1>Message sent!</h1>
                <p>Thanks, {form.name}!</p>
            </section>;
    }

    // 
    return (
        <section id="contact" className="text-white max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold sm:truncate sm:text-5xl sm:tracking-tight">Contact</h1>

            <form className="flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" value={form.name} onChange={handleChange} className="bg-slate-800 border border-slate-600 rounded-md px-3 py-2 text-white w-full"/>
                {errors.name && <p>{errors.name}</p>}

                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" value={form.email} onChange={handleChange} className="bg-slate-800 border border-slate-600 rounded-md px-3 py-2 text-white w-full"/>
                {errors.email && <p>{errors.email}</p>}

                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" value={form.message} onChange={handleChange} className="bg-slate-800 border border-slate-600 rounded-md px-3 py-2 text-white w-full"></textarea>

                <button type="submit" className="rounded-md bg-purple-600 shadow-md">Send</button>
            </form>
        </section>
    );
};

export default Contact;