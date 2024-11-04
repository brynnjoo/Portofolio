export default function Experience() {
	return (
		<section className="grid gap-8 md:gap-12">
			<div className="relative after:absolute after:inset-y-2 after:w-1 after:bg-gray-700 after:left-[-4px] md:after:left-1 lg:after:left-2 xl:after:left-3 grid gap-8 md:gap-12 pl-6 md:pl-8">
				<div className="grid gap-4 relative">
					<div className="aspect-square w-5 bg-black rounded-full absolute left-0 translate-x-[-29.5px] z-10" />
					<div className="font-medium text-lg">2023 - 2024</div>
					<div>
						<h3 className="font-semibold text-xl text-black">
							HIMTI Binus
						</h3>
						<h4 className=" font-light text-md mb-4">
							Responsi
						</h4>
						<p className="text-justify">
						I was part of the HIMTI response team, where I handled tasks such as preparing summaries, 
						documentations, hosting response sessions, and more
						</p>
						<div className="flex flex-wrap gap-2 mt-4 text-sm">
							<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
								Communication
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
