import React, { useEffect, useState } from 'react'




const ContactCard = () => {

    const [copied, setCopied] = useState(true);

    function copyText() {
        const text = "Hello, Virendra someone want to contact you!";
        navigator.clipboard.writeText(text)
            .then(() => console.log("Copied!"))
            .catch(err => alert("Failed to copy"));
    }

    function handleCopy() {
        copyText();
        setCopied(false);
        setTimeout(() => {
            setCopied(true);
        }, 3000);
    }



    return (
        <div  onClick={handleCopy} className=' h-fit text-center'>
                {
                    copied ? (
                        <div>
                            {/* svg */}
                            <div className='text-[60px] text-[#6745FF] font-bold '>
                                <p className='transition-transform duration-300 group-hover:-rotate-12 group-hover:-translate-y-5 '>{'\u{1F4E8}'}</p>
                            </div>

                            {/* middle */}
                            <div className='text-blue-500 font-bold duration-300 group-hover:text-xl'>
                                <p>Want to contact me?</p>
                            </div>

                            {/* bottom */}
                            <div>
                                <p>Tap to copy my email</p>
                            </div>
                        </div>
                    ) : (
                        <div>
                            {/* svg */}
                            < div className='text-[59px] text-[#6745FF] font-bold'>
                                <p>{'\u{1F48C}'}</p>
                            </div>

                            {/* middle */}
                            <div className='text-blue-500 font-bold'>
                                <p>Email copied!</p>
                            </div>

                            {/* bottom */}
                            <div>
                                <p>(now send that email)</p>
                            </div>
                        </div>    
                    )
                }
        </div >
    )
}

export default ContactCard
