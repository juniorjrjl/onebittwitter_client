import React from "react";
import { Row, Col, Card } from 'react-materialize';
import MainLayout from '../MainLayout'
import UserInfoContainer from '../../containers/UserInfoContainer'
import TrendingTopicsContainer from '../../containers/TrendingTopicsContainer'
import { LocalForm, Control } from 'react-redux-form';
import styled from 'styled-components';
 
const ProfileImage = styled.img`
  margin-top: 10px;
  margin-bottom: 10px;`;
 
const ProfileEdit = (props) => (
    <MainLayout>
        <Row>
            <Col s={12} m={6} className="offset-m3">
                <Card>
                    <Row>
                        <Col m={8} s={8} offset="">
                            <b className="grey-text text-darken-1">Personal Info</b>
                        </Col>
                    </Row>
 
                    <Row>
                        <Row className="center">
                            <Col m={4} className="offset-m4">
                                <ProfileImage src={props.image_preview} className="responsive-img circle"/>
                            </Col>
                        </Row>
                        <Col m={12} s={12} offset="">
                            <div className="form">
                                <div>
                                    <LocalForm  onSubmit={(values) => props.updateProfile(values) }
                                        initialState={{ 
                                            name: props.name,
                                            email: props.email,
                                            description: props.description,
                                            id: props.id,
                                            image_preview: props.image_preview
                                        }}>
        
                                        <Control.file model=".photo" onChange={(value) => props.encodeFile(value)} style={{ 'marginBottom': '20px'}}/>
                                        <Control.text model=".name" name="name" placeholder="Name" />
                                        <Control.text model=".email" name="email"placeholder="Email"/>
                                        <Control.text model=".description" name="description"placeholder="Description..."/>
                                        <div className="right">
                                            <button type="submit" className="blue btn grey darken-2">Update</button>
                                        </div>
                                    </LocalForm>
                                </div>
                            </div>
                        </Col>
                    </Row>
 
                    <Row>
                        <Col m={8} s={8} offset="">
                            <b className="grey-text text-darken-1">Change Password</b>
                        </Col>
                    </Row>
            
                    <Row>
                        <Col m={12} s={12} offset="">
                            <div className="form">
                                <div>
                                    <LocalForm onSubmit={(values) => props.updatePassword(values) } initialState={{ id: props.id,}}>
                                        <Control.text type="password" model=".password" name="password" placeholder="Password" />
                                        <Control.text type="password" model=".password_confirmation" name="password_confirmation" placeholder="Password Confirmation" />
                                        <div className="right">
                                            <button type="submit" className="blue btn grey darken-2">Update</button>
                                        </div>
                                    </LocalForm>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Card>
            </Col>
        </Row>
    </MainLayout>
);
 
export default ProfileEdit;