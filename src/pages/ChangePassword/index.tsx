import { Button, Card, Col, Nav, Row, Tab } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import Axios from "axios";
import qs from 'qs';

// components
import { FormInput } from '@/components'

const url = "https://seashell-app-bbv6o.ondigitalocean.app";
// const url = "http://localhost:8080";

const ChangePassword = () => {
	const storedUserData = localStorage?.getItem("_FXCM_AUTH");
	const parsedUserData = storedUserData ? JSON.parse(storedUserData) : null;
	const [username] = useState(parsedUserData?.email || '');
	// const [token] = useState(parsedUserData?.token || '');
	const [currPass, setCurrPass] = useState("");
	const [password1, setPassword1] = useState("");
	const [password2, setPassword2] = useState("");
	const [facode, setFacode] = useState("");

	const handleSubmit = () => {
		console.log("currPass:", currPass);
		console.log("password1:", password1);
		console.log("password2:", password2);
		console.log("facode:", facode);
		if (currPass === "" || password1 === "" || password2 === "" || facode === "") {
			alert("Không được để trống thông tin");
			return;
		}

		let data = qs.stringify({
			username: username,
			currentPassword: currPass,
			authen: facode,
			newPassword: password1,
			confirmNewPassword: password2
		});
		let config = {
			method: "post",
			url: `${url}/api/user/changePassword`,
			headers: {
				"Content-Type": "application/x-www-form-urlencoded"
			},
			data: data
		};


		Axios(config).then(response => {
			if (response.data === "Change password success") {
				alert("Cập nhật mật khẩu thành công!");
				setTimeout(() => {
					window.location.reload();
				}, 1500);
			} else if (response.data === "2FA code is incorrect") {
				alert("Mã bảo mật 2FA không chính xác");
			} else if (response.data === "Old password is incorrect") {
				alert("Mật khẩu cũ không chính xác");
			}
		});
	}
	return (
		<>
			<div>
				<Row className="mt-2">
					<Col sm={12}>
						<Card className="p-0">
							<Card.Body className="p-0">
								<div className="profile-content">
									<Tab.Container defaultActiveKey="Settings">
										<Nav as="ul" justify className="nav-underline gap-0">
											<Nav.Item>
												<Nav.Link
													as={Link}
													type="button"
													to="#"
													eventKey="Settings"
												>
													Đổi mật khẩu
												</Nav.Link>
											</Nav.Item>
										</Nav>
										<Tab.Content className="m-0 p-4">
											<Tab.Pane eventKey="Settings" id="edit-profile">
												<div className="user-profile-content">
													<form>
														<Row className="row-cols-sm-2 row-cols-1">
															<FormInput
																name="currPass"
																label="Mật khẩu hiện tại"
																type="password"
																containerClass="mb-3"
																onChange={(e) => setCurrPass(e.target.value)}

															/>
															<FormInput
																name="password1"
																label="Password"
																type="password"
																containerClass="mb-3"
																onChange={(e) => { setPassword1(e.target.value) }}
															/>
															<FormInput
																name="password2"
																label="Re-Password"
																type="password"
																containerClass="mb-3"
																value={password2 || ""}
																onChange={(e) => { setPassword2(e.target.value) }}
															/>
															<FormInput
																name="2fa"
																label="Mã bảo mật 2FA"
																type="text"
																containerClass="mb-3"
																onChange={(e) => { setFacode(e.target.value) }}
															/>
														</Row>

														<Row className="row-cols-sm-1 row-cols-1">
															<Button variant="primary" type="button" onClick={(e) => { handleSubmit() }}>
																<i className="ri-save-line me-1 fs-16 lh-1" />{' '}
																Đổi mật khẩu
															</Button>
														</Row>

													</form>
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

export default ChangePassword
