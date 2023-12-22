import { Button, Card, Col, Nav, Row, Tab, CardGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Axios from "axios";
import qs from "qs";

// components
import { FormInput } from '@/components'

const url = "https://seashell-app-bbv6o.ondigitalocean.app";
// const url = "http://localhost:8080";

const CardWithGroup = ({ image, secret }: { image: string, secret: string }) => {

	return (
		<>
			<Card className="d-block" style={{ textAlign: "center" }}>
				<Card.Body>
					<Card.Img
						className="card-img-top"
						src={image}
						alt="Card image cap"
						style={{ width: "400px", height: "400px" }}
					/>
					<Card.Text>{secret}</Card.Text>
				</Card.Body>
			</Card>
		</>
	)
}

const FaCode = () => {
	const storedUserData = localStorage?.getItem("_FXCM_AUTH");
	const parsedUserData = storedUserData ? JSON.parse(storedUserData) : null;
	const [username] = useState(parsedUserData?.email || '');
	// const [token] = useState(parsedUserData?.token || '');
	const [secretPhrase, setSecretPhrase] = useState("");
	const [qrImg, setQrImg] = useState("");
	const [authenCode, setAuthenCode] = useState("");
	const [isEnabled, setIsEnabled] = useState("");

	const handleDisabled = () => {
		let data = qs.stringify({
			username: username,
			code: authenCode
		});
		let config = {
			method: "post",
			url: `${url}/api/authentication/disabled`,
			headers: {
				"Content-Type": "application/x-www-form-urlencoded"
			},
			data: data
		};


		Axios(config).then(response => {
			if (response.data === "success") {
				alert("Huỷ cài đặt mã bảo mật 2FA thành công");
				setTimeout(() => {
					window.location.reload();
				}, 1000);
			} else {
				alert("Thất bại, mã bảo mật 2FA không chính xác");
			}
		});
	};

	const handleEnabled = () => {
		let data = qs.stringify({
			username: username,
			code: authenCode
		});
		let config = {
			method: "post",
			url: `${url}/api/authentication/enabled`,
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
			},
			data: data
		};


		Axios(config).then(response => {
			if (response.data === "success") {
				alert("Cài đặt mã bảo mật 2FA thành công");
				setTimeout(() => {
					window.location.reload();
				}, 1000);
			} else {
				alert("Thất bại, mã bảo mật 2FA không chính xác");
			}
		});
	};


	useEffect(() => {
		const fetchData = async () => {
			try {
				const config = {
					url: `${url}/api/authentication/showQR/${username}`
				};

				const response = await Axios(config);

				setIsEnabled(response.data[0]);
				setSecretPhrase(response.data[1]);
				setQrImg(response.data[2]);
			} catch (error) {
				// Handle error
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, [username]);

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
													Cài đặt bảo mật 2FA
												</Nav.Link>
											</Nav.Item>
										</Nav>
										<Tab.Content className="m-0 p-4">
											<Tab.Pane eventKey="Settings" id="edit-profile">
												{isEnabled === "true" ? <div className="user-profile-content">
													<Row className="row-cols-sm-1 row-cols-1">
														<FormInput
															name="2fa"
															label="6 ký tự mã bảo mật 2FA"
															type="text"
															containerClass="mb-3"
															onChange={(e) => { setAuthenCode(e.target.value) }}
														/>
													</Row>
													<Row className="row-cols-sm-1 row-cols-1">
														<Button variant="primary" onClick={() => { handleDisabled() }}>
															<i className="ri-save-line me-1 fs-16 lh-1" />{' '}
															Huỷ cài đặt 2FA
														</Button>
													</Row>

												</div> : <div className="user-profile-content">
													<Row className="row-cols-sm-1 row-cols-1">
														<Col xs={12}>
															<CardGroup>
																<CardWithGroup image={qrImg} secret={secretPhrase} />
															</CardGroup>
														</Col>
													</Row>
													<Row className="row-cols-sm-1 row-cols-1">
														<FormInput
															name="2fa"
															label="6 ký tự mã bảo mật 2FA"
															type="text"
															containerClass="mb-3"
															onChange={(e) => { setAuthenCode(e.target.value) }}
														/>
													</Row>
													<Row className="row-cols-sm-1 row-cols-1">
														<Button variant="primary" onClick={() => { handleEnabled() }}>
															<i className="ri-save-line me-1 fs-16 lh-1" />{' '}
															Cài đặt 2FA
														</Button>
													</Row>
												</div>}
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

export default FaCode
