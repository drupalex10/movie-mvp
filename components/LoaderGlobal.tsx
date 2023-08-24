"use client"
import { Colors } from "@/core/utils/colors";
import { BarLoader } from "react-spinners";

type Props = {
  isLoading: boolean;
};

const LoaderGlobal: React.FC<Props> = ({ isLoading }) => {
	return (
		<div 
			className={`w-full h-screen fixed ${isLoading ? 'block' : 'hidden'} bottom-0 top-0 left-0 right-0`} 
			style={{zIndex: 999999}}
		>
			<div className="bg-black">
				<BarLoader
					loading={isLoading}
					color={Colors.red}
					height={7}
					width={"100%"}	
				/>
			</div>
			
			<div className="flex w-full h-full justify-center items-center bg-black bg-opacity-50 bg-gradient-to-b from-[#141414] to-transparent">
				<span className="font-bold text-5xl -translate-y-10 text-orange-800"></span>
			</div>
		</div>
	)
}

export default LoaderGlobal;