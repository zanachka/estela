import React, { Component, Fragment } from "react";
import { Button, Layout, Typography, Space, Descriptions, Row, Input, Select } from "antd";
import { RouteComponentProps } from "react-router-dom";

import "./styles.scss";
import { ApiService, AuthService } from "../../services";
import {
    ApiProjectsReadRequest,
    Project,
    ProjectUpdate,
    ProjectUpdateActionEnum,
    ProjectUpdatePermissionEnum,
    ApiProjectsUpdateRequest,
} from "../../services/api";
import {
    authNotification,
    resourceNotAllowedNotification,
    Header,
    ProjectSidenav,
    Spin,
    nonExistentUserNotification,
} from "../../shared";
import { Permission } from "../../services/api/generated-api/models/Permission";
import { handleInvalidDataError } from "../../utils";

const { Content } = Layout;
const { Text, Title } = Typography;
const { Option } = Select;

interface ProjectMemberPageState {
    name: string;
    user: string;
    users: Permission[];
    loaded: boolean;
    newUser: string;
    permission: ProjectUpdatePermissionEnum;
}

interface RouteParams {
    projectId: string;
}

export class ProjectMemberPage extends Component<RouteComponentProps<RouteParams>, ProjectMemberPageState> {
    state: ProjectMemberPageState = {
        name: "",
        user: "",
        users: [],
        loaded: false,
        newUser: "",
        permission: ProjectUpdatePermissionEnum.Viewer,
    };
    apiService = ApiService();
    projectId: string = this.props.match.params.projectId;

    updateInfo = (): void => {
        const requestParams: ApiProjectsReadRequest = { pid: this.projectId };
        this.apiService.apiProjectsRead(requestParams).then(
            (response: Project) => {
                let users = response.users;
                if (users === undefined) {
                    users = [];
                }
                this.setState({ name: response.name, users: users, loaded: true });
            },
            (error: unknown) => {
                console.error(error);
                resourceNotAllowedNotification();
            },
        );
    };

    async componentDidMount(): Promise<void> {
        if (!AuthService.getAuthToken()) {
            authNotification();
        } else {
            this.updateInfo();
        }
    }

    addUser = (): void => {
        const action = ProjectUpdateActionEnum.Add;
        const user_email = this.state.users.find((item) => item.user?.username === AuthService.getUserUsername())?.user
            ?.email;
        const requestData: ProjectUpdate = {
            user: user_email,
            email: this.state.newUser,
            action: action,
            permission: this.state.permission,
            name: this.state.name,
        };

        const request: ApiProjectsUpdateRequest = {
            data: requestData,
            pid: this.projectId,
        };
        this.apiService.apiProjectsUpdate(request).then(
            (response: ProjectUpdate) => {
                if (response.email == "User does not exist.") {
                    nonExistentUserNotification();
                }
                this.setState({ newUser: "" });
                this.updateInfo();
            },
            (error: unknown) => {
                handleInvalidDataError(error);
            },
        );
    };

    removeUser = (): void => {
        const user_email = this.state.users.find((item) => item.user?.username === AuthService.getUserUsername())?.user
            ?.email;
        const requestData: ProjectUpdate = {
            user: user_email,
            email: this.state.newUser,
            action: ProjectUpdateActionEnum.Remove,
            name: this.state.name,
        };
        const request: ApiProjectsUpdateRequest = {
            data: requestData,
            pid: this.projectId,
        };
        this.apiService.apiProjectsUpdate(request).then(
            (response: ProjectUpdate) => {
                if (response.email == "User does not exist.") {
                    nonExistentUserNotification();
                }
                this.setState({ newUser: "" });
                this.updateInfo();
            },
            (error: unknown) => {
                handleInvalidDataError(error);
            },
        );
    };

    handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const {
            target: { value, name },
        } = event;
        if (name === "newUser") {
            this.setState({ newUser: value });
        }
    };

    handleSelectChange = (value: ProjectUpdatePermissionEnum): void => {
        this.setState({ permission: value });
        console.log(value);
    };

    render(): JSX.Element {
        const { loaded, name, users, newUser } = this.state;
        return (
            <Layout className="general-container">
                <Header />
                <Layout className="white-background">
                    {loaded ? (
                        <Fragment>
                            <ProjectSidenav projectId={this.projectId} />
                            <Content className="content-padding">
                                <Title level={3} className="text-center">
                                    {name}
                                </Title>
                                <Row justify="center" className="project-data">
                                    <Text>
                                        <b>Project ID:</b>&nbsp; {this.projectId}
                                    </Text>
                                </Row>
                                <Row>
                                    <Space direction="vertical">
                                        <b>USERS</b>
                                        {users.map((users: Permission, id) => (
                                            <Descriptions key={id}>
                                                <Descriptions.Item label="UserName">
                                                    {users.user?.username}
                                                </Descriptions.Item>
                                                <Descriptions.Item label="Email">{users.user?.email}</Descriptions.Item>
                                                <Descriptions.Item label="Permission">
                                                    {users.permission}
                                                </Descriptions.Item>
                                            </Descriptions>
                                        ))}
                                        <Input
                                            name="newUser"
                                            placeholder="email"
                                            value={newUser}
                                            onChange={this.handleInputChange}
                                        />
                                        <Select
                                            defaultValue={ProjectUpdatePermissionEnum.Viewer}
                                            style={{ width: 120 }}
                                            onChange={this.handleSelectChange}
                                        >
                                            <Option value={ProjectUpdatePermissionEnum.Admin}>Admin</Option>
                                            <Option value={ProjectUpdatePermissionEnum.Developer}>Developer</Option>
                                            <Option value={ProjectUpdatePermissionEnum.Viewer}>Viewer</Option>
                                        </Select>
                                    </Space>
                                    <Button className="job-create-button" onClick={this.addUser}>
                                        Add User
                                    </Button>
                                    <Button className="job-create-button" onClick={this.removeUser}>
                                        Remove User
                                    </Button>
                                </Row>
                            </Content>
                        </Fragment>
                    ) : (
                        <Spin />
                    )}
                </Layout>
            </Layout>
        );
    }
}