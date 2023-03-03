export interface IUser {
	_id: string;
	uid: string;
	name: string;
	email: string;
	phone: string;
	exp: number;
	iat: number;
	listings: [];
	properties: [];
	createdAt: string;
	updatedAt: string;
}
