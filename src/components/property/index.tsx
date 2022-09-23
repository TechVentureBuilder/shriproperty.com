import { Tag, Typography } from "antd";
import { BiBed, BiBath } from "react-icons/bi";
import { BsMap } from "react-icons/bs";
import useFormatCurrency from "../../hooks/useCurrency";

function Property() {
	const formatCurrency = useFormatCurrency();
	return (
		<div className="bg-[#fdfdfd] border-2 border-solid border-[#f3f2f2] rounded-lg">
			<div className="w-auto h-auto">
				<img
					src="https://shriproperty.s3.ap-south-1.amazonaws.com/1646135687075-1646123461641-gall-1.jpg"
					alt="thumb nail"
					className="w-full h-full rounded-lg object-cover"
				/>
			</div>

			<div className="p-5">
				<Typography.Title level={2}>3 BHK apartment</Typography.Title>
				<Typography.Paragraph
					ellipsis={{ rows: 3, tooltip: "Click on property to view full description" }}
					className="text-3xl"
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
					incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
					nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					Duis aute irure
				</Typography.Paragraph>

				<div className="flex justify-between items-center">
					<Typography.Title level={4} className="!text-red-500">
						{formatCurrency(100000)}
					</Typography.Title>

					<div className="flex items-center">
						<div className="flex items-center ml-3">
							<BiBed className="!text-3xl mr-3" fontWeight={600} />
							<Typography.Text className="!font-semibold">3</Typography.Text>
						</div>

						<div className="flex items-center ml-3">
							<BiBath className="!text-3xl mr-3" />
							<Typography.Text className="!font-semibold">3</Typography.Text>
						</div>

						<div className="flex items-center ml-3">
							<BsMap className="!text-3xl mr-3" />
							<Typography.Text className="!font-semibold">100 gaj</Typography.Text>
						</div>
					</div>
				</div>

				<div>
					<Tag className="!text-2xl hover:bg-primary hover:text-white">
						Fully Furnished
					</Tag>
					<Tag className="!text-2xl hover:bg-primary hover:text-white">Rental</Tag>
					<Tag className="!text-2xl hover:bg-primary hover:text-white">Family</Tag>
				</div>
			</div>
		</div>
	);
}

export default Property;
