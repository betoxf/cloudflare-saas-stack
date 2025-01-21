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

const driverSections = [
	{
		title: "Learning",
		icon: <Image src="/dictionary.svg" alt="Learning" width={48} height={48} />,
		description: "Access training materials and courses",
		href: "/drivers/learning"
	},
	{
		title: "Dashboard",
		icon: <Image src="/report-2.svg" alt="Dashboard" width={48} height={48} />,
		description: "View your trips and income",
		href: "/drivers/dashboard"
	},
	{
		title: "Contact",
		icon: <Image src="/letter.svg" alt="Contact" width={48} height={48} />,
		description: "Get in touch with dispatch and support",
		href: "/drivers/contact"
	},
	{
		title: "Navigation",
		icon: <Image src="/road-2.svg" alt="Navigation" width={48} height={48} />,
		description: "Access maps and directions",
		href: "/drivers/navigation"
	}
];

export default function DriversPage() {
	return (
		<main className="main-container">
			{/* Back Button */}
			<BackButton />

			{/* Title - Only visible on mobile */}
			<h1 className="text-3xl font-bold mb-8 px-4 md:hidden">
				Driver Resources
			</h1>

			{/* Section Cards - Different layouts for mobile/desktop */}
			<div className="w-full max-w-[1400px] mx-auto px-4">
				{/* Mobile Layout */}
				<div className="md:hidden flex flex-col gap-4">
					{/* First Row - Full Width */}
					<Card className="group hover:shadow-2xl transition-all duration-300 border-none bg-card">
						<CardHeader className="text-center pb-2">
							<div className="flex justify-center items-center mb-2">{driverSections[0].icon}</div>
							<CardTitle className="text-xl font-semibold">{driverSections[0].title}</CardTitle>
						</CardHeader>
						<CardContent className="text-center text-sm text-muted-foreground">
							{driverSections[0].description}
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

					{/* Second Row - Two Cards */}
					<div className="grid grid-cols-2 gap-4">
						{driverSections.slice(1, 3).map((section) => (
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

					{/* Last Row - One Card */}
					<Card className="group hover:shadow-2xl transition-all duration-300 border-none bg-card">
						<CardHeader className="text-center pb-2">
							<div className="flex justify-center items-center mb-2">{driverSections[3].icon}</div>
							<CardTitle className="text-xl font-semibold">{driverSections[3].title}</CardTitle>
						</CardHeader>
						<CardContent className="text-center text-sm text-muted-foreground">
							{driverSections[3].description}
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
				</div>

				{/* Desktop Grid Layout - Hidden on Mobile */}
				<div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
					{driverSections.map((section) => (
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
