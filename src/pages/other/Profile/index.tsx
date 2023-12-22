import { Button, Card, Col, Nav, Row, Tab } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Axios from "axios";

// components
import { FormInput } from '@/components'

const url = "https://seashell-app-bbv6o.ondigitalocean.app";
// const url = "http://localhost:8080";

const ProfilePages = () => {
	const storedUserData = localStorage?.getItem("_FXCM_AUTH");
	const parsedUserData = storedUserData ? JSON.parse(storedUserData) : null;
	const [username] = useState(parsedUserData?.email || '');
	const [token] = useState(parsedUserData?.token || '');
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [identity, setIdentity] = useState("");
	const [contact, setContact] = useState("");
	const [fullname, setFullname] = useState("");

	let regEmail =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	const handleSubmit = () => {
		if (email === "") {
			alert("Vui lòng nhập địa chỉ email!");
			return;
		} else if (!regEmail.test(email)) {
			alert("Email không đúng định dạng!");
			return;
		}
		let data = JSON.stringify({
			username: username,
			email: email,
			phone: phone,
			identity: identity,
			contact: contact,
			fullname: fullname
		});

		let config = {
			method: "POST",
			url: `${url}/api/user/update`,
			headers: {
				Authorization: `Bearer ${token}`,
				"Content-Type": "application/json"
			},
			data: data
		};

		Axios(config)
			.then(response => {
				if (response.data === "ok") {
					alert("Cập nhật thông tin thành công!");
					setTimeout(() => {
						window.location.reload();
					}, 1500);
				} else {
					alert(response.data);
				}
			})
			.catch(error => {
				console.log(error);
			});
	};

	useEffect(() => {
		let config = {
			method: "GET",
			url: `${url}/api/user/getInfo/${username}`,
			headers: {
				Authorization: `Bearer ${token}`
			}
		};

		Axios(config)
			.then(response => {
				setFullname(response.data.fullname);
				setPhone(response.data.phone);
				setIdentity(response.data.identity);
				setEmail(response.data.email);
				setContact(response.data.contact);
			})
			.catch(error => {
				console.log(error);
			});
	}, []);

	return (
		<>
			<div className="mt-2">
				<Row>
					<Col sm={12}>
						<Card className="p-0">
							<Card.Body className="p-0">
								<div className="profile-content">
									<Tab.Container defaultActiveKey="About">
										<Nav as="ul" justify className="nav-underline gap-0">
											<Nav.Item as="li">
												<Nav.Link
													as={Link}
													to="#"
													eventKey="About"
													type="button"
												>
													Cập nhật thông tin
												</Nav.Link>
											</Nav.Item>
										</Nav>
										<Tab.Content className="m-0 p-4">
											<Tab.Pane eventKey="About" id="edit-profile">
												<div className="user-profile-content">
													<Row className="row-cols-sm-2 row-cols-1">
														<FormInput
															name="username"
															label="Tên đăng nhập"
															type="text"
															containerClass="mb-2"
															readOnly={true}
															value={username}
														/>
														<FormInput
															name="email"
															label="Địa chỉ email"
															type="text"
															containerClass="mb-3"
															value={email}
															onChange={(e) => { setEmail(e.target.value) }}
														/>
														<FormInput
															name="fullname"
															label="Họ tên"
															type="text"
															containerClass="mb-3"
															value={fullname}
															onChange={(e) => { setFullname(e.target.value) }}
														/>
														<FormInput
															name="address"
															label="Địa chỉ"
															type="text"
															containerClass="mb-3"
															value={contact}
															onChange={(e) => { setContact(e.target.value) }}
														/>
														<FormInput
															name="phoneNumber"
															label="Số điện thoại"
															type="text"
															containerClass="mb-3"
															value={phone}
															onChange={(e) => { setPhone(e.target.value) }}
														/>
														<FormInput
															name="identity"
															label="Số CCCD/CMND"
															type="text"
															containerClass="mb-3"
															value={identity}
															onChange={(e) => { setIdentity(e.target.value) }}
														/>
													</Row>
													<Row className="row-cols-sm-1 row-cols-1">
														<Button variant="primary" type="button" onClick={(e) => { handleSubmit() }}>
															<i className="ri-save-line me-1 fs-16 lh-1" />{' '}
															Lưu thông tin
														</Button>
													</Row>
												</div>
											</Tab.Pane>
										</Tab.Content>
									</Tab.Container>
								</div>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</div>
		</>
	)
}

export default ProfilePages
