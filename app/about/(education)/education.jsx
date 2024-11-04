import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal } from "@fortawesome/free-solid-svg-icons";

import Me from "@/public/img/me.jpg";

export default function Education() {
	return (
		<section className="grid gap-8 md:gap-12">
			<div className="text-center space-y-2">
				<h1 className="text-3xl md:text-4xl font-bold tracking-tighter">
					Education
				</h1>
				<p className="text-muted-foreground max-w-[800px] mx-auto">
					Get to know more about my educational background.
				</p>
			</div>
			<div className="grid gap-8 md:gap-12">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div className="px-5">
						<div className="font-medium text-lg">
							2022 - Present
						</div>
						<div>
							<h2 className="font-semibold text-xl">
								Universitas Bina Nusantara
							</h2>
							<h3 className="text-md font-normal mb-3">
								S1 Teknik Informatika | Computer Science
							</h3>
							<div className="grid gap-4 mb-4 grayscale hover:grayscale-0 transition-all ease duration-300">
								<Image
									src={Me}
									width={400}
									height={225}
									alt="University"
									className="rounded-lg"
									style={{
										aspectRatio: "16/9",
										objectFit: "cover",
										width: "100%",
									}}
								/>
							</div>
							<div className="flex items-center gap-2">
								<p className="text-justify">
									Aspiring to be a front end developer, I am
									currently pursuing a bachelor&rsquo;s degree
									in computer science at Universitas Bina Nusantara. 
									Fascinated by the world of
									technology, I am eager to learn and explore
									new things in the field of computer science.
								</p>
							</div>
						</div>
					</div>
					<div className="flex flex-col justify-start ">
					</div>
				</div>
			</div>
		</section>
	);
}

// function GraduationCapIcon(props) {
// 	return (
// 		<svg
// 			{...props}
// 			xmlns="http://www.w3.org/2000/svg"
// 			width="24"
// 			height="24"
// 			viewBox="0 0 24 24"
// 			fill="none"
// 			stroke="currentColor"
// 			strokeWidth="2"
// 			strokeLinecap="round"
// 			strokeLinejoin="round">
// 			<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
// 			<path d="M22 10v6" />
// 			<path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
// 		</svg>
// 	);
// }
