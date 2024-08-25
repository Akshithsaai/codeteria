import React from "react";

const SpecialFooter = () => {
	return (
		<footer className="lg:px-24 w-full bottom-0 footer footer-center bg-[#e9e5fc] text-base-content p-4 text-lg ">
			<aside className="w-full flex flex-col lg:flex-row justify-between">
				<p>
					Copyright © {new Date().getFullYear()} - All right reserved by Codeteria pvt ltd
				</p>
                <p> By Arjun Atapadkar</p>
			</aside>
		</footer>
	);
};

export default SpecialFooter;
