import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

type User = {
	id: number
	email: string
	username?: string
	password: string
	name: string
	role: string
	token: string
	address: string
	phoneNumber: string
	rootUsername: string
	facode: string
}

const url = "https://seashell-app-bbv6o.ondigitalocean.app";
// const url = "http://localhost:8080";

const TOKEN =
	'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb2RlcnRoZW1lcyIsImlhdCI6MTU4NzM1NjY0OSwiZXhwIjoxOTAyODg5NDQ5LCJhdWQiOiJjb2RlcnRoZW1lcy5jb20iLCJzdWIiOiJzdXBwb3J0QGNvZGVydGhlbWVzLmNvbSIsImxhc3ROYW1lIjoiVGVzdCIsIkVtYWlsIjoic3VwcG9ydEBjb2RlcnRoZW1lcy5jb20iLCJSb2xlIjoiQWRtaW4iLCJmaXJzdE5hbWUiOiJIeXBlciJ9.P27f7JNBF-vOaJFpkn-upfEh3zSprYfyhTOYhijykdI'

const mock = new MockAdapter(axios, { onNoMatch: 'passthrough' })

const users: User[] = [
	{
		id: 1,
		email: 'velonic@techzaa.com',
		username: 'Velonic',
		password: 'Velonic',
		name: 'Velonic',
		role: 'Admin',
		token: TOKEN,
		address: '',
		phoneNumber: '',
		rootUsername: '',
		facode: '',
	},
]

export default function configureFakeBackend() {
	mock.onPost('/login').reply(function (config) {
		return new Promise(function (resolve, reject) {
			setTimeout(function () {
				const user = JSON.parse(config["data"]);
				console.log(user.facode);
				const requestOptions = {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({
						username: user.email,
						password: user.password,
						faCode: user.facode || "",
					}),
				};

				// Replace the URL below with the actual authentication API endpoint

				return fetch(`${url}/api/user/validation`, requestOptions)
					.then(response => {
						return response.text();
					})
					.then(result => {
						if (result.includes("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9")) {
							let userData = {
								id: 0,
								email: '',
								username: user.email,
								password: user.password,
								firstName: '',
								lastName: '',
								role: 'ROLE_USER',
								token: result,
							};
							return resolve([200, userData])
						} else if (result === "Username is not exist" || result === "Password is not correct") {
							return resolve([401, { message: 'Tài khoản không hợp lệ' }])
						} else if (result === "Wrong 2FA") {
							return resolve([402, { message: 'Mã 2FA không chính xác' }])
						}
					})
					.catch(error => {
						console.error(error);

						return [500, "Internal Server Error"];
					});
			}, 1000)

		})
	})

	mock.onPost('/register').reply(function (config) {
		return new Promise(function (resolve, reject) {
			setTimeout(function () {
				// get parameters from post request
				const params = JSON.parse(config.data);
				let dataforRegis = JSON.stringify({
					name: params.fullname,
					username: params.username.toLocaleLowerCase(),
					password: params.password,
					email: params.email.toLocaleLowerCase(),
					rootUsername: params.rootUsername.toLocaleLowerCase(),
					address: "",
					phoneNumber: ""
				});

				let configRegis = {
					method: "post",
					headers: {
						"Content-Type": "application/json"
					},
					body: dataforRegis  // Include the data in the body property
				};

				// Use the fetch API with the correct syntax
				return fetch(`${url}/api/user/regis`, configRegis)
					.then(response => {
						return response.text();
					})
					.then(result => {
						let responseJson = {};
						
						if (result === "success") {
							responseJson = { message: 'Đăng ký thành công' };
							return resolve([200, { data: responseJson }]);  // Include 'data' property
						  } else if (result === "This username already existed") {
							responseJson = { message: 'Tên đăng nhập đã tồn tại' };
							return resolve([201, { data: responseJson }]);
						  } else if (result === "This email address already existed") {
							responseJson = { message: 'Tên đăng nhập đã tồn tại' };
							return resolve([202, { data: responseJson }]);
						  } else if (result === "This sponsor is not existed") {
							responseJson = { message: 'Người giới thiệu không tồn tại' };
							return resolve([203, { data: responseJson }]);
						  } else {
							// Handle other cases or errors here
							responseJson = { message: 'Internal Server Error' };
							return resolve([500, { data: responseJson }]);
						  }
					})
					.catch(error => {
						console.error(error);
						return [500, "Internal Server Error"];
					});
			}, 1000)
		})
	})

	mock.onPost('/forget-password').reply(function (config) {
		return new Promise(function (resolve, reject) {
			setTimeout(function () {
				// get parameters from post request
				const params = JSON.parse(config.data)

				// find if any user matches login credentials
				const filteredUsers = users.filter((user) => {
					return user.email === params.email
				})

				if (filteredUsers.length) {
					// if login details are valid return user details and fake jwt token
					const responseJson = {
						message:
							"We've sent you a link to reset password to your registered email.",
					}
					resolve([200, responseJson])
				} else {
					// else return error
					resolve([
						401,
						{
							message:
								'Sorry, we could not find any registered user with entered email',
						},
					])
				}
			}, 1000)
		})
	})
}
