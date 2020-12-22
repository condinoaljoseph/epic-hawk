import { useState } from 'react';
import axios from '../../utils/axios/api';

export default function Reset() {
	const [message, setMessage] = useState('');
	const [email, setEmail] = useState('');

	const onSubmit = async () => {
		try {
			const { data } = await axios.post('/api/auth/reset', { email });
			alert(data, 'emotinog');
		} catch (e) {
			console.log(e, 'hahahahha');
			alert(e, 'emotinog');
		}
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-md w-full space-y-8">
				<div>
					<img
						className="mx-auto h-12 w-auto"
						src="/hawk-dark.png"
						alt="Workflow"
					/>
					<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
						Send me a link
					</h2>
				</div>
				<form className="mt-8 space-y-6">
					<div className="rounded-md shadow-sm -space-y-px">
						<div>
							<label htmlFor="email-address" className="sr-only">
								Email address
							</label>
							<input
								id="email-address"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								name="email"
								type="email"
								autoComplete="email"
								required
								className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-hawk focus:border-hawk focus:z-10 sm:text-sm"
								placeholder="Email address"
							/>
						</div>
						{message}
					</div>

					<div>
						<button
							onClick={() => onSubmit()}
							className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm  rounded-md text-primary bg-hawk hover:bg-hawk focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-hawk"
						>
							<span className="absolute left-0 inset-y-0 flex items-center pl-3">
								<svg
									className="h-5 w-5 text-hawk group-hover:text-hawk"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
								>
									<path
										fillRule="evenodd"
										d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
										clipRule="evenodd"
									/>
								</svg>
							</span>
							Reset Password
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
