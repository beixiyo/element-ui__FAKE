/**
 * 提供默认导出和具名导出
 * 默认导出`install`方法为全局注册所有组件
 * 具名导出`install`为全局注册单个组件
 */
import Row from "@element/Row";
import Col from "@element/Col";
import Container from "@element/Container";
import Header from "@element/Header";
import Main from "@element/Main";
import Footer from "@element/Footer";
import Aside from "@element/Aside";
import Button from "@element/Button";
import ButtonGroup from "@element/ButtonGroup";
import Link from "@element/Link";


const CompArr = [
    Row,
    Col,
    Container,
    Header,
    Main,
    Footer,
    Aside,
    Button,
    ButtonGroup,
    Link,
];
const install = (Vue) => {
    CompArr.forEach((Comp) => {
        Vue.component(Comp.name, Comp);
    });
};


export default {
    install,
    Row,
    Col,
    Container,
    Header,
    Main,
    Footer,
    Aside,
    Button,
    ButtonGroup,
    Link,
};

export {
    Row,
    Col,
    Container,
    Header,
    Main,
    Footer,
    Aside,
    Button,
    ButtonGroup,
    Link,
};
