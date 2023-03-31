const Footer = ()=>{
    return (
        <div className=" bg-[#1C1C1C]/90">
        <footer className="flex justify-between items-center text-white/40 p-7">
            <div >
                <p className="text-xs">&copy; 2023 ScoreBox</p>
            </div>
            <div>
               <ul className="flex justify-between items-center list-none text-xs">
                <li className="px-2">
                    <a href="">About</a>                    
                </li>
                <li className="px-2"><a href="">Support</a></li>
                <li className="px-2"><a href="">Contact</a></li>
               </ul>
            </div>
        </footer></div>
    )
}

export default Footer;