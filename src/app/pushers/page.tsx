import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { BackButton } from "@/components/ui/back-button";

export const runtime = 'edge';

const companies = [
	{
		name: "Sandcan",
		logo: "/sandcanlogo-300.svg"
	},
	{
		name: "Liberty",
		logo: "/liberty-logo.svg"
	},
	{
		name: "Propx",
		logo: "/PropX+logo+WHITE+TM-2.svg"
	},
	{
		name: "ProFrac",
		logo: "/profraclogo.svg"
	}
];

const pusherSections = [
	{
		title: "Face Scan",
		icon: <Image src="/face-recognition.svg" alt="Face Scan" width={48} height={48} />,
		description: "Verify driver identity with facial recognition",
		href: "/pushers/face-scan"
	},
	...companies.map(company => ({
		title: `${company.name} Box Management`,
		icon: <Image src={company.logo} alt={`${company.name} Management`} width={48} height={48} />,
		description: `Manage and track boxes for ${company.name} operations`,
		href: `/pushers/${company.name.toLowerCase()}`
	}))
];

export default function PushersPage() {
	return (
		<main className="main-container">
			{/* Back Button */}
			<BackButton />

			{/* Title - Only visible on mobile */}
			<h1 className="text-3xl font-bold mb-8 px-4 md:hidden">
				Pusher Operations
			</h1>

			{/* Section Cards - Different layouts for mobile/desktop */}
			<div className="w-full max-w-[1400px] mx-auto px-4">
				{/* Mobile Layout */}
				<div className="md:hidden flex flex-col gap-4">
					{/* First Row - Full Width */}
					<Card className="group hover:shadow-2xl transition-all duration-300 border-none bg-card">
						<CardHeader className="text-center pb-2">
							<div className="flex justify-center items-center mb-2">{pusherSections[0].icon}</div>
							<CardTitle className="text-xl font-semibold">{pusherSections[0].title}</CardTitle>
						</CardHeader>
						<CardContent className="text-center text-sm text-muted-foreground">
							{pusherSections[0].description}
						</CardContent>
						<CardFooter className="justify-end pt-2 pr-4">
							<Button 
								variant="ghost" 
								size="icon" 
								className="rounded-full w-10 h-10 bg-primary text-primary-foreground hover:scale-110 transition-transform duration-200"
							>
								<ArrowRight className="h-4 w-4" />
							</Button>
						</CardFooter>
					</Card>

					{/* Company Cards - Grid */}
					<div className="grid grid-cols-2 gap-4">
						{pusherSections.slice(1).map((section) => (
							<Card 
								key={section.title} 
								className="group hover:shadow-2xl transition-all duration-300 border-none bg-card"
							>
								<CardHeader className="text-center pb-2">
									<div className="flex justify-center items-center mb-2">{section.icon}</div>
									<CardTitle className="text-lg font-semibold">{section.title}</CardTitle>
								</CardHeader>
								<CardContent className="text-center text-xs text-muted-foreground">
									{section.description}
								</CardContent>
								<CardFooter className="justify-end pt-2 pr-2">
									<Button 
										variant="ghost" 
										size="icon" 
										className="rounded-full w-8 h-8 bg-primary text-primary-foreground hover:scale-110 transition-transform duration-200"
									>
										<ArrowRight className="h-3 w-3" />
									</Button>
								</CardFooter>
							</Card>
						))}
					</div>
				</div>

				{/* Desktop Grid Layout - Hidden on Mobile */}
				<div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
					{pusherSections.map((section) => (
						<Card 
							key={section.title} 
							className="group hover:shadow-2xl transition-all duration-300 border-none bg-card"
						>
							<CardHeader className="text-center pb-2">
								<div className="flex justify-center items-center mb-2">{section.icon}</div>
								<CardTitle className="text-xl font-semibold">{section.title}</CardTitle>
							</CardHeader>
							<CardContent className="text-center text-sm text-muted-foreground">
								{section.description}
							</CardContent>
							<CardFooter className="justify-center pt-2">
								<Button 
									variant="ghost" 
									size="icon" 
									className="rounded-full w-10 h-10 bg-primary text-primary-foreground hover:scale-110 transition-transform duration-200"
								>
									<ArrowRight className="h-4 w-4" />
								</Button>
							</CardFooter>
						</Card>
					))}
				</div>
			</div>
		</main>
	);
} 