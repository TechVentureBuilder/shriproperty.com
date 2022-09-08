export interface IContact {
	_id?: string;
	name: string;
	email: string;
	phone: number;
	subject: string;
	message: string;
	status?: "Pending" | "In Progress" | "Completed";
	createdAt?: string;
	updatedAt?: string;
}
