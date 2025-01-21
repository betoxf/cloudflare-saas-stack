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

const serviceSections = [
	{
		title: "Box Status",
		icon: <Image src="/sandcan.svg" alt="Box Status" width={48} height={48} />,
		description: "Track repairs and maintenance status",
		href: "/service/box-status"
	},
	{
		title: "Mechanics Time Table",
		icon: <Image src="/calendar.svg" alt="Mechanics Schedule" width={48} height={48} />,
		description: "View and manage mechanic schedules",
		href: "/service/mechanics"
	},
	{
		title: "Chassis Inspections",
		icon: <Image src="/technology.svg" alt="Chassis Inspections" width={48} height={48} />,
		description: "Manage chassis inspection records",
		href: "/service/chassis"
	},
	{
		title: "Truck Inspections",
		icon: <Image src="/repair-2.svg" alt="Truck Inspections" width={48} height={48} />,
		description: "Track truck inspection status",
		href: "/service/trucks"
	},
	{
		title: "Diesel Expenses",
		icon: <Image src="/power.svg" alt="Diesel Expenses" width={48} height={48} />,
		description: "Monitor fuel consumption and costs",
		href: "/service/diesel"
	}
];

export default function ServicePage() {
	return (
		<main className="main-container">
			{/* Back Button */}
			<BackButton />

			{/* Title - Only visible on mobile */}
			<h1 className="text-3xl font-bold mb-8 px-4 md:hidden">
				Service Department
			</h1>

			{/* Section Cards - Different layouts for mobile/desktop */}
			<div className="w-full max-w-[1400px] mx-auto px-4">
				{/* Mobile Layout */}
				<div className="md:hidden flex flex-col gap-4">
					{/* First Row - Full Width */}
					<Card className="group hover:shadow-2xl transition-all duration-300 border-none bg-card">
						<CardHeader className="text-center pb-2">
							<div className="flex justify-center items-center mb-2">{serviceSections[0].icon}</div>
							<CardTitle className="text-xl font-semibold">{serviceSections[0].title}</CardTitle>
						</CardHeader>
						<CardContent className="text-center text-sm text-muted-foreground">
							{serviceSections[0].description}
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
						{serviceSections.slice(1, 3).map((section) => (
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

					{/* Last Row - Two Cards */}
					<div className="grid grid-cols-2 gap-4">
						{serviceSections.slice(3).map((section) => (
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
					{serviceSections.map((section) => (
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