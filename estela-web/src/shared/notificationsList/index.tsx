import React, { Component } from "react";
import { Layout, Space } from "antd";

import "./styles.scss";

import { ReactComponent as Ellipse } from "../../assets/icons/ellipse.svg";

const notis = [
    {
        id: 1,
        seen: false,
        message: "Scraper202122 has run a job in MySpider spider",
        date: "Jan 01, 2022 at 9:15 AM",
    },
    {
        id: 2,
        seen: false,
        message: "Scraper202122 has invited you to join project MyProject",
        date: "Jan 01, 2022 at 9:15 AM",
    },
    {
        id: 3,
        seen: true,
        message: "You have changed the role of MyProject project, from admin to developer.",
        date: "Jan 01, 2022 at 9:15 AM",
    },
    {
        id: 4,
        seen: true,
        message: "You created the MyFirstProject project ",
        date: "Jan 01, 2022 at 8:15 AM",
    },
];

export class NotificationsList extends Component<unknown, unknown> {
    render(): JSX.Element {
        return (
            <Layout className="flex sm:w-5/5 w-5/5 bg-white">
                {notis.map((notification) => {
                    return (
                        <div key={notification.id}>
                            <Layout className="bg-white pb-2 overflow-hidden hover:text-estela hover:bg-estela-blue-low">
                                <Space align="end">
                                    {!notification.seen ? (
                                        <Ellipse className="mx-1 fill-current text-estela" width={20} height={20} />
                                    ) : (
                                        <Ellipse className="mx-1 fill-current text-white" width={20} height={20} />
                                    )}
                                    <Layout className="bg-white">
                                        <Layout className="text-sm bg-white overflow-ellipsis">
                                            {notification.message}
                                        </Layout>
                                        <Layout className="bg-white text-xs text-estela-black-low">
                                            {notification.date}
                                        </Layout>
                                    </Layout>
                                </Space>
                            </Layout>
                        </div>
                    );
                })}
            </Layout>
        );
    }
}
