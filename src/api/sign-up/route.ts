import UserModel from '@/model/User';
import dbConnect from '@/lib/dbConnection';
import bcrypt from 'bcryptjs';
import { sendVerificationEmail } from '@/helpers/sendVerificationEmail';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
	await dbConnect();
	try {
		const { username, email, password } = await request.json();
	} catch (error) {
		console.error('Error registering user', error);
		return NextResponse.json(
			{
				success: false,
				message: 'Error registering user',
			},
			{
				status: 500,
			}
		);
	}
}
