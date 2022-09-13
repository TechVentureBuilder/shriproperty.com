export interface IContact {
	_id?: string;
	uid?: number;
	name: string;
	email: string;
	phone: number;
	subject: string;
	message: string;
	status?: "Pending" | "In Progress" | "Completed";
	createdAt?: string;
	updatedAt?: string;
}

export interface IUser {
	_id?: string;
	uid?: number;
	name: string;
	email: string;
	phone: number;
	password: string;
	verified: boolean;
	createdAt?: string;
	updatedAt?: string;
}
