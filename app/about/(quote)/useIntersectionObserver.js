import { useEffect, useState, useRef } from "react";

export function useIntersectionObserver() {
	const [isIntersecting, setIsIntersecting] = useState(false);
	const ref = useRef(null);

	useEffect(() => {
		const currentRef = ref.current; // Simpan nilai ref.current ke dalam variabel lokal
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsIntersecting(entry.isIntersecting);
			},
			{
				root: null,
				rootMargin: "0px",
				threshold: 0.1,
			}
		);

		if (currentRef) { // Gunakan currentRef
			observer.observe(currentRef);
		}

		return () => {
			if (currentRef) { // Gunakan currentRef
				observer.unobserve(currentRef);
			}
		};
	}, []);

	return [ref, isIntersecting];
}
