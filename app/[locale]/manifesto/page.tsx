import Manifesto from "@/components/Manifesto";
import SectionContainer from "@/components/SectionContainer";
import AnimatedBackground from "@/components/AnimatedBackground";

export default async function Page({ params: { locale } }) {
	return (
		<>
			<div className="mt-48">
				<SectionContainer>
					<Manifesto params={{ locale }} />
				</SectionContainer>
				<AnimatedBackground />
			</div>
		</>
	);
}
