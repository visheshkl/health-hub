import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

import './LoginCard.css';

const LoginCard = ({updateLoginState}) => {
	const [inputs, changeInputs] = useState({ email: '', password: '' });
	const [daeta, setData] = useState({
		data: null,
		error: null,
		loading: false,
	});
	const { data, error, loading } = daeta;
	const [errorMsg, setErrorMsg] = useState('');
	const handleInput = ( event ) => {
		const value = event.target.value;
		const name = event.target.name;
		changeInputs({ 
			...inputs,
			[name]: value
		});
	}
	const handleSubmit = ( event ) => {
		event.preventDefault();
		const payload = {
			email: inputs.email,
			password: inputs.password
		}
		console.log('login payload:', payload);
		setData({
			...daeta,
			loading: true,
		})
		setTimeout(()=> {
			setData({
				...daeta,
				data: {
					login: 'somerandomstring-cool-jwt'
				},
				loading: false,
			})
		}, 800);
	}
	if ( data ) {
		window.localStorage.setItem('token', data.login);
		console.log('login successful: token: ', data.login);
		updateLoginState(true);
		if(inputs.email.includes('doctor'))
			return (
				<Redirect to="/doctorDashboard" />
			);
		if(inputs.email.includes('org'))
			return (
				<Redirect to="/orgDashboard" />
			);
		else
			return (
				<Redirect to="/dashboard" />
			);
	}
	if ( error ) {
		if(error.graphQLErrors.length > 0 && error.graphQLErrors[0].extensions.code === "UNAUTHENTICATED")
			setErrorMsg('Invalid email or password.');
		else
			setErrorMsg('Something went wrong.');
	}
	return (
		<div className='loginCard'>
			<h3>Welcome back!</h3>
			<p>Login to access your dashboard</p>
			<form className='loginForm' onSubmit={handleSubmit}>
				{ errorMsg !== '' &&
					<div className="errorMsg">{errorMsg}</div>
				}
				<input className='loginInput' type='text' name='email' placeholder='E-mail' onChange={handleInput} required />
				<input className='loginInput' type='password' name='password' placeholder='Password' onChange={handleInput} required />
				<input type='submit' name='login' value='LOG IN' disabled={loading} />
			</form>
			<Link to='/reset'>Forgot your password?</Link>
		</div>
	)
}

export default LoginCard;