import React from "react";
import styles from "./style.less";
import { Breadcrumb, Row, Col, Button } from "antd";

// import fetch from "srcDir/common/model/itemModel/fetch";


// const confirm = Modal.confirm;

// const PackagePath = "assetManagement/addAsset/package";


// 创建react组件
const View = (props) => {
  // console.info("+++++++++++++++++++");
  console.info(props);
  const error = props.error || {};
  const { router } = props;
  const { back } = router;

  return (
    <div>
      <Breadcrumb separator=">" className={styles.mb}>
        <Breadcrumb.Item href="/">首页</Breadcrumb.Item>
        <Breadcrumb.Item>资产管理</Breadcrumb.Item>
        <Breadcrumb.Item>新增资产</Breadcrumb.Item>
        <Breadcrumb.Item>借款人管理</Breadcrumb.Item>
      </Breadcrumb>
      <Row type="flex" justify="start" align="middle" className={styles.mb}>
        <Col span={2}>出包行:</Col>
        <Col span={3} />

        <Col span={2} offset={3}>资产包流水号:</Col>
        <Col span={3} />

        <Col span={2} offset={7} className={styles.tr} />

        <Col span={2} offset={0} className={styles.tr}>
          <Button icon="rollback" onClick={back}>返回</Button>
        </Col>
      </Row>
      <span className={"red " + error.className}>{error.message}</span>
      主题信息模块
      {
        /*
        props.results && <Table
          rowKey="id"
          dataSource={props.results.rows}
          columns={columns}
          bordered={1}
          pagination={{
            total: props.results.totalRows,
            current: props.results.page,
            onChange: (current) => {
              // console.log("Current: ", current);
              getTableList({ _index: current });
            },
          }}
        />
        */
      }

    </div>
  );
};

export { View as default };
