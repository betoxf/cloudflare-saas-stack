import { Button } from "@/components/ui/button";
import { sql } from "drizzle-orm";
import { auth } from "@/server/auth";
import { db } from "@/server/db";
import { users } from "@/server/db/schema";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const runtime = "edge";

const roles = [
	{
		title: "Drivers",
		icon: <Image src="/box-truck.svg" alt="Drivers" width={48} height={48} />,
		description: "Company drivers and owner operators managing frac sand deliveries",
		href: "/drivers"
	},
	{
		title: "Pushers",
		icon: <Image src="/silhouette.svg" alt="Pushers" width={48} height={48} />,
		description: "Staging pad operations and document verification",
		href: "/pushers"
	},
	{
		title: "Dispatch",
		icon: <Image src="/report-2.svg" alt="Dispatch" width={48} height={48} />,
		description: "Coordinate sand deliveries and well site operations",
		href: "/dispatch"
	},
	{
		title: "Service",
		icon: <Image src="/alert.svg" alt="Service" width={48} height={48} />,
		description: "Fleet maintenance, repairs, and fuel management",
		href: "/service"
	},
	{
		title: "Admin",
		icon: <Image src="/office.svg" alt="Admin" width={48} height={48} />,
		description: "System administration and partner coordination",
		href: "/admin"
	}
];

export default async function Page() {
	const session = await auth();

	const userCount = await db
		.select({
			count: sql<number>`count(*)`.mapWith(Number),
		})
		.from(users);

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
					<Link href={roles[0].href} className="block">
						<Card className="group hover:shadow-2xl transition-all duration-300 border-none bg-card">
							<CardHeader className="text-center pb-2">
								<div className="flex justify-center items-center mb-2">{roles[0].icon}</div>
								<CardTitle className="text-xl font-semibold">{roles[0].title}</CardTitle>
							</CardHeader>
							<CardContent className="text-center text-sm text-muted-foreground">
								<p className="card-description">
									{roles[0].description}
								</p>
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
					</Link>

					{/* Second Row - Two Cards */}
					<div className="grid grid-cols-2 gap-4">
						{roles.slice(1, 3).map((role) => (
							<Link href={role.href} key={role.title} className="block">
								<Card 
									className="group hover:shadow-2xl transition-all duration-300 border-none bg-card"
								>
									<CardHeader className="text-center pb-2">
										<div className="flex justify-center items-center mb-2">{role.icon}</div>
										<CardTitle className="text-lg font-semibold">{role.title}</CardTitle>
									</CardHeader>
									<CardContent className="text-center text-xs text-muted-foreground">
										<p className="card-description">
											{role.description}
										</p>
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
							</Link>
						))}
					</div>

					{/* Third Row - One Card */}
					<Link href={roles[3].href} className="block">
						<Card className="group hover:shadow-2xl transition-all duration-300 border-none bg-card">
							<CardHeader className="text-center pb-2">
								<div className="flex justify-center items-center mb-2">{roles[3].icon}</div>
								<CardTitle className="text-xl font-semibold">{roles[3].title}</CardTitle>
							</CardHeader>
							<CardContent className="text-center text-sm text-muted-foreground">
								<p className="card-description">
									{roles[3].description}
								</p>
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
					</Link>

					{/* Last Row - One Card */}
					<Link href={roles[4].href} className="block">
						<Card className="group hover:shadow-2xl transition-all duration-300 border-none bg-card">
							<CardHeader className="text-center pb-2">
								<div className="flex justify-center items-center mb-2">{roles[4].icon}</div>
								<CardTitle className="text-xl font-semibold">{roles[4].title}</CardTitle>
							</CardHeader>
							<CardContent className="text-center text-sm text-muted-foreground">
								<p className="card-description">
									{roles[4].description}
								</p>
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
					</Link>
				</div>

				{/* Desktop Grid Layout - Hidden on Mobile */}
				<div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
					{roles.map((role) => (
						<Link href={role.href} key={role.title} className="block">
							<Card 
								className="group hover:shadow-2xl transition-all duration-300 border-none bg-card"
							>
								<CardHeader className="text-center pb-2">
									<div className="flex justify-center items-center mb-2">{role.icon}</div>
									<CardTitle className="text-xl font-semibold">{role.title}</CardTitle>
								</CardHeader>
								<CardContent className="text-center text-sm text-muted-foreground">
									<p className="card-description">
										{role.description}
									</p>
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
						</Link>
					))}
				</div>
			</div>
		</main>
	);
}
