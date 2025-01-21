import { Button } from "@/components/ui/button";
import { sql } from "drizzle-orm";
import { auth, signIn, signOut } from "@/server/auth";
import { db } from "@/server/db";
import { users } from "@/server/db/schema";
import { getThemeToggler } from "@/lib/theme/get-theme-button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export const runtime = "edge";

const roles = [
	{
		title: "Drivers",
		icon: <Image src="/box-truck.svg" alt="Drivers" width={48} height={48} />,
		description: "Company drivers and owner operators managing frac sand deliveries"
	},
	{
		title: "Pushers",
		icon: <Image src="/silhouette.svg" alt="Pushers" width={48} height={48} />,
		description: "Staging pad operations and document verification"
	},
	{
		title: "Dispatch",
		icon: <Image src="/report-2.svg" alt="Dispatch" width={48} height={48} />,
		description: "Coordinate sand deliveries and well site operations"
	},
	{
		title: "Service",
		icon: <Image src="/alert.svg" alt="Service" width={48} height={48} />,
		description: "Fleet maintenance, repairs, and fuel management"
	},
	{
		title: "Admin",
		icon: <Image src="/office.svg" alt="Admin" width={48} height={48} />,
		description: "System administration and partner coordination"
	}
];

export default async function Page() {
	const session = await auth();

	const userCount = await db
		.select({
			count: sql<number>`count(*)`.mapWith(Number),
		})
		.from(users);

	const SetThemeButton = getThemeToggler();

	return (
		<main className="main-container">
			{/* Title - Only visible on mobile */}
			<h1 className="text-3xl font-bold mb-8 px-4 md:hidden">
				Select your role
			</h1>

			{/* Role Cards - Different layouts for mobile/desktop */}
			<div className="w-full max-w-[1400px] mx-auto px-4">
				{/* Mobile Layout */}
				<div className="md:hidden flex flex-col gap-4">
					{/* First Row - Full Width */}
					<Card className="group hover:shadow-2xl transition-all duration-300 border-none bg-card">
						<CardHeader className="text-center pb-2">
							<div className="flex justify-center items-center mb-2">{roles[0].icon}</div>
							<CardTitle className="text-xl font-semibold">{roles[0].title}</CardTitle>
						</CardHeader>
						<CardContent className="text-center text-sm text-muted-foreground">
							{roles[0].description}
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
						{roles.slice(1, 3).map((role) => (
							<Card 
								key={role.title} 
								className="group hover:shadow-2xl transition-all duration-300 border-none bg-card"
							>
								<CardHeader className="text-center pb-2">
									<div className="flex justify-center items-center mb-2">{role.icon}</div>
									<CardTitle className="text-lg font-semibold">{role.title}</CardTitle>
								</CardHeader>
								<CardContent className="text-center text-xs text-muted-foreground">
									{role.description}
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

					{/* Third Row - One Card */}
					<Card className="group hover:shadow-2xl transition-all duration-300 border-none bg-card">
						<CardHeader className="text-center pb-2">
							<div className="flex justify-center items-center mb-2">{roles[3].icon}</div>
							<CardTitle className="text-xl font-semibold">{roles[3].title}</CardTitle>
						</CardHeader>
						<CardContent className="text-center text-sm text-muted-foreground">
							{roles[3].description}
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

					{/* Other Section */}
					{roles.length > 5 && (
						<div className="text-center text-xl text-muted-foreground mt-4">
							Other
						</div>
					)}
				</div>

				{/* Desktop Grid Layout - Hidden on Mobile */}
				<div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
					{roles.map((role) => (
						<Card 
							key={role.title} 
							className="group hover:shadow-2xl transition-all duration-300 border-none bg-card"
						>
							<CardHeader className="text-center pb-2">
								<div className="flex justify-center items-center mb-2">{role.icon}</div>
								<CardTitle className="text-xl font-semibold">{role.title}</CardTitle>
							</CardHeader>
							<CardContent className="text-center text-sm text-muted-foreground">
								{role.description}
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
