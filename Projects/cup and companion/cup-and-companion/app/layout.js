import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SessionWrapper from "@/components/SessionWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Cup & Companion - Fund your project with a cup of coffee",
	description:
		"Chat, connect, create! Fund projects & find friends over coffee (or tea!). Cup & Companion: Your creative community cup.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<SessionWrapper>
					<Navbar />
					<div className="min-h-[84vh] mx-auto bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] text-white">
						{children}
					</div>
					<Footer />
				</SessionWrapper>
			</body>
		</html>
	);
}
