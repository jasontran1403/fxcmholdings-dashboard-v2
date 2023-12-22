import { Button, Card, Col, Image, Nav, Row, Tab } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { profileActivity } from './data'
import React from 'react'

// images
import bgProfile from '@/assets/images/bg-profile.jpg'
import avatar1 from '@/assets/images/users/avatar-1.jpg'

// components
import { FormInput } from '@/components'

const UpdateProfile = () => {
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
													Cập nhật thông tin
												</Nav.Link>
											</Nav.Item>
										</Nav>
										<Tab.Content className="m-0 p-4">
											<Tab.Pane eventKey="Settings" id="edit-profile">
												<div className="user-profile-content">
													<form>
														<Row className="row-cols-sm-2 row-cols-1">
															<FormInput
																name="Password"
																label="Password"
																type="password"
																containerClass="mb-3"
															/>
															<FormInput
																name="Password2"
																label="Re-Password"
																type="password"
																containerClass="mb-3"
															/>

														</Row>
														<Row className="row-cols-sm-1 row-cols-1">
															<FormInput
																name="2fa"
																label="Mã bảo mật 2FA"
																type="text"
																containerClass="mb-3"
															/>
														</Row>
														<Row className="row-cols-sm-1 row-cols-1"><Button variant="primary">
															<i className="ri-save-line me-1 fs-16 lh-1" />{' '}
															Đổi mật khẩu
														</Button></Row>

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

export default UpdateProfile
