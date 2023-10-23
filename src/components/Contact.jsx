

const Contact = () => {
    return (
        <div className="lg:px-12 px-4 mt-20" id="contact">
            <div className="text-headingColor text-center mb-20">
                <p className="text-xl font-semibold mb-5">Get In Touch</p>
                <h2 className="md:text-5xl text-4xl font-bold">Contact Me</h2>
                <p className="mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>



            {/* form disini */}


            <div className="md:w-2/3 mx-auto mb-20">
                <form>
                    <div className="flex flex-col sm:flex-row gap-8 items-center mb-8">
                        <div className="sm:w-1/2 w-full">
                            <label htmlFor="fName" className="text-base text-headingcolor w-full">First Name</label>
                            <input type="text" name="fName" id="fName" className="block border border-primary rounded-lg py-2 mt-2 w-full" />
                        </div>
                        <div className="sm:w-1/2 w-full">
                            <label htmlFor="LName" className="text-base text-headingColor w-full">Last Name</label>
                            <input type="text" name="LName" id="LName" className="block border border-primary rounded-lg py-2 mt-2 w-full" />
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-8 items-center mb-8">
                        <div className="sm:w-1/2 w-full">
                            <label htmlFor="email" className="text-base text-headingcolor w-full">Email</label>
                            <input type="text" name="email" id="email" className="block border border-primary rounded-lg py-2 mt-2 w-full" />
                        </div>
                        <div className="sm:w-1/2 w-full">
                            <label htmlFor="phone" className="text-base text-headingColor w-full">Phone Number</label>
                            <input type="text" name="phone" id="phone" className="block border border-primary rounded-lg py-2 mt-2 w-full" />
                        </div>
                    </div>

                    {/* Input Pilihan */}

                    <div className="w-full mb-8">
                        <label htmlFor="options" className="text-base text-headingColor w-full">Choose a Topic</label>
                        <select name="options" id="options" className="block border border-primary rounded-lg py-2 mt-2 w-full px-2">
                            <option value="0">Select One...</option>
                            <option value="1">Web Design</option>
                            <option value="2">UI/UX</option>
                            <option value="3">Web Development</option>
                            <option value="4">Graphic Design</option>
                        </select>
                    </div>
                    {/* text area */}

                    <div className="w-full mb-8">
                        <label htmlFor="message" className="text-base text-headingColor w-full">Message</label>
                        <textarea name="message" id="message" cols="30" rows="5" placeholder="Tap Your Message" className="block border border-primary rounded-lg py-2 mt-2 w-full px-2"></textarea>
                    </div>

                    {/* accepting terms */}

                    <div>
                        <input type="checkbox" name="agree" id="agree" />
                        <label htmlFor="agree" className="text-base text-headingColor w-full ml-3 items-center">Accept the terms</label>
                    </div>

                    {/* btn submit */}
                    <div className="w-36 mx-auto mt-8">
                        <input type="submit" value="Submit" className="btn-primary bg-primary py-3 px-8 cursor-pointer w-full" />
                    </div>
                    
                </form>
            </div>
        </div>
    );
}

export default Contact;